## Jianshu
This project is about to design JianShu, the most famous website in China that allows users to read and post article, In! My! Way!


## Tech Stack

react + redux + redux-thunk  + webpack + react-router + ES6/7/8 + axios + react-transition-group + react-loadable + styled-components + immutable.js

## Structure

				
		├── README.md
		├── img
		├── package.json
		├── public
		│   ├── api
		│   │   ├── detail.json
		│   │   ├── headerList.json
		│   │   ├── home.json
		│   │   ├── homeList.json
		│   │   └── login.json
		│   ├── favicon.ico
		│   ├── index.html
		│   ├── logo192.png
		│   ├── logo512.png
		│   ├── manifest.json
		│   └── robots.txt
		├── src
		│   ├── App.js
		│   ├── common
		│   │   └── header
		│   │       ├── index.js
		│   │       ├── store
		│   │       │   ├── actionCreators.js
		│   │       │   ├── actionTypes.js
		│   │       │   └── reducer.js
		│   │       └── style.js
		│   ├── index.js
		│   ├── logo.svg
		│   ├── pages
		│   │   ├── detail
		│   │   │   ├── index.js
		│   │   │   ├── store
		│   │   │   │   ├── actionCreators.js
		│   │   │   │   ├── actionTypes.js
		│   │   │   │   └── reducer.js
		│   │   │   └── style.js
		│   │   ├── home
		│   │   │   ├── components
		│   │   │   │   ├── List.js
		│   │   │   │   ├── Recommend.js
		│   │   │   │   ├── Topic.js
		│   │   │   │   └── Writer.js
		│   │   │   ├── index.js
		│   │   │   ├── store
		│   │   │   │   ├── actionCreators.js
		│   │   │   │   ├── actionTypes.js
		│   │   │   │   └── reducer.js
		│   │   │   └── style.js
		│   │   └── login
		│   │       ├── index.js
		│   │       ├── store
		│   │       │   ├── actionCreators.js
		│   │       │   ├── actionTypes.js
		│   │       │   └── reducer.js
		│   │       └── style.js
		│   ├── statics
		│   │   └── logo.png
		│   ├── store
		│   │   ├── index.js
		│   │   └── reducer.js
		│   └── style.js
		└── yarn.lock



## Pages(Using React router)

Home Page:

![HomePage](https://github.com/Alanshi2019/Jianshu-react/blob/master/img/imgUI.jpeg)


Detail page: 

![Detail](https://github.com/Alanshi2019/Jianshu-react/blob/master/img/imgDetail.jpeg)


Login page:

![Login page](https://github.com/Alanshi2019/Jianshu-react/blob/master/img/imgLogin.png)


React Router:

![React Router](https://github.com/Alanshi2019/Jianshu-react/blob/master/img/imgRouter.png)


## Redux & Redux-thunx

Store with Redux-thunx as middlewares:

![Redux](https://github.com/Alanshi2019/Jianshu-react/blob/master/img/imgReduxStore.png)


Reducer.js:

![Reucer](https://github.com/Alanshi2019/Jianshu-react/blob/master/img/imgReducer.png)



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
