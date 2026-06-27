import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'

interface ContactFormData {
  name: string
  email: string
  phone: string
  codePostal: string
  commune: string
  product: string
  message: string
  _honeypot?: string
}

function validateForm(data: Partial<ContactFormData>): string | null {
  if (!data.name || data.name.trim().length < 2) return 'Le nom est requis (min. 2 caractères)'
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Adresse email invalide'
  if (!data.product) return 'Veuillez sélectionner un produit'
  if (data.phone) {
    const digitsOnly = data.phone.replace(/\D/g, '')
    if (digitsOnly.length < 10) return 'Numéro de téléphone invalide (10 chiffres minimum)'
  }
  // Pas de validation message — champ optionnel
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

    // Honeypot : si rempli → bot silencieux
    if (body._honeypot) {
      return NextResponse.json({ success: true })
    }

    const error = validateForm(body)
    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 })
    }

    const { name, email, phone, codePostal, commune, product, message } = body as ContactFormData
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
            <tr style="background:#fff"><td style="padding: 8px; font-weight: bold;">Localisation :</td><td style="padding: 8px;">${[codePostal, commune].filter(Boolean).join(' ') || 'Non renseigné'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Produit :</td><td style="padding: 8px;"><strong>${productLabel}</strong></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Message :</td><td style="padding: 8px;">${message ? message.replace(/\n/g, '<br>') : 'Aucun message'}</td></tr>
          </table>
        </div>
        <div style="padding: 15px; background: #e85d04; text-align: center;">
          <p style="color: white; margin: 0; font-size: 12px;">thera-fermetures.fr — 04 74 65 91 65</p>
        </div>
      </div>
    `

    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee;">
        <div style="padding: 28px; text-align: center; border-bottom: 3px solid #e85d04; background: #1a1b1e;">
          <img src="https://thera-fermetures.fr/images/logo-thera.png" alt="THERA Fermetures" style="height: 48px; width: auto;" />
        </div>
        <div style="padding: 36px 32px; background: #fff;">
          <h2 style="margin: 0 0 16px; font-size: 20px; color: #1a1b1e;">Bonjour ${name},</h2>
          <p style="color: #444; line-height: 1.7; margin: 0 0 12px;">Nous avons bien reçu votre demande concernant <strong>${productLabel}</strong> et nous vous en remercions.</p>
          <p style="color: #444; line-height: 1.7; margin: 0 0 24px;">Notre équipe vous contactera dans les <strong>meilleurs délais</strong> pour étudier votre projet et vous proposer un devis personnalisé.</p>
          <div style="background: #f8f8f8; border-left: 4px solid #e85d04; padding: 16px 20px; margin: 0 0 24px;">
            <p style="margin: 0; font-size: 13px; color: #555;"><strong>Récapitulatif de votre demande :</strong></p>
            <p style="margin: 8px 0 0; font-size: 13px; color: #555;">Solution : ${productLabel}</p>
            ${codePostal || commune ? `<p style="margin: 4px 0 0; font-size: 13px; color: #555;">Localisation : ${[codePostal, commune].filter(Boolean).join(' ')}</p>` : ''}
          </div>
          <p style="color: #444; line-height: 1.7; margin: 0 0 4px;">Cordialement,</p>
          <p style="color: #1a1b1e; font-weight: 700; margin: 0;">L&apos;équipe THERA Fermetures</p>
        </div>
        <div style="padding: 16px; background: #1a1b1e; text-align: center;">
          <p style="color: rgba(255,255,255,0.5); margin: 0; font-size: 11px; letter-spacing: 0.05em;">04 74 65 91 65 — 134 ZA du Crouloup, 69380 Chasselay — <a href="https://thera-fermetures.fr" style="color: rgba(255,255,255,0.5);">thera-fermetures.fr</a></p>
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
