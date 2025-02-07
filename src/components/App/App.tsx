import { useEffect, useState } from "react";
import { fetchArticles } from "../../api";
import ImageGallery from "../imageGallery/ImageGallery";
import SearchBar from "../searchBar/SearchBar";
import Loader from "../loader/Loader";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn";
import toast from "react-hot-toast";
import ImageModal from "../ImageModal/ImageModal";

// const YOUR_ACCESS_KEY = "XZStRBfACQP-q-kCXR0IJai0mE6pvomLOZZrclZrEPM";

const App = () => {
  const [picture, setPicture] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPict, setSelectedPic] = useState({});

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

  const handleChangeQuery = (newQuery) => {
    if (newQuery === query) {
      toast.error("Enter new text to search for images!");
      return;
    }
    setQuery(newQuery);
    setPicture([]);
    setPage(1);
  };

  const openModal = (picture) => {
    setIsOpen(true);
    setSelectedPic(picture);
  };

  const closeModal = () => {
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
