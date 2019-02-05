# Contenu Carrousel

[![NPM Version](https://img.shields.io/npm/v/@uportal/content-carousel.svg)](https://www.npmjs.com/package/@uportal/content-carousel)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__content-carousel/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__content-carousel)
[![Build Status](https://travis-ci.org/uPortal-contrib/uPortal-web-components.svg?branch=master)](https://travis-ci.org/uPortal-contrib/uPortal-web-components)

## Démonstration

<https://uportal-contrib.github.io/uPortal-web-components/en/components/content-carousel/demo>

## Installation

```bash
# installer avec npm
npm install @uportal/content-carousel

# installer avec yarn
yarn add @uportal/content-carousel
```

_installer avec maven_

```xml
<dependency>
    <groupId>org.webjars.npm</groupId>
    <artifactId>uportal__content-carousel</artifactId>
    <version>{version number goes here}</version>
</dependency>
```

_installer avec gradle_

```gradle
compile 'org.webjars.npm:uportal__content-carousel:{version number goes here}'
```

## Utilisation comme composant Web

Le composant nécessite un type. Il y a également les propriétés `carousel-height` (l'unités est en rem), `fit-to-container` qui adapte la taille à la lergeur du conteneur, et `slick-options`.

```html
<link
  href="https://unpkg.com/@uportal/content-carousel/dist/slick-theme.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@uportal/content-carousel"></script>

<content-carousel
  type="rss"
  source="/hero.rss"
  slick-options="{ &quot;slidesToShow&quot;: 1, &quot;infinite&quot;: true, &quot;arrows&quot;: true }"
  carousel-height="30rem"
  fit-to-container="true"
>
</content-carousel>
```

### Options

- `type` (requis, enum\[rss, portlet, passthrough]) : type de source de données à utiliser.
- `source` (optionnelle, string): la source du contenu à rendre dans les diapositives.
- `slick-options` (optionnelle, [slick settings](https://kenwheeler.github.io/slick/#settings)): configuration pour carrousel.
- `carousel-height` (optionnelle, string): css height (hauteur) à appliquer aux diapositives.
- `fit-to-container` (optionnelle, boolean): par défaut, le carrousel s'adapte au contenu, `true` fera correspondre la largeur du carrousel à la largeur du contenaire.

### Types

Trois types de sources de données sont actuellement pris en charge : RSS, Portlet et Passthrough.

#### RSS

RSS peut lire tout flux RSS qui ne nécessite pas d'authentification.
L'URL du flux doit être passée dans l'attribue `source` du composant.

```html
<content-carousel type="rss" source="/content.rss"> </content-carousel>
```

#### Portlet

Portlet exploite le registre des portlets pour afficher les diapositives.
L'URL du registre doit être passée dans l'attribue `source` du composant.

Le composant s'authentifiera automatiquement en tant qu'utilisateur courant avec uPortal. Des catégories de portlets spécifiques peuvent être affichées par le composant en modifiant l'URL.

Par exemple `/portletRegistry.json?category=Academics` n'affichera que les portlets de cette catégorie.

```html
<content-carousel type="portlet" source="/portletRegistry.json">
</content-carousel>
```

#### Passthrough

Pass through permet de rendre du HTML arbitraire sous forme de diapositives. Ajouter le HTML dans `<content-carousel>` et inclure `class="slick-item"` dans chaque diapositive.

```html
<content-carousel type="passthrough">
  <div class="slick-item">arbitrary</div>
  <div class="slick-item">content</div>
  <div class="slick-item">displayed</div>
  <div class="slick-item">as</div>
  <div class="slick-item">slides</div>
</content-carousel>
```

### Slots

Le contenu HTML du composant peut également être modifié à l'aide de la commande [slots](https://vuejs.org/v2/guide/components-slots.html).

#### En-tête

L'attribut slot`header` affiche le contenu en dessous des diapositives.

```html
<content-carousel type="rss" source="/content.rss">
  <h1 slot="header">Example Header</h1>
</content-carousel>
```

#### Empty

L'attribut slot `empty` affiche le contenu lorsqu'aucune diapositive n'a été trouvée.

```html
<content-carousel type="rss" source="/content.rss">
  <p slot="empty">Oh, ça n'a pas pu être trouvé.</p>
</content-carousel>
```

#### Diapositive

:warning: l'utilisation de la language de template de Vue dans une diapositive ne fonctionnera pas tant que <https://github.com/vuejs/vue-web-component-wrapper/issues/8> n'aura pas été résolu :warning:

L'attribue slot `slide` le rendu des diapositives individuelles à changer.
Le modèle a accès aux données suivantes pour les afficher :

```ts
interface CarouselItem {
  id: string;
  destinationUrl?: string;
  imageUrl?: string;
  altText?: string;
  title?: string;
  description?: string;
}
```

```html
<content-carousel type="rss" source="example.rss">
  <template slot="slide" slot-scope="props">
    <h1 class="slick-item">{{ props.item.title }}</h1>
  </template>
</content-carousel>
```

## Utilisation comme composant Vue

La source des composants peut également être importée et utilisée directement dans d'autres projets Vue.

```js
import contentCarousel from '@uportal/content-carousel/src/components/ContentCarousel.vue';
```
