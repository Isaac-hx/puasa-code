import { useEffect, useState } from "react"
import SearchBar from "./Searchbar"
import Category from "./Category";

export default function Menu(){
    const [selectCategory,setSelectCategory] = useState(null)
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
      };

    const handleSelected = (event) =>{
        const name = event.currentTarget.getAttribute('name')
        setSelectCategory(name)
    }
    
 
    return(
        <main className={`w-3/5`}>

            <div className={` flex justify-between px-2 py-4 items-center`}>
                <h2 className={`text-lg font-semibold`}>Choose Categories</h2>
                <SearchBar searchQuery={searchQuery} onChange={handleSearchQueryChange}/>
            </div>

            <div className={`grid grid-cols-4 justify-items-center mt-4`}>
              
                <Category selectCategory={selectCategory} handleSelected={handleSelected}/>

            </div>


        </main>
    )
}