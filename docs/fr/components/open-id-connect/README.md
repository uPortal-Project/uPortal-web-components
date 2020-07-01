# uPortal Open ID Connect

[![NPM Version](https://img.shields.io/npm/v/@uportal/open-id-connect.svg)](https://www.npmjs.com/package/@uportal/open-id-connect)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__open-id-connect/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__open-id-connect)
[![Build Status](https://travis-ci.org/uPortal-contrib/uPortal-web-components.svg?branch=master)](https://travis-ci.org/uPortal-contrib/uPortal-web-components)

> A client side abstraction to efficiently get Open ID Connect tokens from uPortal

## Installation

```sh
# installer avec npm
npm install @uportal/open-id-connect

# installer avec yarn
yarn add @uportal/open-id-connect
```

_installer avec maven_

```xml
<dependency>
    <groupId>org.webjars.npm</groupId>
    <artifactId>uportal__open-id-connect</artifactId>
    <version>{version number goes here}</version>
</dependency>
```

_installer avec gradle_

```gradle
compile 'org.webjars.npm:uportal__open-id-connect:{version number goes here}'
```

## Utilisation

_utilisation avec ES5_

```js
var oidc = require('@uportal/open-id-connect');

// with a promise
oidc
  .default()
  .then(function (token) {
    console.log(token.encoded); // Raw JWT
    console.log(token.decoded); // parsed JSON
  })
  .catch(function (err) {
    console.error(err);
  });

// with a callback
oidc.default({}, function (err, token) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(token.encoded);
  console.log(token.decoded);
});
```

_utilisation avec ES6+_

```js
import oicd from '@uportal/open-id-connect';

// with default values
try {
  const { encoded, decoded } = await oidc();
  console.log(encoded);
  console.log(decoded);
} catch (err) {
  console.error(err);
}

// with options
try {
  const { encoded, decoded } = await oidc({
    userInfoApiUrl: '/uPortal/api/v5-1/userinfo',
    timeout: 5000,
    propertyTransforms: {
      example: JSON.parse,
    },
  });
  console.log(encoded);
  console.log(decoded);
} catch (err) {
  console.error(err);
}
```

## API

```js
oidc(options, callback); //-> Promise
```

- (optionnelle) **Options**
  - (optionnelle) _string_ `userInfoApiUrl` - URL du terminal pour Open ID Connect
  - (optionnelle) _number_ timeout - le temps jusqu'à ce que le jeton soit renouvelé
  - (optionnelle) _object_ propertyTransforms - se transforme pour s'appliquer à des propriétés spécifiques
    - _string_ `key` - nom de la propriété à transformer
    - _function_ `value` - fonction à appliquer à la propriété
- (optionnelle) **Callback**
  - _Error_ `err` - null si la résonance est correcte, sinon objet d'erreur
  - _Object_ `token` - objet avec les clés `encoded` et `decoded`
    - _string_ `encoded` a le jeton Web JSON brut
    - _Object_ `decoded` a l'objet JSON analysé
- **Promise**
  - _Object_ `resolve` objet token
    - _string_ `encoded` a le jeton Web JSON brut
    - _Object_ `decoded` a l'objet JSON analysé
  - _Error_ `reject` Raison pour laquelle la promesse a été rejetée
