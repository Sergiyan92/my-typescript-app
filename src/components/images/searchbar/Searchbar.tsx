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
    <header className="bg-[#1da1f2] w-full pt-2 pb-2 pl-6">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center"
      >
        <button
          type="submit"
          className="p-2  rounded-full border-none cursor-pointer bg-orange-600 text-white mr-5"
        >
          <span className="animate-pulse">Search</span>
        </button>

        <input
          className="p-2 mr-2 rounded border outline-none "
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
