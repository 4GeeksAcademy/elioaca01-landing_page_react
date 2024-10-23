import { Fragment } from "react";
import React  from "react";
import  Navbar  from "../component/Navbar";
import Jumbotron from "../component/Jumbotron";
import Card from "../component/Card";

export const App = ()=>{
    return (
        <>
            <Navbar/>
                <div className="container">
                    <Jumbotron/>
                    <div className="row py-5">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                     </div>
                </div>
            <div className="footer bg-dark d-flex justify-content-center py-5">
                <h6 className="text-white">Copyrigth @ Your Website 2024</h6>
            </div>
        </>
    )
}