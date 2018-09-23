# Creating a React web component

> A JavaScript library for building user interfaces

<https://reactjs.org>

## Advantages

- React has a large developer community

## Trade offs

- React does not officially support web components, and does not intend to
- React DOM adds ~100kb to each component

## Prerequisites

- [Git][]
- [Node.js][] 10.3+ (using [NVM][] is recommended)

## Setup

```sh
# clone the repository if you haven't already
git clone https://github.com/uPortal-contrib/uPortal-web-components

# navigate to the packages folder
cd uPortal-web-components/@uportal

# generate a new application template
# replace {component-name} with the desired name for the component
npm create react-app {component-name}

# navigate into newly created component folder
cd {component-name}

npm install reactive-elements styled-components
```

edit _src/index.js_

```diff
- import registerServiceWorker from './registerServiceWorker';
+ import 'reactive-elements';

- ReactDOM.render(<App />, document.getElementById('root'));
- registerServiceWorker();
+ document.registerReact('{component-name}', App);
```

add styles using [styled components][]

Start a local web server using `npm start` and follow the [react][] guide to create a component.

[git]: https://git-scm.com/download
[node.js]: https://nodejs.org/en/download/
[nvm]: https://github.com/creationix/nvm#readme
[react]: https://reactjs.org/
[styled components]: https://www.styled-components.com/
