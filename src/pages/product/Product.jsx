import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import Charts from "../../components/charts/Charts";
import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitle-container">
        <h1 className="product-title">Product</h1>
        <Link to="/newProduct">
          <button className="productAdd-btn">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTop-left">
          <Charts
            data={productData}
            dataKey="Sales"
            title="Sales Performance"
          />
        </div>
        <div className="productTop-right">
          <div className="productInfo-top">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="productInfo-img"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfo-bottom">
            <div className="productInfo-item">
              <span className="productInfo-key">id:</span>
              <span className="productInfo-value">123</span>
            </div>

            <div className="productInfo-item">
              <span className="productInfo-key">sales:</span>
              <span className="productInfo-value">4248</span>
            </div>

            <div className="productInfo-item">
              <span className="productInfo-key">active:</span>
              <span className="productInfo-value">yes</span>
            </div>

            <div className="productInfo-item">
              <span className="productInfo-key">in stock:</span>
              <span className="productInfo-value">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productForm-left">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpods" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productForm-right">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="productUpload-img"
              />
              <label htmlFor="file">
                <Publish style={{ cursor: "pointer" }} />
              </label>
              <input type="file" style={{ display: "none" }} id="file" />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
