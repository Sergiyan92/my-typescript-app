interface ImageGalleryItemProps {
  webformatURL: string;
}
const ImageGalleryItem = ({ webformatURL }: ImageGalleryItemProps) => {
  return (
    <li className="">
      <img src={webformatURL} alt="" className="" />
    </li>
  );
};

export default ImageGalleryItem;
