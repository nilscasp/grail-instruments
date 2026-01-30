import type { FAQ } from '@/lib/types'

export const faqs: FAQ[] = [
  // Buying Process
  {
    question: 'How does the buying process work?',
    answer: 'Unlike traditional shops, we operate through curated "Portal Drops" where selected instruments become available. You apply for instruments that interest you, and we review applications based on fit—not just first-come-first-served. This ensures each instrument finds the right home.',
    category: 'buying',
  },
  {
    question: 'What is a Portal Drop?',
    answer: 'A Portal Drop is when we release a new selection of curated instruments—typically 4-6 times per year. Each drop features thoroughly evaluated handpans with detailed listening notes, professional recordings, and our honest assessment. Sign up for our waitlist to be notified when the next Portal opens.',
    category: 'buying',
  },
  {
    question: 'Why can\'t I just add an instrument to a cart?',
    answer: 'We believe the right instrument-player match matters. By reviewing applications rather than processing instant purchases, we can ensure beginners don\'t accidentally buy advanced instruments, and experienced players get pieces that match their style. It\'s matchmaking, not gatekeeping.',
    category: 'buying',
  },
  {
    question: 'How long does it take to get a response after applying?',
    answer: 'We aim to respond within 48-72 hours during active Portal Drops. Outside of drops, response times may be longer. If you haven\'t heard from us within a week, please check your spam folder or reach out directly.',
    category: 'buying',
  },
  {
    question: 'Can I request a specific instrument or maker?',
    answer: 'Absolutely. Contact us with your preferences—specific makers, scales, characteristics—and we\'ll keep you in mind as we source and curate. Some of our best matches come from understanding what you\'re looking for before the right instrument even arrives.',
    category: 'buying',
  },

  // Instruments
  {
    question: 'Are these new or used instruments?',
    answer: 'Both. We curate instruments based on quality, not newness. Many of our pieces are new from makers; others are pre-owned instruments that meet our rigorous standards. Condition is always clearly stated, and pre-owned pieces are evaluated even more carefully.',
    category: 'instruments',
  },
  {
    question: 'How do you select which instruments to offer?',
    answer: 'Every instrument goes through our curation process: evaluation of tuning accuracy, tonal balance, sustain quality, craftsmanship, and that intangible quality we call "presence." Only instruments that pass all criteria make it to the Portal. We reject many more than we accept.',
    category: 'instruments',
  },
  {
    question: 'What if the instrument doesn\'t match my expectations?',
    answer: 'We offer a tryout period for most instruments. If it doesn\'t feel right, return it within the agreed period for a full refund minus shipping. Our detailed recordings and notes aim to prevent surprises, but we understand that physical experience matters.',
    category: 'instruments',
  },
  {
    question: 'Can I hear the instrument before buying?',
    answer: 'Yes. We provide professional recordings for every instrument, plus you can request additional sound files or even a video call where we play the instrument for you. Sound is paramount—we\'ll do whatever helps you decide.',
    category: 'instruments',
  },

  // Shipping & Delivery
  {
    question: 'Where do you ship to?',
    answer: 'We ship worldwide. Most instruments ship from Germany. Shipping costs and times vary by destination—we provide exact quotes during the application process before any commitment.',
    category: 'shipping',
  },
  {
    question: 'How are instruments packaged?',
    answer: 'Professional hard cases or high-quality soft cases are included with most instruments. Additional shipping protection (double boxing, padding) ensures your instrument arrives safely. We\'ve shipped hundreds of handpans with zero damage incidents.',
    category: 'shipping',
  },
  {
    question: 'What about customs and import duties?',
    answer: 'Import duties and taxes are the buyer\'s responsibility and vary by country. We provide accurate customs documentation and declare full value. Contact your local customs office for specific duty rates before purchasing.',
    category: 'shipping',
  },

  // Payment
  {
    question: 'What payment methods do you accept?',
    answer: 'Bank transfer (SEPA for EU, international wire), PayPal, and in some cases cryptocurrency. Payment details are provided once your application is accepted.',
    category: 'payment',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'For instruments above certain values, we can arrange payment plans on a case-by-case basis. Contact us to discuss options—we want to make the right instrument accessible.',
    category: 'payment',
  },

  // General
  {
    question: 'Who is behind Grail Instruments?',
    answer: 'Grail Instruments is curated by Nils Caspar, a longtime handpan enthusiast and collector based in Germany. What started as a personal passion for finding exceptional instruments evolved into this curated portal for others seeking the same quality.',
    category: 'general',
  },
  {
    question: 'I\'m a maker. Can I sell through Grail Instruments?',
    answer: 'We\'re always interested in connecting with quality makers. However, we don\'t accept every maker—your instruments must meet our curation standards. Contact us with examples of your work and we\'ll discuss possibilities.',
    category: 'general',
  },
  {
    question: 'Do you offer lessons or workshops?',
    answer: 'Not currently, but we\'re happy to recommend excellent teachers and resources. Learning to play is as important as finding the right instrument—we want to support your full journey.',
    category: 'general',
  },
]

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((f) => f.category === category)
}

export function getAllFAQCategories(): string[] {
  const categories = new Set(faqs.map((f) => f.category))
  return Array.from(categories)
}
