import React from "react";

const SingleProduct = (props) => {
  return (
    <div className="main-wrapper">
      <div className="container main-section single-product">
        <h2>Product</h2>
        <hr />
        <div className="item">
          <div className="row">
            <div className="col-12 col-md-4">
              <img src={props.location.image} class="img-fluid" alt="image1"></img>
            </div>
            <div className="col-12 col-md-8 d-flex flex-column col-details">
              <h3>{props.location.name}</h3>
              <p>
                The neck-amphora is not normally found in Apulian or Lucanian.
                There is an early Apulian example, from the very beginning of
                the fabric, by the Painter of the Berlin Dancing Girl (Lecce 571
                = RVAp I, p. 7, no. 13), presumably based on an Attic prototype,
                but thereafter it is the amphora of panathenaic shape which
                comes into general use.
              </p>
              <div className="row mt-auto">
                <div className="col-auto">
                  <i class="fa fa-map-marker" aria-hidden="true"></i> {props.location.location}
                </div>
                <div className="col-auto">
                  <i class="fa fa-calendar" aria-hidden="true"></i> {props.location.year}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
