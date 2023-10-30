import { useState, useEffect } from "react";
import "rsuite/dist/rsuite.min.css";
import { Loader } from "rsuite";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imagegallery/ImageGallery";
import Button from "./button/Button";
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
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const { imagesData, totalImages } = await getImages({ page, query });
        setImages((prevImages) => [...prevImages, ...imagesData]);
        setShowBtn(page < Math.ceil(totalImages / 12));
      } catch (error) {
        const err = error as Error;
        setImagesError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [page, query]);

  const handleSubmit = (query: string) => {
    if (query === "") {
      alert("Please enter a query");
    } else {
      setQuery(query);
      setPage(1);
      setImages([]);
      setImagesError(null);

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
    <div className="flex items-center flex-col pb-6 w-full ml-auto mr-auto">
      <Searchbar onSubmit={handleSubmit} />

      {isLoading ? (
        <Loader size="lg" speed="normal" content="Loading..." />
      ) : (
        <ImageGallery images={images} onClick={handleImageClick} />
      )}

      {showBtn && <Button onClick={handleLoadMore}>Load More</Button>}
      {error && <>Sorry. {error} ... 😭</>}
      {showModal && (
        <Modal largeImageURL={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Images;
