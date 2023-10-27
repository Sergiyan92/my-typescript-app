import { useState, useEffect } from "react";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imagegallery/ImageGallery";
import Button from "./button/Button";
import Loader from "./loader/Loader";
import Modal from "./modal/Modal";
import { getImages } from "../../service/service";

type Image = {
  id: number;
  webformatURL: string;
  largeImageURL: string;
};

const Images = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [error, setImagesError] = useState<string | null>(null);
  const [showBtn, setShowBtn] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;
    try {
      const fetchImages = async () => {
        setIsLoading(true);
        const { imagesData, totalImages } = await getImages({ page, query });
        setImages((prevImages) => [...prevImages, ...imagesData]);
        setShowBtn(page < Math.ceil(totalImages / 12));
      };
      fetchImages();
    } catch (error) {
      const err = error as Error;
      setImagesError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [page, query]);

  const handleSubmit = (query: string) => {
    if (query === "") {
      alert("Please enter a query");
    } else {
      setQuery(query);
      setPage(1);
      setImages([]);
      setImagesError(null);
      setIsLoading(false);
      setShowBtn(false);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (imageURL: string) => {
    setSelectedImage(imageURL);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage("");
  };
  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />

      <ImageGallery images={images} onClick={handleImageClick} />

      {isLoading && <Loader />}

      {showBtn && <Button onClick={handleLoadMore}>Load More</Button>}
      {error && <>Sorry. {error} ... 😭</>}
      {showModal && (
        <Modal largeImageURL={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Images;