// import { useState } from "react";
// import { HiMagnifyingGlass } from "react-icons/hi2";

// const SearchBar = () => {
//     const [searchTerm, setSearchTerm]= useState("");
//     const [isOpen, setIsOpen]= useState(false);

//     const handleSearchToggle = () =>{
//         setIsOpen(!isOpen);
//     };

//   return 
//    (
//     <div>
//         {isOpen ? (
//             <form>
//                 <div>
//                     <input type="text" placeholder="search"/>
//                 </div>
//             </form>):(
//                 <button onClick={handleSearchToggle}>
//                     <HiMagnifyingGlass  className="w-6 h-6" />
//                 </button>
//             )
        
//        };

//     </div>
//    );
// }

// export default SearchBar
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  const [serachTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen ? (
        <form>
          <div>
            <input type="text" placeholder="Search" />
          </div>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;