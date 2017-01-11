import catComponent from './cats';

const component = () => {
  const component = document.createElement('div');

  const h1 = document.createElement('h1');
  h1.textContent = 'No 🐛\'s + 🔥-reloading!';
  component.appendChild(h1);

  component.appendChild(catComponent());

  return component;
};

export default component;
