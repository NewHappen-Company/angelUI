const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
        require('postcss-preset-env')({
            browsers: ['last 2 versions', '> 5%'],
        }),
        require('cssnano'),
    ],
};
