import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      name,
      email,
      whatsapp,
      country,
      city,
      experience,
      seeking,
      preferredScales,
      budget,
      timeframe,
      instrumentSlug,
      privacyAccepted,
    } = body

    // Validation
    if (!name || !email || !country || !experience || !seeking || !budget || !timeframe) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!privacyAccepted) {
      return NextResponse.json(
        { error: 'Privacy policy must be accepted' },
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
    // 1. Send an email notification
    // 2. Save to database
    // 3. Add to CRM
    // 4. Send confirmation email to applicant

    // Example email sending (pseudo-code):
    // await sendEmail({
    //   to: 'contact@grailinstruments.com',
    //   subject: `New Application: ${name}`,
    //   body: formatApplicationEmail(body),
    // })

    // For now, we'll just log and return success
    console.log('New application received:', {
      name,
      email,
      country,
      experience,
      budget,
      timeframe,
      instrumentSlug,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Application submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
