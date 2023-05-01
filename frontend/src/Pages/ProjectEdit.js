import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProjectEdit() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bannerImage1, setBannerImage1] = useState("");
  const [bannerImage2, setBannerImage2] = useState("");
  const [bannerImage3, setBannerImage3] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [google, setGoogle] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [minimumAmount, setMinimumAmount] = useState("");
  const [maximumAmount, setMaximumAmount] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setTitle(localStorage.getItem("title"));
    setDescription(localStorage.getItem("description"));
    setBannerImage1(localStorage.getItem("bannerImage1"));
    setBannerImage2(localStorage.getItem("bannerImage2"));
    setBannerImage3(localStorage.getItem("bannerImage3"));
    setLinkedIn(localStorage.getItem("linkedIn"));
    setGoogle(localStorage.getItem("google"));
    setTwitter(localStorage.getItem("twitter"));
    setFacebook(localStorage.getItem("facebook"));
    setYoutube(localStorage.getItem("youtube"));
    setMinimumAmount(localStorage.getItem("minimumAmount"));
    setMaximumAmount(localStorage.getItem("maximumAmount"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .patch(
        `http://localhost:8080/projects/${id}`,

        {
          name: name,

          title: title,
          description: description,
          bannerImage1: bannerImage1,
          bannerImage2: bannerImage2,
          bannerImage3: bannerImage3,
          linkedIn: linkedIn,
          google: google,
          twitter: twitter,
          facebook: facebook,
          youtube: youtube,
          minimumAmount: minimumAmount,
          maximumAmount: maximumAmount,
        }
      )
      .then(() => {
        alert("Data Updated Successfully");
        navigate("/project-read");
      })
      .catch((err) => {
        // console.log(err);
        alert(`Error: ${err.message}`);
      });
    // alert("Data Updated Successfully")
  };

  return (
    <div>
      <h2>Update Data</h2>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-2 mt-2">
            <Link to="/project-read">
              <button className="btn btn-primary">Project List</button>
            </Link>
          </div>
          
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label>Enter Name: </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Title: </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Description: </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>BannerImage1: </label>
              <input
                type="text"
                value={bannerImage1}
                onChange={(e) => setBannerImage1(e.target.value)}
                placeholder="BannerImage1"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>BannerImage2: </label>
              <input
                type="text"
                value={bannerImage2}
                onChange={(e) => setBannerImage2(e.target.value)}
                placeholder="BannerImage2"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>BannerImage3: </label>
              <input
                type="text"
                value={bannerImage3}
                onChange={(e) => setBannerImage3(e.target.value)}
                placeholder="BannerImage3"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>LinkedIn: </label>
              <input
                type="text"
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
                placeholder="LinkedIn"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Google: </label>
              <input
                type="text"
                value={google}
                onChange={(e) => setGoogle(e.target.value)}
                placeholder="Google"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Twitter: </label>
              <input
                type="text"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                placeholder="Twitter"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Facebook: </label>
              <input
                type="text"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                placeholder="Facebook"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Youtube: </label>
              <input
                type="text"
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
                placeholder="youtube"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>MinimumAmount: </label>
              <input
                type="text"
                value={minimumAmount}
                onChange={(e) => setMinimumAmount(e.target.value)}
                placeholder="MinimumAmount"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>MaximumAmount: </label>
              <input
                type="text"
                value={maximumAmount}
                onChange={(e) => setMaximumAmount(e.target.value)}
                placeholder="MaximumAmount"
                className="form-control"
              />
            </div>

            <br />
            <div className="d-grid">
              <input type="submit" value="Update" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProjectEdit;
