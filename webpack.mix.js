let mix = require("laravel-mix");

mix.js("js/app.js", "public/js")
    .vue()
    .postCss("css/app.css", "public/css", [
        require("tailwindcss"),
    ]);
