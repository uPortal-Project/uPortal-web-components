# User Profile Menu

[![NPM Version](https://img.shields.io/npm/v/@uportal/user-profile-menu.svg)](https://www.npmjs.com/package/@uportal/user-profile-menu)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__user-profile-menu/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__user-profile-menu)
[![Build Status](https://travis-ci.org/uPortal-contrib/uPortal-web-components.svg?branch=master)](https://travis-ci.org/uPortal-contrib/uPortal-web-components)

## Development

```bash
# clone the repository if you haven't already
git clone https://github.com/uPortal-contrib/uPortal-web-components

# navigate to the user-profile-menu folder
cd uPortal-web-components/@uportal/user-profile-menu

# install the goods
npm install

# start the app
npm start
```

## Build

Pretty simple:

`npm run build`

This will compile your JavaScript in to `build/static/js/main.{buildnumbers}.js`

## Usage

After building, grab the compiled javascript files and place it on your page.
You can now place `<user-profile-menu>` anywhere on your page.

Here's the guts of that html file:

```html
<user-profile-menu>
  <div slot="header">
    User Profile
  </div>
  <div>
    <div class="list-group list-group-flush">
      <a
        href="/manage"
        class="list-group-item list-group-item-action d-flex justify-content-between"
        >Manage Account <i class="fa fa-user"></i
      ></a>
      <a
        href="/manage"
        class="list-group-item list-group-item-action d-flex justify-content-between"
        >Another link <i class="fa fa-cog"></i
      ></a>
      <a
        href="/manage"
        class="list-group-item list-group-item-action d-flex justify-content-between"
        >Chat <i class="fa fa-comments"></i
      ></a>
    </div>
    <link
      rel="stylesheet"
      type="text/css"
      href="/ResourceServingWebapp/rs/fontawesome/4.7.0/css/font-awesome.min.css"
    />
  </div>
  <div slot="footer">
    <a href="/uPortal/logout">Sign Out</a>
  </div>
</user-profile-menu>
```

- Note: The component includes bootstrap, so that you can use bootstrap's styles in your content slots. However, font-awesome has issues crossing the shadow-dom boundry, so that if you include an icon in the content slot, you also need to include a `<link>` to the font-awesome stylesheet from uPortal (or elsewhere if you wish).

##### Notice

We have a `/proxy/` leading the `oidc-url` attribute. This is a developer convenience to be able to query against your local running instance of uPortal. The proxy is configured in `package.json`:

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

## Attributes

`<user-profile-menu>` takes the following attributes:

### `oidc-url`

Url to connect to oidc. The default for this value is `/uPortal/api/v5-1/userinfo`.

```html
<user-profile-menu oidc-url="/uPortal/api/v5-1/userinfo"></user-profile-menu>
```

### `use-initials`

Tells the component to ignore the user's image and use the initials from first_name and given_name.

```html
<user-profile-menu use-initials="true"></user-profile-menu>
```

### Theming

Currently this component supports [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) for overriding button colors. Defining the following variables will change the colors for the component accordingly. They will fall back to the colors described below.

You should define this in your custom stylesheet.

fg = foreground (text)
bg = background

```css
:root {
  --user-prof-avatar-size: 30px; // size of avatar in navbar
  --user-prof-menu-fg-color: #495057;
  --user-prof-fg-color: #ffffff; // color of user name text
  --user-prof-fallback-bg-color: #cccccc; // color of fallback/initial background
  --user-prof-fallback-fg-color: #333333; // color of fallback/initial text
  --user-prof-header-bg-color: #eee; // color used by headers/footers
  --user-prof-header-fg-color: #000; // color used by headers/footers
}
```
