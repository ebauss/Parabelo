import { useEffect, useState, useRef } from 'react';
import { TextField, ToggleButtonGroup, ToggleButton, Typography, Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import CopyToClipboardButton from '../CopyToClipboardButton/CopyToClipboardButton';

export default function TikTokAdComponent(props) {
    /* Stores the string entered in the prompt text field. */
    const [productValue, setProductValue] = useState('');

    /* Stores the string stored in the things to mention text field. */
    const [targetCustomer, setTargetCustomer] = useState('');

    /* Stores the result string obtained from OpenAi. */
    const [resultValue, setResultValue] = useState('');

    /* Determines whether the loading animation is activated or not. */
    const [loading, setLoading] = useState(false);

    /* This is the mode. */
    const [generateType, setGenerateType] = useState('hook');

    const [featureList, setFeatureList] = useState('');

    const [adHook, setAdHook] = useState('');

    const resultValueRef = useRef();

    useEffect(() => {
        resultValueRef.current = resultValue;
    }, [resultValue]);

    /**
     * Handles the text changes in the prompt text box.
     *
     * @param event contains data of the event
     */
    const handleProductChange = (event) => {
        setProductValue(event.target.value);
    }

    const handleFeatureListChange = (event) => {
        setFeatureList(event.target.value);
    }

    const handleGenerateTypeChange = (event) => {
        setGenerateType(event.target.value);
    }
    
    const handleHookChange = (event) => {
        setAdHook(event.target.value);
    }

    /**
     * Handles the text changes in the things to mention text box.
     *
     * @param event
     */
    const handleTargetCustomerChange = (event) => {
        setTargetCustomer(event.target.value);
    }

    /**
     * saves the result to the database.
     */
    const saveToDatabase = async (result) => {
        if (generateType === "hook") {
            // for the id, use props.userDetails.sub.
            const response = await fetch("http://localhost:8000/saveTikTokToDb", {
                method: "Post",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: "Tik Tok Hook",
                    owner: props.userDetails.sub,
                    prompt: productValue,
                    targetCustomer: targetCustomer,
                    result: result
                })
            })

            const data = await response.text();

            if (data !== "false") {
                console.log("Result was successfully stored in the database.");
            } else {
                console.log("Result failed to store into the database.");
            }
        } else if (generateType === "textFromHook") {
            // for the id, use props.userDetails.sub.
            const response = await fetch("http://localhost:8000/saveTikTokTextFromHookToDb", {
                method: "Post",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: "Tik Tok Creative Text From Hook",
                    owner: props.userDetails.sub,
                    prompt: productValue,
                    targetCustomer: targetCustomer,
                    featureList: featureList,
                    hook: adHook,
                    result: result
                })
            })

            const data = await response.text();

            if (data !== "false") {
                console.log("Result was successfully stored in the database.");
            } else {
                console.log("Result failed to store into the database.");
            }
        }
    }

    const getPrompt = () => {
        let prompt;

        if (generateType === "hook") {
            if (targetCustomer) {
                // prompt = 'Write a long product description for ' + promptValue + '. ' + 'Things to mention: ' + targetCustomer + ". Thank you.";
                prompt = "Write 5 ultra short hooks for this Tik Tok Ad regarding a " + productValue + ". It's aimed at " + targetCustomer + ". It should sound like a person came across this product randomly and wanted to share it to their friends.";
            } else {
                prompt = "Write 5 ultra short hooks for this Tik Tok Ad regarding a " + productValue + ". It should sound like a person came across this product randomly and wanted to share it to their friends.";
            }
        }
        else if (generateType === "textFromHook") {
            prompt = "Based on the tik tok ad hook '" + adHook + "', please write 4 more ultra short texts to complete the ad."

            if (productValue) {
                prompt += " The product is '" + productValue + "'. Don't mention the product name.";
            }

            if (featureList) {
                prompt += " These are the product features '" + featureList + "'.";
            }

            if (targetCustomer) {
                prompt += " The target customer is '" + targetCustomer + "'.";
            }

            prompt += " Ensure the last text is a call to action. Make it emotionally engaging with the goal of converting the reader."
        }

        return prompt
    }

    const fetchDataStream = async () => {
        setResultValue('');
        setLoading(true); // Start loading animation of button
        let modifiedPrompt = getPrompt();

        fetch('http://localhost:8000/loadOptions', {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: modifiedPrompt,
                temperature: 0.9,
                max_tokens: 1000,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            })
        }).then(() => {
            const url = "http://localhost:8000/streamResponse"

            const events = new EventSource(url);

            events.onmessage = event => {
                if (event.data === "[DONE]") {
                    events.close();
                    setLoading(false);
                    saveToDatabase(resultValueRef.current);
                } else {
                    const text = event.data.replace(new RegExp("NEWLINE", 'g'), '\n');
                    resultValueRef.current += text;
                    setResultValue(resultValueRef.current);
                }
            }
        })
    }

    const renderAdditionalInputFields = () => {
        if (generateType === "textFromHook") {
            return (
                <>
                    <Box sx={{ mb: 4 }}>
                        <TextField id="outlined-basic"
                            label="What is your hook for the creative?"
                            variant="outlined"
                            fullWidth
                            onChange={handleHookChange}
                            sx={{ width: { md: 600 } }}
                            inputProps={{ maxLength: 1020 }}
                        />
                    </Box>
                    <Box sx={{ mb: 4 }}>
                        <TextField id="outlined-basic"
                            label="Please copy and paste the product features here."
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={20}
                            onChange={handleFeatureListChange}
                            sx={{
                                width: {
                                    md: 600
                                }
                            }}
                            inputProps={{ maxLength: 1020 }}
                        />
                    </Box>
                </>
            )
        }

    }

    return (
        <div>
            <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 4 }}>
                Tik Tok Ad Creative
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Mode
            </Typography>
            <ToggleButtonGroup
                color="primary"
                value={generateType}
                exclusive
                onChange={handleGenerateTypeChange}
                aria-label="Platform"
                sx={{
                    display: {
                        xs: 'none',
                        sm: 'flex'
                    },
                    justifyContent: 'center',
                    mb: 4
                }}
            >
                <ToggleButton value="hook">Hook</ToggleButton>
                <ToggleButton value="textFromHook">Text From Hook</ToggleButton>
            </ToggleButtonGroup>
            <Box sx={{ mb: 4 }}>
                <TextField id="outlined-basic"
                    label="What is your product?"
                    variant="outlined"
                    fullWidth
                    onChange={handleProductChange}
                    sx={{ width: { md: 600 } }}
                    inputProps={{ maxLength: 1020 }}
                />
            </Box>
            <Box sx={{ mb: 4 }}>
                <TextField id="outlined-basic"
                    label='Who is your target customer?'
                    variant="outlined"
                    multiline
                    rows={2}
                    fullWidth
                    onChange={handleTargetCustomerChange}
                    sx={{ width: { md: 600 } }}
                    inputProps={{ maxLength: 1020 }}
                />
            </Box>
            {renderAdditionalInputFields()}
            <Box sx={{ mb: 4 }}>
                <LoadingButton
                    size="large"
                    onClick={fetchDataStream}
                    endIcon={<SendIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                >
                    Go
                </LoadingButton>
                <CopyToClipboardButton copyText={resultValue} />
            </Box>
            <TextField
                id="outlined-multiline-static"
                label="Result"
                multiline
                rows={20}
                placeholder="Your product description will appear here."
                value={resultValue}
                fullWidth
                sx={{ width: { md: 600 }, marginBottom: 10 }}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                    readOnly: true,
                }}
            />
        </div>

    )
}
