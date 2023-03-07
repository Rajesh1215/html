const bcElement = document.querySelector('.bc');

for (let i = 0; i < 5; i++) {
  const childElement = document.createElement('div');
  childElement.textContent="hi rajesh";
  childElement.classList.add('child');
  bcElement.append(childElement);
}
bcElement.removeChild('div');

console.log(bcElement.childNodes.textContent);