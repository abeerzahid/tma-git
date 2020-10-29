import React from "react";
import { Link } from "react-router-dom";
import products from "./product-data";

const home = () => {
  return (
    <div className="home">
      <header id="home">
        <div className="container">
          <h1 className="main-heading text-secondary">
            Welcome <br />
            to <br></br>Trendall <br></br>Mediterranean <br></br>Archaeology
          </h1>
          {/* <div className="row">
            <div className="col-md-12 col-lg-7">
              <form
                className="form-inline"
                action="/search"
                accept-charset="UTF-8"
                method="get"
              >
                <div className="input-group flex-fill">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Please enter keywords here..."
                    class="form-control"
                    aria-label="Search this site"
                  ></input>
                  <div className="input-group-append">
                    <input
                      type="submit"
                      name="commit"
                      value="Search"
                      class="btn btn-dark"
                      data-disable-with="Search"
                    ></input>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
          <p>
            Search our gallery
            <Link to="/AllProducts">
              <i class="fa fa-arrow-right animateX align-middle ml-2" aria-hidden="true"></i>
            </Link>
          </p>
          <p className="left-text">
            Get the latest research in Greek and <br></br>Roman art and
            archaeology
          </p>
        </div>
      </header>

      <section id="gallery" className="section-gallery">
        <div className="container">
          <h2>Product Gallery</h2>
          <hr></hr>
          <div className="row">
            {products.slice(0, 4).map((product) => (
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="content">
                  <img src={product.image} class="img-fluid" alt="image1"></img>
                  <h5>{product.name}</h5>
                  <p>
                    Lorem ipsum dolor sit amet, tempor prodesset eos no.
                    Temporibus necessitatib..
                  </p>
                  <Link
                    to={{
                      pathname: "/SingleProduct",
                      name: product.name,
                      image: product.image,
                      location: product.location,
                      year: product.year,
                    }}
                  >
                    <button
                      type="button"
                      class="btn btn-outline-dark img-button"
                    >
                      See more
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link to="/AllProducts">
            <button type="button" class="btn btn-dark btn-block">
              View all products
            </button>
          </Link>
        </div>
      </section>

      <section id="about" class="section-about">
        <div className="container">
          <h2>About this page</h2>
          <hr></hr>
          <p className="about-text">
            A.D. (Dale) Trendall was a legendary figure and one of the foremost
            historians of Greek art of the 20th century. He was the principal
            authority on the red-figure vases produced in the Greek colonies and
            native areas of South Italy and Sicily during the 5th and 4th
            centuries BCE. He also exerted a profound influence upon the study
            of the Humanities generally, and of Classical civilisation
            specifically, in Australian universities for over half a century.
          </p>
          <div className="content-inner">
            <ul>
              <h5>Our objectives</h5>
              <li>
                To promote research in the general area of Ancient Mediterranean
                studies, particularly in the archaeology of South Italy and
                Sicily during the Classical period.
              </li>
              <li>
                To disseminate within the general community in Australia the
                results of the latest research in Greek and Roman art and
                archaeology through the sponsorship of conferences, lectures and
                seminars.
              </li>
              <li>
                To make available, at the Director's discretion, the resources
                of the Centre to all scholars and graduate students, whether
                from Australia or overseas, who wish to use the library and
                archive.
              </li>
              <li>
                To maintain and extend both the Library and the Archive (as
                unique research resources in Australia) through the acquisition
                of books and periodicals relating to Greek and Roman culture,
                and images of South Italian red-figure vases.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
