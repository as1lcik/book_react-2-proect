import React from 'react';
import images from '../static/image/worldmap.png'
import {FaMapMarkerAlt, FaArrowRight, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaTelegram} from 'react-icons/fa'

function Footer(props) {
    return (
        <section className="footer">

            <div className="box-container">

                <div className="box">
                    <h3>our locations</h3>
                    <a href="#"> <i><FaMapMarkerAlt/></i> india </a>
                    <a href="#"> <i><FaMapMarkerAlt/></i> USA </a>
                    <a href="#"> <i><FaMapMarkerAlt/></i> russia </a>
                    <a href="#"> <i><FaMapMarkerAlt/></i> france </a>
                    <a href="#"> <i><FaMapMarkerAlt/></i> japan </a>
                    <a href="#"> <i><FaMapMarkerAlt/></i> africa </a>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <a href="#"> <i><FaArrowRight/></i> home </a>
                    <a href="#"> <i><FaArrowRight/></i> featured </a>
                    <a href="#"> <i><FaArrowRight/></i> arrivals </a>
                    <a href="#"> <i><FaArrowRight/></i> reviews </a>
                    <a href="#"> <i><FaArrowRight/></i> blogs </a>
                </div>

                <div className="box">
                    <h3>extra links</h3>
                    <a href="#"> <i><FaArrowRight/></i> account info </a>
                    <a href="#"> <i><FaArrowRight/></i> ordered items </a>
                    <a href="#"> <i><FaArrowRight/></i> privacy policy </a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="#"> <i><FaPhoneAlt/></i> +998 (90) 510-83-54 </a>
                    <a href="#"> <i><FaEnvelope/></i> asilbekradjabov06@gmail.com </a>
                    <img src={images} className='map' alt=""/>
                </div>

            </div>

            <div className="credit"> created by <span>as1lcik_web</span> | all rights reserved!</div>

        </section>
    );
}

export default Footer;