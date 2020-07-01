# uPortal Open ID Connect

[![NPM Version](https://img.shields.io/npm/v/@uportal/open-id-connect.svg)](https://www.npmjs.com/package/@uportal/open-id-connect)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__open-id-connect/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__open-id-connect)
[![Build Status](https://travis-ci.org/uPortal-contrib/uPortal-web-components.svg?branch=master)](https://travis-ci.org/uPortal-contrib/uPortal-web-components)

> A client side abstraction to efficiently get Open ID Connect tokens from uPortal

## Installation

```sh
# install with npm
npm install @uportal/open-id-connect

# install with yarn
yarn add @uportal/open-id-connect
```

_install with maven_

```xml
<dependency>
    <groupId>org.webjars.npm</groupId>
    <artifactId>uportal__open-id-connect</artifactId>
    <version>{version number goes here}</version>
</dependency>
```

_install with gradle_

```gradle
compile 'org.webjars.npm:uportal__open-id-connect:{version number goes here}'
```

## Usage

_use with ES5_

:notebook: When using `open-id-connect` helper with ES5 environements, [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) need to be [polyfilled](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill).
[Fetch](https://github.com/github/fetch), [Regenerator Runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime), and [Core JS](https://github.com/zloirock/core-js) are recommended, but can be swapped out for other polyfills if wanted.

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

_use with ES6+_

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

- (optional) **Options**
  - (optional) _string_ `userInfoApiUrl` - URL for Open ID Connect endpoint
  - (optional) _number_ timeout - time until token should be renewed
  - (optional) _object_ propertyTransforms - transforms to apply to specific properties
    - _string_ `key` - name of property to be transformed
    - _function_ `value` - function to apply to property
- (optional) **Callback**
  - _Error_ `err` - null if resonse is okay, error object otherwise
  - _Object_ `token` - object with `encoded` and `decoded` keys
    - _string_ `encoded` has the raw JSON Web Token
    - _Object_ `decoded` has the parsed JSON object
- **Promise**
  - _Object_ `resolve` token object
    - _string_ `encoded` has the raw JSON Web Token
    - _Object_ `decoded` has the parsed JSON object
  - _Error_ `reject` reason Promise was rejected
