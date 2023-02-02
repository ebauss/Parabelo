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

export default function WebApplication() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    
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
                    <Route path="/blogpost" element={<BlogPostComponent />} />
                    <Route path="/copyWriter" element={<CopyWriter />} />
                    <Route path="/emailMarketingWriter" element={<EmailMarketingComponent />} />
                    <Route path="/paraphrasing" element={<ParaphrasingComponent userDetails={user} />} />
                    <Route path="/productDescriptionWriter" element={<ProductDescriptionComponent />} />
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