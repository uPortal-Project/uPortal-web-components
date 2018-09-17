# ESCO Content Menu

## Installation

```bash
# install with npm
npm install @uportal/esco-content-menu

# install with yarn
yarn add @uportal/esco-content-menu
```

_install with maven_

```xml
<dependency>
    <groupId>org.webjars.npm</groupId>
    <artifactId>uportal__esco-content-menu</artifactId>
    <version>{version number goes here}</version>
</dependency>
```

_install with gradle_

```gradle
compile 'org.webjars.npm:uportal__esco-content-menu:{version number goes here}'
```

## Usage

To use the all the components including the side menu:

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@uportal/esco-content-menu"></script>

<hamburger-menu default-org-logo="https://lycees.netocentre.fr/annuaire_images/default_banner_v1.jpg"></hamburger-menu>
```

To use the all the components including the side menu:

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@uportal/esco-content-menu"></script>

<hamburger-menu default-org-logo="https://lycees.netocentre.fr/annuaire_images/default_banner_v1.jpg"></hamburger-menu>
```

To use all of the on page components without the side navigation:

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@uportal/esco-content-menu"></script>

<content-menu default-org-logo="https://lycees.netocentre.fr/annuaire_images/default_banner_v1.jpg" api-url-org-info="/p/test"></content-menu>
```

## FAQ

- Q: What does "ESCO" mean?
- A: "ESCO" is an abbreviation of "e-scolaire", French for Online School.
