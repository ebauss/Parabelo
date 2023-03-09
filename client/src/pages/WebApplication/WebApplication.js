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
import PricingComponentPostSignUp from '../../components/PricingComponent/PricingComponentPostSignUp';
import SuccessCheckoutComponent from '../../components/SuccessCheckoutComponent/SuccessCheckoutComponent';
import SettingsComponent from '../../components/SettingsComponent/SettingsComponent';

export default function WebApplication() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    const [hasActiveSubscription, setHasActiveSubscription] = React.useState(true);

    const checkForActiveSubscription = async () => {
        fetch("http://localhost:8000/checkUserActiveSubscription", {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                customerId: user.stripeCustomerId
            })
        })
        .then((response) => response.json())
        .then((data) => {
            setHasActiveSubscription(data);
        })
    }

    if (isLoading) {
        return (
            <div>
            </div>
        )
    }

    if (isAuthenticated) {
        checkForActiveSubscription();
        
        if (!hasActiveSubscription) {
            return (
                <div>
                    <NavbarWebApp></NavbarWebApp>
                    <PricingComponentPostSignUp userDetails={user} />
                </div>
            )
        } else {
            return (
                <div>
                    <NavbarWebApp></NavbarWebApp>
                    <Routes>
                        <Route path="/blogpost" element={<BlogPostComponent userDetails={user} />} />
                        <Route path="/checkoutSuccess" element={<SuccessCheckoutComponent userDetails={user} />} />
                        <Route path="/copyWriter" element={<CopyWriter userDetails={user} />} />
                        <Route path="/emailMarketingWriter" element={<EmailMarketingComponent userDetails={user} />} />
                        <Route path="/paraphrasing" element={<ParaphrasingComponent userDetails={user} />} />
                        <Route path="/productDescriptionWriter" element={<ProductDescriptionComponent userDetails={user} />} />
                        <Route path="/settings" element={<SettingsComponent userDetails={user} />} />
                        <Route path="/" element={<AppMainPageComponent />} />
                    </Routes>
                </div>
            )
        }

    } 
    else {
        return (
            <Navigate to="/" />
        )
    }
}