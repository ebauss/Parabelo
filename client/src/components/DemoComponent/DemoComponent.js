import { Box } from "@mui/material";
import DemoCard from "./DemoCard";
import BlogPostDemoVideo from "../../assets/Blog Post Landing Page Demo.mp4";

export default function DemoComponent() {
    return (
        <Box sx={{
            margin: 10
        }}>
            <DemoCard videoPath={BlogPostDemoVideo} />
        </Box>
    )
}