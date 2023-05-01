import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [panNo, setPanNo] = useState("");
  const [subscribeNewsLetter, setSubscribeNewsLetter] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/donation", {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        donationAmount: donationAmount,
        createdDate: createdDate.slice(0, 10), // Format the date string to 'yyyy-MM-dd'
        panNo: panNo,
        subscribeNewsLetter: subscribeNewsLetter, // include subscribeNewsLetter field
      });
      toast.success("Form Submitted Successfully");
      navigate("/read");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
     
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-2 mt-2">
              <Link to="/read">
                <button className="btn btn-primary">Donation List</button>
              </Link>
            </div>
            <h2>Create New Donation</h2>

            <div className="form-group">
              <label htmlFor="name">Enter Name: </label>
              <input
                type="string"
                required
                minLength={4}
                placeholder="Enter Your Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Enter Email: </label>
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Enter Number: </label>
              <input
                type="digit"
                required
                maxLength={10}
                placeholder="Enter Your 10 Digit Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Donation Amount: </label>
              <input
                type="number"
                required
                placeholder="Donation Amount"
                onChange={(e) => setDonationAmount(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Created Date: </label>
              <input
                type="date"
                required
                value={createdDate.slice(0, 10)} // Format the date string to 'yyyy-MM-dd'
                placeholder="Date"
                onChange={(e) => setCreatedDate(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Pan No.: </label>
              <input
                type="string"
                required
                placeholder="Enter Your Pan No."
                onChange={(e) => setPanNo(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
  <label >
    <input
      type="checkbox"
      checked={subscribeNewsLetter}
      onChange={(e) => setSubscribeNewsLetter(e.target.checked)}
    />
    Subscribe to newsletter
  </label>
</div>


            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            {/* <div className="d-grid">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div> */}
          </div>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Create;
