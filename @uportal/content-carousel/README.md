# Content Carousel

[![NPM Version](https://img.shields.io/npm/v/@uportal/content-carousel.svg)](https://www.npmjs.com/package/@uportal/content-carousel)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__content-carousel/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__content-carousel)
[![Build Status](https://travis-ci.org/uPortal-contrib/uPortal-web-components.svg?branch=master)](https://travis-ci.org/uPortal-contrib/uPortal-web-components)

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
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@uportal/content-carousel"></script>

<content-carousel
  type="rss"
  source="/hero.rss"
  slick-options='{ "slidesToShow": 1, "infinite": true, "arrows": true }'
  carousel-height="30rem"
  fit-to-container="true">
</content-carousel>
```

### Options

- `type` (required, enum[rss, portlet, passthrough]): type of data source to use.
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
<content-carousel
  type="rss"
  source="/content.rss">
</content-carousel>
```

#### Portlet

Portlet leverages the portlet registry to display slides.
The URL to the registry must be passed as the `source` attribute to the component.
The component will automatically authentice as the current user with uPortal.
Specific portlet categories can be displayed by the component by changing the URL.
For example `/portletRegistry.json?category=Academics` will display only portlets within that category.

```html
<content-carousel
  type="portlet"
  source="/portletRegistry.json">
</content-carousel>
```

#### Passthrough

Pass through allows for arbitrary HTML to be rendered as slides.
Add the HTML into the `<content-carousel>` and include `class="slick-item"` on
each slide be be rendered.

```html
<content-carousel type="passthrough">
  <div class="slick-item">
    arbitrary
  </div>
  <div class="slick-item">
    content
  </div>
  <div class="slick-item">
    displayed
  </div>
  <div class="slick-item">
    as
  </div>
  <div class="slick-item">
    slides
  </div>
</content-carousel>
```

## Usage as Vue component

The component source can also be imported and used directly within other Vue projects.

```javascript
heroOptions = {
  slidesToShow: 1,
  infinite: true,
  arrows: true
};
```

```vue
<script src="https://unpkg.com/vue">
</script>
<script src="@uportal/content-carousel/components/ContentCarousel.vue">
</script>

<ContentCarousel
  :type="'rss'"
  :source="'/hero.rss'"
  :slickOptions="heroOptions"
  :carouselHeight="'30rem'"
  :fitToContainer="true" />
```
