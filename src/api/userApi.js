import config from "../config/config.json";

const userApiService = {
    // ---------------- Farmer ----------------
    RegisterFarmer: function (farmerFormData) {
        fetch(config.API_HOST_URL + '/users', {
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(farmerFormData),
            mode: "cors",
            method: "POST",
        })
        .then(res => {
            if (res.ok) return res.json();
            throw new Error("Registration failed");
        })
        .then(data => {
            if (data?.id) {
                window.alert("Farmer registration success");
            }
        })
        .catch(error => {
            console.error(error);
            window.alert("Error in farmer registration");
        });
    },

    RegisterMerchant: function (merchantFormData) {
        fetch(config.API_HOST_URL + '/users', {
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(merchantFormData),
            mode: "cors",
            method: "POST",
        })
        .then(res => {
            if (res.ok) return res.json();
            throw new Error("Registration failed");
        })
        .then(data => {
            if (data?.id) {
                window.alert("Merchant registration success");
            }
        })
        .catch(error => {
            console.error(error);
            window.alert("Error in merchant registration");
        });
    },

    LoginFarmer: function (credentials, callback) {
        fetch(`${config.API_HOST_URL}/users?email=${credentials.email}&password=${credentials.password}`, {
            headers: { "Content-Type": "application/json;charset=utf-8" },
            mode: "cors",
            method: "GET"
        })
        .then(res => {
            if (res.ok) return res.json();
            throw new Error("Login failed");
        })
        .then(data => {
            if (data && data.length > 0) {
                if (callback) callback(data[0]);
            } else {
                window.alert("Invalid email or password");
            }
        })
        .catch(error => {
            console.error(error);
            window.alert("Error logging in");
        });
    },

    // ---------------- Products ----------------
    AddProduct: function (productData, callback) {
        fetch(config.API_HOST_URL + '/products', {
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(productData),
            mode: "cors",
            method: "POST",
        })
        .then(res => {
            if (res.ok) return res.json();
            throw new Error("Failed to add product");
        })
        .then(data => {
            if (data?.id) {
                window.alert("Product added successfully");
                if (callback) callback(data);
            }
        })
        .catch(error => {
            console.error(error);
            window.alert("Error adding product");
        });
    },

    getProductsByFarmer: async (farmerId) => {
        const res = await fetch(`${config.API_HOST_URL}/products?farmerId=${farmerId}`);
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
    },

   

    getProductById: async (id) => {
        const res = await fetch(`${config.API_HOST_URL}/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
    },

     deleteProduct: async (productId) => {
        const res = await fetch(`${config.API_HOST_URL}/products/${productId}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Failed to delete product");
        return true;
    },

    updateProductById: async (id, updatedData) => {
        const res = await fetch(`${config.API_HOST_URL}/products/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(updatedData),
        });
        if (!res.ok) throw new Error("Update failed");
        return res.json();
    },

    // ---------------- Users ----------------
    getUserProfile: async (id) => {
        const res = await fetch(`${config.API_HOST_URL}/users/${id}`);
        if (!res.ok) throw new Error("Failed to fetch user profile");
        return res.json();
    },

    getAllFarmers: async () => {
        const res = await fetch(`${config.API_HOST_URL}/users?role_id=Farmer`);
        if (!res.ok) throw new Error("Failed to fetch farmers");
        return res.json();
    },

    getAllMerchants: async () => {
        const res = await fetch(`${config.API_HOST_URL}/users?role_id=Merchant`);
        if (!res.ok) throw new Error("Failed to fetch merchants");
        return res.json();
    }
};

export { userApiService };
