# Site Template System - Guide d'Utilisation

Ce projet est configuré comme un **template réutilisable** qui peut être dupliqué pour créer plusieurs sites avec des marques différentes. Tous les wordings sont automatiquement régénérés par IA pour chaque nouveau site.

## 🎯 Comment créer un nouveau site

### Méthode 1: Interface Graphique (Recommandée)

1. **Accédez au générateur**: Allez sur `/config-generator`
2. **Remplissez les informations**:
   - Nom de la société (obligatoire)
   - Téléphone, email, domaines
   - Couleurs de la marque (format HSL)
3. **Cliquez sur "Generate Configuration"**
   - L'IA va automatiquement rephrase tous les wordings
   - Une preview s'affiche avec la nouvelle configuration
4. **Téléchargez le fichier** `site.config.ts` généré
5. **Créez un nouveau projet**:
   - Remixez ce projet dans Lovable
   - Remplacez `src/config/site.config.ts` par votre version
   - Mettez à jour les couleurs dans `src/index.css`
6. **Personnalisez les assets**:
   - Logo: `src/assets/header-logo.svg`
   - Autres images si nécessaire

### Méthode 2: Manuelle

1. **Dupliquez le projet** (Remix dans Lovable)
2. **Modifiez** `src/config/site.config.ts`:
   ```typescript
   export const siteConfig = {
     company: {
       name: "Nouvelle Société",
       phone: "+33 X XX XX XX XX",
       email: "contact@nouvelle-societe.com",
       // ...
     },
     domains: {
       main: "nouvelle-societe.com",
       fastTrack: "https://fast-track.nouvelle-societe.com",
       checkIn: "https://checkin.nouvelle-societe.com",
     },
     colors: {
       primary: "220 70% 50%",  // Nouvelle couleur
       accent: "45 100% 60%",
       // ...
     },
     // Modifiez manuellement tous les textes...
   };
   ```

3. **Mettez à jour les couleurs** dans `src/index.css`:
   ```css
   :root {
     --primary: 220 70% 50%;
     --accent: 45 100% 60%;
     /* ... */
   }
   ```

## 📁 Structure du Template

```
src/
├── config/
│   └── site.config.ts          # Configuration centralisée
├── utils/
│   └── configGenerator.ts      # Outils de génération
├── pages/
│   └── ConfigGenerator.tsx     # Interface de génération
└── index.css                    # Design system (couleurs)

supabase/
└── functions/
    └── regenerate-wordings/    # Edge function IA
```

## 🎨 Personnalisation des Couleurs

Les couleurs utilisent le format **HSL** (Teinte Saturation Luminosité).

**Format**: `H S% L%`
- H (Hue): 0-360 (rouge=0, vert=120, bleu=240)
- S (Saturation): 0-100% (0=gris, 100=couleur vive)
- L (Lightness): 0-100% (0=noir, 50=normal, 100=blanc)

**Exemples**:
- Bleu océan: `205 85% 45%`
- Or/jaune: `42 95% 55%`
- Vert: `120 70% 50%`
- Violet: `270 60% 50%`

### Où changer les couleurs

1. **Dans site.config.ts** (pour référence):
   ```typescript
   colors: {
     primary: "205 85% 45%",
     accent: "42 95% 55%",
   }
   ```

2. **Dans index.css** (IMPORTANT - c'est là que les couleurs sont appliquées):
   ```css
   :root {
     --primary: 205 85% 45%;
     --accent: 42 95% 55%;
     --ocean: 205 85% 45%;
     --gold: 42 95% 55%;
   }
   
   .dark {
     --primary: 205 75% 55%;
     --accent: 42 90% 60%;
   }
   ```

## 🤖 Comment fonctionne l'IA

L'edge function `regenerate-wordings` utilise **Lovable AI** (Gemini 2.5 Flash) pour:

1. **Analyser** le contenu actuel et les informations de marque
2. **Rephrase** tous les textes en gardant:
   - La même structure
   - Les mêmes thèmes
   - Le même message
   - Toutes les fonctionnalités
3. **Retourner** un JSON avec les nouveaux wordings

**Coût**: Utilise vos crédits Lovable AI (gratuit jusqu'à un certain volume)

## 🔗 Utiliser la Configuration dans vos Composants

```typescript
import { siteConfig } from "@/config/site.config";

// Exemple d'utilisation
function Header() {
  return (
    <header>
      <h1>{siteConfig.company.name}</h1>
      <a href={`tel:${siteConfig.company.phone}`}>
        {siteConfig.company.phone}
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section>
      <h1>{siteConfig.content.hero.title}</h1>
      <p>{siteConfig.content.hero.subtitle}</p>
    </section>
  );
}
```

## ⚙️ Configuration des Redirections

Les redirections vers les sous-domaines se font dans `PreCheckout.tsx`:

```typescript
// Plan Medium (49€)
https://fast-track.your-domain.com/?product=_3m_49&currency=USD

// Plan Premium (79€)
https://fast-track.your-domain.com/?currency=USD
```

Même logique pour check-in. La currency est dynamique selon le choix de l'utilisateur.

## 📝 Checklist de Lancement

- [ ] Modifier `site.config.ts` avec les nouvelles infos
- [ ] Générer nouveaux wordings avec l'IA (si souhaité)
- [ ] Mettre à jour les couleurs dans `index.css`
- [ ] Remplacer le logo (`src/assets/header-logo.svg`)
- [ ] Modifier `Terms.tsx` avec vos conditions
- [ ] Modifier `Privacy.tsx` avec votre politique
- [ ] Mettre à jour les questions dans `FAQ.tsx`
- [ ] Configurer les domaines personnalisés
- [ ] Tester toutes les redirections
- [ ] Vérifier les formulaires de contact

## 🚀 Déploiement

1. Le site se déploie automatiquement sur Lovable
2. Configurez vos domaines personnalisés dans les settings
3. Les edge functions sont déployées automatiquement

## 💡 Astuces

- **Testez d'abord localement** avant de créer plusieurs sites
- **Gardez une trace** des configurations générées
- **Les couleurs HSL** sont plus faciles à ajuster que RGB/HEX
- **L'IA est gratuite** (modèles Gemini) jusqu'au 13 octobre 2025
- **Sauvegardez** votre `site.config.ts` avant de générer une nouvelle version

## 🆘 Support

- Documentation Lovable: https://docs.lovable.dev
- Community Discord: https://discord.gg/lovable
- Pour des questions sur ce template: utilisez le chat Lovable

---

**Version**: 1.0  
**Dernière mise à jour**: Octobre 2025
