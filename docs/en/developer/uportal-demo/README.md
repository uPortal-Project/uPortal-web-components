# Dashboard Carousel uPortal Demo

The Dashboard Carousel Demo leverages the existing uPortal-start dataset.

To wire the demo into your uPortal-start install:

1. Copy `dash-car-demo-lo.fragment-definition.xml` to `uportal-start/data/quickstart/fragment-definition/`
2. Copy `dash-car-demo-lo.fragment-layout.xml` to `uportal-start/data/quickstart/fragment-layout/`
3. Copy `dash-car-demo-lo.xml` to `uportal-start/data/quickstart/user`

In your uPortal-start directory, run `./gradlew dataInit` , `.gradlew tomcatStop`, then `.gradlew tomcatStart`

Log into the UX as a demo user (such as `admin`).

From the `customize` drawer, add `Dashboard Carousel`.
