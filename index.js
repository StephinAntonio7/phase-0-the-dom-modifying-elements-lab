const mainElement = document.querySelector('main#main');
   mainElement.remove();

const newHeader = document.createElement('h1');
   newHeader.textContent = 'This is the new header';
   newHeader.textContent = 'Stephin Roberts is the champion'; 
   newHeader.id = 'victory';
   document.body.appendChild(newHeader);