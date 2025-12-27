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

Généré le 26/12/2025 par LINKER-Hugo v1.0
