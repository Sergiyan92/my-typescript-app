import { useState, ChangeEvent, FormEvent } from "react";
interface SearchbarProps {
  onSubmit: (query: string) => void;
}
const Searchbar = ({ onSubmit }: SearchbarProps) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(query);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="">
          <span className="">Search</span>
        </button>

        <input
          className=""
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
