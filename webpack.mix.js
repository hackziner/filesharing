const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/themes/' + process.env.MIX_THEME + '/assets/js/app.js', 'public/js')
    .sass('resources/themes/' + process.env.MIX_THEME + '/assets/sass/app.scss', 'public/css')
    .extract(['jquery', 'dropzone', 'clipboard'])

if (mix.inProduction()) {
    mix.version();
}
else {
    mix.sourceMaps();
    mix.browserSync('filesharing.local');
}
