## To install dependencies of the project

`npm install`

## To run in dev :

`npm run serve`

## To deploy :

`npm run build`
deploy on webapps/uPortal/scripts/

and Import portlets definition into uPortal :

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<portlet-definition version="5.0" xsi:schemaLocation="https://source.jasig.org/schemas/uportal/io/portlet-definition https://source.jasig.org/schemas/uportal/io/portlet-definition/portlet-definition-5.0.xsd" xmlns="https://source.jasig.org/schemas/uportal/io/portlet-definition" xmlns:ns6="https://source.jasig.org/schemas/uportal/io/user" xmlns:ns5="https://source.jasig.org/schemas/uportal/io/stylesheet-descriptor" xmlns:ns8="https://source.jasig.org/schemas/uportal/io/permission-owner" xmlns:ns7="https://source.jasig.org/schemas/uportal/io/event-aggregation" xmlns:ns2="https://source.jasig.org/schemas/uportal" xmlns:ns4="https://source.jasig.org/schemas/uportal/io/portlet-type" xmlns:ns3="https://source.jasig.org/schemas/uportal/io/subscribed-fragment" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <title>new menu</title>
    <name>new menu</name>
    <fname>new_menu</fname>
    <desc>Test de menu</desc>
    <type>Advanced CMS</type>
    <timeout>5000</timeout>
    <portlet-descriptor>
        <ns2:webAppName>/SimpleContentPortlet</ns2:webAppName>
        <ns2:portletName>cms</ns2:portletName>
    </portlet-descriptor>
    <lifecycle>
        <entry name="PUBLISHED" user="system">2018-05-29T18:30:37+02:00</entry>
    </lifecycle>
    <group>Authenticated Users</group>
    <parameter>
        <name>alternate</name>
        <value>false</value>
    </parameter>
    <parameter>
        <name>blockImpersonation</name>
        <value>false</value>
    </parameter>
    <parameter>
        <name>disableDynamicTitle</name>
        <value>true</value>
    </parameter>
    <parameter>
        <name>editable</name>
        <value>false</value>
    </parameter>
    <parameter>
        <name>hasAbout</name>
        <value>false</value>
    </parameter>
    <parameter>
        <name>hasHelp</name>
        <value>false</value>
    </parameter>
    <parameter>
        <name>hideFromMobile</name>
        <value>false</value>
    </parameter>
    <parameter>
        <name>highlight</name>
        <value>false</value>
    </parameter>
    <parameter>
        <name>iconUrl</name>
        <value>/ResourceServingWebapp/rs/tango/0.8.90/32x32/status/dialog-warning.png</value>
    </parameter>
    <parameter>
        <name>mobileIconUrl</name>
        <value>/uPortal/media/skins/icons/mobile/bullhorn.png</value>
    </parameter>
    <parameter>
        <name>showChrome</name>
        <value>true</value>
    </parameter>
   <portlet-preference>
<name>content</name>
<readOnly>false</readOnly>
<value>
<![CDATA[
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js"></script>
<content-grid></content-grid>
<script type="text/javascript" language="javascript">
	var versionUpdate = (new Date()).getTime();
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "/uPortal/scripts/content-grid.js?v=" + versionUpdate;
	document.body.appendChild(script);
</script>
]]>
</value>
</portlet-preference>
</portlet-definition>
```
