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

export default function WebApplication() {
    return (
        <div>
            <NavbarWebApp></NavbarWebApp>
            <Routes>
                <Route path="/blogpost" element={<BlogPostComponent />} />
                <Route path="/copyWriter" element={<CopyWriter />} />
                <Route path="/paraphrasing" element={<ParaphrasingComponent />} />
                <Route path="/productDescriptionWriter" element={<ProductDescriptionComponent />} />
                <Route path="/" element={<h1>Welcome to the app!</h1>} />
            </Routes>
        </div>
    )
}