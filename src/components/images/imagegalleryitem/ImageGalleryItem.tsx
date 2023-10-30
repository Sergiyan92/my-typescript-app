interface ImageGalleryItemProps {
  webformatURL: string;
}
const ImageGalleryItem = ({ webformatURL }: ImageGalleryItemProps) => {
  return (
    <li className=" rounded shadow">
      <img
        src={webformatURL}
        alt=""
        className=" w-[260px] h-[260px] object-cover transition-transform hover:transform cursor-zoom-in"
      />
    </li>
  );
};

export default ImageGalleryItem;
