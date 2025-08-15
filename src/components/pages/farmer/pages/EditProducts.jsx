import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { userApiService } from "../../../../api/userApi";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    images: [], // existing images
  });

  const [newImages, setNewImages] = useState([]); // newly uploaded files
  const [previewNewImages, setPreviewNewImages] = useState([]); // preview for new images

  // Fetch product details
  useEffect(() => {
    (async () => {
      try {
        const data = await userApiService.getProductById(id);
        setProduct({
          ...data,
          images: data.images || [],
        });
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    })();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handle new image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setNewImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewNewImages(previews);
  };

  // Remove existing image
  const handleRemoveExistingImage = (index) => {
    setProduct((prev) => {
      const updatedImages = [...prev.images];
      updatedImages.splice(index, 1);
      return { ...prev, images: updatedImages };
    });
  };

  // Remove newly selected image before upload
  const handleRemoveNewImage = (index) => {
    setNewImages((prev) => prev.filter((_, i) => i !== index));
    setPreviewNewImages((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedData = { ...product };

      // Convert new images to base64
      if (newImages.length > 0) {
        const imagePromises = newImages.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (err) => reject(err);
          });
        });

        updatedData.images = [...(product.images || []), ...(await Promise.all(imagePromises))];
      }

      await userApiService.updateProductById(id, updatedData);
      alert("Product updated successfully!");
      navigate("/farmer/manage-products");
    } catch (err) {
      console.error("Error updating product:", err);
      alert("Error updating product");
    }
  };

  return (
    <div className="container p-4">
      <h2 className="mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="form-control"
            rows={3}
            required
          />
        </div>

        {/* Existing Images */}
        {product.images.length > 0 && (
          <div className="mb-3">
            <h5>Existing Images</h5>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Preview</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {product.images.map((src, idx) => (
                  <tr key={idx}>
                    <td>
                      <img
                        src={src}
                        alt={`existing-${idx}`}
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemoveExistingImage(idx)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* New Images */}
        <div className="mb-3">
          <label className="form-label">Upload New Images</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="form-control"
          />
        </div>

        {previewNewImages.length > 0 && (
          <div className="mb-3">
            <h5>New Image Preview</h5>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Preview</th>
                  <th>Filename</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {previewNewImages.map((src, idx) => (
                  <tr key={idx}>
                    <td>
                      <img
                        src={src}
                        alt={`preview-${idx}`}
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                      />
                    </td>
                    <td>{newImages[idx]?.name}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemoveNewImage(idx)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <button type="submit" className="btn btn-success me-2">
          Update Product
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/farmer/manage-products")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
