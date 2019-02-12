# Développer des composants Web Vue pour uPortal

## Guide étape par étape pour le composant vue.js
1. [Prérequis](#1-prerequis)
    1. [Node.js](#nodejs)
    2. [Vue CLI](#vue-cli)
    3. [Maven](#maven)
    4. [Gradle](#gradle)
2. [Générer une application Vue](#2-generer-une-application-vue)
3. [Ajouter un support de gradle pour les WebJars](#3-ajouter-un-support-de-gradle-pour-les-webjars)
    1. [Créer un fichier gradle.properties](#creer-un-fichier-gradleproperties)
    2. [Créer un fichier build.gradle](#creer-un-fichier-buildgradle)
    3. [Ajouter un wrapper Gradle (gradlew) au projet](#ajouter-un-wrapper-gradle-au-projet)
4. [Éditer l’application Vue](#4-editer-l-application-vue)
    1. [Renommer HelloWorld.vue](#renommer-helloworldvue)
    2. [Éditer App.vue](#editer-appvue)
    3. [Éditer package.json](#editer-packagejson)
    4. [Éditer babel.config.js](#editer-babelconfigjs)
5. [Assembler et déployer l’application Vue](#5-assembler-et-deployer-lapplication-vue)
6. [Ajouter le composant dans uPortal](#6-ajouter-le-composant-dans-uportal)
    1. [Créer un fichier portlet-definition.xml](#creer-un-fichier-portlet-definitionxml)
    2. [Éditer le fichier portlet-definition](#editer-le-fichier-portlet-definition)
    3. [Remplacer les valeurs entre le CDATA dans votre portlet-definition](#remplacer-les-valeurs-entre-le-cdata-dans-votre-portlet-definition)
    4. [Autres options de la portlet-definition](#autres-options-de-la-portlet-definition)
       (ne pas oublier d’ajouter des permissions)
    5. [Ajouter le webjar au resource server](#ajouter-le-webjar-au-resource-server)
7. Sélectionner le composant dans uPortal (**note :** par défaut, depuis uPortal-start, 
il semble que vous ne pouvez l’ajouter qu’à d’autres onglets, et non à l’onglet d’accueil par défaut, 
qui peut être verrouillé selon les configurations).

## 1. Prérequis

### Node.js
Si vous n’avez pas de Node installé, il y a plusieurs façons de le faire. Une
est d’utiliser Node Version Manager ([nvm](https://github.com/creationix/nvm)).

``` bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

Installer la dernière version de LTS (Long Term Support) de Node (actuellement 10.15.1).

``` bash
nvm install node
```

### Vue CLI
Si vous n’avez pas Vue cli installé (Node doit déjà être installé).
``` bash
npm install --global @vue/cli
```

### Maven
Utiliser le gestionnaire de paquets approprié pour votre système d’exploitation. Ces instructions ont été testées avec maven version 3.6.

### Gradle
Utiliser le gestionnaire de paquets approprié pour votre système d’exploitation. Ces instructions ont été testées avec le gradle 5.2.

## 2. Générer une application Vue
Remplacer `{component-name}` avec le nom souhaité pour le composant.

``` bash
vue create {component-name} --default
```

Installer les dépendances pour le support des anciens navigateurs dans l’application nouvellement générée.
``` bash
cd {component-name}

npm install --save-dev @babel/{cli,plugin-transform-runtime,preset-env}
```

## 3. Ajouter un support de gradle pour les WebJars

### Créer un fichier gradle.properties

Dans le répertoire racine, créer un fichier **gradle.properties**, avec le contenu
suivant :
```
group=org.webjars.npm
```

### Créer un fichier build.gradle

Copier le fichier **build.gradle** file depuis le répertoire @uportal du projet **uPortal-web-components**
(ou utiliser [un de ceux de l’Annexe](#fichiers-buildgradle)).

<https://github.com/uPortal-contrib/uPortal-web-components/blob/master/%40uportal/build.gradle>

Si vous utilisez celui d’**uPortal-web-components**, supprimer la ligne `subprojects` 
jusqu’à la fin de ses accolades, par exemple :

``` diff
- subprojects {

    apply plugin: 'java'
    apply plugin: 'maven'

    def jsonFile = file("${projectDir}/package.json")
    def parsedJson = new groovy.json.JsonSlurper().parseText(jsonFile.text)
    project.version = parsedJson.version + '-SNAPSHOT'

    jar {
        baseName "uportal__${project.name}"
        from '.'
        exclude 'build'
        exclude 'node_modules'
        into "META-INF/resources/webjars/uportal__${project.name}/${project.version}"
    }

- }
```

Cela devrait ressembler au final à quelque chose comme ceci :

``` gradle
    apply plugin: 'java'
    apply plugin: 'maven'

    def jsonFile = file("${projectDir}/package.json")
    def parsedJson = new groovy.json.JsonSlurper().parseText(jsonFile.text)
    project.version = parsedJson.version + '-SNAPSHOT'

    jar {
        baseName "uportal__${project.name}"
        from '.'
        exclude 'build'
        exclude 'node_modules'
        into "META-INF/resources/webjars/uportal__${project.name}/${project.version}"
    }
```

**Note :** Pour produire le .jar le plus compact possible ceci afin de réduire le trafic du resource server 
et d’accélérer le temps de réponse du navigateur, ou si vous développez sous Windows, 
essayer ce [build.gradle pour Linux et Mac OS](#buildgradle-pour-linux-et-mac-os)
ou ce [build.gradle pour Windows](#buildgradle-pour-windows).

### Ajouter un wrapper Gradle au projet

Lancer cette commande :

```bash
gradle wrapper --gradle-version=5.1.1
```

**Note :** Maintenant que le projet a un fichier build.gradle et un wrapper Gradle, 
un IDE comme IntelliJ IDEA le reconnaîtra comme un projet Gradle. Vous pouvez 
faire le reste de l’édition requise dans l’IDE.

## 4. Éditer l’application Vue

### Renommer HelloWorld.vue

Renommer le fichier HelloWorld.vue généré, remplacer **{component-name}** avec le vôtre :

```
DEPUIS :
src/components/HelloWorld.vue

VERS :
src/components/{component-name}.vue
```

### Éditer App.vue

Rename the imports.generated HelloWorld.vue file, replace **{component-name}** with yours:
Renommer le fichier d’imports généré HelloWorld.vue, remplacer **{nom-composant}** par les vôtres :

``` javascript
// DEPUIS :
import HelloWorld from './components/HelloWorld.vue'

// À :
import HelloWorld from './components/{component-name}.vue'
```

### Éditer package.json

Le `{component-name}` après `--name` _**doit**_ avoir un 
trait d’union, par exemple `--name machin-meteo`. Modifier comme ce qui suit :

```
// DEPUIS :
    "build": "vue-cli-service build",

// À (assurez-vous d’avoir bien renommé {component-name}):
    "prebuild": "babel node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js -o node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js",
    "build": "vue-cli-service build --name {component-name} --target wc src/components/{component-name}.vue",

```

Ajouter ces déclarations de niveau supérieur ::

```
  "main": "dist/{component-name}.js",
  "source": "src/components/{component-name}.vue",
```

Par exemple :

```
{
  "name": "@uportal/machin-meteo",
  "version": "0.1.0",
  "private": true,
  "main": "dist/machin-meteo.js",
  "source": "src/components/machin-meteo.vue",
  "scripts": {
    "serve": "vue-cli-service serve",
    "prebuild": "babel node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js -o node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js",
    "build": "vue-cli-service build --name machin-meteo --target wc src/components/machin-meteo.vue",
    "lint": "vue-cli-service lint"
  },
  ...
}

```

### Éditer babel.config.js

Remplacer le contenu de **babel.config.js** par ceci :

```js
module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]]
};
```

## 5. Assembler et déployer l’application Vue

Pour empaqueter le composant, exécuter :

```bash
npm run build
```

Pour assembler le webjar et le mettre en local sur un repo Maven, lancer :

```bash
./gradlew install
```


## 6. Ajouter le composant dans uPortal

Tout ce qui suit est fait depuis le projet **uPortal-start**.

### Créer un fichier portlet-definition.xml

Depuis le projet uPortal-start, faites une copie d’une portlet-definition.xml existante **qui a un composant web**.

```
COPIER :
data/quickstart/portlet-definition/admin-dashboard.portlet-definition.xml

EN :
data/quickstart/portlet-definition/{component-name}.portlet-definition.xml
```

### Éditer le fichier portlet-definition

Dans le fichier portlet-definition.xml nouvellement créé, modifier les valeurs suivantes :

``` xml
    <title>Titre du composant</title>
    <name>Nom composant</name>
    <fname>nom-composant</fname>
    <desc>Un excellent composant qui fait des choses</desc>
```

### Remplacer les valeurs entre le CDATA dans votre portlet-definition

Modifier par ce qui suit dans la section CDATA de la portlet-définition, en changeant 
`{nom-composant}` par le nom de votre composant et en conservant les lignes d’ouverture et de fermeture du CDATA:

``` xml
<portlet-preference>
    <name>content</name>
    <readOnly>false</readOnly>
    <value>
        <![CDATA[
           <script src="https://unpkg.com/vue"></script>
           <script type="text/javascript" src="/resource-server/webjars/uportal__{component-name}/dist/{component-name}.min.js"></script>

           <{component-name}></{component-name}>

       ]]>
    </value>
</portlet-preference>
```

Pour retrouver le nom du fichier en min.js de votre composant que vous allez 
appeler dans le script, examinez le contenu du webjar qui a été créé. Faire ainsi par exemple :

```bash
ls -al ~/.m2/repository/org/webjars/npm/uportal__machin-meteo/0.1.0-SNAPSHOT/*.jar
```

Ceci vous montrera le fichier .jar nommé :

```
uportal__machin-meteo-0.1.0-SNAPSHOT.jar
```

Inspecter ainsi maintenant le contenu du fichier .jar :

```
jar tvf uportal__machin-meteo-0.1.0-SNAPSHOT.jar | grep min.js
```

Ceci vous montrera :

```
META-INF/resources/webjars/uportal__speedy-vue/0.1.0-SNAPSHOT/dist/machin-meteo.min.js
```

Donc le nom du fichier min.js est donc **machin-meteo.min.js**, qui sera ce que vous devez 
mettre en valeur de la balise <script> du CDATA de la portlet-definition.

### Autres options de la portlet-definition

Pour ajouter un encadrement (l’encadrement standard avec bordure des portlet):

``` xml
    <parameter>
        <name>chromeStyle</name>
        <value>default</value>
    </parameter>
```

Pour retirer l’encadrement :

``` xml
    <parameter>
        <name>chromeStyle</name>
        <value>no-chrome</value>
    </parameter>
```

### Ajouter le webjar au resource server

Dans le fichier `overlays/resource-server/build.gradle` de votre projet uPortal-start, 
ajouter la dépendance d’exécution suivante:

```
    runtime "org.webjars.npm:uportal__{component-name}:{version}@jar"
```

Par exemple:

```
    runtime "org.webjars.npm:uportal__machin-meteo:0.1.0-SNAPSHOT@jar"
```

## Annexe

### installation de Node.js

#### Mac OS X
1. [MacPorts](https://www.macports.org/)
2. [HomeBrew](https://brew.sh/)
3. l’installeur MacOS (.pkg) depuis [le site web de Node.js](https://nodejs.org/)

##### avec MacPorts
```bash
sudo port list | grep node
sudo port install nodejs10
```
##### avec Homebrew
```bash
brew search node
brew install node
```

### fichiers build.gradle

Pour produire des fichiers .jar vraiment compacts que le resource server d’uPortal 
fournira au navigateur de vos utilisateurs, essayer ceci : (tous les fichiers étrangers 
à l’exception du fichier *.min.js seront exclus du fichier.jar généré.)

#### build.gradle pour Linux et Mac OS

```
apply plugin: 'java'
apply plugin: 'maven'

def jsonFile = file("${projectDir}/package.json")
def parsedJson = new groovy.json.JsonSlurper().parseText(jsonFile.text)
project.version = parsedJson.version + '-SNAPSHOT'

jar {
    baseName "uportal__${project.name}"
    from '.'
    include 'META-INF'
    include 'dist/*'
    exclude "dist/demo.html"
    exclude "dist/${project.name}.js"
    exclude "dist/${project.name}.js.map"
    exclude "dist/${project.name}.min.js.map"
    into "META-INF/resources/webjars/uportal__${project.name}/${project.version}"
}
```

#### build.gradle pour Windows

Windows a une bizarrerie, que les tâches copyFiles et cleanUp dans ce fichier build.gradle 
permettent de contourner. Cela fonctionnera également sous Mac OS et Linux...

```
apply plugin: 'java'
apply plugin: 'maven'

def jsonFile = file("${projectDir}/package.json")
def parsedJson = new groovy.json.JsonSlurper().parseText(jsonFile.text)
project.version = parsedJson.version + '-SNAPSHOT'


task copyFiles{
    copy{
        from ('.'){
            exclude '*.lock'
            exclude '**/*.lock'
            exclude 'build/*'
            exclude 'node_modules/*'
        }
        into 'build_tmp/target/content'
    }
}

jar {
    baseName "uportal__${project.name}"
    from '.'
    include 'META-INF'
    include 'dist/*'
    exclude "dist/demo.html"
    exclude "dist/${project.name}.js"
    exclude "dist/${project.name}.js.map"
    exclude "dist/${project.name}.min.js.map"
    into "META-INF/resources/webjars/uportal__${project.name}/${project.version}"
}

task cleanUp(type: Delete) {
    delete 'build_tmp'
    followSymlinks = true
}

jar.finalizedBy cleanUp
```
