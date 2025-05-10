import React from 'react'
import Navbar from '../../Components/Navbar'
import BeforeAfterSlider from '../../Components/BeforeAfterSlider'
import Footer from '../../Components/Footer'
import KidsSlider from '../../Components/KidsSlider'

export default function About() {
    return (
        <div>
            <Navbar activeAbout="active" />

            <BeforeAfterSlider />
            <KidsSlider />

            <Footer />
        </div >
    )
}
