# THERA Fermetures - Site Next.js

Site professionnel pour THERA Fermetures - Experts en aménagements extérieurs.

## Stack Technologique

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Vercel
- **Performance**: Optimisé pour SEO

## Installation Locale

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

## Pages du Site

- **Homepage** (/)
- **Portails** (/portails)
- **Pergolas** (/pergolas)
- **Carports** (/carports)
- **Clôtures** (/clotures)
- **À Propos** (/a-propos)
- **Réalisations** (/realisations)
- **Contact** (/contact)

## Variables d'Environnement

Créer un fichier `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://thera-fermetures.fr
```

## Construction pour Production

```bash
npm run build
npm start
```

## Déploiement sur Vercel

### Méthode 1: Via CLI

```bash
npm install -g vercel
vercel
```

### Méthode 2: Via GitHub

1. Pusher le code sur GitHub
2. Connecter Vercel à votre repo
3. Vercel deploy automatiquement

### Méthode 3: Via Dashboard Vercel

1. Aller sur https://vercel.com
2. Cliquer "New Project"
3. Sélectionner ce repo
4. Cliquer "Deploy"

## Optimisations

- ✅ SEO optimisé (Meta tags, Schema.org, Open Graph)
- ✅ Mobile responsive
- ✅ Couleurs de marque THERA (Orange #FF8C00, Vert #4CAF50)
- ✅ Formulaire de contact
- ✅ Structure pour portfolio/galerie
- ✅ Performance optimisée

## Prochaines Étapes

1. **Ajouter les images réelles**
   - Remplacer les emojis par les vraies photos
   - Optimiser les images pour le web
   - Ajouter des images de réalizations

2. **Intégrer avec une API de contact**
   - Ajouter Sendgrid, Brevo, ou EmailJS
   - Envoyer les emails automatiquement

3. **Analytics**
   - Configurer Google Analytics
   - Ajouter Google Search Console

4. **Domaine personnalisé**
   - Pointer votre domaine LWS vers Vercel
   - Configurer HTTPS/SSL

5. **Contenu enrichi**
   - Blog pour SEO local
   - Galerie complète de réalisations
   - Témoignages clients

## Support

Pour des questions sur le déploiement ou modifications futures, consultez:
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Vercel](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

Site créé avec ❤️ par Claude le 28 avril 2026
