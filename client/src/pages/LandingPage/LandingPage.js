import * as React from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
import FAQComponent from '../../components/FAQComponent/FAQComponent';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import LandingPageComponent from '../../components/LandingPageComponent/LandingPageComponent';
import Navbar from '../../components/NavbarMain/Navbar'; 
import PricingComponent from '../../components/PricingComponent/PricingComponent';
import PrivacyPolicyComponent from '../../components/PrivacyPolicyComponent/PrivacyPolicyComponent';
import SupportComponent from '../../components/SupportComponent/SupportComponent';
import TermsOfServiceComponent from '../../components/TermsOfServiceComponent/TermsOfServiceComponent';
import DemoComponent from '../../components/DemoComponent/DemoComponent';

export default function LandingPage() {
    
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/frequentlyAskedQuestions" element={<FAQComponent />} />
                <Route path="/pricing" element={<PricingComponent />} />
                <Route path="/privacyPolicy" element={<PrivacyPolicyComponent />} />
                <Route path="/support" element={<SupportComponent />} />
                <Route path="/termsOfService" element={<TermsOfServiceComponent />} />
                <Route path="/"  element={<LandingPageComponent />} />
            </Routes>
            <FooterComponent />
        </div>
    )
}