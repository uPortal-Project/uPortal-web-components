# ESCO Content Menu

[![NPM Version](https://img.shields.io/npm/v/@uportal/esco-content-menu.svg)](https://www.npmjs.com/package/@uportal/esco-content-menu)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__esco-content-menu/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__esco-content-menu)
[![Build Status](https://travis-ci.org/uPortal-contrib/uPortal-web-components.svg?branch=master)](https://travis-ci.org/uPortal-contrib/uPortal-web-components)

## Démonstration

<https://uportal-contrib.github.io/uPortal-web-components/en/components/esco-content-menu/demo>

## Installation

```bash
# installer avec npm
npm install @uportal/esco-content-menu

# installer avec yarn
yarn add @uportal/esco-content-menu
```

_installer avec maven_

```xml
<dependency>
    <groupId>org.webjars.npm</groupId>
    <artifactId>uportal__esco-content-menu</artifactId>
    <version>{version number goes here}</version>
</dependency>
```

_installer avec gradle_

```gradle
compile 'org.webjars.npm:uportal__esco-content-menu:{version number goes here}'
```

## Utilisation comme composant Web

### Le menu hamburger

C'est le composant principal qui affiche un menu hamburger et qui ouvre une page entière avec le composant `content-menu`.

#### Html

```html
<script src="/resource-server/webjars/vue/dist/vue.min.js"></script>
<script
  src="/resource-server/webjars/uportal__esco-content-menu/dist/esco.min.js"
  defer
></script>

<esco-hamburger-menu
  default-org-logo="..."
  api-url-org-info="..."
  portlet-api-url="..."
  layout-api-url="..."
  organization-api-url="..."
  user-info-api-url="..."
  context-api-url="/uPortal"
  sign-out-url="/uPortal/Logout"
  default-org-logo="https://www.toureiffel.paris/sites/default/files/styles/1440x810/public/2017-10/monument-landing-header-bg_0.jpg?itok=_dSLLBlZ"
  user-info-portlet-url="/uPortal/user-details"
  favorites-portlet-card-size="small"
  grid-portlet-card-size="auto"
  hide-action-mode="never"
>
</esco-hamburger-menu>
```

Pour une certaine intégration vous pourriez avoir besoin d'un peu plus, comme dans uPortal vous aurez besoin d'ajouter une div parent et d'appliquer sur son parent le plus proche `section` un style `float : left`.

#### Propriétés

- `context-api-url`: type: `String`, défaut : `/uPortal`, utile pour fournir un contexte uPortal différent sur lequel faire la demande
- `favorite-api-url`: type: `String`, défaut : `/uPortal/api/layout`, l'uri/url des favoris api
- `layout-api-url`: type: `String`, défaut : `/uPortal/api/v4-3/dlm/layout.json`, l'uri/url de l'API de mise en page pour demander la liste des favoris dans l'ordre défini par l'utilisateur (nécessaire uniquement pour obtenir l'ordre des favoris défini par l'utilisateur)
- `portlet-api-url`: type: `String`, défaut : `/uPortal/api/v4-3/dlm/portletRegistry.json`, l'uri/url du portletRegistry api pour obtenir la liste des portlets autorisés par l'utilisateur.
- `userInfo-api-url`: type: `String`, défaut : `/uPortal/api/v5-1/userinfo`, url/uri sur laquelle la requête api est faite pour obtenir des informations utilisateur et le jeton jwt.
- `organization-api-url`: type: `String`, optionnelle, l'uri/url d'un api pour récupérer les informations d'organisation, tout format json est accepté, mais configurez `user-org-id-attribute-name`, `user-all-orgs-id-attribute-name`, `org-logo-url-attribute-name` pour travailler avec.
- `sign-out-url`: type: `String`, défaut : `/uPortal/Logout`, une uri/url à appeler lors de la déconnexion de l'utilisateur (pour un bouton de déconnexion),
- `default-org-logo`: type: `String`, requis: true, une url/uri pour fournir une image institutionnelle quand aucune n'est trouvée à partir d'un api optionnel (non fourni dans uPortal),
- `user-info-portlet-url`: type: `String`, défaut : `''`, une url/uri pour l'application d'information de l'utilisateur,
- `switch-org-portlet-url`: type: `String`, défaut : `''`, une url/url facultative d'un api rest pour obtenir des informations sur l'organisation institutionnelle,
- `favorites-portlet-card-size`: type: valeur possible `auto|large|medium|small|smaller`, défaut : `auto`, définie la taille du composant `portlet-cards` dans le composant `favorite-content`,
- `grid-portlet-card-size`: type: valeur possible : `auto|large|medium|small|smaller`, défaut : `auto`, défini la taille du composant `portlet-cards` dans la partie du composant `grid-content` ,
- `hide-action-mode: type`: valeur possible `auto|always|never`, défaut : `auto`, défini si nous devons montrer les actions `auto` ,n'apparaissent pas sur le point d'arrêt `small`,
- `user-org-id-attribute-name`: type: `String`, défaut : `'ESCOSIRENCourant[0]'`, 'attribut chemin de l'objet pour obtenir l'identifiant de l'organisation à récupérer dans l'API de l'organisation
- `user-all-orgs-id-attribute-name`: type: `String`, défaut : `'ESCOSIREN`, le chemin d'objet de l'attribut pour obtenir tous les identifiants des organisations liées à l'utilisateur et pour récupérer à partir de l'API de l'organisation
- `org-logo-url-attribute-name`: type: `String`, défaut : `'otherAttributes.ESCOStructureLogo[0]'`, l'attribut chemin de l'objet pour obtenir l'image de l'organisation Image à partir des détails de l'organisation obtenus à partir de l'API de l'organisation
- `force-org-logo`: type: `String`, optionnelle, une url/uri pour fournir une image institutionnelle surchargeant la default-org-logo et l'image institutionnelle obtenue par l'API (utilisé pour avoir un aperçu de changement avant l'application à tous les utilisateurs via l'API),
- `debug`: type: `Boolean`, défaut : `false`, pour que le mode démo/débogage puisse fonctionner de manière autonome (désactiver l'appel api).

#### Slots

Le contenu HTML du composant peut également être modifié à l'aide de la commande [slots](https://vuejs.org/v2/guide/components-slots.html).

##### Icon Menu

L'attribut slot `menu-icon` slot permet d'appliquer une icône personnalisée remplaçant l'icône par défaut de Hamburger. Par exemple :

```html
<esco-hamburger-menu
  default-org-logo="..."
  api-url-org-info="..."
  portlet-api-url="..."
  layout-api-url="..."
  organization-api-url="..."
  user-info-api-url="..."
  favorites-portlet-card-size="small"
  grid-portlet-card-size="auto"
  hide-action-mode="never"
>
  <div
    slot="menu-icon"
    style="background-image:url('https://mdbootstrap.com/img/svg/hamburger3.svg?color=FFF');height:20px;width:20px;"
  ></div>
</esco-hamburger-menu>
```

##### Menu Content

L'attribut slot `menu-content` slot permet d'appliquer un contenu autre que le sous-composant esco-contenu-menu.

```html
<esco-hamburger-menu
  favorites-portlet-card-size="small"
  grid-portlet-card-size="auto"
  hide-action-mode="never"
>
  <div slot="menu-content">whatever...</div>
</esco-hamburger-menu>
```

### Le menu contenu

Ce composant est un composant principal car il chargera en une seule page tous les éléments principaux (les informations utilisateur + organisation, les favoris et la liste des services).

#### Html

```html
<script src="/resource-server/webjars/vue/dist/vue.min.js"></script>
<script
  src="/resource-server/webjars/uportal__esco-content-menu/dist/esco.min.js"
  defer
></script>

<esco-content-menu
  sign-out-url="/uPortal/Logout"
  default-org-logo="https://www.toureiffel.paris/sites/default/files/styles/1440x810/public/2017-10/monument-landing-header-bg_0.jpg?itok=_dSLLBlZ"
  user-info-portlet-url="/uPortal/user-details"
  favorites-portlet-card-size="small"
  grid-portlet-card-size="auto"
  hide-action-mode="never"
>
</esco-content-menu>
```

#### Propriétés

Ceci utilise les mêmes propriétés que dans le menu `hamburger-menu` (voir les détails dans le menu `hamburger-menu`) :

- `context-api-url`
- `favorite-api-url`
- `layout-api-url`
- `organization-api-url`
- `user-info-api-url`
- `portlet-api-url`
- `sign-out-url`
- `default-org-logo`
- `user-info-portlet-url`
- `switch-org-portlet-url`
- `favorites-portlet-card-size`
- `grid-portlet-card-size`
- `hide-action-mode`
- `user-org-id-attribute-name`
- `user-all-orgs-id-attribute-name`
- `org-logo-url-attribute-name`
- `force-org-logo`
- `debug`

et avec des propriétés supplémentaires pour travailler avec le `hamburger-menu`:

- `call-on-close`: type : `Function`, défaut : `{}`, fournit une fonction de rappel à appeler dès que le bouton fermer a été actionné avec le `header-buttons` composant.
- `is-hidden`: type : `Boolean`, défaut : `false`, utilisé par `hamburger-menu` tpour indiquer l'état de la page.
- `id`: type : `String`, défaut : `null`, fournit un identifiant pour pouvoir sélectionner l'élément du dôme, par exemple si vous voulez gérer manuellement un `hamburger-menu`

### la grille de contenu

Ce composant fournit une façon flexible d'afficher une liste de `portlet-card`, en fonction de l'api rest de uPortal.

#### Html

```html
<script src="/resource-server/webjars/vue/dist/vue.min.js"></script>
<script
  src="/resource-server/webjars/uportal__esco-content-menu/dist/esco.min.js"
  defer
></script>

<esco-content-grid
  portlet-card-size="gridPortletCardSize"
  hide-action="hideAction"
>
</esco-content-grid>
```

#### Propriétés

Propriétés autonomes :

- `background-color`: type : `String`, défaut : `rgba(0, 0, 0, 0)`, pour appliquer une couleur de fond différente
- `call-after-action`: type : `Function`, défaut : `undefined`, une fonction de rappel à appeler dans `portlet-card` incorporant `action-favorite` après avoir ajouté la portlet aux favoris,
- `context-api-url`: type : `String`, défaut : `/uPortal`, utile pour fournir un contexte uPortal différent sur lequel faire une demande,
- `favorite-api-url`: type : `String`, défaut : `/uPortal/api/layout`, l'uri/url de l'api des favoris
- `layout-api-url`: type : `String`, défaut : `/uPortal/api/v4-3/dlm/layout.json`, l'uri/url de l'api de mise en page pour demander la liste des favoris dans l'autre ordre défini (seulement nécessaire pour obtenir l'ordre des favoris défini par l'utilisateur)
- `portlet-api-url`: type : `String`, défaut : `/uPortal/api/v4-3/dlm/portletRegistry.json`, l'uri/url de l'api portletRegistry pour obtenir la liste des portlets autorisés par l'utilisateur
- `userInfo-api-url`: type : `String`, défaut : `/uPortal/api/v5-1/userinfo`, url/uri sur laquelle la requête api est faite pour obtenir des informations utilisateur et le jeton jwt
- `portlet-card-size`: type : valeur possible `auto|large|medium|small|smaller`, défaut : `auto`, défini la taille du composant`portlet-cards`.
- `hide-action`: type : `Boolean`, défaut : `false`, défini pour cacher ou non le bouton `action-favorite` défini dans `portlet-card`
- `show-footer-categories`: `Boolean`, défaut : `false`, défini pour afficher la liste déroulant des catégories en bas de la grille
- `hide-title`: `Boolean`, défaut : `false`, défini pour supprimer la zone de titre de la grille, utile lorsqu'une grille de base est souhaitée
- `debug`: type : `Boolean`, défaut : `false`, pour que le mode démo/débogage puisse fonctionner de manière autonome (désactiver l'appel api)

et des propriétés supplémentaires pour travailler avec le composant parent `content-menu`:

- `parent-screen-size`: type : valeur possible `large|medium|small|smaller`, défaut : `medium`, permet d'indiquer la vue du point d'arrêt du parent.
- `portlets`: type : `Array`, défaut : `undefined`, utilisé si la liste des portlets est chargée et fournie par un composant parent,
- `favorites`: type : `Array`, défaut : `undefined`, utilisé si la liste des portlets favoris chargés et fournis par un composant parent,

#### Slots

Le contenu HTML du composant peut également être modifié à l'aide de la commande [slots](https://vuejs.org/v2/guide/components-slots.html).

##### En-tête Gauche

The `header-left` slot permit to apply a custom title replacing the default "All services" one. As example:

```html
<content-grid
  background-color="grey"
  portlet-card-size="medium"
  portlet-api-url="/uPortal/api/v4-3/dlm/portletRegistry.json?category=administration"
  layout-api-url="..."
>
  <h1 slot="header-left">Administration</h1>
</content-grid>
```

##### Header Right

L'attribut slot `header-right` permet d'appliquer un titre personnalisé remplaçant le filtre par défaut à droite. Par exemple :

```html
<content-grid
  background-color="grey"
  portlet-card-size="medium"
  portlet-api-url="/uPortal/api/v4-3/dlm/portletRegistry.json?category=administration"
  layout-api-url="..."
>
  <div slot="header-rigth"></div>
</content-grid>
```

##### Pied de page

L'attribut slot `footer` permet d'appliquer un titre personnalisé remplaçant le filtre par défaut sur le pied de page. Par exemple :

```html
<content-grid
  background-color="grey"
  portlet-card-size="medium"
  portlet-api-url="/uPortal/api/v4-3/dlm/portletRegistry.json"
  layout-api-url="..."
>
  <div slot="footer"></div>
</content-grid>
```

### L'action favori

Le composant `action-favorite` est très simple, il affiche un bouton de démarrage qui permet d'ajouter ou de supprimer des favoris un portlet.

### Html

```html
<script src="/resource-server/webjars/vue/dist/vue.min.js"></script>
<script
  src="/resource-server/webjars/uportal__esco-content-menu/dist/esco.min.js"
  defer
></script>

<esco-action-favorite portlet-card-size="small" hide-action="false">
</esco-action-favorite>
```

#### Propriétés

- `call-on-toggle-fav`: type : `Function`, défaut : `{}`, une fonction de rappel appelée après l'événement click sur le bouton,
- `chan-id`: type : `String`, requis : `true`, l'identifiant de la portlet est ajouté ou supprimé des favoris de l'utilisateur,
- `favorite-api-url`: type : `String`, défaut : `/uPortal/api/layout`, l'uri/url de l'api favoris,
- `user-info-api-url`: type : `String`, défaut : `/uPortal/api/v5-1/userinfo`, url/uri sur laquelle la requête api est faite pour obtenir des informations utilisateur et le jeton jwt,
- `fname`: type : `String`, requis : `true`, le nom de la portlet qui permet d'identifier la portlet dans la liste des favoris, utile pour la fonction callback et appliquer à une classe css,
- `is-favorite`: type : `Boolean`, défaut : `false`, fournir l'état favori,
- `back-ground-is-dark`: type : `Boolean`, défaut : `false`, permet d'appliquer un style en fonction de la couleur de fond, car le composant est utilisé en tant qu'embeded,
- `debug`: type : `Boolean`, défaut : `false`, pour que le mode démo/débogage puisse s'exécuter de manière autonome (désactiver l'appel de l'api des favoris)

### Les contenus favoris

Le composant n'est fonctionnel que dans le `content-menu`, il a besoin qu'une liste de portlets et une liste de favoris soit passée.

Certains travaux seraient nécessaires pour déménager sur le `content-carousel`.

### Les contenus utilisateur

Ce composant permet d'afficher les informations de l'utilisateur avec les informations de son organisation.
Peu de travail serait nécessaire pour pouvoir l'utiliser comme un composant autonome : comme avoir un service de récupération comme pour les portlets ou les favoris. Mais certaines parties sont des développements institutionnels pour pouvoir obtenir des informations d'organisation, donc nous attendons une nouvelle utilisation avant de faire quelque chose.

#### Html

Besoin de travail pour une utilisation autonome.

#### Propriétés

- `context-api-url`: type : `String`, défaut : `/uPortal`, utile pour fournir un contexte uPortal différent sur lequel faire la demande
- `org-info`: type : `Object`, défaut : `{}`, l'object contenant le détail d'organisation de l'utilisateur actuel,
- `other-orgs`: type : `Array`, défaut : `[]`, l'object contenant tous les autres détails des organisations lorsque l'utilisateur en a plusieurs,
- `user-info`: type : `Object`, requis : `true`, l'objet information de l'utilisateur,
- `switch-org-portlet-url`: type : `String`, défaut : `'''`, une url/uri où l'utilisateur peut changer d'organisation lorsqu'il en a plusieurs (partie utilisable par les tenants),
- `default-org-logo`: type : `String`, requis : `true`, une url/uri pour fournir une image institutionnelle quand aucune n'est trouvée à partir d'une api optionnel ( non fourni dans uPortal ),
- `user-info-portlet-url`: type: `String`, défaut : `''`, une url/uri pour les informations utilisateur de l'application,
- `org-logo-url-attribute-name`: type : `String`, défaut : `'otherAttributes.ESCOStructureLogo[0]'`, l'attribut chemin obtenu par l'object organisation image pour obtenir les détails de l'organisation depuis l'api organisation.
- `force-org-logo`: type: `String`, optionnelle, une url/uri pour fournir une image institutionnelle surchargeant la default-org-logo et l'image institutionnelle obtenue par l'API (utilisé pour avoir un aperçu de changement avant l'application à tous les utilisateurs via l'API),

et des propriétés supplémentaires pour travailler avec le composant parent `content-menu`:

- `parent-screen-size`: type : valeur possible `large|medium|small|smaller`, défaut : `medium`, permet d'indiquer la vue du point d'arrêt du parent.

### La carte portlet

Ce composant rend des informations sur une portlet sous forme de carte.

#### Html

```html
<script src="/resource-server/webjars/vue/dist/vue.min.js"></script>
<script
  src="/resource-server/webjars/uportal__esco-content-menu/dist/esco.min.js"
  defer
></script>

<esco-portlet-card portlet-desc="portlet" size="small" hide-action="true">
</esco-portlet-card>
```

#### Properties

- `portlet-desc`: type : `Object`, requis : `true`, the portlet description object
- `size`: type : possible value `large|medium|small|smaller`, défaut : `medium`, fixe la taille de la carte à appliquer
- `hide-action: type`: `Boolean`, défaut : `false`, défini afficher ou non le bouton `action-favorite`
- `back-ground-is-dark`: type: `Boolean`, défaut : `false`, permet d'appliquer un style en fonction de la couleur de fond, car le composant est utilisé en tant qu'embeded,
- `is-favorite`: type: `Boolean`, défaut : `false`, fournir l'état favori (passé au composant `action-favorite`),
- `call-after-action`: type: `Function`, défaut : `{}`, fonction de rappel pour appeler après avoir cliqué sur le bouton `action-favorite` (passé au composant `action-favorite`),
- `icon-background-color`: type: `String`, défaut : `Transparent`, pourrait être utilisé pour appliquer une couleur d'arrière-plan derrière une icône de portlet - cas d'utilisation s'il n'y a pas d'arrière-plan sur l'icône.
- `favorite-api-url`: type: `String`, défaut : `/uPortal/api/layout`, l'uri/url de l'api des favoris (passé au composant `action-favorite`),
- `user-info-api-url`: type: `String`, défaut : `/uPortal/api/v5-1/userinfo`, url/uri sur laquelle la requête api est faite pour obtenir les informations utilisateur et le jeton jwt, (passé au composant `action-favorite`),
- `debug`: type: `Boolean`, défaut : `false`, pour que le mode démo/débogage puisse fonctionner de manière autonome (désactiver l'appel api).

### Le filtre de catégorie de la grille de contenu

Ce composant est une version externe du filtre intégré dans la grille de contenu qui permet un placement arbitraire sur la page.

#### Html

```html
<script src="/resource-server/webjars/vue/dist/vue.min.js"></script>
<script
  src="/resource-server/webjars/uportal__esco-content-menu/dist/esco.min.js"
  defer
></script>

<esco-content-grid
  portlet-card-size="gridPortletCardSize"
  hide-action="hideAction"
>
</esco-content-grid>

<esco-content-grid-filter></esco-content-grid-filter>
```

#### Propriétés

- Aucune

### L'ellipse

Ce composant permet d'appliquer un auto-fit/trunc ou un serrage de ligne à un texte lorsque la taille de la div doit être limitée. Il évite d'appliquer un débordement : caché et permet de gérer une ellipse sur plusieurs lignes.

#### Html

```html
<script src="/resource-server/webjars/vue/dist/vue.min.js"></script>
<script src="/resource-server/webjars/uportal__esco-content-menu/dist/esco.min.js" defer></script>

<esco-ellipsis
  message="text">
</esco-elipsis>
```

#### Propriétés

- `message`: type : `String`, défaut : `''`, le texte à "ellipser",
- `line-clamp`: type : `Number`, défaut : `0`, quand nous voulons un certain nombre de lignes, sinon nous appliquerons un ajustement automatique sur la taille disponible (le parent doit avoir une hauteur définie),
- `line-height`: type : `String`, défaut : `'22px'`, la hauteur de ligne du texte est nécessaire pour l'auto-ajustement,
- `end-char`: type : `String`, défaut : `'...'`, un texte à appliquer lorsqu'un tronc apparaît,
- `end-html`: type : `String`, défaut : `''`, un texte à appliquer à la fin du html.

### Les boutons d'en-tête

Ce composant rend une partie d'en-tête avec quelques boutons principaux, comme fermer le menu de la page ou pour se déconnecter.

#### Html

```html
<script src="/resource-server/webjars/vue/dist/vue.min.js"></script>
<script
  src="/resource-server/webjars/uportal__esco-content-menu/dist/esco.min.js"
  defer
></script>

<esco-header-button call-on-close="function"> </esco-header-button>
```

#### Properties

- `call-on-close`: type : `Function`, defdéfaut ault: `{}`, fonction de rappel en cliquant sur le bouton fermer,
- `sign-out-url`: type : `String`, défaut : `/uPortal/Logout`, une uri/url à appeler lors de la déconnexion de l'utilisateur (pour un bouton de déconnexion),

## FAQ

- Q: Que signifie "ESCO" ?
- A: "ESCO" est l'abréviation de "e-scolaire".

### Theming

Actuellement ce composant supporte [CSS Variables](https://developer.mozilla.org/fr/docs/Web/CSS/Using_CSS_custom_properties) pour surcharger les couleurs de boutons. Définir les variables suivante changera les couleurs du composant en conséquence. Les variables suivantes par défaut seront appliquées.
**_NOTE:_** Cela est appliqué seulement quand la propriété de `size` est définie à `custom`.

Vous devez définir cela dans votre feuille de style:

```css
:root {
  --content-gridcard-padding: 5px;
  --content-gridcard-border: none;
  --content-gridcard-bg-color: white;
  --content-gridcard-border-radius: 5px;
  --content-gridcard-shadow: none;
  --content-gridcard-shadow-hover: none;
  --content-gridcard-size-w: 180px;
  --content-gridcard-size-h: 180px;
  --content-gridcard-icon-size: 75px;
  --content-gridcard-icon-size: 75px;
  --content-gridcard-title-fontsize: 16px;
  --content-gridcard-description-fontsize: 16px;

  --content-griditem-margin: 20px auto;
}
```
