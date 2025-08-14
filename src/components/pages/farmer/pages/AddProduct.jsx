import React, { useRef } from "react";
import { userApiService } from "../../../../api/userApi";

const AddProduct = () => {
  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const categoryRef = useRef();
  const descRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      quantity: quantityRef.current.value,
      category: categoryRef.current.value,
      description: descRef.current.value,
      farmerId: localStorage.getItem("farmerId") || ""
    };

    // Validation
    if (!productData.name || !productData.price || !productData.quantity || !productData.category) {
      alert("Please fill in all required fields");
      return;
    }

    // Send to API
    userApiService.AddProduct(productData, (data) => {
      console.log("Product added:", data);

      // Reset fields
      nameRef.current.value = "";
      priceRef.current.value = "";
      quantityRef.current.value = "";
      categoryRef.current.value = "";
      descRef.current.value = "";
    });
  };

  return (
    <div className="add-product-page p-4">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>

        <div>
          <label className="block font-medium">Product Name *</label>
          <input ref={nameRef} type="text" className="border rounded p-2 w-full" placeholder="Enter product name" required />
        </div>

        <div>
          <label className="block font-medium">Price (₹) *</label>
          <input ref={priceRef} type="number" className="border rounded p-2 w-full" placeholder="Enter price" required />
        </div>

        <div>
          <label className="block font-medium">Quantity *</label>
          <input ref={quantityRef} type="number" className="border rounded p-2 w-full" placeholder="Enter quantity" required />
        </div>

        <div>
          <label className="block font-medium">Category *</label>
          <input ref={categoryRef} type="text" className="border rounded p-2 w-full" placeholder="e.g. Vegetables, Fruits, Grains" required />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea ref={descRef} className="border rounded p-2 w-full" placeholder="Enter product description" />
        </div>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
