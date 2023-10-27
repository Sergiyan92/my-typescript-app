import axios from "axios";

interface getImageProps {
  page: number;
  query: string;
}
interface imagesData {
  id: number;
  webformatURL: string;
  largeImageURL: string;
}
axios.defaults.baseURL =
  "https://pixabay.com/api/?key=36214918-c54bf3212caa76f3a1fc6176b&image_type=photo&orientation=horizontal";

export const getImages = async ({ page, query }: getImageProps) => {
  const response = await axios.get(`&q=${query}&page=${page}&per_page=12`);
  const images = response.data.hits;
  const total = response.data.totalHits;
  return {
    imagesData: images.map(
      ({ id, webformatURL, largeImageURL }: imagesData) => ({
        id,
        webformatURL,
        largeImageURL,
      })
    ),
    totalImages: total,
  };
};
