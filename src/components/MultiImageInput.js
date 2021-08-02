import React, { useState } from "react";
import "./styles.css";

import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";

const MultiImageInput = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [name,setName]  = useState("");
  const [age,setAge] = useState(" ");
  const [gender,setGender] = useState("");

  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file)   // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} />;
    });
  };

  return (
    <div className="app">
      <div className="heading">
		  <p>
		  User Select Only 10 Photos
		  </p>
	  </div>
      <div>
        <input type="file" id="file" multiple onChange={handleImageChange} />
          <label htmlFor="file" className="label"> Add Image
            <i className="material-icons">add_a_photo</i>        
          </label>
            <TextField 
            label = "name"
            value = {name}
            onChange = {(e)=>setName(e.target.value)}
            />
            <TextField 
            label = "age"
            value = {age}
            onChange = {(e)=>setAge(e.target.value)}
            />
            <TextField 
            label = "gender"
            value = {gender}
            onChange = {(e)=>setGender(e.target.value)}
            />
            <Button
              onClick={() => {
                                                                //submit button post req
                console.log("Clicked and Submit");
              }}
              variant="contained"
              color="primary"
              size="small"
              className="material-icons"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
        <div className="result">{renderPhotos(selectedFiles)}</div>
      </div>
    </div>
  );
};

export default MultiImageInput;
