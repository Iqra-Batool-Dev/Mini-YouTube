import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDebouncedInput } from "../hooks/useDebounceInput";

function Searchbar() {
  const navigate = useNavigate;
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebouncedInput(inputValue, 500);

  const handleSearch = (e) => {
    if (e.key == "Enter") {
      // navigate(`/search?query=${debouncedValue}`)
      console.log("searchinput", debouncedValue);
    }
  };
  return (
    <div className="   border-[2px] border-gray-200 rounded-lg flex flex-row justify-around items-center px-2 hover:border-primary-300 bg-white">
      <FontAwesomeIcon icon={faSearch} className="text-gray-400 " />
      <input
        type="text"
        placeholder="Search..."
        name="search"
        className=" text-[1rem] text-gray-950 py-1 px-4  outline-none"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleSearch}
      />
    </div>
  );
}

export default Searchbar;
