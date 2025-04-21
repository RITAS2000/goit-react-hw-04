import { useState, useEffect } from 'react';
import { fetchImages } from '../../api.js';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import { Toaster, toast } from 'react-hot-toast';
import ImageModal from '../ImageModal/ImageModal.jsx';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function openModal(image) {
    setModalIsOpen(true);
    setSelectedImage(image);
  }
  function closeModal() {
    setModalIsOpen(false);
    setSelectedImage(null);
  }

  useEffect(() => {
    if (query === '') return;

    setIsLoading(true);
    setError(null);

    fetchImages(query, page)
      .then((data) => {
        setImages((prevImages) =>
          page === 1 ? data.results : [...prevImages, ...data.results],
        );
        setTotalImages(data.total);
      })
      .catch(() => {
        setError('Something went wrong. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, page]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const trimmed = searchValue.trim();

    if (trimmed === '') {
      toast.error('Please enter an image name to search!');
      setImages([]);
      setTotalImages(0);
      setQuery('');
      setPage(1);
      return;
    }

    setQuery(trimmed);
    setSearchValue('');
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <section>
      <Toaster position="top-right" />
      <SearchBar
        value={searchValue}
        onChange={(evt) => setSearchValue(evt.target.value)}
        onSubmit={handleSubmit}
      />

      {isLoading && !images.length ? (
        <Loader />
      ) : (
        <>
          {images.length > 0 && (
            <ImageGallery images={images} onImageClick={openModal} />
          )}
          {!isLoading && images.length > 0 && images.length < totalImages && (
            <>
              <LoadMoreBtn onClick={handleLoadMore} />
            </>
          )}
          {error && <ErrorMessage message={error} />}
          {isLoading && images.length > 0 && <Loader replace={true} />}
        </>
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        selectedImage={selectedImage}
      />
    </section>
  );
}
