import React from 'react'
import BusImageLoad from './BusImageLoad';
import './index.css';

function BusMoving() {
    return (
        <div>
            <div id="hero">
                <div id="mast">
                    <BusImageLoad />
                    <h1 className="text-xl md:text-2xl leading-tight mt-12">
                        Log up your travel plans here !!
                    </h1>
                </div>
                {/* <div className="arrow"><a data-scroll data-speed="750" data-easing="easeInOutCubic" data-url="false" href="#navigation"><i className="fa fa-angle-down"></i></a></div> */}
                <div id="footer">
                    <p>Made by <a href="">cancepto</a>. <i className="fa fa-facebook"></i> <i className="fa fa-twitter"></i></p>
                </div>
            </div>

        </div>
    )
}

export default BusMoving
