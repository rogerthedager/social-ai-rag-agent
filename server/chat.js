import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"; // Step 2split
import { OpenAIEmbeddings } from "@langchain/openai"; //step 3 Embedding
import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory"; //Step 3 Storage
import { ChatOpenAI } from "@langchain/openai"; //Step5 output
import { PromptTemplate } from "@langchain/core/prompts"; // step 5 prompt
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf"; // step 1 document loading

const chat = async (filePath = "./uploads/hbs-lean-startup.pdf", query) => {
  const apiKey = process.env.OPENAI_API_KEY;

  //step 1
  const loader = new PDFLoader(filePath);

  const data = await loader.load();

  const textsplitters = new RecursiveCharacterTextSplitter({
    chunkSize: 500, // 每段文件长度
    chunkOverlap: 0, // 字符重叠保证语义不丢失
  });

  const splitDocs = await textsplitters.splitDocuments(data);

  const embeddings = new OpenAIEmbeddings({
    apiKey,
  });

  const vectorstore = await MemoryVectorStore.fromDocuments(
    splitDocs,
    embeddings,
  );

  const model = new ChatOpenAI({
    model: "gpt-5",
    apiKey,
  });

  const template = `Use the following pieces of context to answer the question at the end.
    If you don't know the answer, just say that you don't know, don't try to make up an answer.
    Use three sentences maximum and keep the answer as concise as possible.

    {context}
    Question: {question}
    Helpful Answer:`;

  const prompt = PromptTemplate.fromTemplate(template);
  //use retriever to get relevant documents
  const retriever = vectorstore.asRetriever();

  const relevantDocs = await retriever.invoke(query);
  //// Format context from retrieved documents
  const context = relevantDocs
    .map((doc) => {
      return doc.pageContent;
    })
    .join("\n\n");

  // Create a simple chain using the prompt template
  const formattedPrompt = await prompt.format({
    context,
    question: query,
  });

  // Get response from the model
  const response = await model.invoke(formattedPrompt);

  return { text: response.content };
};

export default chat;
