import React from 'react';
import Navbar from "../components/Navbar";
import images from '../static/image/stand.png'
import Icons from "../components/Icons";    

// images
import book_1 from '../static/image/book-1.png'
import book_2 from '../static/image/book-2.png'
import book_3 from '../static/image/book-3.png'
import book_4 from '../static/image/book-4.png'
import book_5 from '../static/image/book-5.png'
import book_6 from '../static/image/book-6.png'
import Footer from "../components/Footer";

function Home(props) {
    return (
        <>
            <Navbar/>
        <section className="home" id="home">

            <div className="row">

                <div className="content">
                    <h3>upto 75% off</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam
                        alias sit necessitatibus, aliquid ex minima at!</p>
                    <a href="#" className="btn">shop now</a>
                </div>

                <div className="swiper books-slider">
                    {/*<Swiper className="swiper-wrapper-carusel">*/}
                    {/*    <SwiperSlide href="#" className="swiper-slide"><img src={book_1} alt=""/></SwiperSlide>*/}
                    {/*    <SwiperSlide href="#" className="swiper-slide"><img src={book_2} alt=""/></SwiperSlide>*/}
                    {/*    <SwiperSlide href="#" className="swiper-slide"><img src={book_3} alt=""/></SwiperSlide>*/}
                    {/*    <SwiperSlide href="#" className="swiper-slide"><img src={book_4} alt=""/></SwiperSlide>*/}
                    {/*    <SwiperSlide href="#" className="swiper-slide"><img src={book_5} alt=""/></SwiperSlide>*/}
                    {/*    <SwiperSlide href="#" className="swiper-slide"><img src={book_6} alt=""/></SwiperSlide>*/}
                    {/*</Swiper>*/}
                    <img src={images} className='stand' alt=""/>
                </div>

            </div>

        </section>


            <Icons/>
            <Footer/>
        </>

);
}

export default Home;