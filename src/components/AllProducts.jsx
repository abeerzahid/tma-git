import React, { useState } from "react";
import products from "./product-data";
import { Link } from "react-router-dom";

function AllProducts() {
  const dataList = products;

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);

  const excludeColumns = ["id", "image"];

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="container main-section allproducts">
          <h2>Gallery</h2>
          <hr />

          <div className="form-group">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Type here to search.."
            className="form-control input-search"
            value={searchText}
            onChange={(e) => handleChange(e.target.value)}
          />
          </div>
       
          {data.map((product, i) => {
            return (
              <div>
                <Link
                  to={{
                    pathname: "/SingleProduct",
                    name: product.name,
                    image: product.image,
                    location: product.location,
                    year: product.year,
                  }}
                >
                <div className="single-content products">
                  <div key={i}>
                    <div className="row">
                      <div className="col-auto">
                        <img
                          src={product.image}
                          class="img-fluid shadow-sm rounded"
                          alt="image1"
                        ></img>
                      </div>
                      <div className="col d-flex flex-column">
                        <h3>{product.name}</h3>
                        <p>
                          Lorem ipsum dolor sit amet, tempor prodesset eos no.
                          Temporibus necessitatibus sea ei, at tantas oporteat
                          nam. Lorem ipsum dolor sit amet, tempor prodesset eos
                          no.
                        </p>
                        <div className="row mt-auto">
                          <div className="col-auto">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                            {product.location}
                          </div>
                          <div className="col-auto">
                            <i class="fa fa-calendar" aria-hidden="true"></i>{" "}
                            {product.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
                {data.length === 0 && <span>No records found to display!</span>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
