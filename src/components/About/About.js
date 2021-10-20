import React from "react";
import Footer from "../Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <div>
      <h4 className="text-center mt-3 mb-3 ">What we offer</h4>
      <h1 className="text-center text-primary mb-5">
        Healing for a better World
      </h1>
      <div className="grid">
        <div className="card" style={{ width: "18rem", height: "14rem" }}>
          <div className="card-body">
            <h5 className="card-title text-center">Cardiology</h5>
            <p className="card-text text-center">
              Our Medical Center has more than 7 expert doctors in Cardiology
            </p>
            <hr />
            <a
              href="#"
              className="btn btn-primary text-center justify-content-center"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", height: "14rem" }}>
          <div className="card-body">
            <h5 className="card-title text-center">Dental treatment</h5>
            <p className="card-text text-center">
              We have highly equipped machine and expert in house for any dental
              operation.
            </p>
            <hr />
            <a
              href="#"
              className="btn btn-primary text-center justify-content-center"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", height: "14rem" }}>
          <div className="card-body">
            <h5 className="card-title text-center">Neurology</h5>
            <p className="card-text text-center">
              Our Neurolist doctors all have more than 10 years of experience.
            </p>
            <hr />
            <a
              href="#"
              className="btn btn-primary text-center justify-content-center"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", height: "14rem" }}>
          <div className="card-body">
            <h5 className="card-title text-center">Ophthalmologist</h5>
            <p className="card-text text-center">
              With a 5 start ratings for last 2 years we are the best in the
              field.
            </p>
            <hr />
            <a
              href="#"
              className="btn btn-primary text-center justify-content-center"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", height: "14rem" }}>
          <div className="card-body">
            <h5 className="card-title text-center">Obstetrician</h5>
            <p className="card-text text-center">
              With leading class team and service.
            </p>
            <hr />
            <a
              href="#"
              className="btn btn-primary text-center justify-content-center"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", height: "14rem" }}>
          <div className="card-body">
            <h5 className="card-title text-center">Pediatrician</h5>
            <p className="card-text text-center">
              Our highly skilled doctors are not only expert but also more
              affectionate to your child.
            </p>
            <hr />
            <a
              href="#"
              className="btn btn-primary text-center justify-content-center"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", height: "14rem" }}>
          <div className="card-body">
            <h5 className="card-title text-center">Neurosurgeon</h5>
            <p className="card-text text-center">
              With the best department we have high tech equipments for any kind
              of operation.
            </p>
            <hr />
            <a
              href="#"
              className="btn btn-primary text-center justify-content-center"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", height: "14rem" }}>
          <div className="card-body">
            <h5 className="card-title text-center">SPrimary-Care</h5>
            <p className="card-text text-center">
              Feeling a bit sick ? Our on duty doctor always got your back only
              in 5 mins.
            </p>
            <hr />
            <a
              href="#"
              className="btn btn-primary text-center justify-content-center"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
