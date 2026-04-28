# Guide de Déploiement sur Vercel

## Préparation

1. Créer un compte Vercel gratuit: https://vercel.com/signup
2. Avoir Node.js 18+ installé localement
3. Avoir un repo GitHub (optionnel mais recommandé)

## Option 1: Déploiement via CLI (Rapide)

```bash
# 1. Installer Vercel CLI
npm install -g vercel

# 2. Depuis le dossier du projet
cd thera-website-nextjs

# 3. Déployer
vercel

# 4. Suivre les instructions à l'écran
# - Se connecter/créer un compte
# - Confirmer le projet
# - Attendre le déploiement (2-3 min)
```

**Résultat**: Votre site sera disponible à une URL Vercel temporaire.

## Option 2: Déploiement via GitHub (Recommandé)

```bash
# 1. Initialiser git
cd thera-website-nextjs
git init
git add .
git commit -m "Initial commit"

# 2. Créer repo GitHub
# Via https://github.com/new
# - Créer "thera-website"
# - Copier les commandes git

# 3. Pousser le code
git remote add origin https://github.com/YOUR_USERNAME/thera-website.git
git branch -M main
git push -u origin main

# 4. Connecter à Vercel
# - Aller sur https://vercel.com/new
# - Cliquer "Continue with GitHub"
# - Sélectionner le repo "thera-website"
# - Cliquer "Deploy"
```

**Résultat**: Déploiement automatique à chaque push!

## Configuration du Domaine Personnalisé

### Garder LWS pour le domaine:

1. **Sur Vercel Dashboard**:
   - Aller dans "Settings" → "Domains"
   - Ajouter votre domaine: `thera-fermetures.fr`
   - Copier les nameservers Vercel

2. **Sur LWS**:
   - Aller dans vos paramètres DNS
   - Remplacer les nameservers par ceux de Vercel
   - Sauvegarder
   - Attendre 24-48h pour la propagation

3. **Vérifier**:
   ```bash
   nslookup thera-fermetures.fr
   # Doit afficher les serveurs Vercel
   ```

### Ou pointer le domaine directement (CNAME):

1. **Sur Vercel**: Copier le CNAME fourni (ex: `cname.vercel-dns.com`)
2. **Sur LWS**: Ajouter un record CNAME pour `www` pointant vers le CNAME Vercel
3. **Attendre** 24-48h

## Après le Déploiement

### ✅ À Faire Immédiatement:

1. **Tester le site**:
   ```
   Ouvrir https://thera-fermetures.fr
   Vérifier la page d'accueil
   Tester les liens de navigation
   Tester le formulaire de contact
   ```

2. **Configurer Analytics** (optionnel):
   - Google Analytics
   - Google Search Console
   - Bing Webmaster Tools

3. **SEO Local**:
   - Soumettre le sitemap
   - Configurer Google Business Profile

### 📊 Monitoring:

Vercel Dashboard affiche:
- Performance en temps réel
- Erreurs et logs
- Statistiques de déploiement
- Analytics de vitesse

### 🔄 Mise à Jour Futur:

```bash
# Faire les modifications locales
git add .
git commit -m "Mise à jour du site"
git push origin main
# Vercel redéploie automatiquement!
```

## Troubleshooting

**Erreur 404 après déploiement**:
- Attendre la propagation DNS (24-48h)
- Forcer la purge du cache: Ctrl+Shift+Del

**Formulaire ne fonctionne pas**:
- Ajouter une API d'email (Sendgrid, Brevo, etc.)
- Voir section "Intégration Email" ci-dessous

**Site lent**:
- Vérifier Core Web Vitals sur PageSpeed Insights
- Optimiser les images
- Réduire les dépendances

## Intégration Email (Optionnel)

Pour que les formulaires envoient des emails:

### Via Sendgrid (gratuit jusqu'à 100 emails/jour):

1. Créer compte: https://sendgrid.com
2. Générer API Key
3. Ajouter à `.env.local`:
   ```
   SENDGRID_API_KEY=SG.xxxxxxx
   ```

4. Créer route API: `app/api/contact/route.ts`

### Via Brevo (ex-Sendinblue):

1. Créer compte: https://www.brevo.com
2. Générer API Key
3. Même processus que Sendgrid

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Issues: https://github.com/vercel/next.js/issues
- Email pour questions: therafermetures@gmail.com

---

**Estimé de temps**:
- Déploiement CLI: 5 minutes
- Configuration domaine: 2-3 jours (propagation DNS)
- Configuration email: 30 minutes (optionnel)

Bon déploiement! 🚀
