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
import EmailVerificationComponent from '../../components/EmailVerificationComponent/EmailVerificationComponent';
import SocialMediaCaptionComponent from '../../components/SocialMediaCaptionComponent/SocialMediaCaptionComponent';
import { Box } from '@mui/material';
import SupportComponent from '../../components/SupportComponent/SupportComponent';
import HistoryComponent from '../../components/HistoryComponent/HistoryComponent';
import TikTokAdComponent from '../../components/TikTokAdComponent/TikTokAdComponent';

export default function WebApplication() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    const [hasActiveSubscription, setHasActiveSubscription] = React.useState(true);
    
    const [emailVerified, setEmailVerified] = React.useState(true);

    const checkForActiveSubscription = async () => {
        fetch("https://www.parabelo.com/checkUserActiveSubscription", {
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

     // NOTE: JWT does not update when email is verified. So the Auth0 Management API needs to be called directly to check if email is verified.
    const checkIfEmailVerified = async () => {
        fetch("https://www.parabelo.com/checkIfEmailVerified", {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: user.email
            })
        })
        .then((response) => response.json())
        .then((data) => {
            setEmailVerified(data);
        })
    }

    if (isLoading) {
        return (
            <div>
            </div>
        )
    }

    if (isAuthenticated) {
        checkIfEmailVerified();
        checkForActiveSubscription();
        console.log(`Email Verified: ${emailVerified}, Active Subscription: ${hasActiveSubscription}`);

        if (!emailVerified) {
            return (
                <EmailVerificationComponent />
            )
        } 
        
        if (!hasActiveSubscription && emailVerified) {
            return (
                    <PricingComponentPostSignUp userDetails={user} />
            )
        } else if (hasActiveSubscription && emailVerified) {
            return (
                <Box sx={{marginLeft: 8, marginRight: 2}}>
                    <NavbarWebApp></NavbarWebApp>
                    <Routes>
                        <Route path="/blogpost" element={<BlogPostComponent userDetails={user} />} />
                        <Route path="/checkoutSuccess" element={<SuccessCheckoutComponent userDetails={user} />} />
                        <Route path="/copyWriter" element={<CopyWriter userDetails={user} />} />
                        <Route path="/emailMarketingWriter" element={<EmailMarketingComponent userDetails={user} />} />
                        <Route path="/history" element={<HistoryComponent userDetails={user} />} />
                        <Route path="/paraphrasing" element={<ParaphrasingComponent userDetails={user} />} />
                        <Route path="/productDescriptionWriter" element={<ProductDescriptionComponent userDetails={user} />} />
                        <Route path="/settings" element={<SettingsComponent userDetails={user} />} />
                        <Route path="/socialMediaCaption" element={<SocialMediaCaptionComponent userDetails={user} />} />
                        <Route path="/support" element={<SupportComponent />} />
                        <Route path="/tikTokAd" element={<TikTokAdComponent userDetails={user} />} />
                        <Route path="/" element={<AppMainPageComponent />} />
                    </Routes>
                </Box>
            )
        }

    } 
    else {
        return (
            <Navigate to="/" />
        )
    }
}