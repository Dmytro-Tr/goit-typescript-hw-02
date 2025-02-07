import s from "./loadMoreBtn.module.css";

export const LoadMoreBtn = ({ onHandleChangePage }) => {
  return (
    <button
      className={s.btn}
      onClick={onHandleChangePage}
      type="submit"
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
