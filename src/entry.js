// JS
import _ from 'lodash';

// CSS
import './css/main.css';

// SCSS
import './sass/main.scss';

// Images
import myImg from './images/test.png';
// Init
function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());
console.log(myImg);
console.log("Hello!");