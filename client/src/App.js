function createSkeleton() {
  const skeleton = document.createElement('div');
  skeleton.className = 'skeleton';
  skeleton.innerHTML = `
    <div class="skeleton-avatar"></div>
    <div class="skeleton-lines">
      <div class="skeleton-line"></div>
      <div class="skeleton-line short"></div>
    </div>
  `;
  return skeleton;
}

function createError() {
  const error = document.createElement('div');
  error.className = 'error';
  error.textContent = 'Не удалось загрузить данные. Проверьте подключение к интернету.';
  return error;
}

function createContent(data) {
  const content = document.createElement('div');
  content.className = 'content';
  content.innerHTML = `
    <img src="${data.avatar}" alt="avatar" class="avatar"/>
    <div>
      <h2>${data.name}</h2>
      <p>${data.info}</p>
    </div>
  `;
  return content;
}

export default function App() {
  const container = document.createElement('div');
  container.className = 'app';
  const skeleton = createSkeleton();
  container.appendChild(skeleton);

  fetch('http://localhost:3001/data')
    .then(async (response) => {
      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      container.innerHTML = '';
      container.appendChild(createContent(data));
    })
    .catch(() => {
      container.innerHTML = '';
      container.appendChild(createError());
    });

  return container;
}