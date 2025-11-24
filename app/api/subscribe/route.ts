import { type NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 },
      )
    }

    const resend = new Resend(apiKey)
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 },
      )
    }

    // Add to Resend audience (waitlist)
    const audienceId = process.env.RESEND_AUDIENCE_ID

    if (audienceId) {
      await resend.contacts.create({
        email,
        audienceId,
        unsubscribed: false,
      })
    }

    // Send welcome email
    await resend.emails.send({
      from: 'SIRC <noreply@sirc.network>',
      to: email,
      subject: 'Welcome to the SIRC Waitlist',
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #09090b; color: #e4e4e7;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #10b981; margin: 0; font-size: 28px;">SIRC</h1>
            <p style="color: #71717a; margin-top: 8px;">Modern IRC Client</p>
          </div>

          <p style="color: #e4e4e7; line-height: 1.6;">
            Thanks for joining the SIRC waitlist! You'll be among the first to know when we launch.
          </p>

          <p style="color: #a1a1aa; line-height: 1.6; margin-top: 24px;">
            SIRC is a hyper-clean, dark-mode native IRC client built for the decentralized era.
            Features include auto-reconnect, inline image previews, NickServ authentication, and more.
          </p>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #27272a;">
            <p style="color: #71717a; font-size: 14px; margin: 0;">
              Follow us on <a href="https://x.com/wildsatchmo" style="color: #10b981;">X</a> for updates.
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
