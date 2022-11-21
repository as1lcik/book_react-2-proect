import React from 'react';
import Navbar from "../components/Navbar";
import {FaSearch, FaEye, FaArrowLeft} from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";

// images
import book_1 from '../static/image/book-1.png'
import book_2 from '../static/image/book-2.png'
import book_3 from '../static/image/book-3.png'
import book_4 from '../static/image/book-4.png'
import book_5 from '../static/image/book-5.png'
import book_6 from '../static/image/book-6.png'
import book_7 from '../static/image/book-7.png'
import book_8 from '../static/image/book-8.png'
import book_9 from '../static/image/book-9.png'
import book_10 from '../static/image/book-10.png'
import Footer from "../components/Footer";

function Featured(props) {
    return (
        <div>
            <Navbar/>

            <section className="featured" id="featured">

                <h1 className="heading"><span>featured books</span></h1>

                <div className="swiper featured-slider">



                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#"><FaArrowLeft/></a>
                                <a href="#"><FaSearch/></a>
                                <a href="#"><FaEye/></a>
                            </div>
                            <div className="image">
                                <img src={book_1} alt=""/>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>



                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#"><FaArrowLeft/></a>
                                <a href="#"><FaSearch/></a>
                                <a href="#"><FaEye/></a>
                            </div>
                            <div className="image">
                                <img src={book_2} alt=""/>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#"><FaArrowLeft/></a>
                                <a href="#"><FaSearch/></a>
                                <a href="#"><FaEye/></a>
                            </div>
                            <div className="image">
                                <img src={book_3} alt=""/>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#"><FaArrowLeft/></a>
                                <a href="#"><FaSearch/></a>
                                <a href="#"><FaEye/></a>
                            </div>
                            <div className="image">
                                <img src={book_4} alt=""/>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                            <a href="#"><FaArrowLeft/></a>
                                <a href="#"><FaSearch/></a>
                                <a href="#"><FaEye/></a>
                            </div>
                            <div className="image">
                                <img src={book_5} alt=""/>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                            <a href="#"><FaArrowLeft/></a>
                                <a href="#"><FaSearch/></a>
                                <a href="#"><FaEye/></a>
                            </div>
                            <div className="image">
                                <img src={book_6} alt=""/>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#"><FaArrowLeft/></a>
                                <a href="#"><FaSearch/></a>
                                <a href="#"><FaEye/></a>
                            </div>
                            <div className="image">
                                <img src={book_7} alt=""/>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                            <a href="#"><FaArrowLeft/></a>
                                <a href="#"><FaSearch/></a>
                                <a href="#"><FaEye/></a>
                            </div>
                            <div className="image">
                                <img src={book_8} alt=""/>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#"><FaArrowLeft/></a>
                                <a href="#"><FaSearch/></a>
                                <a href="#"><FaEye/></a>
                            </div>
                            <div className="image">
                                <img src={book_9} alt=""/>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#"><FaArrowLeft/></a>
                                <a href="#"><FaSearch/></a>
                                <a href="#"><FaEye/></a>
                            </div>
                            <div className="image">
                                <img src={book_10} alt=""/>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                </div>

            </section>
            <section className="newsletter">

                <form action="">
                    <h3>Subtitle for lasted updates</h3>
                    <input type="email" placeholder='enter your email' className='box'/>
                    <input type="submit" value='subscribe' className='btn'/>
                </form>
            </section>
            <Footer/>
        </div>
    );
}

export default Featured;