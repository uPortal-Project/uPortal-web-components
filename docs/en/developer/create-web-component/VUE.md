# Develop Vue Web Components for uPortal

## Step by Step guide for vue.js component
1. [Prerequisites](#1-prerequisites)
    1. [Node.js](#nodejs)
    2. [Vue CLI](#vue-cli)
    3. [Maven](#maven)
    4. [Gradle](#gradle)
2. [Generate the Vue application](#2-generate-the-vue-application)
3. [Add gradle support for Maven WebJars](#3-add-gradle-support-for-maven-webjars)
    1. [create gradle.properties](#create-gradleproperties)
    2. [create build.gradle](#create-buildgradle)
    3. [add Gradle wrapper (gradlew) to the project](#add-gradle-wrapper-to-project)
4. [Edit the Vue application](#4-edit-the-vue-application)
    1. [rename HelloWorld.vue](#rename-helloworldvue)
    2. [edit App.vue](#edit-appvue)
    3. [edit package.json](#edit-packagejson)
    4. [edit babel.config.js](#edit-babelconfigjs)
5. [Assemble and deploy the Vue application](#5-assemble-and-deploy-the-vue-application)
6. [Add the component into uPortal](#6-add-the-component-into-uportal)
    1. [create a portlet-definition.xml](#create-a-portlet-definitionxml)
    2. [edit portlet definition](#edit-portlet-definition)
    3. [replace CDATA in portlet definition](#replace-cdata-in-portlet-definition)
    4. [other options for portlet definition](#other-options-for-portlet-definition)
       (don't forget to add permissions)
    5. [add webjar to resource server](#add-webjar-to-resource-server)
7. Select the component in uPortal (note that in the default uPortal-start
it appears that you can only add to other tabs, not the default home tab,
which may be locked.)

## 1. Prerequisites
#### Node.js
If you don't have node installed there are several ways to do it. One
way is to use Node Version Manager ([nvm](https://github.com/creationix/nvm)).

``` bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

Install the latest Long Term Support (LTS) version of node (currently 10.15.1).

``` bash
nvm install node
```

#### Vue CLI
If you dont have Vue cli installed (Node must already be installed).
``` bash
npm install --global @vue/cli
```

#### Maven
Use the appropriate package manager for your OS. These instructions were
tested with maven version 3.6.

#### Gradle
Use the appropriate package manager for your OS. These instructions were
tested with gradle 5.2.

## 2. Generate the Vue application
Replace `{component-name}` with the desired name for the component.

``` bash
vue create {component-name} --default
```

Install dependencies for legacy browser support in the newly generated app.
``` bash
cd {component-name}

npm install --save-dev @babel/{cli,plugin-transform-runtime,preset-env}
```

## 3. Add gradle support for WebJars

### Create gradle.properties file

In the root directory, create a **gradle.properties** file, with the
following content:
```
group=org.webjars.npm
```

### Create build.gradle

Copy **build.gradle** file from @uportal directory of **uPortal-web-components**
project (or use one from [the appendix](#buildgradle-files)).

https://github.com/uPortal-contrib/uPortal-web-components/blob/master/%40uportal/build.gradle

If using the one from uPortal-web-components, remove the `subprojects` line and
its enclosing brackets; for example:

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

It should look something like this:

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

**Note:** to produce the most compact .jar possible to reduce traffic on the
resource server and speed up browser response, or if you are building on
Windows, try this [build.gradle for Linux and Mac OS](#buildgradle-for-linux-and-mac-os)
or this [build.gradle for Windows](#buildgradle-for-windows).

### Add Gradle wrapper to project

Run this:

```bash
gradle wrapper --gradle-version=5.1.1
```

Note: now that the project has a build.gradle file and a Gradle wrapper, an
IDE like IntelliJ IDEA will recognize it as a Gradle project. You could do
the rest of the required editing in the IDE.

## 4. Edit the Vue application

### Rename HelloWorld.vue

Rename the generated HelloWorld.vue file, replace **{component-name}** with yours:

```
FROM:
src/components/HelloWorld.vue

TO:
src/components/{component-name}.vue
```

### Edit App.vue

Rename the imports.generated HelloWorld.vue file, replace **{component-name}** with yours:

``` javascript
// FROM:
import HelloWorld from './components/HelloWorld.vue'

// TO:
import HelloWorld from './components/{component-name}.vue'
```

### Edit package.json

The `{component-name}` after `--name` _**must**_ have a
hyphen, for example `--name weather-thingy`. Change the following:

```
// FROM:
    "build": "vue-cli-service build",

// TO (be sure to rename {component-name}):
    "prebuild": "babel node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js -o node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js",
    "build": "vue-cli-service build --name {component-name} --target wc src/components/{component-name}.vue",

```

Add these top-level declarations:

```
  "main": "dist/{component-name}.js",
  "source": "src/components/{component-name}.vue",
```

For example:

```
{
  "name": "weather-thingy",
  "version": "0.1.0",
  "private": true,
  "main": "dist/weather-thingy.js",
  "source": "src/components/weather-thingy.vue",
  "scripts": {
    "serve": "vue-cli-service serve",
    "prebuild": "babel node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js -o node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js",
    "build": "vue-cli-service build --name speedy-vue --target wc src/components/speedyvue.vue",
    "lint": "vue-cli-service lint"
  },
  ...
}

```

### Edit babel.config.js

Replace the contents of **babel.config.js** with this:

```js
module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]]
};
```

## 5. Assemble and deploy the Vue application

To pack the component, run:

```
npm run build
```

To assemble the webjar and put in local maven repo, run:

```
./gradlew install
```


## 6. Add the component into uPortal

The following is done in the **uPortal-start** project.

### Create a portlet-definition.xml

In the uPortal-start project make a copy of an existing portlet definition
that has a web component.

```
COPY:
data/quickstart/portlet-definition/admin-dashboard.portlet-definition.xml

TO:
data/quickstart/portlet-definition/{component-name}.portlet-definition.xml
```

### Edit portlet definition

In the newly-created portlet-definition.xml, modify the following fields:

``` xml
    <title>Component Title</title>
    <name>Component Name</name>
    <fname>component-name</fname>
    <desc>An excellent component that does something</desc>
```

### Replace CDATA in portlet definition

Replace the CDATA section of the portlet definition with this, replacing
`{component-name}` with your component name:

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

To find the name of the component min.js file that you will name in the
script, examine the contents of the webjar that was created. For example:

```
ls -al ~/.m2/repository/org/webjars/npm/uportal__weather-thingy/0.1.0-SNAPSHOT/*.jar
```

This shows the .jar file named:

```
uportal__weather-thingy-0.1.0-SNAPSHOT.jar
```

Now inspect the contents of the .jar file, for example:

```
jar tvf uportal__weather-thingy-0.1.0-SNAPSHOT.jar | grep min.js
```

This shows:

```
META-INF/resources/webjars/uportal__speedy-vue/0.1.0-SNAPSHOT/dist/weather-thingy.min.js
```

So the name of the min.js file is **weather-thingy.min.js**, which is what
you put in the CDATA <script> tag.

### Other options for portlet definition

To add Chrome (the standard border around portlets):

``` xml
    <parameter>
        <name>chromeStyle</name>
        <value>default</value>
    </parameter>
```

To remove Chrome:

``` xml
    <parameter>
        <name>chromeStyle</name>
        <value>no-chrome</value>
    </parameter>
```

### Add webjar to resource server

In the `overlays/resource-server/build.gradle` file in the uPortal-start
project, add the following runtime dependency:

```
    runtime "org.webjars.npm:uportal__{component-name}:{version}@jar"
```

For example:

```
    runtime "org.webjars.npm:uportal__weather-thingy:0.1.0-SNAPSHOT@jar"
```

# Appendix
## Node.js installation
### Mac OS X
1. [MacPorts](https://www.macports.org/)
2. [HomeBrew](https://brew.sh/)
3. macOS installer (.pkg) from [Node.js website](https://nodejs.org/)

#### With MacPorts
```bash
sudo port list | grep node
sudo port install nodejs10
```
#### With Homebrew
```bash
brew search node
brew install node
```

## build.gradle files

To produce really compact .jar files that the uPortal resource server will
deliver to the user's browser, try these. All the extraneous files except
for the *.min.js file are excluded from the .jar file that gets built.

#### build.gradle for Linux and Mac OS

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

#### build.gradle for Windows

Windows has a quirk that the copyFiles and cleanUp tasks in this build.gradle
file works around. This will also work on Mac OS and Linux.

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
