import { useState, FormEvent, ChangeEvent } from "react";
type SearchbarProps = {
  onSubmit: (query: string) => void;
};
const Searchbar = ({ onSubmit }: SearchbarProps) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <header className="">
      <form className="" onSubmit={handleSubmit}>
        <button type="submit" className="">
          <span className="">Search</span>
        </button>

        <input
          className=""
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
