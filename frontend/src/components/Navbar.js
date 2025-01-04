import { Link } from "react-router-dom";
import { useState } from "react";
import "./css/Navbar.css";

const Navbar = () => {
    const [logout, setlogout] = useState("");
    const handleOnClickLogout = () => {
        setlogout(window.location.href = "./");

    };
    
    const customPrimaryColor = '#81bfda';
    const customSecondaryColor = '#ffffff';
    

    return (
        <>     
            <nav className="navbar sticky-top border-bottom border-body navbar-expand-lg custom-navbar" style={{ backgroundColor: customPrimaryColor}}>
                <div className="container-fluid">
                    
                    <a className="navbar-brand " href="/Home" style={{ color: customSecondaryColor }}>
                        <img src="/duneLogo.png" alt="" width="60" height="50" className="d-inline-block align-text-top mb-3" />
                        <div>
                            Dune state University
                        </div>
                        
                    </a>
            
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item p-2">
                                <button className="btn fs-4 font-monospace custom-logout-btn" onClick={handleOnClickLogout}>LogOut</button> 
                            </li>
                            <li className="nav-item p-2">
                                <button className="btn fs-4" type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill={"white"} className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                </button>
                            </li>    
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;