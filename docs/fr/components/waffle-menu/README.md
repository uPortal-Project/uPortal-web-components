# Waffle Menu

[![NPM Version](https://img.shields.io/npm/v/@uportal/waffle-menu.svg)](https://www.npmjs.com/package/@uportal/waffle-menu)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/waffle-menu/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__waffle-menu)
[![Build Status](https://github.com/uPortal-contrib/uPortal-web-components/workflows/CI/badge.svg)](https://github.com/uPortal-contrib/uPortal-web-components/actions?workflow=CI)

## Démonstration

<https://uportal-contrib.github.io/uPortal-web-components/fr/components/waffle-menu/demo>

## Développement

```bash
# cloner le référentiel si vous ne l'avez pas déjà fait
git clone https://github.com/uPortal-contrib/uPortal-web-components

# naviguer jusqu'au dossier du menu waffle
cd uPortal-web-components/@uportal/waffle-menu

# installer
npm install

# démarrer l'application
npm start
```

## Construire

Plutôt simple :

`npm run build`

Ceci compilera votre JavaScript dans `build/static/js/main.{buildnumbers}.js`

## Utilisation

Après la construction, récupérez les fichiers javascript compilés et placez-les sur votre page.
Vous pouvez maintenant placer `<waffle-menu>` n'importe où sur votre page.

Puisque `<waffle-menu-menu>` est un composant web, son utilisation est démontrée dans le fichier `uPortal-web-components/@uportal/waffle-menu/public/index.html`.

Dans `index.html`, vous verrez que `<waffle-menu />` est codé en dur. Il y a du javascript sur la page pour aider à tester le composant. Une variable `json` est assignée dans l'en-tête contenant un tableau d'objets comme données pour chacun des liens. Sous le composant, javascript est utilisé pour attribuer des attributs au composant lui-même.

Voici les tripes de ce fichier html:

```html
<waffle-menu
  debug="true"
  button-color="red"
  url="/proxy/uPortal/api/v4-3/dlm/portletRegistry.json?categoryId=local.21"
></waffle-menu>
```

##### Notice

Nous avons un `/proxy/` en tête de l'attribut `url`. Il s'agit d'une commodité pour les développeurs de pouvoir effectuer des requêtes à partir de votre instance locale de uPortal. Le proxy est configuré dans `package.json` :

```json
  "proxy": {
    "/proxy": {
      "target": "http://localhost:8080",
      "changeOrigin": true,
      "pathRewrite": {
        "^/proxy": "/"
      }
    }
  },
```

## Attributs

`<waffle-menu>` prend les attributs suivants:

### `oidc-url`

```html
<waffle-menu
  oidc-url="https://example.com/uPortal/api/v5-1/userinfo"
></waffle-menu>
```

### `button-color`

applique une couleur au bouton du menu waffle. Utile si vous voulez éviter de spécifier la couleur en CSS.
Si ce n'est pas le cas, `button-color` est réglé par défaut sur `#ffffffff`.

Exemple:

`<waffle-menu button-color="#ffffff">`

### `url`

URL entièrement qualifiée pointant vers l'API où `<waffle-menu>` peut trouver des données au format registre portlet.

Exemple:

```html
<waffle-menu
  url="/uPortal/api/v4-3/dlm/portletRegistry.json?categoryId=local.21"
></waffle-menu>
```

### `dépanner`

Désactivez la connexion open id id pour le test.

:warning: Ne pas l'utilisez dans la production mais à des fins de test uniquement.

Exemple:

```html
<waffle-menu debug="true"></waffle-menu>
```

## Structure interne JSON

La structure JSON des données est assez simple. C'est un tableau d'objets, et chaque objet contient 3 ou 4 propriétés.

### Propriétés des objets JSON

| Nom de la propriété | Description                                                                     |
| ------------------- | ------------------------------------------------------------------------------- |
| `type`              | Soit `box`, soit `footer`. Indique au menu `<waffle-menu>` où afficher le lien. |
| `link`              | L'url de l'élément de lien dans le menu.                                        |
| `label`             | L'étiquette à afficher pour le lien.                                            |
| `image`             | L'url d'une image à utiliser pour les liens `box`.                              |
