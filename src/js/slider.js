export { lightbox };

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.photo-link', {
  captionDelay: 200,
  captionsData: 'alt',
});
