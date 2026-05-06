# THERA Fermetures — Résumé technique projet

> Fichier à lire en début de chaque session Claude Code.

---

## Chemins essentiels

| Élément | Chemin |
|---|---|
| **Dossier projet (TOUJOURS utiliser celui-ci)** | `C:\Users\dubau\Création Site\Thera fermetures\thera-website-nextjs` |
| ⚠️ **NE PAS utiliser** | `C:\Users\dubau\OneDrive\Desktop\THERA\...` (copie OneDrive — mauvais dossier) |
| Images | `C:\Users\dubau\Création Site\Thera fermetures\thera-website-nextjs\public\images\` |

---

## Stack technique

- **Framework** : Next.js 14.2 (App Router)
- **Langage** : TypeScript + React
- **CSS** : Tailwind CSS
- **Déploiement** : Vercel (CLI `npx vercel --prod`)
- **Git** : GitHub → `https://github.com/therafermetures-ops/thera-website.git`
- **Domaine prod** : `https://thera-fermetures.fr`

---

## Structure app/

```
app/
├── page.tsx                          ← Page d'accueil (homepage)
├── layout.tsx                        ← Layout global
├── globals.css                       ← Styles globaux Tailwind
├── portails/page.tsx                 ← Page portails aluminium
├── pergolas/page.tsx                 ← Page pergolas bioclimatiques
├── carports/page.tsx                 ← Page carports aluminium
├── clotures/page.tsx                 ← Page clôtures
├── portes-de-garage/page.tsx         ← Page portes de garage
├── contact/page.tsx                  ← Page contact
├── a-propos/page.tsx                 ← Page à propos
├── realisations/page.tsx             ← Galerie réalisations
├── actualites/                       ← Blog actualités
├── admin/                            ← Interface admin (login requis)
├── api/                              ← Routes API (config, upload, contact...)
├── components/                       ← Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSlideshow.tsx
│   ├── ProductTemplate.tsx           ← Template pages produits
│   ├── ScrollReveal.tsx
│   ├── FloatingCTA.tsx
│   └── StatsCounter.tsx
├── portail-aluminium-sur-mesure-[ville]/   ← Pages géoloc portails
├── pergola-bioclimatique-sur-mesure-[ville]/  ← Pages géoloc pergolas
└── carport-aluminium-sur-mesure-[ville]/   ← Pages géoloc carports
```

## Structure public/images/

```
public/images/
├── pergolas/      ← Photos pergolas (jpg/png)
├── portails/      ← Photos portails (jpg/png)
├── carports/      ← Photos carports
├── clotures/      ← Photos clôtures
├── realisations/  ← Photos réalisations diverses
├── portes-garage/ ← Photos portes de garage
└── logo-thera.png
```

---

## Procédure déploiement

### 1. Modifier les fichiers dans le bon dossier
```
C:\Users\dubau\Création Site\Thera fermetures\thera-website-nextjs
```

### 2. Tester en local (optionnel)
```bash
cd "C:\Users\dubau\Création Site\Thera fermetures\thera-website-nextjs"
npm run dev
# Ouvre http://localhost:3000 (ou port suivant si occupé)
```

### 3. Commit Git
```bash
cd "C:\Users\dubau\Création Site\Thera fermetures\thera-website-nextjs"
git add <fichiers modifiés>
git commit -m "Description des modifications"
```

### 4. Déployer sur Vercel (production)
```bash
cd "C:\Users\dubau\Création Site\Thera fermetures\thera-website-nextjs"
npx vercel --prod
```
→ Build ~30s, déploiement automatique sur `https://thera-fermetures.fr`

---

## Points d'attention

- **Tailwind CSS** : pas de `text-[14px]`, utiliser les classes utilitaires (`text-sm`, `text-base`, `text-lg`...)
- **Images** : toujours placer dans `public/images/[catégorie]/` avant de les référencer dans le code
- **Pages géoloc** : générées statiquement depuis `app/[slug]/page.tsx` — villes définies dans le fichier de config
- **Admin** : interface à `/admin` protégée par login — config site stockée en JSON côté serveur
- **Vercel CLI** : déjà configuré et authentifié, `npx vercel --prod` suffit

---

## ⚠️ Règle de synchronisation des pages géoloc

**OBLIGATOIRE** : toute modification apportée aux pages principales doit être répercutée sur les pages géoloc correspondantes.

| Page principale modifiée | Pages géoloc à mettre à jour |
|---|---|
| `app/portails/page.tsx` | `app/portail-aluminium-sur-mesure-*/page.tsx` (6 pages) |
| `app/pergolas/page.tsx` | `app/pergola-bioclimatique-sur-mesure-*/page.tsx` (6 pages) |
| `app/carports/page.tsx` | `app/carport-aluminium-sur-mesure-*/page.tsx` (6 pages) |

Cela inclut : images, youtubeId, variantes de produits, specs, textes des avantages. Seuls les textes ville-spécifiques (titre, description intro, ctaText) restent propres à chaque page géoloc.

---

## Contacts projet

- **Email** : therafermetures@gmail.com
- **GitHub org** : `therafermetures-ops`
