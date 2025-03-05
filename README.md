# Wild Chart School Documentation

Site de documentation technique pour la librairie de visualisation de données Wild Chart School, construit avec Docusaurus.

## 📋 Description

Ce projet héberge la documentation officielle de la librairie Wild Chart School, une solution open source de visualisation de données en JavaScript. La documentation est disponible en anglais et en français, et présente en détail l'installation, l'utilisation et la personnalisation de la librairie.

## ✨ Fonctionnalités

- **Documentation bilingue** - Contenu disponible en anglais et français
- **Exemples de code** - Illustrations complètes des différentes configurations
- **Captures d'écran** - Visuels pour chaque type de graphique
- **Design responsive** - Navigation optimisée sur tous les appareils

## 🛠️ Technologies utilisées

- [Docusaurus 3](https://docusaurus.io/) - Générateur de sites statiques
- React - Pour les composants personnalisés
- Markdown - Pour la rédaction du contenu
- MDX - Pour les composants interactifs dans la documentation

## 🧩 Structure du projet

```
wcs-docs/
├── docs/                  # Documentation technique
│   ├── English/           # Documentation en anglais
│   └── Francais/          # Documentation en français
├── src/                   # Code source React
│   ├── components/        # Composants personnalisés
│   ├── css/               # Styles personnalisés
│   └── pages/             # Pages principales du site
├── static/                # Ressources statiques (images, etc.)
├── docusaurus.config.js   # Configuration de Docusaurus
├── sidebars.js            # Configuration des barres latérales
└── package.json           # Dépendances et scripts
```

## 💻 Installation

1. Clonez ce dépôt
```bash
git clone git@github.com:WildCodeSchool-CDA-LYON-02-2024/wcs-docs.git
cd wcs-docs
```

2. Installez les dépendances
```bash
yarn
```

3. Lancez le serveur de développement
```bash
yarn start
```

4. Ouvrez votre navigateur à l'adresse http://localhost:3000

## 📝 Contenu de la documentation

La documentation est organisée en deux langues et couvre :
- Installation et démarrage rapide
- Types de graphiques disponibles (barres, lignes, points, camemberts)
- Options de configuration et personnalisation
- Intégration de légendes
- Exemples complets avec code et aperçu

## 🚀 Déploiement

Pour construire le site pour la production :

```bash
yarn build
```

Pour déployer le site (GitHub Pages) :

```bash
USE_SSH=true yarn deploy
```

## 🤝 Contribution

Les contributions à la documentation sont les bienvenues. Pour contribuer :

1. Créez une branche pour votre fonctionnalité
2. Effectuez vos modifications
3. Soumettez une pull request

## 📖 Liens utiles

- [Dépôt de la librairie Wild Chart School](https://github.com/WildCodeSchool-CDA-LYON-02-2024/wcs-chart-lib)
- [Documentation Docusaurus](https://docusaurus.io/docs)

## 📄 Licence

[MIT](https://choosealicense.com/licenses/mit/)

---

Créé par [Gaëtan Compigni](https://github.com/techmefr) et l'équipe Wild Chart School
