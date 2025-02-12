import React, { useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay , Pagination } from "swiper/modules";
import "swiper/css/pagination";

function MovieSlider() {


  const [movieList, setMovieList] = useState(
    JSON.parse(localStorage.getItem("movieList")) || []
  );


  const handleDelete = (prod_id) => {

    const other_data = movieList.filter((e)=>{
        return e.id != prod_id;
    })  


    setMovieList(other_data);

    localStorage.setItem("movieList",JSON.stringify(other_data));

  }


  return (
    <div className="flex mt-15 justify-center items-center">
      {movieList.length > 0 ? (
        <div className="w-[90%]">
          <Swiper
          spaceBetween={40}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="flex items-center justify-center"
          modules={[Pagination,Autoplay]}
          centeredSlides={true}
        >
          {movieList.map((e, i) => (
            <SwiperSlide key={e.id} className="group relative">
              <div className="flex flex-col items-start justify-center">
              <div className="relative w-fit rounded-lg overflow-hidden">
                <img src={e.url} className="w-full" alt="" />
                <div className="absolute bg-black w-full px-3 py-1.5 flex items-center gap-2 start-0 bottom-0">
                        <StarIcon className="" fontSize="small" />
                    <p className="text-white text-xs tracking-[0.020rem]">{e.rating}/10</p>
                </div>
                <div className="hidden group-hover:block group-hover:bg-gradient-to-b group-hover:from-[rgba(0,0,0,0.5)] group-hover:to-[rgba(0,0,0,0.5)] absolute w-full h-full top-0 start-0">
                    <div className="flex items-center gap-10 w-full h-full justify-center">
                        <Link to={`/editForm/${e.id}`} className="border-3 p-2 rounded-full cursor-pointer border-white">
                        <ModeEditIcon className="text-white" />
                        </Link>
                        <div onClick={()=>{handleDelete(e.id)}} className="border-3 p-2 rounded-full cursor-pointer border-white">
                        <DeleteForeverIcon className="text-white" />
                        </div>
                    </div>
              </div>
              </div>
              <h3 className="font-semibold mt-5 text-lg">{e.title}</h3>
              <p className="text-gray-600 text-sm font-semibold">UA{e.under_age}+</p>
              <p className="text-gray-600 text-sm font-semibold">{e.language}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      ) : (
        <p>Currently Movies Are Not Streaming</p>
      )}
    </div>
  );
}

export default MovieSlider;
