import { useEffect, useState } from "react";
import { fetchArticles } from "../../api";
import ImageGallery from "../imageGallery/ImageGallery";
import SearchBar from "../searchBar/SearchBar";
import Loader from "../loader/Loader";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn";
import toast from "react-hot-toast";
import ImageModal from "../ImageModal/ImageModal";
import { ModalImage, Picture } from "./App.types";

const App: React.FC = () => {
  const [picture, setPicture] = useState<Picture[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPict, setSelectedPic] = useState<ModalImage | null>(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    const findThePicture = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchArticles(query, page);
        setPicture((prev) => [...prev, ...data]);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findThePicture();
  }, [query, page]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleChangeQuery = (newQuery: string): void => {
    if (newQuery === query) {
      toast.error("Enter new text to search for images!");
      return;
    }
    setQuery(newQuery);
    setPicture([]);
    setPage(1);
  };

  const openModal = (picture: ModalImage): void => {
    setIsOpen(true);
    setSelectedPic(picture);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setSelectedPic(null);
  };

  return (
    <div>
      <SearchBar onHandleChangeQuery={handleChangeQuery} />
      {isLoading && <Loader />}
      {isError && <h2>Something went wrong! Try again...</h2>}
      <ImageGallery picture={picture} onImageClick={openModal} />
      <ImageModal isOpen={modalIsOpen} onClose={closeModal} picture={selectedPict} />
      {picture.length > 0 && <LoadMoreBtn onHandleChangePage={handleChangePage} />}
    </div>
  );
};

export default App;
