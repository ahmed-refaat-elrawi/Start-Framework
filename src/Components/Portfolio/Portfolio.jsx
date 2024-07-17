/*eslint-disable*/
import { useState } from "react";
import icon1 from "./images/poert1.png"; 
import icon2 from "./images/port2.png";
import icon3 from "./images/port3.png";
import "./Portfolio.css";

function Portfolio() {
    const [clickedIcon, setClickedIcon] = useState("");

    const iconClickHandler = (icon) => {
        setClickedIcon(icon);
    };

    const closeModal = () => {
        setClickedIcon("");
    };

    return (
        <>
            <div className="portfolio p-5 ">
                <h1 className="text-uppercase text-center fs-1 fw-bolder">PORTFOLIO COMPONENT</h1>
                <div className="shapes d-flex gap-3 justify-content-center align-items-center mb-2">
                    <div className="line bg-primary-color"></div>
                    <div className="fa-solid fa-star my-3 primary-color"></div>
                    <div className="line bg-primary-color"></div>
                </div>
                <div className="products container m-auto row g-5">
                    {[icon1, icon2, icon3, icon1, icon2, icon3].map((icon, index) => (
                        <div
                            key={index}
                            onClick={() => iconClickHandler(icon)}
                            className="product col-lg-4 col-md-6"
                        >
                            <div className="product__container position-relative">
                                <img src={icon} alt="" className="product__img w-100 rounded-4 overflow-hidden" />
                                <div className="product__layer position-absolute w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center rounded-4 z-1">
                                    <i className="product__layer__icon fa-solid fa-plus text-white"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {clickedIcon && (
                <div className="my-modal d-flex justify-content-center align-items-center" onClick={closeModal}>
                    <img
                        className="my-modal__img"
                        src={clickedIcon}
                        alt=""
                        onClick={(e) => e.stopPropagation()} 
                    />
                </div>
            )}
        </>
    );
}

export default Portfolio;
