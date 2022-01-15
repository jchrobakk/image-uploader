import React from "react";
import image from "../img/image.svg";

export default function UploadBox() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");

    //fetch the image and send it to the server
    const file = document.querySelector("#file").files[0];
    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:5000/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <main className="main">
      <section className="uploadbox">
        <p className="uploadbox__title">Upload your image</p>
        <p className="uploadbox__info">File should be JPEG, PNG...</p>
        {/* <form className="form">
          <input onChange={submitHandler} type="file" className="form__input" />
        </form> */}
        <div className="drop-zone">
          <img src={image} alt="upload" />
          <p className="drop-zone__info">Drag and Drop your image here</p>
        </div>

        <form className="form">
          <input
            onChange={submitHandler}
            type="file"
            className="form__input"
            id="file"
          />
        </form>
      </section>
    </main>
  );
}
