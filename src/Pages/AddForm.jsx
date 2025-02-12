  import React, { useEffect, useState } from "react";
  import {v4} from "uuid";
  import { useNavigate } from "react-router-dom";

  function AddForm() {
    const [isLoading, setIsLoading] = useState(true);

    const [movieList, setMovieList] = useState(
      JSON.parse(localStorage.getItem("movieList")) || []
    );

    useEffect(() => {
      if (movieList.length > 0) {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000); // 1-second delay

        return () => clearTimeout(timer);
      } else {
        setIsLoading(false);
      }
    }, [movieList]);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      id : v4(),
      url: "",
      title: "",
      type: "",
      language : "",
      rating : "",
      votes : ""
    });

    const [valid, setValid] = useState({
      url: false,
      title: false,
      type: false,
      language : false,
      rating : false,
      votes : false
    });

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData({ ...formData, [name]: value });
    };

    
    

    return (
      <>

  <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Add Movie</h2>
          <form>
              <div className="space-y-4">

                      <input type="text" placeholder="Movie Poster" name="url" className="w-full p-2 border rounded-md" value={formData.url} onChange={handleChange}/>
                      <span className="px-2 text-red-400 font-semibold">
                      {valid.url == false ? "" : "Please Fill Image URL *"}
                      </span>

                      <input type="text" placeholder="Movie Title" name="title" className="w-full p-2 border rounded-md" value={formData.title} onChange={handleChange}></input>
                      <span className="px-2 text-red-400 font-semibold">
                      {valid.title == false ? "" : "Please Fill Title *"}
                      </span>

                      <input type="text" placeholder="Ex. Adventure, Action, Comedy etc" name="type" className="w-full p-2 border rounded-md" value={formData.type} onChange={handleChange}></input>
                      <span className="px-2 text-red-400 font-semibold">
                      {valid.type == false ? "" : "Please Enter Type *"}
                      </span>

                      <input type="text" placeholder="Ex. English, Hindi" name="language" className="w-full p-2 border rounded-md" value={formData.language} onChange={handleChange}></input>
                      <span className="px-2 text-red-400 font-semibold">
                      {valid.language == false ? "" : "Please Enter Movie Language *"}
                      </span>
              
                      <input type="number" placeholder="Rating b/w 1 to 10" name="rating" min="1" max="10" className="w-full p-2 border rounded-md" value={formData.rating} onChange={handleChange}></input>
                      <span className="px-2 text-red-400 font-semibold">
                      {valid.rating == false ? "" : "Please Enter Rating *"}
                      </span>

                      <input type="number" placeholder="Reviews Ex. 123" name="votes" className="w-full p-2 border rounded-md" value={formData.votes} onChange={handleChange}></input>
                      <span className="px-2 text-red-400 font-semibold">
                      {valid.votes == false ? "" : "Please Enter Reviews *"}
                      </span>

                  <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md font-bold hover:bg-blue-700">Add Movie</button>
              </div>
          </form>
      </div>
  </div>


      </>
    );
  }

  export default AddForm;