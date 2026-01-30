'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PageHeader, Section } from '@/components'
import { journalPosts } from '@/data/journal'
import { formatDate } from '@/lib/utils'

export default function JournalPage() {
  return (
    <>
      <PageHeader
        title="Journal"
        description="Thoughts on listening, choosing, and living with handpans. Guides, reflections, and the occasional deep dive."
      />

      <Section className="pt-0">
        <div className="grid gap-8">
          {journalPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/journal/${post.slug}`} className="group block">
                <div className="grid md:grid-cols-3 gap-6 p-6 bg-surface border border-divider rounded-lg hover:border-divider-strong transition-colors">
                  {/* Image */}
                  <div className="relative aspect-video md:aspect-square rounded-md overflow-hidden bg-surface-elevated">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 flex flex-col justify-center">
                    <p className="text-caption text-muted mb-2">
                      {formatDate(post.date)}
                    </p>
                    <h2 className="text-display-sm font-serif text-foreground group-hover:text-accent transition-colors mb-3">
                      {post.title}
                    </h2>
                    <p className="text-muted mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-accent text-sm">
                      <span>Read article</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </Section>
    </>
  )
}
