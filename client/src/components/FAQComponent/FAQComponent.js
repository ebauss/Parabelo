import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

const accordionStyle = {
    width: {
        xs: '80%',
        md: 800
    }
}

export default function FAQComponent() {
    return (
        <Box sx={{
            marginTop: 10,
            marginBottom: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography variant="h4" gutterBottom>
                FAQ
            </Typography>
            <br />
            <Accordion sx={accordionStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>How long is the free trial?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Experience the full potential of our product with a generous 7-day free trial. No need to worry, you won't be charged during this time.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <br />
            <Accordion sx={accordionStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>What can I create with Parabelo AI?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        With Parabelo AI, you'll have all the copywriting tools necessary to kickstart and maintain your business! Craft compelling blog posts, captivating product descriptions, engaging ad copy, and Instagram captions that are sure to have your followers double-tapping. We're continuously enhancing our toolkit, so please share your feedback on what else you'd like to see.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <br />
            <Accordion sx={accordionStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Is there any limit on the number of texts I can generate?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Feel free to generate as many words as you like! The possibilities are endless.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <br />
        </Box>
    )
}