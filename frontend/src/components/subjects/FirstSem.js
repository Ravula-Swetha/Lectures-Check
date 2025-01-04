import React from "react";
import { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "../css/sem.css";
import COA from "./Subject/COA";
import ADE from "./Subject/ADE";
import IML from "./Subject/IML";

const FirstSem = () => {
    const[nextpage,setnextpage] = useState(" ");

    const hangleNextPage1 = ()=>{
        window.location.href="/COA"
        
    }
    const hangleNextPage2 = () => {
        window.location.href = "/ADE"

    }
    const hangleNextPage3 = () => {
        window.location.href = "/IML"

    }


    return ( 
        <>
        <Navbar/>
        <Sidebar/>
        <div className="services parent">
            <div className="row roww">
                <div className="column colomn">
                    <div className="card cards">
                            <ul class="list-unstyled lists " style={{ fontSize: "105%", fontWeight: "bold" }}>
                               <li><h5>COMPUTER ORGANIZATION AND ARCHITECTURE</h5></li>
                                <li><p>Please click on the button to upload the Notes</p></li>
                                <button className="btn btn-lg mt-1 custom-btn" onClick={hangleNextPage1} >Click</button>
                            </ul>
                    </div>
                </div>
            </div>

        </div>
            <div className="services parent">
                <div className="row roww">
                    <div className="column colomn">
                        <div className="card cards">
                            <ul class="list-unstyled lists " style={{ fontSize: "105%", fontWeight: "bold" }}>
                                <li><h5>Analog and Digital Electronics</h5></li>
                                <li><p>Please click on the button to upload the Notes</p></li>
                                <button className="btn btn-lg mt-1 custom-btn" onClick={hangleNextPage2} >Click</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services parent">
                <div className="row roww">
                    <div className="column colomn">
                        <div className="card cards">
                            <ul class="list-unstyled lists " style={{ fontSize: "105%", fontWeight: "bold" }}>
                                <li><h5>Introduction to Machine Learning </h5></li>
                                <li><p>Please click on the button to upload the Notes</p></li>

                                <button className="btn btn-lg mt-1 custom-btn" onClick={hangleNextPage3} >Click</button>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
     );
}
 
export default FirstSem;