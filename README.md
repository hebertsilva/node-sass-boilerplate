# node-sass-boilerplate

[![Build Status](https://travis-ci.org/hebertsilva/node-sass-boilerplate.svg)](https://travis-ci.org/hebertsilva/node-sass-boilerplate)

### Installing

```shell
# Before install you need to clone the repo.
git clone git@github.com:hebertsilva/node-sass-boilerplate.git

# Enter in folder
cd node-sass-boilerplate

# Install packages
npm install
```
or install package with yarn
If you do not have yarn installed go here **[yarn](https://yarnpkg.com/docs/install)**
```shell
yarn install
```

### Watching change

**Watching css**
```shell
npm run watch:css
```

**Watching sprite**
```shell
npm run watch:sprite
```

**Watching js**
```shell
npm run watch:js
```

**Watching all**
```shell
# watch:all watching css, sprite and js
npm run watch:all
```

### Building in production

**build css**
```shell
npm run build:css
```

**build sprite**
```shell
npm run build:sprite
```

**build js**
```shell
npm run build:js
```

**build all**
```shell
# build:all building css, sprite and js
npm run build:all
```
or watch and build with **yarn**
```shell
yarn watch:** #'css', 'sprite', 'js', 'all'

# or

yarn build:** #'css', 'sprite', 'js', 'all'
```

**identifying and reporting in ECMAScript/JavaScript code**
```shell
npm run lint
```

***Note***
To monitor files in save as replace in the **watch:css** in **package.json** by that line below using *onchage*
`"watch:css": "onchange \"sass/\" -- npm run sass",`
