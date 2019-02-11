## Add a WebJar component into uPortal

The following is done in the **uPortal-start** project.

Replace `{component-name}` with the name for the component.

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

```bash
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

```gradle
    runtime "org.webjars.npm:uportal__weather-thingy:0.1.0-SNAPSHOT@jar"
```
