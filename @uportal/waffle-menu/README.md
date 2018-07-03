# Waffle Menu

#### Hope you like waffles!

![waffle-menu](/Users/illiphilli/Projects/oss/uPortal-web-components/@uportal/waffle-menu/waffle-menu.png)

## Development

```bash
# clone the repository if you haven't alreadygit clone https://github.com/uPortal-contrib/uPortal-web-components

# navigate to the waffle menu folder
cd uPortal-web-components/@uportal/waffle-menu

# install the goods
npm install

# start the app
npm start
```

## Build

Pretty simple:

`npm run build`

This will compile your javascript in to  `build/static/js/main.{buildnumbers}.js`

## Usage

After building, grab the compiled javascript files and place it on your page. You can now place `<waffle-menu>` anywhere on your page.

Since `<waffle-menu>` is a web component, it's usage is demonstrated in the `uPortal-web-components/@uportal/waffle-menu/public/index.html` file.

In `index.html`, you'll see that `<waffle-menu />` is hard coded in place. There's supporting javascript on the page to assist in testing the component. A `json` variable is assigned in the header containing an array of objects as data for each of the links. Below the component, javascript is used to assign attributes to the component itself.

Here's the guts of that html file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Waffle Menu</title>
  <style>
    /* basic styles for showing waffle menu in the header of a site */

    header {
      background: #2A5C1C;
    }

    nav {
      display: flex;
      flex-wrap: wrap;
      padding: .5rem 1rem;
    }

    .buttons {
      margin-left: 90%;
    }
  </style>
  <script>
    // JSON to be used to pass to <waffle-menu> through the data attribute
    let json = [
      {
        link: 'https://blackboard.cpp.edu/?index=1',
        image: 'https://www.cpp.edu/img/icons/sq-BlackBoard.png',
        label: 'Blackboard',
        type: "box"
      },
      {
        link: 'https://outlook.office365.com/cpp.edu?index=1',
        image: 'https://www.cpp.edu/img/icons/sq-Email.png',
        label: 'Email',
        type: "box"
      },
      {
        link: 'https://idp.cpp.edu/idp/profile/cas/login?service=https://cmsweb.cpp.edu/psp/HPOMPRDF/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSS_MY_PLANNER.GBL?gsmobile=0&amp;Page=SSS_MY_PLANNER&amp;Action=A',
        image: 'https://www.cpp.edu/img/icons/sq-MyPlanner.png',
        label: 'My Planner',
        type: "box"
      },
      {
        link: 'https://idp.cpp.edu/idp/profile/cas/login?service=https://cmsweb.cpp.edu/psp/HPOMPRDF/EMPLOYEE/HRMS/s/WEBLIB_PTPP_SC.HOMEPAGE.FieldFormula.IScript_AppHP?pt_fname=POM_BD_SS&amp;FolderPath=PORTAL_ROOT_OBJECT.POM_BD_SS&amp;IsFolder=true?cmd=start&amp;languageCd=ENG&amp;userid=PS&amp;pwd=z&amp;calstateEduPersonEmplID',
        image: 'https://www.cpp.edu/img/icons/sq-BroncoDirect.png',
        label: 'BroncoDirect',
        type: "box"
      },
      {
        link: 'https://cmsweb.cpp.edu/psp/HPOMPRD/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL?pslnkid=POM_BD_STDNT_SC&amp;PORTALPARAM_PTCNAV=POM_BD_STDNT_SC&amp;EOPP.SCNode=HRMS&amp;EOPP.SCPortal=EMPLOYEE&amp;EOPP.SCName=POM_BD_SS&amp;EOPP.SCLabel=Student%20Self%20Services&amp;EOPP.SCFName=POM_BD_STDNT&amp;EOPP.SCSecondary=true&amp;EOPP.SCPTfname=POM_BD_STDNT&amp;FolderPath=PORTAL_ROOT_OBJECT.POM_BD_SS.POM_BD_STDNT.POM_BD_STDNT_SC&amp;IsFolder=false',
        image: 'https://www.cpp.edu/img/icons/sq-Lynda.png',
        label: 'Lynda.com',
        type: "box"
      },
      {
        link: 'https://blackboard.cpp.edu/?index=1',
        image: 'https://www.cpp.edu/img/icons/sq-StudentCenter.png',
        label: 'Student Center',
        type: "box"
      },
      {
        link: 'http://www.cpp.edu/~test-group/portal/online-services.shtml?index=1',
        label: 'View all online services',
        type: "footer"
      },
      {
        link: 'https://google.com',
        label: 'Google Search',
        type: "footer"
      },
    ];

    // since we're passing data through an HTML attribute, 
    // gotta make the object a string.
    let jsonString = JSON.stringify(json);
  </script>
</head>

<body>
  <header>
    <nav>
      <div class="buttons">
        <waffle-menu buttoncolor="#ffffff" />
      </div>
    </nav>
  </header>
  <script>
    // uncomment for loading JSON through the 'data' attribute
    document.querySelector('waffle-menu').setAttribute('data', jsonString);
    // Uncomment to load data within the web component by passing an endpoint through the API
    // document.querySelector('waffle-menu').setAttribute('api', '/api/menu.json');
  </script>
</body>

</html>
```

## Attributes

`<waffle-menu>` takes the following attributes:



`buttoncolor` : applies a color to the waffle menu button. Useful if you want to avoid specifying the color in CSS. If not set, `buttoncolor` defualts to `#ffffff`.

Example:

`<waffle-menu buttoncolor="#ffffff">`



`data` : pass stringified JSON through the `data` attribute defining the menu's data. This can be useful if the data is already on the page or if the JSON need to be mutated before being passed off to `<waffle-menu>`.

Example:

```html
<body>
	<waffle-menu>
	<script>
		let json = [
            {link object},
            {link object},
            ...
		];
		let jsonString = JSON.stringify(json);
		document.querySelector('waffle-menu').setAttribute('data', jsonString);
	</script>
</body>
```



`api` : pass an endpoint for `<waffle-menu>` to call. If you have control over the structure of the JSON being delivered from the backend, this is a much easier to implement.

Example:

`<waffle-menu api="http://some-url.edu/api/waffle-links">`



## JSON structure

The JSON structure for the data is pretty simple. It's an array of objects, and each object containing 3 or 4 properties.

### JSON object properties

| Property Name | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| type          | Either `box` or `footer`. Tells `<waffle-menu>` where in the menu to display the link. |
| link          | The url of the link item in the menu.                        |
| label         | The label to display for the link.                           |
| image         | The url of an image to use for `box` links.                  |

### Example JSON

This is the contents of `uPortal-web-components/@uportal/waffle-menu/public/api/links.json`

```json
[
  {
    "link": "https://blackboard.cpp.edu/?index=1",
    "image": "https://www.cpp.edu/img/icons/sq-BlackBoard.png",
    "label": "Blackboard",
    "type": "box"
  },
  {
    "link": "https://outlook.office365.com/cpp.edu?index=1",
    "image": "https://www.cpp.edu/img/icons/sq-Email.png",
    "label": "Email",
    "type": "box"
  },
  {
    "link":
      "https://idp.cpp.edu/idp/profile/cas/login?service=https://cmsweb.cpp.edu/psp/HPOMPRDF/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSS_MY_PLANNER.GBL?gsmobile=0&amp;Page=SSS_MY_PLANNER&amp;Action=A",
    "image": "https://www.cpp.edu/img/icons/sq-MyPlanner.png",
    "label": "My Planner",
    "type": "box"
  },
  {
    "link":
      "https://idp.cpp.edu/idp/profile/cas/login?service=https://cmsweb.cpp.edu/psp/HPOMPRDF/EMPLOYEE/HRMS/s/WEBLIB_PTPP_SC.HOMEPAGE.FieldFormula.IScript_AppHP?pt_fname=POM_BD_SS&amp;FolderPath=PORTAL_ROOT_OBJECT.POM_BD_SS&amp;IsFolder=true?cmd=start&amp;languageCd=ENG&amp;userid=PS&amp;pwd=z&amp;calstateEduPersonEmplID",
    "image": "https://www.cpp.edu/img/icons/sq-BroncoDirect.png",
    "label": "BroncoDirect",
    "type": "box"
  },
  {
    "link":
      "https://cmsweb.cpp.edu/psp/HPOMPRD/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSS_STUDENT_CENTER.GBL?pslnkid=POM_BD_STDNT_SC&amp;PORTALPARAM_PTCNAV=POM_BD_STDNT_SC&amp;EOPP.SCNode=HRMS&amp;EOPP.SCPortal=EMPLOYEE&amp;EOPP.SCName=POM_BD_SS&amp;EOPP.SCLabel=Student%20Self%20Services&amp;EOPP.SCFName=POM_BD_STDNT&amp;EOPP.SCSecondary=true&amp;EOPP.SCPTfname=POM_BD_STDNT&amp;FolderPath=PORTAL_ROOT_OBJECT.POM_BD_SS.POM_BD_STDNT.POM_BD_STDNT_SC&amp;IsFolder=false",
    "image": "https://www.cpp.edu/img/icons/sq-Lynda.png",
    "label": "Lynda.com",
    "type": "box"
  },
  {
    "link": "https://blackboard.cpp.edu/?index=1",
    "image": "https://www.cpp.edu/img/icons/sq-StudentCenter.png",
    "label": "Student Center",
    "type": "box"
  },
  {
    "link":
      "http://www.cpp.edu/~test-group/portal/online-services.shtml?index=1",
    "label": "View all online services",
    "type": "footer"
  },
  {
    "link": "https://google.com",
    "label": "Google Search",
    "type": "footer"
  }
]
```

