
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

btnLoadMore.addEventListener('click', handleClickLoadMore);

async function handleClickLoadMore() {
  currentPage += 1;
  showLoader();
  try {
    const data = await getPhoto(query, currentPage);
    imageTemplate(data);
  } catch (err) {
    console.error('Error fetching data:', err);
  }

  checkBtnStatus();
  hideLoader();
}

function checkBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadMore();
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
  load.classList.remove('hidden');
}

function hideLoader() {
  load.classList.add('hidden');
}

searchForm.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  currentPage = 1;
  query = event.target.elements.query.value.trim();
  if (query === '') {
    return iziToast.warning({ message: "Please try again! Write something.", position: "topRight", color: "red" })
  }
  try {
    showLoader();
    const data = await getPhoto(query, currentPage);
    maxPage = Math.ceil(data.totalResults / pageSize);
    imageTemplate(data.articles);
  } catch (err) {
    console.error('Error fetching data:', err);
    gallery.innerHTML = '';
  }
  hideLoader();
  checkBtnStatus();
  event.target.reset();
}
