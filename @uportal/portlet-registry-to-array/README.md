# uPortal Open ID Connect

[![NPM Version](https://img.shields.io/npm/v/@uportal/portlet-registry-to-array.svg)](https://www.npmjs.com/package/@uportal/portlet-registry-to-array)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__portlet-registry-to-array/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__portlet-registry-to-array)
[![Build Status](https://travis-ci.org/uPortal-contrib/uPortal-web-components.svg?branch=master)](https://travis-ci.org/uPortal-contrib/uPortal-web-components)

> A utility that flattens the portlet registry tree into an array

## Installation

```sh
# install with npm
npm install @uportal/portlet-registry-to-array

# install with yarn
yarn add @uportal/portlet-registry-to-array
```

_install with maven_

```xml
<dependency>
    <groupId>org.webjars.npm</groupId>
    <artifactId>uportal__portlet-registry-to-array</artifactId>
    <version>{version number goes here}</version>
</dependency>
```

_install with gradle_

```gradle
compile 'org.webjars.npm:uportal__portlet-registry-to-array:{version number goes here}'
```

## Usage

```js
import { portletRegistryToArray } from "@uportal/portlet-registry-to-array";

// In production this would come over the network
const exampleRegistry = {
  registry: {
    categories: [
      {
        name: "All categories",
        description: "All channel categories",
        id: "local.1",
        portlets: [
          {
            fname: "courses",
            keywords: [],
            averageRating: 0,
            name: "Courses",
            description: "Course links and announcements.",
            ratingsCount: 0,
            typeId: 8,
            id: 52,
            state: "PUBLISHED",
            title: "Courses",
            parameters: {
              mobileIconUrl: {
                name: "mobileIconUrl",
                description: "",
                value: "/uPortal/media/skins/icons/mobile/courses_alt.png"
              },
              iconUrl: {
                name: "iconUrl",
                description: "",
                value:
                  "/ResourceServingWebapp/rs/tango/0.8.90/32x32/apps/accessories-text-editor.png"
              },
              configurable: {
                name: "configurable",
                description: "",
                value: "true"
              }
            }
          }
        ],
        subcategories: []
      }
    ]
  }
};

const portletList = portletRegistryToArray(exampleRegistry);
console.log(portletList);
```
