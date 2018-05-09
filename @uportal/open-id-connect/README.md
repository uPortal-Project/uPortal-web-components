# uPortal Open ID Connect

[![Build Status](https://travis-ci.org/ChristianMurphy/uPortal-components.svg?branch=master)](https://travis-ci.org/ChristianMurphy/uPortal-components)

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

```js
var oidc = require("@uportal/open-id-connect");

// with a promise
oidc
  .default()
  .then(function(token) {
    console.log(token.encoded); // Raw JWT
    console.log(token.decoded); // parsed JSON
  })
  .catch(function(err) {
    console.error(err);
  });

// with a callback
oidc.default({}, function(err, token) {
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

try {
  const {encoded, decoded} = await oidc();
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

* (optional) **Options**
  * (optional) _string_ `userInfoApiUrl` - URL for Open ID Connect endpoint
  * (optional) _number_ timeout - time until token should be renewed
* (optional) **Callback**
  * _Error_ `err` - null if resonse is okay, error object otherwise
  * _Object_ `token` - object with `encoded` and `decoded` keys
    * _string_ `encoded` has the raw JSON Web Token
    * _Object_ `decoded` has the parsed JSON object
* **Promise**
  * _Object_ `resolve` token object
    * _string_ `encoded` has the raw JSON Web Token
    * _Object_ `decoded` has the parsed JSON object
  * _Error_ `reject` reason Promise was rejected
