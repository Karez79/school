console.log('Hello World!');
import MY_IMAGE from './assets/image.jpg';
import './index.css';
{
  /* <h1>. В данном элементе должна быть надпись: “I love JavaScript”
<img>. Данный элемент должен отображать картинку из папки assets */
}

const createH1Element = document.createElement('h1');
createH1Element.className = 'main';
createH1Element.textContent = 'I love JavaScript';

const createImgElement = document.createElement('img');
createImgElement.className = 'main_photo';
createImgElement.src = MY_IMAGE;

createH1Element.append(createImgElement);
document.body.append(createH1Element);
