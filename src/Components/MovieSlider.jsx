import React, { useEffect, useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import MainSlider from "./MainSlider";

function MovieSlider({ searchTerm, fieldname }) {
  const [movieList, setMovieList] = useState(
    JSON.parse(localStorage.getItem("movieList")) || []
  );

  const [originalData, setOriginalData] = useState(movieList);

  const handleDelete = (prod_id) => {
    const other_data = movieList.filter((e) => e.id !== prod_id);
    setMovieList(other_data);
    localStorage.setItem("movieList", JSON.stringify(other_data));
  };

  useEffect(() => {
    let filterData = [...movieList];

    if (fieldname == "search") {
      filterData =
        searchTerm == ""
          ? movieList
          : filterData.filter((item) =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
    } else if (fieldname == "category") {
      filterData =
        searchTerm == ""
          ? movieList
          : filterData.filter((item) =>
              item.type.toLowerCase().includes(searchTerm.toLowerCase())
            );
    } else if (fieldname == "sorting") {
      filterData = filterData.sort((a, b) =>
        searchTerm === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title)
      );
    }

    console.log(searchTerm);

    console.log(fieldname);

    setOriginalData(filterData);
  }, [searchTerm]);

  return (
    <>
      <div className="flex mt-15 justify-center items-center">
          <div className="w-[90%]">
            <Swiper
              spaceBetween={40}
              slidesPerView={4}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              // pagination={{ clickable: true }}
              className="flex items-center justify-center"
              modules={[Pagination, Autoplay]}
              centeredSlides={false}
            >
              {
              originalData.length > 0 ? 
              originalData.map((e) => (
                <SwiperSlide key={e.id} className="group relative">
                  <div className="flex flex-col items-start justify-center">
                    <div className="relative w-fit rounded-lg overflow-hidden">
                      <img src={e.url} className="w-full" alt={e.title} />
                      <div className="absolute bg-black w-full px-3 py-1.5 flex items-center gap-2 start-0 bottom-0">
                        <div class="flex items-center">
                          <svg
                            class="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">
                            {e.rating}
                          </p>
                          <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                          <a
                            href="#"
                            class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                          >
                            {e.votes} Reviews
                          </a>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-semibold mt-5 text-lg m-auto">
                      {e.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-semibold m-auto">
                      {e.language}
                    </p>

                    <div className="flex gap-4 mt-3 m-auto">
                      <Link
                        to={`/editForm/${e.id}`}
                        className="p-2 rounded-md border border-gray-400 hover:bg-gray-200 transition"
                      >
                        <ModeEditIcon className="text-gray-700" />
                      </Link>
                      <button
                        onClick={() => handleDelete(e.id)}
                        className="p-2 rounded-md border border-red-400 hover:bg-red-200 transition"
                      >
                        <DeleteForeverIcon className="text-red-600" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))
              :
              "empty"
            }
            </Swiper>
          </div>
      </div>
    </>
  );
}

export default MovieSlider;
