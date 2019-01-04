# Using `-SNAPSHOT` Builds in uPortal-start

uPortal-web-components provides support for installing `-SNAPSHOT` WebJar builds (components) in
Maven Local for use with uPortal-start. This feature allows Web Component developers to deploy,
view, and test their work within the portal before committing it.

## About uPortal-start

[uPortal-start][] is the mechanism through which individuals and institutions adopt Apereo uPortal,
the leading open source enterprise portal framework built by and for higher education institutions,
K-12 schools, and research communities. uPortal-start is new for uPortal 5.0.

## Building `-SNAPSHOT` WebJars

uPortal-web-components is a [Node.js][]-based project, but it uses [Gradle][] to prepare `-SNAPSHOT`
WebJars and install them in the Maven Local repository.

> **NOTE:** Individual components within uPortal-web-components must be completely assembled (by
> `npm`) before invoking Gradle to package them as a `-SNAPSHOT` WebJar.

Use the following commands to build all components in uPortal-web-components and package/install
them as `-SNAPSHOT` WebJars in Maven Local.

```bash
$ npm run build
$ ./gradlew install
```

## Adding WebJars to uPortal-start

In uPortal-start, the `resource-server` overlay provides support for _bundling_ (deploying) WebJar-
based content. Add your WebJar as a dependency to the `overlays/resource-server/build.gradle` file.

### WebJar Dependency Examples

By convention, a `<webjar.name>Version` property is defined for each WebJar in the
`gradle.properties` file at the root of uPortal-start.

```gradle
dependencies {
    runtime "org.jasig.resourceserver:resource-server-webapp:${resourceServer13Version}@war"

    // Webjars included with resource-server
    runtime "org.webjars.npm:uportal__content-carousel:${contentCarouselVersion}@jar"
    runtime "org.webjars.npm:uportal__waffle-menu:${waffleMenuVersion}@jar"
    runtime "org.webjars.npm:vue:${vueVersion}@jar"
}
```

[uportal-start]: https://github.com/Jasig/uPortal-start
[node.js]: https://nodejs.org/
[gradle]: https://gradle.org/
