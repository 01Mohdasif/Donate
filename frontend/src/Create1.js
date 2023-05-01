import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Create() {
  
  const [createdDate, setCreatedDate] = useState("");

  const [subscribeNewsLetter, setSubscribeNewsLetter] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post("http://localhost:8080/donation", {
       
        createdDate: createdDate.slice(0, 10), // Format the date string to 'yyyy-MM-dd'
        
        subscribeNewsLetter: subscribeNewsLetter, // include subscribeNewsLetter field
      });
      toast.success("Form Submitted Successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  
  

  return (
    <div>
    </div>
  );
}

export default Create;
