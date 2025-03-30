const PHOTOS_URL = 'https://api.slingacademy.com/v1/sample-data/photos';
const photosIds = [60, 12, 55];

const getFastestLoadedPhoto = (ids) => {
  const requests = ids.map((id) =>
    fetch(`${PHOTOS_URL}/${id}`)
      .then((res) => res.json())
      .then((photo) => {
        console.log(`Ответ от сервера для ID ${id}:`, photo);
        if (!photo.photo.url || !photo.photo.title) {
          throw new Error('Фото не найдено');
        }
        return photo;
      })
  );

  toggleLoader();

  Promise.race(requests)
    .then((photo) => {
      console.log('Самая быстрая загруженная фотография:', photo);
      const photoElement = createPhotoElement(photo.photo.url, photo.photo.title);
      document.querySelector('#data-container').append(photoElement);
    })
    .catch((error) => {
      console.error('Ошибка:', error);
    })
    .finally(() => {
      toggleLoader();
    });
};

const createPhotoElement = (url, title) => {
  const photoElement = document.createElement('li');
  photoElement.classList.add('photo-item');

  const img = document.createElement('img');
  img.classList.add('photo-item__image');
  img.src = url;
  img.alt = title;

  const h3 = document.createElement('h3');
  h3.classList.add('photo-item__title');
  h3.textContent = title;

  photoElement.append(img, h3);

  return photoElement;
};

const toggleLoader = () => {
  const loading = document.querySelector('#loader');
  if (loading) {
    const isHidden = loading.hasAttribute('hidden');
    if (isHidden) {
      loading.removeAttribute('hidden');
    } else {
      loading.setAttribute('hidden', '');
    }
  }
};

getFastestLoadedPhoto(photosIds);
