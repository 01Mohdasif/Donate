import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const fields = [
  { name: "name", label: "Name:", type: "text", required: true },
  { name: "linkedIn", label: "LinkedIn:", type: "text", required: true },
  { name: "title", label: "Title:", type: "text", required: true },
  { name: "google", label: "Google:", type: "text", required: true },
  { name: "description", label: "Description:", type: "textarea", required: true },
  { name: "twitter", label: "Twitter:", type: "text", required: false },
  { name: "bannerImage1", label: "Banner Image1:", type: "file", required: false },
  { name: "facebook", label: "Facebook:", type: "text", required: false },
  { name: "bannerImage2", label: "Banner Image2:", type: "file", required: false },
  { name: "youtube", label: "Youtube:", type: "text", required: false },
  { name: "bannerImage3", label: "Banner Image3:", type: "file", required: false },
  { name: "minimumAmount", label: "Minimum Amount:", type: "number", required: true },
  { name: "maximumAmount", label: "Maximum Amount:", type: "number", required: true },
];

function Project() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "file") {
      setFormData((prevData) => ({ ...prevData, [name]: event.target.files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  function isValidUrl(url) {
    // Regex pattern for a valid URL
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/;
    return urlPattern.test(url);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    const socialMediaFields = ["linkedIn", "google", "twitter", "facebook", "youtube"];
    const invalidFields = socialMediaFields.filter((field) => formData[field] && !isValidUrl(formData[field]));

    if (invalidFields.length > 0) {
      alert("Please enter a valid URL for " + invalidFields.join(", "));
      return;
    }

    axios
      .post("http://localhost:8080/projects", formDataToSend)
      .then((response) => {
        console.log(response.data);
        alert("Your data submitted successfully!");
        setFormData({});
        navigate("/project-read");
      })
      .catch((error) => {
        console.error(error);
      });
    
    return;
  };
  

  
    

  return (
    <div>
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {fields.map(({ name, label, type, required }) => (
            <div key={name} className="col-sm-6">
              <div className="form-group">
                <label htmlFor={name}>{label}</label>
                {type === "textarea" ? (
                  <textarea
                    className="form-control"
                    id={name}
                    name={name}
                    value={formData[name] || ""}
                    onChange={handleInputChange}
                    required={required}
                  />
                ) : (
                  <input
                    type={type}
                    className="form-control"
                    id={name}
                    name={name}
                    value={formData[name] || ""}
                    onChange={handleInputChange}
                    required={required}
                  />
                  
                )}
              </div>
            </div>
          ))}
        </div>
        
        <button type="submit" className="mb-2 mt-2 btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}


export default Project;

