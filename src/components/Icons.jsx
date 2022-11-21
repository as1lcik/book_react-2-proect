import React from 'react';
import {FaShippingFast, FaLock, FaRedoAlt, FaHeadset} from 'react-icons/fa'

function Icons(props) {
    return (
        <section className="icons-container">

            <div className="icons">
                <i> <FaShippingFast/></i>
                <div className="content">
                    <h3>free shipping</h3>
                    <p>order over $100</p>
                </div>
            </div>

            <div className="icons">
                <i> <FaLock/></i>
                <div className="content">
                    <h3>secure payment</h3>
                    <p>100 secure payment</p>
                </div>
            </div>

            <div className="icons">
                <i> <FaRedoAlt/></i>
                <div className="content">
                    <h3>easy returns</h3>
                    <p>10 days returns</p>
                </div>
            </div>

            <div className="icons">
                <i> <FaHeadset/></i>
                <div className="content">
                    <h3>24/7 support</h3>
                    <p>call us anytime</p>
                </div>
            </div>

        </section>

    );
}

export default Icons;