// import { GoogleGenAI } from '@google/genai';

// const ai = new GoogleGenAI({
//     apiKey: process.env.GOOGLE_CLOUD_API_KEY,
// })

// export default ai;

import { GoogleGenAI } from "@google/genai";

console.log("Using API KEY:", process.env.GOOGLE_CLOUD_API_KEY);

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_CLOUD_API_KEY,
});

export default ai;
