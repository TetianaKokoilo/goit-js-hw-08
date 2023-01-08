// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/common.css';
import '../css/01-gallery.css';

console.log(galleryItems);

const imageGallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    item =>
      `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image"
                src ="${item.preview}" 
                data-source = "${item.original}" 
                alt="${item.description}"/>
            </a>
        </div>`
  )
  .join('');

imageGallery.insertAdjacentHTML('beforeend', markup);

console.log(imageGallery);

imageGallery.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
    openModal(event.target.dataset.source);

};

function openModal(evt) {
  let gallery = new SimpleLightbox('.gallery a');
  gallery.on('show.simplelightbox', () => {
    `<div class="modal">
        <img src="${evt}">
    </div>`      
  });
};


