import { PageHeader, Section, MakerCard } from '@/components'
import { makers } from '@/data/makers'

export const metadata = {
  title: 'Makers',
  description: 'The master craftspeople behind our curated instruments. Learn about the makers we trust.',
}

export default function MakersPage() {
  return (
    <>
      <PageHeader
        title="The Makers"
        description="We work with select makers who share our commitment to quality and presence. Each brings their own philosophy and voice to the craft."
      />

      <Section className="pt-0">
        <div className="grid md:grid-cols-2 gap-6">
          {makers.map((maker, index) => (
            <MakerCard key={maker.slug} maker={maker} index={index} />
          ))}
        </div>
      </Section>
    </>
  )
}
