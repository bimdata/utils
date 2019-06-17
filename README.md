# BIMData Utils
BIMData Utils is the library of BIMData, to quickly apply a design.
See how this lib could be used, in the [BIMData Styleguide](https://styleguide.bimdata.io/)


### Requirements
  - [node](https://nodejs.org/en/) — build with version 10.15.3
  - [npm](https://www.npmjs.com/) — build with version 6.8.0


### Use this lib in your project
__Install the lib:__

In the directory of your project:
```
npm i @bimdata/utils
```


__Import CSS file:__
the css file is here:
```
./dist/css/main.css
```


__Import SCSS file:__
the scss file is here:
```
./src/scss/main.scss
```


### Internal development getting started
__Before start:__

Clone the Utils repository in your project directory.


__Install dependencies:__

The dependencies are listed in the `package.json` file.
```
npm install
```
Do this to make sure you are up-to-date on project dependencies


__Launch auto local site:__

And live-watch CSS modification while editing in the lib.
```
npm run dev
```
If you make scss changes inside the `styleguide` folder, don't forget to `npm run build` within this directory.


__Build for prod:__

CSS and JS minify
```
npm run build
```

__Optimize SVG:__

To optimize your svg and use it online, use this command.
```
npm run optimize-svg
```
It will compile your svg into the `compiled` folder of the `dist` folder


__Use styles without using npm :__
You can also use the lib style without install it. For that, use [UNPKG](https://unpkg.com/)


### License
GPL-3.0
