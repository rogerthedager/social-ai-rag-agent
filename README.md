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
