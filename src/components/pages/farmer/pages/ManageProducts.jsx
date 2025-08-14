import React, { useEffect, useState } from "react";
import { getProductsByFarmer, deleteProduct } from "../../../../api/userApi";
import { useNavigate } from "react-router-dom";

const ManageProducts = () => {
    
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const farmerId = localStorage.getItem("farmerId");

    useEffect(() => {
        if (!farmerId) {
            alert("Farmer ID not found. Please log in again.");
            navigate("/login");
            return;
        }
        fetchProducts();
    }, [farmerId]);

    const fetchProducts = async () => {
        try {
            const data = await getProductsByFarmer(farmerId);
            setProducts(data);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await deleteProduct(id);
                setProducts(products.filter((p) => p.id !== id)); // Remove from UI
            } catch (err) {
                console.error("Delete failed:", err);
            }
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Manage Products</h2>
            {products.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>{p.category}</td>
                                <td>{p.quantity}</td>
                                <td>
                                    <button
                                        style={{ marginRight: "10px", background: "orange", color: "white" }}
                                        onClick={() => navigate(`/farmer_dashboard/edit-product/${p.id}`)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        style={{ background: "red", color: "white" }}
                                        onClick={() => handleDelete(p.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ManageProducts;
