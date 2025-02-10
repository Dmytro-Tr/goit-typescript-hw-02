import s from "./loadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onHandleChangePage: () => void;
}

export const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onHandleChangePage }) => {
  return (
    <button className={s.btn} onClick={onHandleChangePage} type="submit">
      Load more
    </button>
  );
};

export default LoadMoreBtn;
