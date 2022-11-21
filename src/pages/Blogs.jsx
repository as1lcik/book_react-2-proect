import React from 'react';
import Navbar from "../components/Navbar";

// images

import blog_1 from '../static/image/blog-1.jpg'
import blog_2 from '../static/image/blog-2.jpg'
import blog_3 from '../static/image/blog-3.jpg'
import blog_4 from '../static/image/blog-4.jpg'
import Footer from "../components/Footer";

function Blogs(props) {
    return (
        <div>
            <Navbar/>

            <section className="blogs" id="blogs">

                <h1 className="heading"><span>our blogs</span></h1>

                <div className="swiper blogs-slider">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide box">
                            <div className="image">
                                <img src={blog_1} alt=""/>
                            </div>
                            <div className="content">
                                <h3>blog title goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="image">
                               <img src={blog_2} alt=""/>
                            </div>
                            <div className="content">
                                <h3>blog title goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="image">
                                <img src={blog_3} alt=""/>
                            </div>
                            <div className="content">
                                <h3>blog title goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="image">
                                <img src={blog_4} alt=""/>
                            </div>
                            <div className="content">
                                <h3>blog title goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Blogs;