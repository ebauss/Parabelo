import { Box, Typography } from "@mui/material";
import DemoCard from "./DemoCard";
import BlogPostDemoVideo from "../../assets/BlogPostDemo.mp4";
import DemoCardAlternate from "./DemoCardAlternate";
import EmailDemoVideo from "../../assets/EmailDemo.mp4";
import ParaphrasingDemoVideo from "../../assets/ParaphrasingDemo.mp4";

export default function DemoComponent() {
    return (
        <Box sx={{
            margin: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 4
        }}>
            <Typography variant="h3">
                A glimpse of Parabelo AI
            </Typography>
            <DemoCard videoPath={BlogPostDemoVideo} copyText="Create engaging blog posts within seconds" />
            <DemoCardAlternate videoPath={EmailDemoVideo} copyText="Craft compelling marketing emails effortlessly" />
            <DemoCard videoPath={ParaphrasingDemoVideo} copyText="Transform your writing with a single click" />
        </Box>
    )
}