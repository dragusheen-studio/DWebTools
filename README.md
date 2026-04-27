# 🛠️ DWebTools

> **"Pourquoi chercher quand tout est là ?"**
> Une suite d'outils centralisée, rapide et respectueuse de la vie privée, conçue pour simplifier la routine quotidienne des développeurs et créatifs.

[![Next.js](https://img.shields.io/badge/Next.js-15+-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## ✨ Vision
**DWebTools** est né d'un constat simple : le web regorge d'outils utiles, mais ils sont souvent éparpillés, lents, et pollués par la publicité ou le tracking.  
Cette plateforme propose une expérience **minimaliste**, **performante** et **unifiée**, bâtie sur les dernières technologies du Web.

## 🚀 Fonctionnalités actuelles

### 📝 Catégorie : Texte
* **Word Counter** : Statistiques détaillées (mots, signes, temps de lecture).
* **Case Converter** : Transformation multi-lignes (camel, snake, kebab, PascalCase, etc.).
* **Lorem Ipsum** : Générateur modulable avec support HTML et prévisualisation par paragraphes.
* **Text Diff Checker** : Comparaison visuelle entre deux versions d'un texte (lignes ajoutées/supprimées).
* **List Cleaner** : Suppression de doublons, tri alphabétique, inversion et ajout de préfixes/suffixes.

### 🔐 Catégorie : Sécurité
* **Password Generator** : Générateur ultra-personnalisable et passphrase sécurisée basée sur la théorie **XKCD**.
* **Password Checker** : Analyse de force, calcul d'entropie et vérification de fuite anonymisée via l'API **HIBP**.

### ⚙️ Catégorie : Développement
* **Base64 Converter** : Encodage et décodage UTF-8 sécurisé avec fonction de swap rapide.
* **JSON ↔ YAML** : Conversion bidirectionnelle intelligente avec gestion d'erreurs de parsing.
* **Crontab Generator** : Aide visuelle interactive pour la syntaxe Cron avec traduction humaine.

### 🎨 Catégorie : Design
* **CSS Glassmorphism** : Générateur d'effets de verre dépoli en temps réel avec prévisualisation animée. Supporte les exports en `CSS RAW`, `Tailwind CSS` et `React Object Style`.
* **Color Variations** : Générateur de déclinaisons harmonieuses (triades, complémentaires, analogues) basées sur la roue chromatique HSL à partir d'une couleur maître.
* **Color Palette** : Configurateur de Design System permettant de définir une dominante et de sélectionner des accents avec exportation aux formats `JSON`, `CSS` et `CSV`.
* **UI Kit Preview** : Visualisation en temps réel d'une charte graphique sur des composants d'interface complexes (Dashboard, Pricing, Auth) avec détection automatique de formats d'importation et modes clair/sombre.
* **Sprite Sheet Cutter** : Outil de découpe intelligent avec prévisualisation Canvas. Permet d'isoler des assets via une grille (dimensions ou divisions) et d'exporter une sélection personnalisée en archive `ZIP`.
* **Sprite Sheet Maker** : Éditeur de planches de sprites immersif avec système de "zoom-in" par cellule. Propose des algorithmes de compactage automatique (Horizontal/Vertical), un mode "Auto-Size" basé sur l'asset le plus grand et un nettoyage des zones vides (Trim).

---

## 🛠️ Stack Technique

* **Framework** : [Next.js 15](https://nextjs.org/) (App Router, React Compiler)
* **Langage** : [TypeScript](https://www.typescriptlang.org/)
* **Styling** : [Tailwind CSS v4](https://tailwindcss.com/)
* **UI Components** : [Shadcn/UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
* **Icons** : [Lucide React](https://lucide.dev/)
* **Animations** : [Framer Motion](https://www.framer.com/motion/)
* **Outils de parsing** : `js-yaml`, `diff`, `cron-parser`

---

## ⚙️ Installation & Lancement

Ce projet utilise `pnpm`. Assure-toi d'avoir **Node.js 22+** installé.

### 1. Cloner le projet
```bash
git clone https://github.com/nathan-tirolf/dwebtools.git
cd dwebtools
```

### 2. Installer les dépendances
```bash
pnpm install
```

### 3. Lancer en développement
```bash
pnpm dev
```

### 4. Scripts utilitaires (Bash)
Le projet inclut des scripts d'automatisation dans le dossier `./bin` pour simplifier la gestion de l'environnement :
* `./bin/start` : Vérifie la version de Node, installe pnpm si manquant, et lance l'application.
* `./bin/run` : Commande rapide pour lancer le serveur de développement.

---

## 👤 Créateur

**Nathan TIROLF (Dragusheen)**
*Développeur Graphique & Créatif*

* **GitHub** : [@nathan-tirolf](https://github.com/nathan-tirolf)
* **LinkedIn** : [Nathan Tirolf](https://linkedin.com/in/nathan-tirolf)
* **Portfolio** : [dragusheen.com](https://dragusheen.com)

---

## 📄 Licence
Ce projet est sous licence MIT. Libre à vous de l'utiliser et de contribuer !

*(„• ֊ •„)❤  Have a good day !*
