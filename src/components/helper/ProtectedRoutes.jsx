import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({children ,endpoint , message}) {
    const session_data = localStorage.getItem("session.data");

    if(session_data == null ){
        return <Navigate to={endpoint + "?" + message} replace />;
    }
    return children;
};

export default ProtectedRoutes;