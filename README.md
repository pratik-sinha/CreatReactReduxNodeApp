# CreateReactReduxNodeApp
This project is boilerplate for react-redux node app. It can be used in two ways :

1. Using nodemon and webpack-dev-middleware for bundling and webpack-hot-middleware for hot module changes
Open a terminal and type 'npm run start-hook'. Open a browser and goto localhost:3000

2. If you want to use webpack dev server for hmr then comment the following code from /server/server.js
     const hotMiddleware = webPackHotMiddleWare(compiler);
      const middleware = webpackDevMiddleware(compiler, {
            publicPath: "/public/build",
             contentBase: 'server',
             stats: {
             colors: true,
             hash: false,
             timings: true,
             chunks: false,
             chunkModules: false,
             modules: false
             }
        });
app.use(middleware);
app.use(hotMiddleware);

Now open two terminals.
1. type 'npm run start-hook' in the first one
2. type 'npm run watch' in the second one

 Now open localhost:8000

 NOTE: In the first method on every server code change the client code gets bundled again so if you are working on server           side code use the second method. 