import { useEffect, useState, useRef } from 'react';
import { TextField, ToggleButtonGroup, ToggleButton, Typography, Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import CopyToClipboardButton from '../CopyToClipboardButton/CopyToClipboardButton';

export default function TikTokAdComponent(props) {
    /* Stores the string entered in the prompt text field. */
    const [promptValue, setPromptValue] = useState('');

    /* Stores the string stored in the things to mention text field. */
    const [targetCustomer, setTargetCustomer] = useState('');

    /* Stores the result string obtained from OpenAi. */
    const [resultValue, setResultValue] = useState('');

    /* Determines whether the loading animation is activated or not. */
    const [loading, setLoading] = useState(false);

    const [generateType, setGenerateType] = useState('hook');

    const [featureList, setFeatureList] = useState('standard');

    const resultValueRef = useRef();

    useEffect(() => {
        resultValueRef.current = resultValue;
    }, [resultValue]);

    /**
     * Handles the text changes in the prompt text box.
     *
     * @param event contains data of the event
     */
    const handlePromptChange = (event) => {
        setPromptValue(event.target.value);
    }

    const handleFeatureListChange = (event) => {
        setFeatureList(event.target.value);
    }

    const handleGenerateTypeChange = (event) => {
        setGenerateType(event.target.value);
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
        if (generateType === "standard") {
            // for the id, use props.userDetails.sub.
            const response = await fetch("http://localhost:8000/saveProductDescriptionToDb", {
                method: "Post",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: "Product Description",
                    owner: props.userDetails.sub,
                    prompt: promptValue,
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
        } else if (generateType === "featureList") {
            const response = await fetch("http://localhost:8000/saveProductDescriptionToDb", {
                method: "Post",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: "Product Description",
                    owner: props.userDetails.sub,
                    prompt: `Product: ${promptValue}.\nFeatures: ${featureList}`,
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
        }


    }

    const getPrompt = () => {
        let prompt;

        // Prompt Example: Write 5 ultra short hooks for this tik tok ad regarding a mini washing machine. It’s aimed at apartment dwellers without in suite laundry. It should sound like a person came across this product randomly and wanted to share it to their friends

        if (generateType === "hook") {
            if (targetCustomer) {
                // prompt = 'Write a long product description for ' + promptValue + '. ' + 'Things to mention: ' + targetCustomer + ". Thank you.";
                prompt = "Write 5 ultra short hooks for this Tik Tok Ad regarding a " + promptValue + ". It's aimed at " + targetCustomer + ". It should sound like a person came across this product randomly and wanted to share it to their friends.";
            } else {
                prompt = "Write 5 ultra short hooks for this Tik Tok Ad regarding a " + promptValue + ". It should sound like a person came across this product randomly and wanted to share it to their friends.";
            }
        } 
        // else if (generateType === "featureList") {
        //     if (targetCustomer) {
        //         prompt = 'Write a long product description for "' + promptValue + '" based on the following feature list "' + featureList + '". ' + 'Things to mention: ' + targetCustomer + ". Thank you.";
        //     } else {
        //         prompt = 'Write a long product description for "' + promptValue + '" based on the following feature list "' + featureList + ". Thank you.";
        //     }
        // }

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
                    // saveToDatabase(resultValueRef.current);
                } else {
                    const text = event.data.replace(new RegExp("NEWLINE", 'g'), '\n');
                    resultValueRef.current += text;
                    setResultValue(resultValueRef.current);
                }
            }
        })
    }

    const renderPromptTextBox = () => {
        if (generateType === "featureList") {
            return (
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
            )
        }

    }

    return (
        <div>
            <Typography variant="h5" gutterBottom sx={{mt: 4, mb: 4}}>
                Tik Tok Ad Creative
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Text Type
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
                {/* <ToggleButton value="featureList">Feature List</ToggleButton> */}
            </ToggleButtonGroup>
            <Box sx={{mb: 4}}>
                <TextField id="outlined-basic"
                    label="What is your product?"
                    variant="outlined"
                    fullWidth
                    onChange={handlePromptChange}
                    sx={{ width: { md: 600 } }}
                    inputProps={{ maxLength: 1020 }}
                />
            </Box>
            {/* <Box sx={{ mb: 4}}>
                {renderPromptTextBox()}
            </Box> */}
            <Box sx={{ mb: 4}}>
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
            <Box sx={{ mb: 4}}>
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
