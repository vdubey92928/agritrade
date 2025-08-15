import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { userApiService } from "../../../../api/userApi";
import agriTradeLogo from "../../../../assets/images/AgriTradeLogo.png";
import { useNavigate } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const farmerSession = JSON.parse(localStorage.getItem("session.data"));
      const res = await userApiService.getProductsByFarmer(farmerSession.id);
      const data = await res;
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Add this function inside ManageProducts component
const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this product?")) return;

  try {
    await userApiService.deleteProduct(id); // call your delete API
    alert("Product deleted successfully!");
    fetchProducts(); // refresh product list
  } catch (err) {
    console.error("Error deleting product:", err);
    alert("Failed to delete product");
  }
};


  const handleThumbnailClick = (img) => {
    setSelectedImage(img);
    setShowModal(true);
  };

  return (
    <div
      className="container-fluid p-4"
      style={{ maxHeight: "100vh", overflowY: "auto" }}
    >
      {/* Add Product Button */}
      <div className="row mb-3">
        <div className="col">
          <a href="/farmer/add-product" className="btn btn-success">
            + Add Product
          </a>
        </div>
      </div>

      {/* Product List - 2 per row */}
      <div className="row">
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <div className="col-md-6 mb-4" key={index}>
              {/* Product Card */}
              <div
                className="border rounded p-3 d-flex align-items-center h-100"
                style={{ minHeight: "200px" }}
              >
                {/* Image Section */}
                <div className="me-3 text-center">
                  <img
                    src={product.image || agriTradeLogo}
                    alt={product.name}
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      border: "1px solid #ddd",
                    }}
                  />
                  <div className="d-flex justify-content-center align-items-center mt-2 flex-wrap">
                    {product.images?.map((thumb, idx) => (
                      <img
                        key={idx}
                        src={thumb}
                        alt="Thumbnail"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          cursor: "pointer",
                          margin: "0 4px",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                        }}
                        onClick={() => handleThumbnailClick(thumb)}
                      />
                    ))}
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-grow-1">
                  <h5>{product.name}</h5>
                  <p>{product.description}</p>
                  <p>
                    <strong>Price:</strong> ₹{product.price}
                  </p>
                  <button
                        className="btn btn-primary me-2"
                        onClick={() => navigate(`/farmer/edit-product/${product.id}`)}
                        >
                        Edit
                        </button>



                  <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(product.id)}
                        >
                        Delete
                        </button>

                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {/* Image Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-body text-center">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="img-fluid rounded"
                  style={{ maxHeight: "80vh", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
