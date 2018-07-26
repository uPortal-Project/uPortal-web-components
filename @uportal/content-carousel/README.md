# Content Carousel

[![NPM Version](https://img.shields.io/npm/v/@uportal/content-carousel.svg)](https://www.npmjs.com/package/@uportal/content-carousel)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__content-carousel/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__content-carousel)
[![Build Status](https://travis-ci.org/uPortal-contrib/uPortal-web-components.svg?branch=master)](https://travis-ci.org/uPortal-contrib/uPortal-web-components)

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

## Usage

The component requires an rss file path, slick options (link below). It also allows for a carouselHeight (in rem units) and a `fitToContainer` property which causes it to size to its container (horizontally).

```javascript
heroOptions = {
  slidesToShow: 1,
  infinite: true,
  arrows: true
};

contentOptions = {
  slidesToShow: 3,
  infinite: true,
  arrows: true,
  dots: true
};

portletOptions = {
  slidesToShow: 6,
  infinite: true,
  arrows: true,
  dots: true
};
```

```html
<script src="https://unpkg.com/vue"></script>
<script src="./content-carousel.js"></script>

<ContentCarousel
  :type="'rss'"
  :source="'/hero.rss'"
  :slickOptions="heroOptions"
  :carouselHeight="'30rem'"
  :fitToContainer="true" />
<ContentCarousel
  :type="'rss'"
  :source="'/content.rss'"
  :slickOptions="contentOptions" />
<ContentCarousel
  :type="'portlet'"
  :source="'/portletRegistry.json'"
  :slickOptions="portletOptions" />
```

## Options

<http://kenwheeler.github.io/slick/#settings>
