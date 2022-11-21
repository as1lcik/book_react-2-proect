import React from 'react';
import Navbar from "../components/Navbar";
import {FaStar, FaStarHalfAlt} from 'react-icons/fa'


// images
import book_1 from '../static/image/book-1.png'
import book_2 from '../static/image/book-2.png'
import book_3 from '../static/image/book-3.png'
import book_4 from '../static/image/book-4.png'
import book_6 from '../static/image/book-6.png'
import book_7 from '../static/image/book-7.png'
import book_8 from '../static/image/book-8.png'
import book_9 from '../static/image/book-9.png'

import deal from '../static/image/deal-img.jpg'

import Footer from "../components/Footer";

function Arrivals(props) {
    return (
        <div>
            <Navbar/>

            <section className="arrivals" id="arrivals">

                <h1 className="heading"><span>new arrivals</span></h1>

                <div className="swiper arrivals-slider">

                    <div className="swiper-wrapper">

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={book_1} alt=""/>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStarHalfAlt/></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={book_2} alt=""/>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStarHalfAlt/></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={book_3} alt=""/>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStarHalfAlt/></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={book_4} alt=""/>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                   <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStarHalfAlt/></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={book_6} alt=""/>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStarHalfAlt/></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={book_7} alt=""/>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStarHalfAlt/></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={book_8} alt=""/>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStarHalfAlt/></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={book_9} alt=""/>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStar/></i>
                                    <i><FaStarHalfAlt/></i>
                                </div>
                            </div>
                        </a>

                    </div>

                </div>
            </section>

            <section className="deal">

                <div className="content">
                    <h3>deal of the day</h3>
                    <h1>upto 50% off</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore
                        tempora quaerat at fuga dolorum natus velit.</p>
                    <a href="#" className="btn">shop now</a>
                </div>

                <div className="image">
                    <img src={deal} alt=""/>
                </div>

            </section>

            <Footer/>
        </div>
    );
}

export default Arrivals;