import React from "react";
import Footer from "../Footer/Footer";
import bloodtest from "../images/bloodtest.jpg";
import citiscan from "../images/citi-scan.jpg";
import doctor1 from "../images/doctor1.jpg";
import doctor2 from "../images/doctor2.jpg";
import doctor3 from "../images/doctor3.jpg";
import xray from "../images/xray.jpg";
import Services from "../Services/Services";
import "./Home.css";


const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={bloodtest}
              alt="bloodtest"
              className="d-block w-100 align-center"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-2 text-dark">BloodTest</h1>
              <h3 className="text-dark">Starts from $10</h3>
              <button type="button" className="btn btn-outline-light btn-lg">
                Book Test
              </button>
              <button type="button" className="btn btn-outline-info btn-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={citiscan}
              alt="bloodtest"
              className="d-block w-100  align-center"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-2 text-light">CitiScan</h1>
              <h3 className="text-light">Starts from $20</h3>
              <button
                type="button"
                className="btn text-dark btn-outline-light btn-lg"
              >
                Book Test
              </button>
              <button type="button" className="btn btn-outline-info btn-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={xray}
              alt="bloodtest"
              className="d-block w-100 align-center "
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-2 text-dark">X-ray</h1>
              <h3 className="text-dark">Starts from $14</h3>
              <button type="button" className="btn btn-outline-light btn-lg">
                Book a test
              </button>
              <button type="button" className="btn btn-outline-info btn-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="mt-5">
        <div class="container-fluid-padding">
          <div class="row welcome text-center">
            <div class="col-12">
              <h1 class="display-4">Our Expert Doctors</h1>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div class="container-fluid-padding">
        <div class="row padding">
          <div class=" col-md-4">
            <div class="card">
              <img class="card-img-top img-fluid" src={doctor1} alt="doc" />
              <div class="card-body">
                <h4 class="card-title"> Dr.John Doe</h4>
                <p class="card-text">John is a medicine doctor and surgeon.</p>
                <a href="#" class="btn btn-outline-secondary">
                  Book appointment
                </a>
              </div>
            </div>
          </div>
          <div class=" col-md-4">
            <div class="card">
              <img class="card-img-top" src={doctor2} alt="doc" />
              <div class="card-body">
                <h4 class="card-title">Dr.Mark Jo</h4>
                <p class="card-text">
                  Mark specializes in Neurosciences and psycology.
                </p>
                <a href="#" class="btn btn-outline-secondary">
                  Book appointment
                </a>
              </div>
            </div>
          </div>
          <div class=" col-md-4">
            <div class="card">
              <img class="card-img-top" src={doctor3} alt="doc" />
              <div class="card-body">
                <h4 class="card-title">Dr.Erica Ho</h4>
                <p class="card-text">
                  Erica is a gynocologist and experienced in this for more than
                  10 years
                </p>
                <a href="#" class="btn btn-outline-secondary">
                  Book appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
       
        <Services></Services>
      </div>
      <h1 className="text-center">About Us</h1>
      <div className="row">
        <div className="flip">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h1>Customers Served</h1>
              </div>
              <div class="flip-card-back">
                <h1>Happy Customers</h1>
                <p>7000++</p>
                <p>25k++ Medical Tests</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h1>Expert Doctors</h1>
              </div>
              <div class="flip-card-back">
                <h1>Total 75 in house Doctors</h1>

                <p>5000+ hours of intensive training</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h1>Our Outlets</h1>
              </div>
              <div class="flip-card-back">
                <h1>Total 8 branches in the Country</h1>
                <p>All equipped with full functional medical tests</p>
                <p>More to come...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
