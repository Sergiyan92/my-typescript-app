import { useState, FormEvent, ChangeEvent } from 'react';
type SearchbarProps = {
  onSubmit: (query: string) => void;
};
const Searchbar = ({ onSubmit }: SearchbarProps) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <header className="flex justify-center items-center py-4">
      <form className="flex" onSubmit={handleSubmit}>
        <input
          className="border border-gray-300 rounded-l-md px-4 py-2 w-64"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
