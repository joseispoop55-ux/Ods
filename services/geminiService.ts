
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { AIQuoteResponse } from "../types";

// Analyze property photo using Gemini 3 Flash multimodal capabilities
export const analyzePropertyPhoto = async (base64Image: string): Promise<AIQuoteResponse> => {
  // Always use a named parameter and direct process.env.API_KEY access
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Analyze this photo of a property (it might be a driveway, a house exterior, or a garden).
    Based on the image, determine if it needs pressure washing, landscaping, or both.
    Return a structured JSON assessment including:
    - estimatedComplexity: 'Low', 'Medium', or 'High'
    - suggestedServices: an array of strings (e.g., 'Driveway Pressure Washing', 'Lawn Mowing', 'Hedge Trimming')
    - description: A friendly, professional summary of what you see and what we can do to help.
    - estimatedPriceRange: A rough starting range based on visible size (e.g., "$150 - $300").
  `;

  // Use ai.models.generateContent with the model name and contents object containing parts
  const response: GenerateContentResponse = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: {
      parts: [
        { text: prompt },
        {
          inlineData: {
            mimeType: 'image/jpeg',
            data: base64Image,
          },
        },
      ],
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          estimatedComplexity: { type: Type.STRING },
          suggestedServices: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          description: { type: Type.STRING },
          estimatedPriceRange: { type: Type.STRING }
        },
        required: ["estimatedComplexity", "suggestedServices", "description", "estimatedPriceRange"]
      }
    },
  });

  // Directly access the .text property (not a function call) as per SDK standards
  const text = response.text;
  if (!text) throw new Error("No response from AI");
  
  return JSON.parse(text) as AIQuoteResponse;
};
