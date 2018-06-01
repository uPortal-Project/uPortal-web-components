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

```html
<script src="https://unpkg.com/vue"></script>
<script src="./content-carousel.js"></script>

<div id="example"></div>

<script>
(() => {
  const ContentCarousel = customElements.get('content-carousel')
  const example = new ContentCarousel();
  example.strategy = function () {
    return [
      {
        id: '7b35d00d-7f7f-449e-a4a0-58a8de88059d',
        destinationUrl: 'https://example.com',
        imageUrl: 'http://placehold.it/2000x1000',
        altText: 'demo'
      }
    ];
  }

  document.getElementById('example').appendChild(example);
})()
</script>
```

## Options

http://kenwheeler.github.io/slick/#settings
