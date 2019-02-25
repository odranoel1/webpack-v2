import _ from 'lodash';
import printMe from './print.js';
import './style.scss';
import WebpackImg from './webpack.png';
// import WebpackOldImg from './old-webpack.jpg'; <-- Test Clean Dist

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = WebpackImg;

  element.appendChild(myIcon);

  var btn = document.createElement('button');
  btn.innerHTML = 'See more';

  btn.addEventListener('click',printMe);
  // btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
 module.hot.accept('./print.js', function() {
   console.log('Accepting the updated printMe module!');
   printMe();
 })
}
