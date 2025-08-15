import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductList({ products }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleThumbnailClick = (thumb) => {
    setSelectedImage(thumb);
    setShowModal(true);
  };

  return (
    <div className="container-fluid p-4">
      {/* Add Product Button */}
      <div className="row mb-3">
        <div className="col">
          <a href="/farmer/add-product" className="btn btn-success">
            + Add Product
          </a>
        </div>
      </div>

      {/* Product List */}
      {products && products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className="row mb-4 border rounded p-3">
            {/* Left Section */}
            <div className="col-md-6 text-center">
              <img
                src={product.image || "/default-image.png"}
                alt="Product"
                className="border mb-3 w-50 h-75 img-fluid rounded"
              />
              <div className="d-flex justify-content-center align-items-center">
                {product.images?.map((thumb, idx) => (
                  <img
                    key={idx}
                    src={thumb}
                    alt="Thumbnail"
                    className="mx-1 img-thumbnail"
                    style={{ width: "70px", cursor: "pointer" }}
                    onClick={() => handleThumbnailClick(thumb)}
                  />
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="col-md-6">
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>
                <strong>Price:</strong> ₹{product.price}
              </p>
              <button className="btn btn-primary me-2">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}

      {/* Image Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={selectedImage} alt="Selected" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
