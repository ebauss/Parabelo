import * as React from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
import BlogPostComponent from "../../components/BlogPostComponent/BlogPostComponent";
import ParaphrasingComponent from "../../components/ParaphrasingComponent/ParaphrasingComponent";
import NavbarWebApp from "../../components/NavbarWebApp/NavbarWebApp";
import CopyWriter from "../../components/CopyWriterComponent/CopyWriter";
import ProductDescriptionComponent from '../../components/ProductDescriptionComponent/ProductDescriptionComponent';
import { useAuth0 } from "@auth0/auth0-react";

export default function WebApplication() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <div>
            <NavbarWebApp></NavbarWebApp>
            <Routes>
                <Route path="/blogpost" element={<BlogPostComponent />} />
                <Route path="/copyWriter" element={<CopyWriter />} />
                <Route path="/paraphrasing" element={<ParaphrasingComponent />} />
                <Route path="/productDescriptionWriter" element={<ProductDescriptionComponent />} />
                <Route path="/" element={<h1>Welcome {user.name}!</h1>} />
            </Routes>
        </div>
    )
}