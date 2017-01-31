# node-sass-boilerplate

### Installing

```shell
    # Before install you need to clone the repo.
    git clone git@github.com:hebertsilva/node-sass-boilerplate.git
    
    # Enter in folder
    cd node-sass-boilerplate
    
    # Install packages
    npm install
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

***Note***
To monitor files in save as replace in the **watch:css** in **package.json** by that line below using *onchage*
`"watch:css": "onchange \"sass/\" -- npm run sass",`
