import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Services = () => {
  const [test, setTest] = useState([]);

  useEffect(() => {
    fetch('/fakedata.json')
      .then((res) => res.json())
      .then((data) => setTest(data));
  }, []);
  return (
    <div>
      <h1
        style={{ fontSize: "60px", marginBottom: "35px" }}
        className="text-center text-primary"
      >
        Our Available Services
      </h1>
      <div className="services mx-auto my-auto">
        {test.map((serv) => (
           <div
           className="card"
           style={{
             width: "25rem",
             marginLeft: "15px ",
             marginBottom: "10px",
             fontWeight: "bold",
             fontSize: "20px",
           }}
         >
           <img className="card-img-top rounded" src={serv.img} alt="card" />
           <div className="card-body bg-light rounded">
             <h3 className="card-title text-center fw-bold">{serv.Test}</h3>
             <p className="card-text">Category : {serv.Test}</p>
             <p className="card-text">Supervisor: {serv.Supervisor}</p>
             <p className="card-text">Total Test Done : {serv.NumberOfTest}</p>
             <p className="card-text">Price : ${serv.price}</p>
             <Link to={`/service/${serv?.key}`}>View more</Link>
             <a href="" className="btn btn-primary">
               Book a Test
             </a>
           </div>
         </div>
        ))}
      </div>
   
    </div>
  );
};
export default Services;
