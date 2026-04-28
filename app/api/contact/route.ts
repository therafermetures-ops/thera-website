import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'

interface ContactFormData {
  name: string
  email: string
  phone: string
  product: string
  message: string
}

function validateForm(data: Partial<ContactFormData>): string | null {
  if (!data.name || data.name.trim().length < 2) return 'Le nom est requis (min. 2 caractères)'
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Adresse email invalide'
  if (!data.product) return 'Veuillez sélectionner un produit'
  if (data.phone && !/^[\d\s\+\-\(\)\.]{6,20}$/.test(data.phone)) return 'Numéro de téléphone invalide'
  return null
}

const productLabels: Record<string, string> = {
  portail: 'Portails Aluminium',
  pergola: 'Pergolas Bioclimatiques',
  carport: 'Carports Aluminium',
  cloture: 'Clôtures Aluminium',
  autre: 'Autre / Multiple',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as Partial<ContactFormData>

    const error = validateForm(body)
    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 })
    }

    const { name, email, phone, product, message } = body as ContactFormData
    const productLabel = productLabels[product] || product
    const apiKey = process.env.BREVO_API_KEY

    if (!apiKey) {
      console.error('BREVO_API_KEY manquante')
      return NextResponse.json({ success: false, error: 'Configuration serveur manquante' }, { status: 500 })
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #e85d04; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Nouvelle demande de devis</h1>
          <p style="color: white; margin: 5px 0;">THERA Fermetures</p>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; width: 40%;">Nom :</td><td style="padding: 8px;">${name}</td></tr>
            <tr style="background:#fff"><td style="padding: 8px; font-weight: bold;">Email :</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Téléphone :</td><td style="padding: 8px;">${phone || 'Non renseigné'}</td></tr>
            <tr style="background:#fff"><td style="padding: 8px; font-weight: bold;">Produit :</td><td style="padding: 8px;"><strong>${productLabel}</strong></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Message :</td><td style="padding: 8px;">${message ? message.replace(/\n/g, '<br>') : 'Aucun message'}</td></tr>
          </table>
        </div>
        <div style="padding: 15px; background: #e85d04; text-align: center;">
          <p style="color: white; margin: 0; font-size: 12px;">thera-fermetures.fr — 04 74 64 91 65</p>
        </div>
      </div>
    `

    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #e85d04; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">THERA Fermetures</h1>
        </div>
        <div style="padding: 30px;">
          <h2>Bonjour ${name},</h2>
          <p>Nous avons bien reçu votre demande de devis pour <strong>${productLabel}</strong>.</p>
          <p>Notre équipe vous contactera dans les <strong>24 heures</strong> pour donner suite à votre demande.</p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #e85d04; margin: 20px 0;">
            <p style="margin: 0;"><strong>📞 Besoin urgent?</strong><br>Appelez-nous directement au <a href="tel:+33474649165">04 74 64 91 65</a></p>
          </div>
          <p>Cordialement,<br><strong>L'équipe THERA Fermetures</strong></p>
        </div>
        <div style="padding: 15px; background: #1a1a1a; text-align: center;">
          <p style="color: #aaa; margin: 0; font-size: 12px;">134, za du Crouloup — 69380 Chasselay — therafermetures@gmail.com</p>
        </div>
      </div>
    `

    // Email vers THERA
    const toThera = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Site THERA Fermetures', email: 'therafermetures@gmail.com' },
        to: [{ email: 'therafermetures@gmail.com', name: 'THERA Fermetures' }],
        replyTo: { email, name },
        subject: `[Devis] ${productLabel} — ${name}`,
        htmlContent: emailHtml,
      }),
    })

    if (!toThera.ok) {
      const errText = await toThera.text()
      console.error('Brevo error:', errText)
      return NextResponse.json({ success: false, error: 'Erreur envoi email' }, { status: 500 })
    }

    // Email de confirmation au client
    await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'THERA Fermetures', email: 'therafermetures@gmail.com' },
        to: [{ email, name }],
        subject: 'Votre demande de devis — THERA Fermetures',
        htmlContent: confirmationHtml,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 })
  }
}
