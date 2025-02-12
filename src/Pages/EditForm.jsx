import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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

  const handleChage = (e) => {
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
    data.under_age = res.under_age;
    data.votes = res.votes;
    localStorage.setItem("movieList",JSON.stringify(movieList));

    setRes({
    id : "",
    url : "",
    language : "",
    rating : "",
    title : "",
    type : "",
    under_age : "",
    votes : "",
    })

    navigate("/");

  };

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <Box
          component="form"
          //   sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          noValidate
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex border-2 w-[90%] md:w-fit border-gray-300 flex-col shadow-2xl p-10 md:p-15 rounded-lg items-center justify-center gap-8"
        >
          <h1 className="text-center mb-8 text-3xl font-semibold">
            Edit Movie Details
          </h1>
          <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-x-10 gap-y-8">
            <div className="flex flex-col col-span-1 md:col-span-2">
              <TextField
                id="outlined-number"
                label="Image URL *"
                type="text"
                placeholder="Movie Image"
                value={res ? res.url : ""}
                onChange={handleChage}
                name="url"
                className="w-full"
                size="small"
                sx={{
                  "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
                }}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
            </div>
            <div className="flex flex-col col-span-1">
              <TextField
                id="outlined-number"
                label="Title *"
                type="text"
                value={res ? res.title : ""}
                onChange={handleChage}
                placeholder="Movie Name"
                className="w-full"
                size="small"
                name="title"
                sx={{
                  "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
                }}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
            </div>
            <div className="flex flex-col col-span-1">
              <TextField
                id="outlined-number"
                label="Type *"
                placeholder="Ex. Action, Drama etc"
                type="text"
                name="type"
                value={res ? res.type : ""}
                onChange={handleChage}
                className="w-full"
                size="small"
                sx={{
                  "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
                }}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
            </div>
            <div className="flex flex-col col-span-1">
              <TextField
                id="outlined-number"
                label="Language *"
                placeholder="Ex. Gujarati, Hindi, English"
                type="text"
                name="language"
                value={res ? res.language : ""}
                onChange={handleChage}
                className="w-full"
                size="small"
                sx={{
                  "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
                }}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
            </div>
            <div className="flex flex-col col-span-1">
              <TextField
                id="outlined-number"
                label="Under Age *"
                placeholder="Under Age"
                type="text"
                value={res ? res.under_age : ""}
                onChange={handleChage}
                name="under_age"
                className="w-full"
                size="small"
                sx={{
                  "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
                }}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
            </div>
            <div className="flex flex-col col-span-1">
              <TextField
                id="outlined-number"
                label="Rating *"
                placeholder="Between 1 to 10"
                type="text"
                value={res ? res.rating : ""}
                onChange={handleChage}
                name="rating"
                className="w-full"
                size="small"
                sx={{
                  "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
                }}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
            </div>
            <div className="flex flex-col col-span-1">
              <TextField
                id="outlined-number"
                label="Votes *"
                placeholder="Ex. 1278"
                type="text"
                name="votes"
                value={res ? res.votes : ""}
                onChange={handleChage}
                className="w-full"
                size="small"
                sx={{
                  "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
                }}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
            </div>
          </div>
          <button className="bg-yellow-600 text-white text-lg font-semibold py-1 w-full rounded-lg cursor-pointer">
            Edit Data
          </button>
        </Box>
      </div>
    </>
  );
}

export default EditForm;
