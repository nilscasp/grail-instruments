import type { Maker } from '@/lib/types'

export const makers: Maker[] = [
  {
    slug: 'ayasa',
    name: 'Ayasa Instruments',
    country: 'Germany',
    region: 'Berlin',
    descriptionShort: 'German precision meets meditative artistry.',
    descriptionLong: 'Ayasa Instruments emerged from the vibrant Berlin music scene, combining German engineering precision with deep respect for the handpan\'s meditative potential. Each instrument is handcrafted in a small workshop, where traditional metalworking meets modern acoustic understanding. Their instruments are known for exceptional tuning stability and warm, enveloping tones.',
    philosophy: 'We believe every handpan should be a gateway to inner stillness. Our work is not merely manufacturing—it\'s cultivation of presence.',
    typicalScales: ['Kurd', 'Amara', 'Celtic Minor', 'Integral'],
    links: [
      { type: 'website', url: 'https://ayasa-instruments.com' },
      { type: 'instagram', url: 'https://instagram.com/ayasainstruments' },
    ],
    image: '/images/makers/ayasa.jpg',
    featured: true,
  },
  {
    slug: 'yishama',
    name: 'Yishama Pantam',
    country: 'Israel',
    region: 'Tel Aviv',
    descriptionShort: 'Where ancient craft meets modern innovation.',
    descriptionLong: 'Yishama Pantam is run by a small team of dedicated artisans in Israel, creating instruments that bridge ancient Middle Eastern musical traditions with contemporary handpan craft. Their stainless steel instruments are particularly renowned for their crystalline clarity and exceptional note separation.',
    philosophy: 'Each pantam carries a prayer. When you play, you participate in something timeless.',
    typicalScales: ['Celtic Minor', 'Sabye', 'Hijaz', 'Pygmy'],
    links: [
      { type: 'website', url: 'https://yishamapantam.com' },
      { type: 'instagram', url: 'https://instagram.com/yishamapantam' },
    ],
    image: '/images/makers/yishama.jpg',
    featured: true,
  },
  {
    slug: 'makai',
    name: 'Makai',
    country: 'France',
    region: 'Provence',
    descriptionShort: 'Earthy, grounded instruments from Southern France.',
    descriptionLong: 'From the lavender fields of Provence comes Makai—a maker deeply connected to the earth and to the handpan\'s power to ground and center. Their instruments favor warm, earthy tones over bright shimmer, appealing to players who seek depth over flash.',
    philosophy: 'The handpan is not entertainment. It is meditation made audible.',
    typicalScales: ['Pygmy', 'Minor Pentatonic', 'Low Pygmy'],
    links: [
      { type: 'instagram', url: 'https://instagram.com/makai_handpan' },
    ],
    image: '/images/makers/makai.jpg',
    featured: false,
  },
  {
    slug: 'asachan',
    name: 'Asachan',
    country: 'Japan',
    region: 'Kyoto',
    descriptionShort: 'Japanese craftsmanship in handpan form.',
    descriptionLong: 'Asachan brings Japanese aesthetic sensibility to handpan making. Working from a traditional workshop in Kyoto, this maker creates instruments with exceptional attention to visual and acoustic detail. Their pieces are rare, often featuring extended note counts and innovative scales.',
    philosophy: 'In Japan, we have a word: Monozukuri—the art of making things with spirit and sincerity. This is what we bring to each instrument.',
    typicalScales: ['Integral', 'In-Sen', 'Akebono'],
    links: [
      { type: 'website', url: 'https://asachan-handpan.jp' },
      { type: 'instagram', url: 'https://instagram.com/asachan_handpan' },
    ],
    image: '/images/makers/asachan.jpg',
    featured: true,
  },
  {
    slug: 'symphonic-steel',
    name: 'Symphonic Steel',
    country: 'USA',
    region: 'California',
    descriptionShort: 'American innovation with global appeal.',
    descriptionLong: 'Symphonic Steel operates from sunny California, bringing American ingenuity to the handpan world. Their instruments are known for bold character and expressive range, appealing to players who want their handpan to make a statement.',
    philosophy: 'Music is meant to move people. Our handpans are built for expression.',
    typicalScales: ['Hijaz', 'Kurd', 'Major Scales'],
    links: [
      { type: 'website', url: 'https://symphonicsteel.com' },
      { type: 'instagram', url: 'https://instagram.com/symphonicsteel' },
      { type: 'youtube', url: 'https://youtube.com/@symphonicsteel' },
    ],
    image: '/images/makers/symphonic-steel.jpg',
    featured: false,
  },
  {
    slug: 'metal-sounds',
    name: 'Metal Sounds',
    country: 'France',
    region: 'Montpellier',
    descriptionShort: 'Pioneers of the steel tongue drum and accessible handpans.',
    descriptionLong: 'Metal Sounds has been at the forefront of accessible steel instruments for over a decade. Their SpaceDrum series bridges the gap between entry-level and professional instruments, making quality sound accessible to all.',
    philosophy: 'Everyone deserves to experience the healing power of these instruments.',
    typicalScales: ['Minor Pentatonic', 'Major Pentatonic', 'Celtic Minor'],
    links: [
      { type: 'website', url: 'https://metal-sounds.com' },
      { type: 'instagram', url: 'https://instagram.com/metalsounds' },
    ],
    image: '/images/makers/metal-sounds.jpg',
    featured: false,
  },
  {
    slug: 'pantheon-steel',
    name: 'Pantheon Steel',
    country: 'USA',
    region: 'Missouri',
    descriptionShort: 'The Halo: American engineering at its finest.',
    descriptionLong: 'Pantheon Steel created the Halo—often considered among the finest handpans in the world. Based in Missouri, they combine scientific precision with artistic intuition to create instruments of exceptional quality and consistency.',
    philosophy: 'Excellence is not a destination but a process. Every Halo represents our current best understanding.',
    typicalScales: ['Equinox', 'Integral', 'Celtic Minor', 'Kurd'],
    links: [
      { type: 'website', url: 'https://pantheonsteel.com' },
      { type: 'instagram', url: 'https://instagram.com/pantheonsteel' },
      { type: 'youtube', url: 'https://youtube.com/@pantheonsteel' },
    ],
    image: '/images/makers/pantheon-steel.jpg',
    featured: true,
  },
  {
    slug: 'echo-sound-sculpture',
    name: 'Echo Sound Sculpture',
    country: 'Netherlands',
    region: 'Amsterdam',
    descriptionShort: 'Dutch design thinking applied to handpan craft.',
    descriptionLong: 'Echo Sound Sculpture brings the Netherlands\' rich tradition of design and craftsmanship to the handpan world. Their instruments are characterized by clean aesthetics and balanced, musical tones that appeal to players from classical and contemporary backgrounds alike.',
    philosophy: 'A handpan should be both instrument and sculpture—beautiful to see, beautiful to hear.',
    typicalScales: ['Aeolian', 'Dorian', 'Mixolydian'],
    links: [
      { type: 'website', url: 'https://echosoundsculpture.nl' },
      { type: 'instagram', url: 'https://instagram.com/echosoundsculpture' },
    ],
    image: '/images/makers/echo-sound-sculpture.jpg',
    featured: false,
  },
]

export function getMakerBySlug(slug: string): Maker | undefined {
  return makers.find((m) => m.slug === slug)
}

export function getFeaturedMakers(): Maker[] {
  return makers.filter((m) => m.featured)
}
