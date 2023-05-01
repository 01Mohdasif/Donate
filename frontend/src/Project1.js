import React, { useState } from "react";
import axios from "axios";

function Project() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bannerImage1, setBannerImage1] = useState("");
  const [bannerImage2, setBannerImage2] = useState("");
  const [bannerImage3, setBannerImage3] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [google, setGoogle] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [minimumAmount, setMinimumAmount] = useState("");
  const [maximumAmount, setMaximumAmount] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleBannerImage1Change = (event) => {
    setBannerImage1(event.target.value);
  };
  const handleBannerImage2Change = (event) => {
    setBannerImage2(event.target.value);
  };
  const handleBannerImage3Change = (event) => {
    setBannerImage3(event.target.value);
  };

  const handleLinkedinChange = (event) => {
    setLinkedin(event.target.value);
  };
  const handleGoogleChange = (event) => {
    setGoogle(event.target.value);
  };
  const handleTwitterChange = (event) => {
    setTwitter(event.target.value);
  };
  const handleFacebookChange = (event) => {
    setFacebook(event.target.value);
  };
  const handleYoutubeChange = (event) => {
    setYoutube(event.target.value);
  };

  const handleMinimumAmountChange = (event) => {
    setMinimumAmount(event.target.value);
  };
  const handleMaximumAmountChange = (event) => {
    setMaximumAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      title,
      description,
      bannerImage1,
      bannerImage2,
      bannerImage3,
      linkedin,
      google,
      twitter,
      facebook,
      youtube,
      minimumAmount,
      maximumAmount,
    };

    axios
      .post("http://localhost:8080/projects", formData)
      .then((response) => {
        console.log(response.data);
        alert("Your data submitted successfully!");
        setName("");
        setTitle("");
        setDescription("");
        setBannerImage1("");
        setBannerImage2("");
        setBannerImage3("");
        setLinkedin("");
        setGoogle("");
        setTwitter("");
        setFacebook("");
        setYoutube("");
        setMinimumAmount("");
        setMaximumAmount("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                required
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                className="form-control"
                required
                id="title"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                className="form-control"
                required
                id="description"
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="bannerImage">Banner Image1:</label>
              <input
                type="file"
                
                className="form-control"
                id="bannerImage1"
                value={bannerImage1}
                onChange={handleBannerImage1Change}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerImage">Banner Image2:</label>
              <input
                type="file"
                className="form-control"
                id="bannerImage2"
                
                value={bannerImage2}
                onChange={handleBannerImage2Change}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerImage">Banner Image3:</label>
              <input
                type="file"
                className="form-control"
                
                id="bannerImage3"
                value={bannerImage3}
                onChange={handleBannerImage3Change}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="linkedin">LinkedIn:</label>
              <input
                type="text"
                className="form-control"
                required
                id="linkedin"
                value={linkedin}
                onChange={handleLinkedinChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="linkedin">Google:</label>
              <input
                type="text"
                className="form-control"
                required
                id="google"
                value={google}
                onChange={handleGoogleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="linkedin">Twitter:</label>
              <input
                type="text"
                className="form-control"
                required
                id="twitter"
                value={twitter}
                onChange={handleTwitterChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="linkedin">Facebook:</label>
              <input
                type="text"
                className="form-control"
                required
                id="facebook"
                value={facebook}
                onChange={handleFacebookChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="linkedin">Youtube:</label>
              <input
                type="text"
                className="form-control"
                required
                id="youtube"
                value={youtube}
                onChange={handleYoutubeChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="minimumAmount">Minimum Amount:</label>
              <input
                type="text"
                className="form-control"
                required
                id="minimumAmount"
                value={minimumAmount}
                onChange={handleMinimumAmountChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="minimumAmount">Maximum Amount:</label>
              <input
                type="text"
                className="form-control"
                required
                id="maximumAmount"
                value={maximumAmount}
                onChange={handleMaximumAmountChange}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Project;
