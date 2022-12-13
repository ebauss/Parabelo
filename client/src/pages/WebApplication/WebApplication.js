import * as React from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
import BlogPostComponent from "../../components/BlogPostComponent/BlogPostComponent";
import ParaphrasingComponent from "../../components/ParaphrasingComponent/ParaphrasingComponent";

export default function WebApplication() {
    return (
        <div>
            // TODO append navbar here. Put it outside of the Routes.
            <Routes>
                <Route path="/blogpost" element={<BlogPostComponent/>}/>
                <Route path="/paraphrasing" element={<ParaphrasingComponent/>}/>
                <Route path="/" element={<h1>Here is a placeholder for the app.</h1>}/>
            </Routes>
        </div>
    )
}