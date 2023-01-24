import * as React from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import LandingPageComponent from '../../components/LandingPageComponent/LandingPageComponent';
import Navbar from '../../components/NavbarMain/Navbar'; 
import PricingComponent from '../../components/PricingComponent/PricingComponent';

export default function LandingPage() {
    
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/pricing" element={<PricingComponent />} />
                <Route path="/"  element={<LandingPageComponent />} />
            </Routes>
            <FooterComponent />
        </div>
    )
}