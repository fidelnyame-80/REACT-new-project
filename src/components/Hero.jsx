import React from 'react'
import { heroSection, heroImageStyle, heroOverlay, heroDivContainer, heroDivContent, h1Style, pStyle, buttonStyle } from './heroStyles'

const Hero = () => {
    return (
        <>
            <section className={heroSection} style={heroImageStyle}>
                <div className={heroOverlay}></div>
                <div className={heroDivContainer}>
                    <div className={heroDivContent}>
                        <h1 className={h1Style}>
                            Modern Dentistry in a Calm Environment
                        </h1>
                        <p className={pStyle}>
                            A small river named Duden flows by their place, providing a serene backdrop for your dental care.
                        </p>
                        <button className={buttonStyle}>
                            Make an Appointment
                        </button>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero