import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function getData() {
    axios
      .get("http://localhost:8080/donation")
      .then((response) => {
        const data = response.data.map((item) => {
          const date = new Date(item.createdDate);
          item.createdDate = date.toLocaleDateString();
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
      .delete(`http://localhost:8080/donation/${id}`)
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
    email,
    phoneNumber,
    donationAmount,
    createdDate,
    panNo,
    subscribeNewsLetter
  ) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("donationAmount", donationAmount);
    localStorage.setItem("createdDate", createdDate);
    localStorage.setItem("PANNo", panNo);
    localStorage.setItem("subscribeNewsLetter", subscribeNewsLetter);
  }
  const filteredData = apiData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2 mt-2">
            <Link to="/create">
              <button className="btn btn-primary">Create Donation</button>
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
                <th>EMAIL</th>
                <th>Phone No.</th>
                <th>Donation Amount</th>
                <th>Created Date</th>
                <th>Pan N0.</th>
                <th>Subscribe News Letter</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
            {filteredData.map((item, index) => {

                return (
                  <>
                    <tr key={item._id}>

                      <th scope="row">{index + 1}</th>
                      {/* <td>{item.id}</td> */}
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phoneNumber}</td>
                      <td>{item.donationAmount}</td>
                      <td>{item.createdDate}</td>
                      <td>{item.panNo}</td>
                      <td>{item.subscribeNewsLetter ? "Yes" : "No"}</td>
                      <td>
                        <Link to="/edit">
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              setDataToStorage(
                                item._id,
                                item.name,
                                item.email,
                                item.phoneNumber,
                                item.donationAmount,
                                item.createdDate,
                                item.panNo,

                                item.subscribeNewsLetter
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

export default Read;