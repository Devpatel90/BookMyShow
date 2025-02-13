import React from 'react'
import Logo from "../../public/Logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
          <div className="grid items-center justify-center mt-3 grid-cols-3">
        <div className="col-span-2 justify-center gap-10 py-2 flex items-center">
          <img src={Logo} alt="" />
          <form action="" className="w-[60%] relative">
            <input
              type="text"
              className="w-[100%] outline-0 ps-10 py-1 border"
              placeholder="Search for Movies, Events, Plays, Sports And Activities"
            />
            <SearchIcon
              fontSize="small"
              className="absolute start-[4%] top-[50%] -translate-1/2"
            />
          </form>
        </div>
        <div className="col-span-1 flex items-center py-2 justify-center gap-10">
          <form action="">
            <select name="" id="" className="outline-0" defaultValue="Rajkot">
              <option value="Rajkot">Kolkata</option>
              <option value="Ahmedabad">Mumbai</option>
              <option value="Surat">Hyderabad</option>
              <option value="Vadodara">Bengaluru</option>
              <option value="Gandhinagar">Gandhinagar</option>
            </select>
          </form>
          <Link to={"/addForm"} className="bg-green-500 text-white py-1 px-4">
            Add Movie
          </Link>
          <MenuIcon />
        </div>
      </div>
    </>
  )
}

export default Navbar
