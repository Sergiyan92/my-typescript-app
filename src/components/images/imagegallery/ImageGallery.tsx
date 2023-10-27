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
    <ul className="">
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
