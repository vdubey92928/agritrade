
import config from "../config/config.json";



const userApiService ={

    RegisterFarmer : function(farmerFromData){

        let api = fetch(config.API_HOST_URL+ '/users',{
            headers:{
                "content-type" : "application/json;charset=utf-8"
            },
            body:JSON.stringify(farmerFromData),
            mode:"cors",
            method:"POST",
        });
        api.then(function(res){
           if(res.ok()) return res.json();
        }).then(function(data){
           console.log(data);
           if(data?.id){
            window.alert("farmer registartion succes");
           }
        }).catch(function(error){
        console.log('error');
        window.alert("error in farmer registartion ");
        });
    },



    RegisterMerchant :function(merchantFormData) {
    fetch(config.API_HOST_URL + '/users', {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(merchantFormData),
        mode: "cors",
        method: "POST",
    })
    .then(function(res) {
        if (res.ok) {  // ✅ FIXED: no ()
            return res.json();
        } else {
            throw new Error(`Server returned ${res.status}`);
        }
    })
    .then(function(data) {
        if (data?.id) {
            window.alert("Merchant registration success");
        } else {
            window.alert("Merchant registration failed");
        }
    })
    .catch(function(error) {
        console.error(error); // log the actual error
        window.alert("Error in merchant registration");
    });
},

    LoginFarmer: function(credentials, callback) {
        fetch(
        `${config.API_HOST_URL}/users?email=${credentials.email}&password=${credentials.password}`,
        {
        headers: {
            "content-type": "application/json;charset=utf-8"
        },
        mode: "cors",
        method: "GET"
        }
    )
        .then(res => {
        if (res.ok) return res.json();
        throw new Error("Network response was not ok");
        })
        .then(data => {
        // console.log("Login response:", data);
        if (data && data.length > 0) {
            console.log(data);
            if (callback) callback(data[0]); // pass first matching user 
        } else {
            window.alert("Invalid email or password");
        }
        })
        .catch(error => {
        console.error("Login error:", error);
        window.alert("Error logging in");
        });
    },




     AddProduct: function (productData, callback) {
        fetch(config.API_HOST_URL + '/products', {
            headers: {
                "content-type": "application/json;charset=utf-8"
            },
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
                console.error("Add product error:", error);
                window.alert("Error adding product");
            });
    }
};



    export const getProductsByFarmer = async (farmerId) => {
        const response = await fetch(`${config.API_HOST_URL}/products?farmerId=${farmerId}`);
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
    };

// Delete product by ID
export const deleteProduct = async (productId) => {
    const response = await fetch(`${config.API_HOST_URL}/products/${productId}`, {
        method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete product");
    return true;
};
//get prodcut by id
export const getProductById = async (id) => {
  const res = await fetch(`${config.API_HOST_URL}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

// Update a product by ID
export const updateProductById = async (id, updatedData) => {
  const res = await fetch(`${config.API_HOST_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updatedData),
  });
  if (!res.ok) throw new Error("Update failed");
  return res.json();
};


//get faqrmer details
export const getUserProfile = async (Id) => {
  const res = await fetch(`${config.API_HOST_URL}/users/${Id}`);
  if (!res.ok) throw new Error("Failed to fetch User profile");
  return res.json();
};



// Get all farmers
export const getAllFarmers = async () => {
  try {
    const res = await fetch(`${config.API_HOST_URL}/users?role_id=Farmer`);
    if (!res.ok) throw new Error("Failed to fetch farmers");
    return await res.json();
  } catch (error) {
    console.error("Error fetching farmers:", error);
    throw error;
  }
};

// Get all merchants
export const getAllMerchants = async () => {
  try {
    const res = await fetch(`${config.API_HOST_URL}/users?role_id=Merchant`);
    if (!res.ok) throw new Error("Failed to fetch merchants");
    return await res.json();
  } catch (error) {
    console.error("Error fetching merchants:", error);
    throw error;
  }
};



export { userApiService };