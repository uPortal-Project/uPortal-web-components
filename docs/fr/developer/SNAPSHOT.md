# Configurez les composants de uPortal localement

## Prérequis

1.  [Git][]
2.  Node.js][] 10.9+ (l'utilisation de[NVM][] est recommandée)

## Installation

1.  Depuis un terminal ou une ligne de commande
2.  `git clone https://github.com/uPortal-contrib/uPortal-web-components`
3.  cd uPortal-web-composants
4.  "npm ci
5.  "Npm run bootstrap

## Exécution locale d'un composant

1.  cd" dans le dossier des composants
2.  `npm start`# Utiliser `-SNAPSHOT` Construit en uPortal-start

uPortal-web-components fournit un support pour l'installation de `-SNAPSHOT` WebJar construit (composants) dans
Maven Local pour une utilisation avec uPortal-start. Cette fonctionnalité permet aux développeurs de composants Web de se déployer,
et tester leur travail au sein du portail avant de le valider.

## À propos de uPortal-start

uPortal-start][] est le mécanisme par lequel les individus et les institutions adoptent Apereo uPortal,
le principal cadre de portail d'entreprise open source construit par et pour les établissements d'enseignement supérieur,
Les écoles de la maternelle à la 12e année et les communautés de recherche. uPortal-start est nouveau pour uPortal 5.0.

## Construire des WebJars `-SNAPSHOT` WebJars

uPortal-web-components est un projet basé sur[Node.js][]-, mais il utilise[Gradle][] pour préparer `-SNAPSHOT`.
WebJars et installez-les dans le référentiel Maven Local.

> REMARQUE : **NOTE:** Les composants individuels des composants uPortal-web-composants doivent être complètement assemblés (par
> npm) avant d'invoquer Gradle pour les empaqueter sous la forme d'un WebJar `-SNAPSHOT`.

Utilisez les commandes suivantes pour construire tous les composants dans uPortal-web-components et les package/installer
comme `-SNAPSHOT` WebJars dans Maven Local.

```bash
npm run build
./gradlew installer
```

## Ajout de WebJars à uPortal-start

Dans uPortal-start, la superposition `resource-server` fournit le support pour _bundling_ (déploiement) WebJar-
à base de contenu. Ajoutez votre WebJar comme dépendance au fichier `overlays/resource-server/build.gradle'.

### Exemples de dépendances WebJar

Par convention, une propriété `<webjar.name>Version` est définie pour chaque WebJar dans le répertoire`gradle.properties' à la racine de uPortal-start.

```gradle
dependencies {
    runtime "org.jasig.jasig.resourceserver:resource-server-webapp:${resourceServer13Version}@war"

    // Webjars inclus avec le serveur de ressources
    runtime "org.webjars.npm:uportal__content-carousel:${contentCarouselVersion}@jar"
    runtime "org.webjars.npm:uportal__waffle-menu:${waffleMenuVersion}@jar"
    runtime "org.webjars.npm:vue:${vueVersion}@jar"
}
```

[uportal-start] : https://github.com/Jasig/uPortal-start
[node.js] : https://nodejs.org/
[gradle]: https://gradle.org/

## Tests

1.  De la racine du projet
2.  "Test npm

[git]: https://git-scm.com/download

[node.js] : https://nodejs.org/en/download/
[nvm]: https://github.com/creationix/nvm#readme
