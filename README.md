# Social AI RAG Agent

A full-stack AI assistant that supports PDF document ingestion, semantic question answering, voice interaction, and hybrid web search using React, Node.js, LangChain, OpenAI API, and MCP-based tool integration.

## Features

- Upload PDF documents and ask questions based on their content
- Generate context-aware answers using a Retrieval-Augmented Generation (RAG) pipeline
- Use LangChain for document processing, chunking, retrieval, and LLM orchestration
- Support voice input and text-to-speech responses through React speech libraries
- Integrate MCP-based web search with SerpAPI to combine document retrieval and external search results
- Provide a React frontend and Express backend for full-stack interaction

## Tech Stack

**Frontend**
- React
- Ant Design
- Axios
- react-speech-recognition
- speak-tts

**Backend**
- Node.js
- Express
- LangChain
- OpenAI API
- Model Context Protocol SDK
- SerpAPI
- Multer
- pdf-parse

## Architecture

```text
User
  ↓
React Frontend
  ↓
Express API Server
  ↓
PDF Upload / Query Handler
  ↓
LangChain RAG Pipeline
  ↓
OpenAI API + MCP Web Search
  ↓
Response returned to frontend
```
## Project Structure

```text
social-ai-rag-agent/
  src/
    components/
      ChatComponent.js
      PdfUploader.js
      RenderQA.js
    App.js
    index.js

  server/
    server.js
    chat.js
    chat-mcp.js
    mcp-server.js
    .env.example

  package.json
  README.md
```
## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rogerthedager/social-ai-rag-agent.git
cd social-ai-rag-agent
```
2. Install frontend dependencies
```bash
npm install
```
3. Install backend dependencies
```bash
cd server
npm install
cd ..
```
4. Configure environment variables
```bash
Create a .env file inside the server/ directory:

OPENAI_API_KEY=your_openai_api_key_here
SERPAPI_API_KEY=your_serpapi_key_here
PORT=5001
```
5. Run the application
```bash
To start both frontend and backend:

npm run dev

Or run them separately.

Frontend:

npm start

Backend:

cd server
npm start

Frontend runs on:

http://localhost:3000

Backend runs on:

http://localhost:5001
```
Main API Endpoints
Upload PDF
POST /upload

Uploads a PDF document for processing.

Ask Question
GET /chat?question=your_question_here

Returns an AI-generated answer using document context and optional web search.
