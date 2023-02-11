import React from "react";
import {
    Route,
    Routes,
} from "react-router-dom";
import Basic from "../Pages/Basic";
import Dashboard from "../Pages/Dashboard";
import Form from "../Pages/Form";
import Hook from "../Pages/Hook";
import ReactRedux from "../Pages/ReactRedux";
import Translate from "../Pages/Translate";
import Other from "../Pages/Other";
import Home from "../Pages/Home";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/basic" element={<Basic />}></Route>
            <Route path="/hook" element={<Hook />}></Route>
            <Route path="/translate" element={<Translate />}></Route>
            <Route path="/react-redux" element={<ReactRedux />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/other" element={<Other />}></Route>
        </Routes >
    )
}

export default AllRoutes;
