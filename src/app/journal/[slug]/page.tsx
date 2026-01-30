'use client'

import { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, User } from 'lucide-react'
import { Section, Button } from '@/components'
import { getPostBySlug, getRecentPosts } from '@/data/journal'
import { formatDate } from '@/lib/utils'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function JournalPostPage({ params }: PageProps) {
  const { slug } = use(params)
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const recentPosts = getRecentPosts(3).filter((p) => p.slug !== slug)

  // Simple markdown-like processing (in production, use a proper MDX setup)
  const processContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-display-sm text-foreground mt-12 mb-6">
              {paragraph.replace('## ', '')}
            </h2>
          )
        }
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          return (
            <p key={index} className="text-foreground font-medium mb-4">
              {paragraph.replace(/\*\*/g, '')}
            </p>
          )
        }
        if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
          return (
            <p key={index} className="text-foreground/80 italic mb-6">
              {paragraph.replace(/\*/g, '')}
            </p>
          )
        }
        return (
          <p key={index} className="text-muted leading-relaxed mb-6">
            {paragraph}
          </p>
        )
      })
  }

  return (
    <>
      {/* Back Link */}
      <div className="pt-28 pb-8">
        <div className="container-content">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Journal
          </Link>
        </div>
      </div>

      {/* Article */}
      <article>
        {/* Header */}
        <Section className="pt-0 pb-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-center gap-4 text-caption text-muted mb-6">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <User size={14} />
                  {post.author}
                </span>
              </div>
              <h1 className="text-display-lg font-serif text-foreground mb-6">
                {post.title}
              </h1>
              <p className="text-body-lg text-muted">
                {post.excerpt}
              </p>
            </motion.div>
          </div>
        </Section>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="container-content mb-12"
        >
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden bg-surface-elevated">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </motion.div>

        {/* Content */}
        <Section className="pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-prose mx-auto"
          >
            {processContent(post.content)}
          </motion.div>
        </Section>

        {/* Tags */}
        <Section className="pt-0 pb-12">
          <div className="max-w-prose mx-auto">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-surface border border-divider rounded-full text-body-sm text-muted capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Section>
      </article>

      {/* More Posts */}
      {recentPosts.length > 0 && (
        <Section className="bg-surface">
          <h2 className="text-display-sm font-serif text-foreground mb-8 text-center">
            Continue Reading
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {recentPosts.slice(0, 2).map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/journal/${relatedPost.slug}`}
                className="group block p-6 bg-surface-elevated border border-divider rounded-lg hover:border-divider-strong transition-colors"
              >
                <p className="text-caption text-muted mb-2">
                  {formatDate(relatedPost.date)}
                </p>
                <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors mb-2">
                  {relatedPost.title}
                </h3>
                <p className="text-body-sm text-muted line-clamp-2">
                  {relatedPost.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section>
        <div className="text-center">
          <p className="text-body-lg text-muted mb-6">
            Ready to find your instrument?
          </p>
          <Button href="/instruments">
            Explore the Collection
          </Button>
        </div>
      </Section>
    </>
  )
}
