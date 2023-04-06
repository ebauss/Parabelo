import { useState } from 'react';
import { Button, Snackbar, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function CopyToClipboardButton(props) {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
      setOpen(true)
      navigator.clipboard.writeText(props.resultText);
    }

    return (
        <>
            <IconButton onClick={handleClick} aria-label="delete" size="large">
                <ContentCopyIcon fontSize='inherit' />
            </IconButton>
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message="Copied to clipboard"
            />
        </>
    )
}