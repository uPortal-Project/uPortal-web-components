# Content Carousel

[![NPM Version](https://img.shields.io/npm/v/@uportal/content-carousel.svg)](https://www.npmjs.com/package/@uportal/content-carousel)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__content-carousel/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__content-carousel)
[![Build Status](https://github.com/uPortal-contrib/uPortal-web-components/workflows/CI/badge.svg)](https://github.com/uPortal-contrib/uPortal-web-components/actions?workflow=CI)

## Demo

<https://uportal-contrib.github.io/uPortal-web-components/en/components/content-carousel/demo>

## Installation

```bash
# install with npm
npm install @uportal/content-carousel

# install with yarn
yarn add @uportal/content-carousel
```

_install with maven_

```xml
<dependency>
    <groupId>org.webjars.npm</groupId>
    <artifactId>uportal__content-carousel</artifactId>
    <version>{version number goes here}</version>
</dependency>
```

_install with gradle_

```gradle
compile 'org.webjars.npm:uportal__content-carousel:{version number goes here}'
```

## Usage as Web Component

The component requires a type. It also allows for a `carousel-height` (in rem units), a `fit-to-container` property which causes it to size to its container (horizontally), and `slick-options`.

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
  slick-options='{ "slidesToShow": 1, "infinite": true, "arrows": true }'
  carousel-height="30rem"
  fit-to-container="true"
>
</content-carousel>
```

### Options

- `type` (required, enum\[rss, portlet, passthrough\]): type of data source to use.
- `source` (optional, string): location or content to render in slides.
- `slick-options` (optional, [slick settings](https://kenwheeler.github.io/slick/#settings)): configuration for slick carousel.
- `carousel-height` (optional, string): css height to apply on slides.
- `fit-to-container` (optional, boolean): by default carousel will fit content, `true` will make carousel match width of surrounding container.

### Types

There are three data source types currently supported RSS, Portlet, and Passthrough.

#### RSS

RSS can read any RSS feed that does not require authentication.
The URL of the feed must be passed as the `source` attribute to the component.

```html
<content-carousel type="rss" source="/content.rss"> </content-carousel>
```

#### Portlet

Portlet leverages the portlet registry to display slides.
The URL to the registry must be passed as the `source` attribute to the component.
The component will automatically authentice as the current user with uPortal.
Specific portlet categories can be displayed by the component by changing the URL.
For example `/portletRegistry.json?category=Academics` will display only portlets within that category.

```html
<content-carousel type="portlet" source="/portletRegistry.json">
</content-carousel>
```

#### Passthrough

Pass through allows for arbitrary HTML to be rendered as slides.
Add the HTML into the `<content-carousel>` and include `class="slick-item"` on
each slide be be rendered.

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

The HTML content of the component can also be modified using [slots](https://vuejs.org/v2/guide/components-slots.html).

#### Header

The `header` slot goes about the slides, and is outside the slide deck.

```html
<content-carousel type="rss" source="/content.rss">
  <h1 slot="header">Example Header</h1>
</content-carousel>
```

#### Empty

The `empty` slot replaces the carousel when no content was found.

```html
<content-carousel type="rss" source="/content.rss">
  <p slot="empty">Uh Oh, that couldn't be found.</p>
</content-carousel>
```

#### Slide

:warning: leveraging the Vue's templating language within a slide will not work until <https://github.com/vuejs/vue-web-component-wrapper/issues/8> is resolved :warning:

The `slide` slot the rendering of individual slides to be changed.
The template has access to the following data to display:

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

## Usage as Vue component

The component source can also be imported and used directly within other Vue projects.

```js
import contentCarousel from '@uportal/content-carousel/src/components/ContentCarousel.vue';
```
