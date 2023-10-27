type Image = {
  id: number;
  webformatURL: string;
  largeImageURL: string;
};

type ImageGalleryProps = {
  images: Image[];
  onClick: (imageURL: string) => void;
};
const ImageGallery = ({ images, onClick }: ImageGalleryProps) => {
  return (
    <ul className=" grid ml-auto mr-auto max-w-[(100vw - 48px)] grid-cols-4">
      {images.map((image) => (
        <li
          key={image.id}
          className="gallery-item"
          onClick={() => {
            onClick(image.largeImageURL);
          }}
        >
          <img src={image.webformatURL} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
