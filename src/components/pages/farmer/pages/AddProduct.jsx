import React, { useRef, useState } from "react";
import { userApiService } from "../../../../api/userApi";

const AddProduct = () => {
  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const categoryRef = useRef();
  const descRef = useRef();
  const [imageBase64, setImageBase64] = useState("");

  // Convert image to Base64
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const farmerSession = JSON.parse(localStorage.getItem("session.data"));

    const productData = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      quantity: quantityRef.current.value,
      category: categoryRef.current.value,
      description: descRef.current.value,
      image: imageBase64,
      farmerId: farmerSession.id || ""
    };

    if (!productData.name || !productData.price || !productData.quantity || !productData.category || !productData.image) {
      alert("Please fill in all required fields and upload an image");
      return;
    }

    console.log("Submitting product data:", productData);

    userApiService.AddProduct(productData, (data) => {
      console.log("Product added successfully:", data);
      nameRef.current.value = "";
      priceRef.current.value = "";
      quantityRef.current.value = "";
      categoryRef.current.value = "";
      descRef.current.value = "";
      setImageBase64("");
    });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="p-2 font-medium">Product Name *</td>
              <td className="p-2">
                <input ref={nameRef} type="text" className="border rounded p-2 w-full" placeholder="Enter product name" required />
              </td>
            </tr>

            <tr>
              <td className="p-2 font-medium">Price (₹) *</td>
              <td className="p-2">
                <input ref={priceRef} type="number" className="border rounded p-2 w-full" placeholder="Enter price" required />
              </td>
            </tr>

            <tr>
              <td className="p-2 font-medium">Quantity *</td>
              <td className="p-2">
                <input ref={quantityRef} type="number" className="border rounded p-2 w-full" placeholder="Enter quantity" required />
              </td>
            </tr>

            <tr>
              <td className="p-2 font-medium">Category *</td>
              <td className="p-2">
                <select ref={categoryRef} className="border rounded p-2 w-full" required>
                  <option value="">-- Select Category --</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Fruits">Fruits</option>
                  <option value="Grains">Grains</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Other">Other</option>
                </select>
              </td>
            </tr>

            <tr>
              <td className="p-2 font-medium">Description</td>
              <td className="p-2">
                <textarea ref={descRef} className="border rounded p-2 w-full" placeholder="Enter product description" />
              </td>
            </tr>

            <tr>
              <td className="p-2 font-medium">Upload Image *</td>
              <td className="p-2">
                <input type="file" accept="image/*" onChange={handleImageChange} className="border rounded p-2 w-full" required />
                {imageBase64 && (
                  <img src={imageBase64} alt="Preview" className="mt-2 h-20 border" />
                )}
              </td>
            </tr>

            <tr>
              <td colSpan="2" className="p-2 text-center">
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Add Product
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddProduct;
