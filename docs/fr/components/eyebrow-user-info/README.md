# Eyebrow Info Utilisateur

[![NPM Version](https://img.shields.io/npm/v/@uportal/eyebrow-user-info.svg)](https://www.npmjs.com/package/@uportal/eyebrow-user-info)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__eyebrow-user-info/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__eyebrow-user-info)
[![État de la construction](https://github.com/uPortal-contrib/uPortal-web-components/workflows/CI/badge.svg)](https://github.com/uPortal-contrib/uPortal-web-components/actions?workflow=CI)

![Exemple de rendu](doc/example.gif)

## Démo

Dans la page de démonstration du menu de contenu d'esco :
<https://uportal-project.github.io/uPortal-web-components/fr/components/esco-content-menu/demo>

## Utilisation en html

```html
<eyebrow-user-info
  display-name="John Doe"
  picture="https://edu.univ.org/images/noPictureUser.svg"
  email="john.doe@edu.univ.org"
  logout-link="/uPortal/Logout"
  avatar-size="48px"
  menu-is-dark="true"
></eyebrow-user-info>
```

- displayName: requis
- email: optionnelle
- picture: requis, l'url de l'image/avatar de l'utilisateur
- moreLink: optionnelle, l'url pour accéder à l'application de gestion des informations utilisateur ou tout autre lien que vous souhaitez en cliquant sur l'image utilisateur
- logoutLink: optionnelle, l'url pour vous déconnecter si vous préférez l'afficher dans le menu déroulant
- menuIsDark: la valeur par défaut est true, définissez la couleur du texte dans le menu sur white, si false sera black, utile pour les fonds colorés
- avatarSize: La valeur par défaut est "28px", réglez la largeur et la hauteur de l'image.

## Exemple d'utilisation dans uPortal

### 1. Déployer dans uPortal le script construit

Vous devriez utiliser webjar, mais pour tester vous pouvez exécuter `npm run build` et déplacer `dist/eyebrow-user-info.js` dans `$TOMCAT_WEBAPPS/uPortal/scripts/`

### 2. Création d'un invoqueur jsp

le fichier doit être déployé dans le répertoire uportal jsp invoker `src/main/webapp/WEB-INF/jsp/Invoker/eyebrow-user-info.jsp`

Vous devriez utiliser le lien cdn, ou utiliser une version déployée localement pour le test seulement !

```jsp
 <%@ include file="/WEB-INF/jsp/include.jsp" %>

 <c:set var="request" value="${pageContext.request}" />
 <c:set var="ctxPath" value="${request.contextPath}" />

 <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 <script src="https://unpkg.com/vue@2.5.16/dist/vue.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-loader.js"></script>
 <script type="text/javascript" language="javascript">
   var versionUpdate = (new Date()).getTime();
   var script = document.createElement("script");
   script.type = "module";
   script.src = "https://npm-cdn.herokuapp.com/@gip-recia/eyebrow-user-info@0.4.0/dist/eyebrow-user-info.js?v=" + versionUpdate;
   document.body.appendChild(script);
 </script>

 <c:set var="avatar">
     <c:choose>
         <c:when test="${not empty personManager.getPerson(request).getAttribute(userPictureAttributeName[0])}">
             ${personManager.getPerson(request).getAttribute(userPictureAttributeName[0])}
         </c:when>
         <c:otherwise>${alternativePicture[0]}</c:otherwise>
     </c:choose>
 </c:set>

 <div class="eyebrow-user-info">
     <eyebrow-user-info display-name="${userInfo['displayName']}"
                 picture="${avatar}"
                 email="${personManager.getPerson(request).getAttribute(userMailAttributeName[0])}"
                 more-link="${moreUserInfoUrl[0]}"
                 logout-link="${portalLogoutUrl[0]}"
                 avatar-size="${avatarSize[0]}"
                 menu-is-dark="true"></eyebrow-user-info>
 </div>
```

### 3. Importer la définition due la portlet

créer le fichier `eyebrow-user-info.portlet-definition.xml` et l'importer

```xml
 <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
 <portlet-definition version="4.0" xsi:schemaLocation="https://source.jasig.org/schemas/uportal/io/portlet-definition https://source.jasig.org/schemas/uportal/io/portlet-definition/portlet-definition-4.0.xsd" xmlns:ns2="https://source.jasig.org/schemas/uportal" xmlns="https://source.jasig.org/schemas/uportal/io/portlet-definition" xmlns:ns4="https://source.jasig.org/schemas/uportal/io/portlet-type" xmlns:ns3="https://source.jasig.org/schemas/uportal/io/subscribed-fragment" xmlns:ns5="https://source.jasig.org/schemas/uportal/io/event-aggregation" xmlns:ns6="https://source.jasig.org/schemas/uportal/io/user" xmlns:ns7="https://source.jasig.org/schemas/uportal/io/stylesheet-descriptor" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns8="https://source.jasig.org/schemas/uportal/io/permission-owner">
     <title>User information Header</title>
     <name>User information Header</name>
     <fname>eyebrow-user-info</fname>
     <desc>Show user informations into eyebrow header</desc>
     <type>Portlet</type>
     <timeout>12000</timeout>
     <portlet-descriptor>
         <ns2:isFramework>true</ns2:isFramework>
         <ns2:portletName>JspInvoker</ns2:portletName>
     </portlet-descriptor>
     <group>Authenticated Users</group>
     <parameter>
         <name>disableDynamicTitle</name>
         <value>true</value>
     </parameter>
     <portlet-preference>
         <name>JspInvokerPortletController.viewLocation</name>
         <readOnly>false</readOnly>
         <value>/jsp/Invoker/eyebrow-user-info</value>
     </portlet-preference>
     <portlet-preference>
         <name>JspInvokerPortletController.beans</name>
         <readOnly>false</readOnly>
         <value>personManager</value>
     </portlet-preference>
     <portlet-preference>
         <name>portalLogoutUrl</name>
         <readOnly>false</readOnly>
         <value>/uPortal/Logout</value>
     </portlet-preference>
     <portlet-preference>
         <name>moreUserInfoUrl</name>
         <readOnly>true</readOnly>
         <value>/uPortal/p/ESCO-MCE</value>
     </portlet-preference>
     <portlet-preference>
         <name>avatarSize</name>
         <readOnly>true</readOnly>
         <value>28px</value>
     </portlet-preference>
     <portlet-preference>
         <name>userMailAttributeName</name>
         <readOnly>true</readOnly>
         <value>mail</value>
     </portlet-preference>
     <portlet-preference>
         <name>userPictureAttributeName</name>
         <readOnly>true</readOnly>
         <value>ESCOPersonPhoto</value>
     </portlet-preference>
     <portlet-preference>
         <name>alternativePicture</name>
         <readOnly>true</readOnly>
         <value>/images/icones/noPictureUser.svg</value>
     </portlet-preference>
 </portlet-definition>
```

### 4. L'ajouter à la mise en page

modifier le fichier `authenticated-lo.fragment-layout.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<layout xmlns:dlm="http://www.uportal.org/layout/dlm" script="classpath://org/jasig/portal/io/import-layout_v3-2.crn"
        username="authenticated-lo" >
    <folder ID="s1" hidden="false" immutable="false" name="Root folder" type="root" unremovable="true">
        <!--
         | Hidden folders do not propagate to regular users, and fragment owner
         | accounts don't receive (other) fragments at all;  Fragment owners must
         | have their own copies of the minimal portlets required to view and manage
         | their own layouts.
         +-->
        <folder ID="s20" hidden="true" immutable="true" name="Page Top folder" type="page-top" unremovable="true">
            <channel fname="dynamic-respondr-skin" unremovable="false" hidden="false" immutable="false" ID="n22"/>
            <channel fname="fragment-admin-exit" unremovable="false" hidden="false" immutable="false" ID="n24"/>
        </folder>
        <!-- Customize is already included on the page, so don't include it a 2nd time for layout admin.  It would
             mess it up.
        <folder ID="s40" hidden="true" immutable="true" name="Customize folder" type="customize" unremovable="true">
            <channel fname="personalization-gallery" unremovable="false" hidden="false" immutable="false" ID="n42"/>
        </folder> -->
        <folder ID="s100" hidden="false" immutable="true" name="Eyebrow folder" type="eyebrow" unremovable="true">
            <channel fname="notification-icon" unremovable="false" hidden="false" immutable="false" ID="n110"/>
            <channel fname="eyebrow-user-info" unremovable="false" hidden="false" immutable="false" ID="n120"/>
            <channel fname="session-timeout" unremovable="false" hidden="false" immutable="false" ID="n140"/>
        </folder>
        <folder ID="s300" hidden="false" immutable="true" name="Customize folder" type="customize" unremovable="true">
            <channel fname="personalization-gallery" unremovable="false" hidden="false" immutable="false" ID="n310"/>
            <channel fname="background-preference" unremovable="true" hidden="false" immutable="false" ID="n320"/>
        </folder>
    </folder>
</layout>
```
