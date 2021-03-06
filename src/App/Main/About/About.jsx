import React from 'react'
import Separator from '../../Separator/Separator'
import pic1 from './about-pic1.jpg'
import pic2 from './about-pic2.jpg'
import ScrollFunc from '../../../Components/ScrollFunc'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section className="about-top">
            <ScrollFunc/>            
            <div className="container">
                <div className="row article fade-in flex-row-between">
                    <div className="box-cut col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                        <img src={pic1} alt="" className="box-img"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5" style={{ paddingLeft: '5%' }}>
                        <h1 className="title-section">Vivamus in diam condimentum maximus</h1>
                        <Separator/>
                        <p>Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra
                        vel. Pellentesque lorem augue, fermentum nec nibh et, fringilla sollicitudin orci. Integer
                                    pharetra magna non ante blandit lobortis. Sed mollis.</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{ paddingLeft: '5%' }}>
                        <h1 className="title-section">Integer pharetra magna non ante blandit lobortis</h1>
                        <Separator/>
                        <p>Libero pharetra vel. Pellentesque lorem augue, fermentum nec nibh et, fringilla sollicitudin
                                    orci. Integer pharetra magna non ante blandit lobortis. Sed mollis.</p>
                        <button className="alt-btn"><Link to="/menu">SEE MENU CART </Link></button>
                    </div>
                    <div className="box-cut col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img src={pic2} alt="" className="box-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About