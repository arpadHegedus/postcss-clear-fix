/**
 * POSTCSS CLEAR FIX
 * A PostCSS plugin to add clearfix in one line
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let postcss         =   require('postcss'),
    util            =   require('postcss-plugin-utilities');

// export plugin
module.exports = postcss.plugin('postcss-clear-fix', options => {
    return css => {
        css.walkDecls('clear', decl => {
            if(decl.value === 'fix') {
                let parent = decl.parent;
                    selector = util.eachSelector(parent.selector, '&:after');
                parent.before(postcss.parse(` ${selector} { content: " "; display: table; clear: both }`));
                decl.remove();
                if(parent.nodes.length === 0) {
                    parent.remove();
                }
            }
        });
    }
});