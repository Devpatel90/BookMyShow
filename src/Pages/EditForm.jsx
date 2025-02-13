import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditForm() {
  const [movieList, setMovieList] = useState(
    JSON.parse(localStorage.getItem("movieList") || [])
  );

  const navigate = useNavigate();

  const [res, setRes] = useState(null);

  const {id} = useParams();
  // console.log(url.id);

  useEffect(()=>{
    let data = movieList.find((e) => e.id == id);
    setRes(data || {});
  },[id,movieList])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setRes({...res,[name]:value});
  }

  console.log(res);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = movieList.find((e) => e.id == id);
    data.id = res.id;
    data.url = res.url;
    data.language = res.language;
    data.rating = res.rating;
    data.title = res.title;
    data.type = res.type;
    data.votes = res.votes;
    localStorage.setItem("movieList",JSON.stringify(movieList));

    setRes({
    id : "",
    url : "",
    language : "",
    rating : "",
    title : "",
    type : "",
    votes : "",
    })

    navigate("/");

  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">

          <h1 className="text-center mb-8 text-3xl font-semibold">
            Edit Movie Details
          </h1>
          <form onSubmit={handleSubmit}>
              <div className="space-y-4">

                      <input type="text" placeholder="Movie Poster" name="url" className="w-full p-2 border rounded-md" value={res ? res.url : ""} onChange={handleChange}/>
                      <span className="px-2 text-red-400 font-semibold">
                      </span>

                      <input type="text" placeholder="Movie Title" name="title" className="w-full p-2 border rounded-md" value={res ? res.title : ""} onChange={handleChange}></input>
                      <span className="px-2 text-red-400 font-semibold">
                      </span>

                      <input type="text" placeholder="Ex. Adventure, Action, Comedy etc" name="type" className="w-full p-2 border rounded-md" value={res ? res.type : ""} onChange={handleChange}></input>
                      <span className="px-2 text-red-400 font-semibold">
                      </span>

                      <input type="text" placeholder="Ex. English, Hindi" name="language" className="w-full p-2 border rounded-md" value={res ? res.language : ""} onChange={handleChange}></input>
                      <span className="px-2 text-red-400 font-semibold">
                      </span>
              
                      <input type="number" placeholder="Rating b/w 1 to 10" name="rating" min="1" max="10" className="w-full p-2 border rounded-md" value={res ? res.rating : ""} onChange={handleChange}></input>
                      <span className="px-2 text-red-400 font-semibold">
                      </span>

                      <input type="number" placeholder="Reviews Ex. 123" name="votes" className="w-full p-2 border rounded-md" value={res ? res.votes : ""} onChange={handleChange}></input>
                      <span className="px-2 text-red-400 font-semibold">
                      </span>

                  <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md font-bold hover:bg-blue-700">Edit Card</button>
              </div>
          </form>   
          </div>
            </div>
    </>
  );
}

export default EditForm;
