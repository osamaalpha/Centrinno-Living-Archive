import { ChangeEvent } from "react";

interface SearchProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Search = ({ inputValue, setInputValue }: SearchProps) => {
  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input
        type="search"
        id="site-search"
        name="q"
        placeholder="Search the Centrinno Network"
        value={inputValue}
        onChange={searchHandler}
      />
    </>
  );
};
