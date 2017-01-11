const cats = ['dave', 'samantha', 'henry', 'martha', 'john'];

const catComponent = () => {
  const component = document.createElement('div');

  const h1 = document.createElement('h1');
  h1.textContent = '🐱\'s:';
  component.appendChild(h1);

  const ul = document.createElement('ul');
  for (const cat of cats) {
    const li = document.createElement('li');
    li.textContent = cat;
    ul.appendChild(li);
  }
  component.appendChild(ul);

  return component;
};

export default catComponent;
