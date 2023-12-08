import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Loader from './Loader/Loader.jsx';
import Button from './Button/Button.jsx';
import Modal from './Modal/Modal.jsx';
import '../styles.css';

import React from 'react';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalHits, setTotalHits] = useState(null);

  const fetchImages = useCallback(async () => {
    setIsLoading(true);
    const apiKey = '40081345-2806d7337f047551466163511';
    const url = `https://pixabay.com/api/?q=${encodeURIComponent(
      query
    )}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    try {
      const response = await axios.get(url);
      if (page === 1) {
        setImages(response.data.hits);
      } else {
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      }
      setTotalHits(response.data.totalHits);
    } catch (error) {
      console.error('Error fetching images: ', error);
    } finally {
      setIsLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    if (query) fetchImages();
  }, [fetchImages, query]);

  useEffect(() => {
    setPage(1);
    setImages([]);
  }, [query]);

  const loadMoreImages = () => {
    setPage(page => page + 1);
    fetchImages();
  };

  const handleInputChange = query => {
    setQuery(query);
  };
  const handleImageClick = imageUrl => {
    setSelectedImage(imageUrl);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <SearchBar onInputChange={handleInputChange} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && images.length < totalHits && (
        <Button onLoadMore={loadMoreImages} />
      )}
      {selectedImage && (
        <Modal selectedImage={selectedImage} onCloseModal={closeModal} />
      )}
    </div>
  );
};

export default App;
