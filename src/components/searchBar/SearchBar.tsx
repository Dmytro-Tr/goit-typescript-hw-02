import { FormEvent, useState } from "react";
import s from "./searchBar.module.css";
import { Search } from "lucide-react";
import toast from "react-hot-toast";

interface SearchBarProps {
  onHandleChangeQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onHandleChangeQuery }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    if (value === "" || value === " ") {
      toast.error("The search field is empty!");
      return;
    }
    onHandleChangeQuery(value);
    // console.log(value);
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          onChange={(evt) => setValue(evt.target.value)}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.input}
        />
        <button
          // onClick={handleSubmit}
          type="submit"
          className={s.button}
        >
          <Search className={s.icon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
