import HtmlWebpackPlugin from "html-webpack-plugin";
import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'docs'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),

}

export default (env: BuildEnv) => {
    const mode = env.mode || 'development';

    const isDev = mode == 'development';

    const PORT  = env.port || 3000;


    const config: webpack.Configuration =
        buildWebpackConfig({
            mode,
            port: PORT,
            paths,
            isDev,
        });

    return config;
}