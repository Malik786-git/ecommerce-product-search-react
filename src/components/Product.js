import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Product = () => {
  const [loader, setLoader] = useState(false);
  const [product, setProduct] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {

    setLoader(true);
    fetch(`https://fakestoreapi.com/products?limit=4`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoader(false);
      });
      
  }, []);

  console.log(product);
  return (
    <div className="container-fluid">
      <div className="search">
        <input
          type="search"
          name="search"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          id="searchId"
          placeholder="Search Product"
        />
        <label htmlFor="searchId">
          <i class="fa fa-search" aria-hidden="true"></i>
        </label>
      </div>

      <div className="product-container">
        <div className="container p-5">
          <div className="row">
            {
            loader ? (
             <div class="spinner-grow mx-auto" role="status">
             <span class="sr-only">Loading...</span>
           </div>
            ) : (
              ""
            )
            }
            {
             product !== '' &&
             product !== undefined &&
             product !== null &&
             product.length > 0     
            ?
            product
              .filter((item) =>
                item.title.toLowerCase().includes(searchInput.toLowerCase())
              )
              .map((data) => (

                <>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-12 my-3" >
                    <Link className="product-card-link" to={`single?id=${data.id}`}>
                    <Card className="product-card" style={{ width: "18rem", height: "500px" }}>
                      <Card.Img variant="top" src={data.image} height='300px'/>
                      <Card.Body className="product-desc" >
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">$ {data.price}</Card.Subtitle>
                        <Card.Text >{data.description}</Card.Text>
                      </Card.Body>
                    </Card>
                    </Link>
                  </div>
                </>
              ))
            : ""
            }
          </div>
        </div>
      </div>
    </div>
  );
};



export default Product;