import * as React from 'react';
import {
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import BlogPostComponent from "../../components/BlogPostComponent/BlogPostComponent";
import ParaphrasingComponent from "../../components/ParaphrasingComponent/ParaphrasingComponent";
import NavbarWebApp from "../../components/NavbarWebApp/NavbarWebApp";
import CopyWriter from "../../components/CopyWriterComponent/CopyWriter";
import ProductDescriptionComponent from '../../components/ProductDescriptionComponent/ProductDescriptionComponent';
import EmailMarketingComponent from '../../components/EmailMarketingComponent/EmailMarketingComponent';
import AppMainPageComponent from '../../components/AppMainPageComponent/AppMainPageComponent';
import { useAuth0 } from "@auth0/auth0-react";
import FreeTrialPostSignUp from '../../components/FreeTrialComponent/FreeTrialPostSignUp';
import PricingComponentPostSignUp from '../../components/PricingComponent/PricingComponentPostSignUp';

export default function WebApplication() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    console.log(user);
    
    if (isLoading) {
        return (
            <div>
                Is Loading...
            </div>
        )
    }

    if (isAuthenticated) {
        return (
            <div>
                <NavbarWebApp></NavbarWebApp>
                <Routes>
                    <Route path="/blogpost" element={<BlogPostComponent userDetails={user} />} />
                    <Route path="/copyWriter" element={<CopyWriter userDetails={user} />} />
                    <Route path="/emailMarketingWriter" element={<EmailMarketingComponent userDetails={user} />} />
                    <Route path="/freeTrial" element={<FreeTrialPostSignUp userDetails={user} />} />
                    <Route path="/paraphrasing" element={<ParaphrasingComponent userDetails={user} />} />
                    <Route path="/pricingPostSignUp" element={<PricingComponentPostSignUp userDetails={user} />} />
                    <Route path="/productDescriptionWriter" element={<ProductDescriptionComponent userDetails={user} />} />
                    <Route path="/" element={<AppMainPageComponent />} />
                </Routes>
            </div>
        )
    } else {
        return (
            <Navigate to="/" />
        )
    }
}