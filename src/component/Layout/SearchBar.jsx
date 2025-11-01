import { useState } from 'react'
import { CiSearch } from "react-icons/ci";


const SearchBar = () => {


  const [searchTerm, setSearchTerm] = useState("");

  const [searchBarOpen, setSearchBarOpen] = useState(false);

  const toggleSearchbar = () => {
    setSearchBarOpen(!searchBarOpen);
  }
  return (
    <div>
      {
        searchBarOpen ? (
          <form className={`absolute w-full h-20 bg-gray-100 top-0 left-0 right-0`}>
            <input type="text" placeholder="Search..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button type="button" onClick={toggleSearchbar} > close
            </button>
          </form>
        ) :
          (
            <CiSearch className="w-6 h-6"
              onClick={toggleSearchbar}
            />

          )
      }
    </div>
  )
}

export default SearchBar;