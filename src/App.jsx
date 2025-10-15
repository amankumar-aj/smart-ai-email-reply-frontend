import { useState } from "react";
import "./App.css";
import {
  Typography,
  TextField,
  Container,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
  Card,
  CardContent,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Email, LinkedIn, GitHub, AutoAwesome } from "@mui/icons-material";
import axios from "axios";

 const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;



function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(`${API_BASE_URL}/api/email/generate`, {
        emailContent,
        tone,
      });
      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      setError("Failed to generate email reply. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #f5f7fa 0%, #e9efff 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: 6,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontFamily: "'Poppins', 'Inter', sans-serif",
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              letterSpacing: "-0.5px",
            }}
          >
            Email Response Assistant
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#4a5568",
              fontWeight: 400,
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.3px",
              fontSize: { xs: "1.1rem", md: "1.4rem" },
            }}
          >
            AI-Powered Professional Email Composition
          </Typography>
        </Box>

        {/* Input Card */}
        <Card
          sx={{
            width: { xs: "100%", sm: "85%", md: "95%", lg: "75%" },
            boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
            borderRadius: 4,
            backdropFilter: "blur(12px)",
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(255,255,255,0.3)",
            mb: 4,
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <AutoAwesome sx={{ color: "#4e54c8", mr: 2, fontSize: 28 }} />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: "#2D3748",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Compose Your Email
              </Typography>
            </Box>

            <TextField
              fullWidth
              multiline
              rows={7}
              variant="outlined"
              label="Original Email Content"
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  fontSize: "16px",
                  fontFamily: "'Inter', sans-serif",
                  "&:hover fieldset": {
                    borderColor: "#4e54c8",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#4e54c8",
                    borderWidth: 2,
                  },
                },
              }}
            />

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel sx={{ fontFamily: "'Inter', sans-serif" }}>
                Tone (Optional)
              </InputLabel>
              <Select
                value={tone}
                label="Tone (Optional)"
                onChange={(e) => setTone(e.target.value)}
                sx={{
                  borderRadius: 3,
                  fontFamily: "'Inter', sans-serif",
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#4e54c8",
                  },
                }}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="Professional">Professional</MenuItem>
                <MenuItem value="Casual">Casual</MenuItem>
                <MenuItem value="Friendly">Friendly</MenuItem>
                <MenuItem value="Formal">Formal</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!emailContent || loading}
              fullWidth
              sx={{
                py: 1.8,
                borderRadius: 3,
                background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "16px",
                fontFamily: "'Inter', sans-serif",
                textTransform: "none",
                boxShadow: "0 6px 18px rgba(78,84,200,0.3)",
                "&:hover": {
                  background: "linear-gradient(90deg, #5c63d1, #9b9ffb)",
                  boxShadow: "0 10px 25px rgba(78,84,200,0.4)",
                },
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                <>
                  <AutoAwesome sx={{ mr: 1 }} />
                  Generate AI Reply
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Generated Reply */}
        {generatedReply && (
          <Card
            sx={{
              width: { xs: "100%", sm: "85%", md: "95%", lg: "75%" },
              boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              borderRadius: 4,
              backdropFilter: "blur(12px)",
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.3)",
              mb: 4,
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Email sx={{ color: "#4e54c8", mr: 2, fontSize: 28 }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#2D3748",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Generated Response
                </Typography>
              </Box>

              <TextField
                value={generatedReply}
                fullWidth
                multiline
                rows={12}
                variant="outlined"
                inputProps={{ readOnly: true }}
                sx={{
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    fontSize: "16px",
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: "#F7FAFC",
                    "&:hover fieldset": {
                      borderColor: "#4e54c8",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#4e54c8",
                    },
                  },
                }}
              />

              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderRadius: 3,
                    fontWeight: 600,
                    py: 1.2,
                    fontFamily: "'Inter', sans-serif",
                    textTransform: "none",
                    borderColor: "#4e54c8",
                    color: "#4e54c8",
                    "&:hover": {
                      borderColor: "#5c63d1",
                      color: "#5c63d1",
                      backgroundColor: "rgba(78,84,200,0.05)",
                    },
                  }}
                  onClick={() => navigator.clipboard.writeText(generatedReply)}
                >
                  Copy to Clipboard
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  sx={{
                    borderRadius: 3,
                    fontWeight: 600,
                    py: 1.2,
                    fontFamily: "'Inter', sans-serif",
                    textTransform: "none",
                    background: "linear-gradient(45deg, #ff6b6b, #ee5a52)",
                    boxShadow: "0 4px 14px rgba(255,107,107,0.3)",
                    "&:hover": {
                      background: "linear-gradient(45deg, #ff5252, #e53935)",
                      boxShadow: "0 6px 20px rgba(255,107,107,0.4)",
                    },
                  }}
                  onClick={() => setGeneratedReply("")}
                >
                  Clear
                </Button>
              </Box>
            </CardContent>
          </Card>
        )}

        {error && (
          <Typography
            color="error"
            align="center"
            sx={{
              mt: 3,
              fontWeight: 600,
              p: 3,
              backgroundColor: "rgba(255,235,238,0.9)",
              borderRadius: 3,
              boxShadow: "0 8px 25px rgba(244,67,54,0.15)",
              width: { xs: "100%", sm: "85%", md: "65%", lg: "55%" },
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {error}
          </Typography>
        )}
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          textAlign: "center",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          backgroundColor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#4a4a4a",
            mb: 2,
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          © {new Date().getFullYear()} Aman Kumar Jha — All Rights Reserved
        </Typography>

        <Box>
          <Tooltip title="Email" arrow>
            <IconButton
              href="mailto:amankumar_aj@outlook.com"
              sx={{
                color: "#4e54c8",
                backgroundColor: "rgba(78,84,200,0.1)",
                mr: 2,
                "&:hover": {
                  backgroundColor: "#4e54c8",
                  color: "white",
                },
              }}
            >
              <Email />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn" arrow>
            <IconButton
              href="https://www.linkedin.com/in/amankumar6174/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#0077B5",
                backgroundColor: "rgba(0,119,181,0.1)",
                mr: 2,
                "&:hover": {
                  backgroundColor: "#0077B5",
                  color: "white",
                },
              }}
            >
              <LinkedIn />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub" arrow>
            <IconButton
              href="https://github.com/amankumar-aj"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#333",
                backgroundColor: "rgba(0,0,0,0.1)",
                "&:hover": {
                  backgroundColor: "#333",
                  color: "white",
                },
              }}
            >
              <GitHub />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
