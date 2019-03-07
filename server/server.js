import express from 'express';
import bodyParser from 'body-parser';
import config from '../webpack.config';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webPackHotMiddleWare from 'webpack-hot-middleware';
import SourceMapSupport from 'source-map-support';

const compiler = webpack(config);

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
// Initialize express and tell it to serve static files from public
const app = express();
app.use('/',express.static('public'));

//WebPack Hot Middleware code starts here
//Note: This is not web pack dev server
app.use(middleware);
app.use(hotMiddleware);
//WebPack Hot Middleware code ends here


app.use(bodyParser.json());
SourceMapSupport.install();


app.listen(3000,() => {
    console.log('app started on port 3000');
})
