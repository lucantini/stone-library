import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import opener from 'opener';
import config from './webpack.config.dev';

const host = config.devServer.host;
const port = config.devServer.port;


new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot:true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
})
.listen(port, host, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Listening at ${host}:${port}`);
    opener(`http://${host}:${port}`);
});