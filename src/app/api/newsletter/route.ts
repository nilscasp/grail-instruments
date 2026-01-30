import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // In production, you would:
    // 1. Add to newsletter service (Mailchimp, ConvertKit, etc.)
    // 2. Send confirmation email
    // 3. Save to database

    // Example (pseudo-code):
    // await addToMailchimp({
    //   email,
    //   list: 'portal-waitlist',
    //   tags: ['waitlist'],
    // })

    console.log('Newsletter subscription:', email)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
