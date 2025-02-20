import React, { useState } from 'react';
import Logo from "../../public/Logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MainSlider from "../Components/MainSlider";
import MovieSlider from "../Components/MovieSlider";
import { Link } from 'react-router-dom';

function Navbar() {

  const [searchTerm, setSeachTerm] = useState("");
  const [fieldname, setFieldName] = useState("");

  
  const handleSort = (data) => {
    if(data == "asc")
    {
      setSeachTerm("asc")
      setFieldName("sorting")
    }
    else
    {
      setSeachTerm("desc")
      setFieldName("sorting")
    }
  }

  return (
    <>
      <div className="grid items-center justify-center mt-3 grid-cols-3">
        <div className="col-span-2 justify-center gap-10 py-2 flex items-center">
          <img src={Logo} alt="" />
          <form action="" className="w-[60%] relative">
            <input
              type="text"
              name='search'
              className="w-[100%] outline-0 ps-10 py-1 border"
              placeholder="Search for Movies, Events, Plays, Sports And Activities"
              onChange={(e)=>{setSeachTerm(e.target.value), setFieldName(e.target.name)}}
            />
            <SearchIcon
              fontSize="small"
              className="absolute start-[4%] top-[50%] -translate-1/2"
            />
          </form>
        </div>
        <div className="col-span-1 flex items-center py-2 justify-center gap-5">
          <form action="">
            <select name="city" id="city" className="outline-0" defaultValue="Rajkot">
              <option value="Rajkot">Kolkata</option>
              <option value="Ahmedabad">Mumbai</option>
              <option value="Surat">Hyderabad</option>
              <option value="Vadodara">Bengaluru</option>
              <option value="Gandhinagar">Gandhinagar</option>
            </select>
          </form>
          <Link to={"/addForm"} className="bg-green-500 text-white py-1 px-4 rounded">
            Add Movie
          </Link>
          <MenuIcon />
        </div>
      </div>
      {/* Sort Buttons and Category Filter After Navbar */}
      <div className="flex justify-center gap-4 my-4">
        <button onClick={() => handleSort("asc")} className="bg-blue-500 text-white py-1 px-4 rounded">A-Z</button>
        <button onClick={() => handleSort("desc")} className="bg-blue-500 text-white py-1 px-4 rounded">Z-A</button>
        <select
          name='category'
          className="outline-0 py-1 px-2 border"
          onChange={(e)=>{setSeachTerm(e.target.value), setFieldName(e.target.name)}}
        >
          <option value="">All Categories</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
        </select>
      </div>

      <MainSlider/>

      <MovieSlider searchTerm={searchTerm} fieldname={fieldname} />

    </>
  );
}

export default Navbar;
