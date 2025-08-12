
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
           if(res.ok) return res.json();
        }).then(function(data){
        //    console.log(data);
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
           if(res.ok) return res.json();
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

    ValidateLogin : function(loginformdata){

    }
};

export {userApiService};