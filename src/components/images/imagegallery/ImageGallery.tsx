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
    <ul className=" grid ml-auto mr-auto max-w-full grid-cols-4">
      {images.map((image) => (
        <li
          key={image.id}
          className="w-full p-[2px]"
          onClick={() => {
            onClick(image.largeImageURL);
          }}
        >
          <img
            src={image.webformatURL}
            alt="img"
            className="w-[260px] h-[170px]"
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
