import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import BlogPost from "./BlogPost/BlogPost";
import Paraphrasing from "./Paraphrasing/Paraphrasing";

export default function WebApplication() {
    return (
        <div>
            <Routes>
                <Route path="/blogpost" element={<BlogPost/>}/>
                <Route path="/paraphrasing" element={<Paraphrasing/>}/>
                <Route path="/" element={<h1>Here is a placeholder for the app.</h1>}/>
            </Routes>
        </div>
    )
}