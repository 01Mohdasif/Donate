import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [panNo, setPanNo] = useState("");
  const [subscribeNewsLetter, setSubscribeNewsLetter] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPhoneNumber(localStorage.getItem("phoneNumber"));
    setDonationAmount(localStorage.getItem("donationAmount"));
    setCreatedDate(localStorage.getItem("createdDate"));
    setPanNo(localStorage.getItem("PANNo"));

    setSubscribeNewsLetter(localStorage.getItem("subscribeNewsLetter") || false);
    console.log("Pan No:", localStorage.getItem("panNo"));
  }, []);
  


  const handleUpdate = (e) => {
    e.preventDefault();
  
    axios
      .patch(
        `http://localhost:8080/donation/${id}`,
        {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          donationAmount: donationAmount,
          createdDate: createdDate,
          panNo: panNo,
          subscribeNewsLetter: subscribeNewsLetter,
        }
      )
      .then(() => {
        alert("Data Updated Successfully");
        navigate("/read");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-2 mt-2">
            <Link to="/read">
              <button className="btn btn-primary">List</button>
            </Link>
          </div>
          <div className="bg-primary p-4 text-center">
            <h1>Update Data</h1>
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
              <label>Enter Email: </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Enter Number: </label>
              <input
                type="digit"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Donation Amount: </label>
              <input
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                placeholder="Donation Amount"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Created Date: </label>
              <input
                type="date"
                value={createdDate}
                onChange={(e) => setCreatedDate(e.target.value)}
                placeholder="Crated Date"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Pan No.: </label>
              <input
                type="string"
                value={panNo}
                onChange={(e) => setPanNo(e.target.value)}
                placeholder="Pan No."
                className="form-control"
              />
            </div>
            {/* <div >
                    <label>
                    <input type='checkbox' value={subscribeNewsLetter} onChange={(e) => setSubscribeNewsLetter(e.target.value)} />
                    </label>
                </div> */}
            <div>
              <label>
                {/* <input
                  type="checkbox"
                  value={subscribeNewsLetter}
                  onChange={(e) => setSubscribeNewsLetter(e.target.value)}
                /> */}
                <input
                  type="checkbox"
                  checked={subscribeNewsLetter}
                  onChange={(e) => setSubscribeNewsLetter(e.target.checked)}
                />
                subscribeNewsLetter
              </label>
            </div>
            <br />
            <div className="d-grid">
              <input type="submit" value="Update" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Edit;