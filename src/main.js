
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getPhoto } from './js/pixabay-api.js';
import { imageTemplate } from './js/render-function.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.querySelector('.gallery');
const load = document.querySelector('.loading');
const btnLoadMore = document.querySelector('.btn-load-more');

let query;
let currentPage = 1;
let maxPage = 0;
const pageSize = 15;

function checkBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadMore();
    iziToast.warning({
      message: 'This is the last photos from the collection.',
      color: 'red',
      position: 'topRight',
    })
  } else {
    showLoadMore();
  }
}

function showLoadMore() {
  btnLoadMore.classList.remove('hidden');
}

function hideLoadMore() {
  btnLoadMore.classList.add('hidden');
}

function showLoader() {
  load.classList.add('loader');
}

function hideLoader() {
  load.classList.remove('loader');
}
 hideLoadMore()
// ----------------Кнопка загрузить еще---------------//
btnLoadMore.addEventListener('click', handleClickLoadMore);

async function handleClickLoadMore() {
  currentPage += 1;
  showLoader();
  try {
    const data = await getPhoto(query, currentPage);
    imageTemplate(data.hits);
  } catch (err) {
    console.error('Error fetching data:', err);
  }

  checkBtnStatus();
  hideLoader();
}
// ----------------Кнопка загрузить еще---------------//

// --------------------------Кнопка основная---------------------------//
searchForm.addEventListener('submit', handleSubmit);
async function handleSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  currentPage = 1;
  query = event.target.elements.query.value.trim();
  if (query === '') {
    return iziToast.warning({ message: "Please try again! Write something.", position: "topRight", color: "red" })
  }
  try {
    showLoader();
    const data = await getPhoto(query, currentPage);
     if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topRight',
        });
       gallery.innerHTML = '';
       event.target.reset();
       hideLoader();
        return;
  } 
    maxPage = Math.ceil(data.totalHits / pageSize);
    imageTemplate(data.hits);
  } catch (err) {
    console.error('Error fetching data:', err);
    gallery.innerHTML = '';
  }
  checkBtnStatus();
  event.target.reset();
  hideLoader()
}
// --------------------------Кнопка основная---------------------------//









