

import { useState } from 'react'
import './App.css'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Box, { boxClasses } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import axios from 'axios'

// Hardcoded for now - we'll change this later for deployment
const API_BASE_URL = 'http://localhost:8080';


function App() {
    const [emailContent, setEmailContent] = useState('')
    const [tone, setTone] = useState('')
    const [generatedReply, setGeneratedReply] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

// Fixed handleSubmit function
const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
        const response = await axios.post(`${API_BASE_URL}/api/email/generate`, {
            emailContent,
            tone
        });
        setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
        setError("Failed to generate email reply. Please try again");
        console.error(error);
    } finally {
        setLoading(false);
    }
};
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography
                variant="h3"
                component="h1"
                gutterBottom
                align="center"
                sx={{
                    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
                }}
            >
                AI Email Reply Generator
            </Typography>

            <Box sx={{ mt: 3 }}>
                <TextField
                    fullWidth
                    multiline
                    rows={6}
                    variant="outlined"
                    id="email-content"
                    label="Original Email Content"
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    sx={{ mb: 2 }}
                />

                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Tone (Optional)</InputLabel>
                    <Select
                        value={tone}
                        label="Tone (Optional)"
                        onChange={(e) => setTone(e.target.value)}
                    >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="Professional">Professional</MenuItem>
                        <MenuItem value="Casual">Casual</MenuItem>
                        <MenuItem value="Friendly">Friendly</MenuItem>
                        <MenuItem value="Formal">Formal</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    variant='contained'
                    onClick={handleSubmit}
                    disabled={!emailContent || loading}
                    fullWidth
                    sx={{ py: 1.5 }}
                >
                    {loading ? <CircularProgress size={24} /> : 'Generate Email Reply'}
                </Button>
            </Box>

            {error && (
                <Typography
                    color='error'
                    align="center"
                    sx={{
                        mb: 2,
                        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                        fontWeight: 600,
                        p: 2,
                        backgroundColor: 'error.light',
                        borderRadius: 1
                    }}
                >
                    {error}
                </Typography>
            )}

            {
                generatedReply &&(
                    <Box sx={{mt:3}}>
                        <Typography variant="h6"  gutterBottom>
                            Genrated Reply :
                        </Typography>
                        <TextField
                          id=""
                          label=""
                          value={generatedReply|| ' '}
                          
                          fullWidth
                          multiline
                          rows={6}
                          variant='outlined'
                          inputProps={{readOnly: true}}
                        />

                        <Button
                        variant='outlined'
                        sx={{mt:2}}
                        onClick={()=>navigator.clipboard.writeText(generatedReply)}
                        >
                          Copy to Clipboard  
                        </Button>

                    </Box>
                )}
        </Container>
    )
}

export default App