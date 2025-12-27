# Sport Challenge Training — Site Hugo

Site web statique optimisé SEO pour la vente de liens. Généré avec le système LINKER-Hugo.

## 🎨 Configuration Design

| Paramètre | Valeur |
|-----------|--------|
| Hash domaine | 2621 |
| Palette | **Copper** (#b45309) |
| Typographie | **Modern** (Inter) |
| Header | 1 — Modern transparent |
| Hero | 0 — Split 50/50 |
| Section 1 | 0 — Latest articles |
| Section 2 | 6 — Testimonials |
| Section 3 | 7 — Newsletter |
| Grid | 1 — Sidebar |
| Card | 0 — Vertical |
| Footer | 1 — Duo asymétrique |

## 📁 Structure du projet

```
sct-hugo/
├── config.toml              # Configuration Hugo
├── netlify.toml             # Configuration Netlify (build + headers)
├── data/
│   └── spin.yaml            # Configuration design system
├── content/
│   ├── _index.md            # Homepage
│   ├── entrainement/        # 5 articles
│   ├── nutrition/           # 4 articles
│   ├── recuperation/        # 3 articles
│   ├── performance/         # 2 articles
│   ├── a-propos.md
│   ├── contact.md
│   └── mentions-legales.md
├── static/
│   └── images/              # 7 images Freepik
└── themes/flavor/
    ├── layouts/
    │   ├── _default/        # baseof, single, list
    │   ├── index.html       # Template homepage
    │   ├── 404.html         # Page erreur
    │   └── partials/        # Headers, heroes, sections, cards, footers
    └── static/
        ├── css/             # Modulaire: base + components
        └── js/              # main.js
```

## 🚀 Déploiement Netlify

### Option 1 : Drag & Drop (rapide)
```bash
cd sct-hugo
hugo --gc --minify
# Glisser le dossier public/ sur app.netlify.com/drop
```

### Option 2 : Git (recommandé)
```bash
# 1. Créer repo GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/user/sportchallengetraining.git
git push -u origin main

# 2. Connecter à Netlify
# New site from Git → GitHub → sélectionner repo
# Build command: hugo --gc --minify
# Publish directory: public
```

### Option 3 : CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## 🖼️ Images incluses

| Fichier | Dimensions | Usage |
|---------|------------|-------|
| hero-fitness-studio.jpg | 16:9 | Hero homepage |
| entrainement-kettlebell.jpg | 1:1 | Section entraînement |
| nutrition-smoothie.jpg | 1:1 | Section nutrition |
| recuperation-massage.jpg | 1:1 | Section récupération |
| recuperation-ice-bath.jpg | 1:1 | Alternative récupération |
| performance-tracking.jpg | 1:1 | Section performance |
| running-track.jpg | 16:9 | Featured content |
| favicon.svg | 32×32 | Favicon |

## 📝 Commandes Hugo

```bash
# Serveur de développement
hugo server -D

# Build production
hugo --gc --minify

# Nouvel article
hugo new entrainement/mon-article.md

# Statistiques
hugo --templateMetrics
```

## ✅ Checklist pré-publication

- [x] Build sans erreur (128 pages)
- [x] Images optimisées intégrées
- [x] Favicon SVG créé
- [x] netlify.toml configuré
- [x] Headers sécurité (X-Frame-Options, CSP...)
- [x] Caching assets statiques
- [x] Page 404 personnalisée
- [x] Sitemap XML généré
- [x] Robots.txt généré
- [x] RSS feeds actifs
- [x] Mobile responsive
- [x] Dark mode support

## 🔧 Maintenance

### Ajouter un article
```bash
hugo new entrainement/titre-article.md
```

Éditer le frontmatter :
```yaml
---
title: "Titre de l'article"
description: "Description SEO (150-160 caractères)"
date: 2025-01-15
categories: ["Entraînement"]
tags: ["tag1", "tag2"]
image: "/images/entrainement-kettlebell.jpg"
---
```

### Modifier le design
Les variables sont dans `themes/flavor/static/css/base/variables.css`.

### Ajouter une section
1. Créer `content/nouvelle-section/_index.md`
2. Ajouter au menu dans `config.toml`

## 📊 SEO

- Meta title/description automatiques
- Schema.org (WebSite, Article)
- Open Graph + Twitter Cards
- Canonical URLs
- Sitemap XML
- Structure HN optimisée

## 🛡️ Sécurité (via netlify.toml)

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: geolocation=(), microphone=(), camera=()

## 📜 Licence

Usage privé — Généré pour eReferer/Linkavista.

---

Généré le 26/12/2025 par LINKER-Hugo v1.0
