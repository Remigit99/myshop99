import { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";


const SearchBar = () => {


  const [searchTerm, setSearchTerm] = useState("");

  const [searchBarOpen, setSearchBarOpen] = useState(false);

  const toggleSearchbar = () => {
    setSearchBarOpen(!searchBarOpen);
  }
  return (
    <div className=''>
      {
        searchBarOpen ? (
          <form className={`absolute w-full h-20 bg-white top-0 left-0 right-0`}>
            <div className='flex justify-between items-center gap-4 w-3/4 h-10 m-4 p-2 border border-gray-300 rounded-md'>
              <input type="text" placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-none flex flex-1 focus:outline-none"
              />

              <CiSearch className="w-6 h-6"
              // onClick={toggleSearchbar}
              />

            </div>
            <button type="button" onClick={toggleSearchbar}
              className="absolute top-4 right-4">
              <MdClose className="w-6 h-6" />
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