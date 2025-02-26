const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

const renderAlbums = async () => {
  const dataContainer = document.querySelector('#data-container');

  const loader = document.createElement('span');
  loader.textContent = 'Загрузка...';
  dataContainer.append(loader);

  try {
    const response = await fetch(ALBUMS_URL);
    if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);

    const albums = await response.json();
    const list = document.createElement('ol');

    albums.forEach((album) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');

      link.href = '#';
      link.textContent = album.title;

      listItem.append(link);
      list.append(listItem);
    });

    dataContainer.append(list);
  } catch (error) {
    console.error('Ошибка загрузки:', error);
    dataContainer.append('Произошла ошибка в получении данных об альбомах...');
  } finally {
    loader.remove();
  }
};

renderAlbums();
