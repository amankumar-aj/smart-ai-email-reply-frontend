# 🌟 AI Email Response Generator

A comprehensive AI-powered email response generation system featuring a web application and browser extension for seamless email composition assistance.

---

## 🚀 Overview

The **AI Email Response Generator** is a full-stack application that leverages artificial intelligence to help users create professional email responses quickly and efficiently.  
The system consists of three main components:

- **Frontend Web Application** – React-based UI for generating AI email responses  
- **Backend API Service** – Spring Boot REST API integrated with Gemini AI  
- **Browser Extension** – Chrome extension that injects AI reply functionality directly into Gmail

- 🌐 **Try the Web App:** https://smart-ai-email-reply-generator.netlify.app/
- 📖 **Project Details:** https://github.com/amankumar-aj/smart-ai-email-reply-public-repo

---

## 🖼️ Project Previews
<img width="2400" height="2884" alt="emailResponseAssistant" src="https://github.com/user-attachments/assets/8f96c8c5-7e3a-4434-ba58-7bbc2effc88b" />
<img width="1918" height="1045" alt="reply_page" src="https://github.com/user-attachments/assets/cc3a8492-4a9c-423f-a237-ea575e7eb4c0" />
<img width="1918" height="1032" alt="newcomposepage" src="https://github.com/user-attachments/assets/69dd3ffe-8ff5-4fe4-b05b-649d16f7493a" />






---

## ✨ Features

### 🌐 Web Application
- **AI-Powered Email Generation** – Generate professional email responses using Gemini AI  
- **Tone Customization** – Choose from multiple tones (Professional, Casual, Friendly, Formal)  
- **Real-time Generation** – Instant AI response generation with loading states  
- **Copy to Clipboard** – Easy copying of generated responses  
- **Responsive Design** – Modern UI that works on all devices  
- **Error Handling** – Comprehensive error handling and user feedback  



---

### 🧩 Browser Extension
- **Seamless Gmail Integration** – Injects AI reply button directly into Gmail compose windows  
- **Tone Selection** – Dropdown for selecting response tone before generation  
- **Smart Detection** – Automatically detects compose/reply windows using MutationObserver  
- **One-Click Generation** – Generate and insert AI responses with a single click  
- **Non-Intrusive** – Clean integration that doesn’t interfere with Gmail functionality  
<img width="1918" height="1078" alt="Extension-description in webstore" src="https://github.com/user-attachments/assets/b443272b-6abb-410c-8208-3353401dfd02" />

---

### ⚙️ Backend API
- **RESTful Endpoints** – Clean API design for email generation  
- **Gemini AI Integration** – Powered by Google’s Gemini AI model  
- **Input Validation** – Comprehensive request validation and error handling  
- **Health Monitoring** – Health check endpoints for monitoring  
- **CORS Configuration** – Proper setup for cross-origin requests  


---

## 🛠️ Technology Stack

### 🖥️ Frontend
- React 18 – Modern React with hooks  
- Vite – Fast build tool and dev server  
- Material-UI (MUI) – Component library for modern UI  
- Axios – HTTP client for API calls  
- CSS3 – Custom styling with gradients and animations  

### ⚙️ Backend
- Spring Boot 3.4.10 – Java framework for REST API  
- Java 21 – Latest LTS Java version  
- WebClient – Reactive web client for external API calls  
- Lombok – Reduces boilerplate code  
- Maven – Dependency management and build tool  

### 🧠 Browser Extension
- Chrome Extension Manifest v3 – Modern extension architecture  
- Vanilla JavaScript – Content scripts for Gmail integration  
- MutationObserver API – DOM monitoring for dynamic content  
- Chrome APIs – Extension permissions and storage  

### 🤖 AI Integration
- Gemini AI API – Google’s advanced AI model for text generation  
- RESTful Integration – Secure API communication with Gemini  

---

## 📁 Project Structure

<img width="554" height="673" alt="image" src="https://github.com/user-attachments/assets/653631a8-0b6a-4ad6-8ce3-e39c4b23901d" />


## 🔧 Installation & Setup

### 🧱 Prerequisites
- Node.js (v16 or higher)  
- Java 21  
- Maven 3.6+  
- Chrome browser (for extension)

---

### ⚛️ Frontend Setup

```bash
cd frontend
npm install
npm run dev

```
## Backend Setup
```bash
cd backend  
mvn clean install  
mvn spring-boot:run  
```

-----------------------------------------------------------------------

## 🧩 Browser Extension Installation

Open Chrome and navigate to chrome://extensions/  
Enable Developer mode  
Click Load unpacked and select the browser-extension folder  
The extension will be installed and ready to use  

-----------------------------------------------------------------------

## 🎯 Usage

🌐 Web Application  
Open the web application in your browser  
Paste the original email content in the text area  
Select desired tone (optional)  
Click Generate AI Reply  
Copy the generated response using Copy to Clipboard  

## 🧭 Browser Extension  
Open Gmail in your browser  
Click Compose or Reply to open a compose window  
Look for the AI Reply button with tone selector  
Select your desired tone  
Click AI Reply to generate and insert the response  
Review and send the email as normal  

-----------------------------------------------------------------------

## 🔌 API Endpoints

✉️ Email Generation  
POST /api/email/generate  

Request Body:
```json
{
  "emailContent": "Original email text...",
  "tone": "Professional"
}
```

---

## 🩺 Health Check

GET /health  
Response: "OK"

---

## 🔒 Configuration

### 🧰 Backend Configuration

Update application.properties with your Gemini API credentials:

```properties
gemini.api.url=GEMINI_API_URL
gemini.api.key=your_gemini_api_key
```

### 🌍 Frontend Configuration

Create .env file with:

```env
VITE_API_BASE_URL=http://localhost:8080
```

---

## 🚀 Deployment

- The application is designed for easy deployment:
  - Frontend: Netlify, Vercel, or any static hosting
  - Backend: Render, Heroku, or any Java-compatible hosting
  - Extension: Publish to Chrome Web Store

---

## 🔮 Future Enhancements

- Outlook Integration – Support for Microsoft Outlook
- Multiple AI Providers – OpenAI, Claude, etc.
- Template System – Save and reuse common templates
- Multi-language Support – Global usability
- Advanced Customization – Granular tone control
- Analytics – Usage tracking and metrics
- Batch Processing – Generate multiple replies at once

---

## 👨‍💻 Author

Aman Kumar Jha  
- 📧 Email: amankumar_aj@outlook.com  
- 🔗 LinkedIn: https://linkedin.com/in/amankumar6174
- 🐙 GitHub: https://github.com/amankumar-aj

- 🏗️ This project is actively maintained and regularly updated with new features and improvements
