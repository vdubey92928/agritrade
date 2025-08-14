
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



    RegisterMerchant : function(merchnatFormData){

        let api = fetch(config.API_HOST_URL+ '/users',{
            headers:{
                "content-type" : "application/json;charset=utf-8"
            },
            body:JSON.stringify(merchnatFormData),
            mode:"cors",
            method:"POST",
        });
        api.then(function(res){
           if(res.ok()){
             return res.json();
           }
        }).then(function(data){
        //    console.log(data);
           if(data?.id){
            window.alert("Merchant registartion succes");
           }
        }).catch(function(error){
        console.log('error');
        window.alert("error in merchant registartion ");
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
export const getFarmerProfile = async (farmerId) => {
  const res = await fetch(`${config.API_HOST_URL}/users/${farmerId}`);
  if (!res.ok) throw new Error("Failed to fetch farmer profile");
  return res.json();
};


export { userApiService };