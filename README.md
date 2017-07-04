A [PostCSS] plugin to add clearfix in one line.

[PostCSS]: https://github.com/postcss/postcss
[Gulp]: https://github.com/gulpjs/gulp

## Installation

```js
npm install postcss-clear-fix
```

## Example

```css
div.container {
    clear: fix
}
```

will produce

```css
div.container:after { 
    content: " "; 
    display: table; 
    clear: both
}
```

## Usage

Using [Gulp].

```js
var gulp            = require('gulp'),
    postcss         = require('gulp-postcss'),
    clearfix        = require('postcss-clear-fix');

gulp.task('css', function() {
    gulp.src('path/to/dev/css').
        .pipe(postcss({
            // use it after nesting plugins
            clearfix
        }))
        .pipe(gulp.dest('path/to/build/css'));
});

// rest of the gulp file
```
