import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProjectRead() {
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function getData() {
    axios
      .get("http://localhost:8080/projects")
      .then((response) => {
        const data = response.data.map((item) => {
          //   const date = new Date(item.createdDate);
          //   item.createdDate = date.toLocaleDateString();
          return item;
        });
        setApiData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    axios
      .delete(`http://localhost:8080/projects/${id}`)
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Data Deleted Successfully");
  }

  function setDataToStorage(
    id,
    name,
    title,
    description,
    bannerImage1,
    bannerImage2,
    bannerImage3,
    linkedIn,
    google,
    twitter,
    facebook,
    youtube,
    minimumAmount,
    maximumAmount
  ) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);
    localStorage.setItem("bannerImage1", bannerImage1);
    localStorage.setItem("bannerImage2", bannerImage2);
    localStorage.setItem("bannerImage3", bannerImage3);
    localStorage.setItem("linkedIn", linkedIn);
    localStorage.setItem("google", google);
    localStorage.setItem("twitter", twitter);

    localStorage.setItem("facebook", facebook);
    localStorage.setItem("youtube", youtube);
    localStorage.setItem("minimumAmount", minimumAmount);
    localStorage.setItem("maximumAmount", maximumAmount);
  }
  const filteredData = apiData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2 mt-2">
            <Link to="/add-project">
              <button className="btn btn-primary">Add Project</button>
            </Link>
          </div>
          <div className="mb-2 mt-2">
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>Title</th>
                <th>Description</th>
                <th>BannerImage1</th>
                <th>BannerImage2</th>
                <th>BannerImage3</th>
                <th>LinkedIn</th>
                <th>Google</th>
                <th>Twitter</th>
                <th>Facebook</th>
                <th>Youtube</th>
                <th>Minimum AMOUNT</th>
                <th>Maximum AMOUNT</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {/* {apiData.map((item, index) => { */}
              {filteredData.map((item, index) => {
                return (
                  <>
                    <tr key={item._id}>
                      <th scope="row">{index + 1}</th>
                      {/* <td>{item.id}</td> */}
                      <td>{item.name}</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>
                        <img
                          src={item.bannerImage1Url}
                          alt="Banner 1"
                          mime={item.bannerImage1Mime}
                          bufferType={item.bannerImage1BufferType}
                        />
                      </td>
                      <td>
                        <img
                          src={item.bannerImage2Url}
                          alt="Banner 2"
                          mime={item.bannerImage2Mime}
                          bufferType={item.bannerImage2BufferType}
                        />
                      </td>
                      <td>
                        <img
                          src={item.bannerImage3Url}
                          alt="Banner 3"
                          mime={item.bannerImage3Mime}
                          bufferType={item.bannerImage3BufferType}
                        />
                      </td>
                      <td>{item.linkedIn}</td>
                      <td>{item.google}</td>
                      <td>{item.twitter}</td>
                      <td>{item.facebook}</td>
                      <td>{item.youtube}</td>
                      <td>{item.minimumAmount}</td>
                      <td>{item.maximumAmount}</td>

                      <td>
                        <Link to="/project-edit">
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              setDataToStorage(
                                item._id,
                                item.name,
                                item.title,
                                item.description,
                                item.bannerImage1,
                                item.bannerImage2,
                                item.bannerImage3,

                                item.linkedIn,
                                item.google,
                                item.twitter,
                                item.facebook,
                                item.youtube,
                                item.maximumAmount,
                                item.maximumAmount
                              )
                            }
                          >
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            if (
                              window.confirm("Are You Sure To Delete Data ??")
                            ) {
                              console.log(item);
                              handleDelete(item._id);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProjectRead;
