import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { StylingRequest, StylingResponse } from "../types";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

/**
 * Generates fashion advice based on user inputs using Gemini 3 Flash.
 */
export const getStylingAdvice = async (request: StylingRequest): Promise<string> => {
  try {
    const prompt = `
      You are a senior fashion designer at Kanchuka Designer Studio.
      A client has requested styling advice.
      
      Details:
      - Occasion: ${request.occasion}
      - Preferred Colors: ${request.colors}
      - Body Type: ${request.bodyType}
      - Style Preferences: ${request.preferences}
      
      Please provide a sophisticated, detailed styling recommendation in 2 paragraphs. 
      Focus on fabric choice, silhouette, and embroidery details suitable for high-end ethnic or indo-western wear.
      Be warm, professional, and evoke luxury.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are an expert fashion consultant for a luxury boutique.",
        temperature: 0.7,
      }
    });

    return response.text || "Our stylists are currently busy. Please try again later.";
  } catch (error) {
    console.error("Error fetching advice:", error);
    throw new Error("Failed to generate advice.");
  }
};

/**
 * Generates a fashion sketch based on the advice using Gemini 2.5 Flash Image.
 */
export const generateDesignSketch = async (description: string): Promise<string | undefined> => {
  try {
    const prompt = `Create a high-quality fashion sketch of the following design: ${description}. 
    The style should be artistic, elegant, fashion illustration style, on a plain background.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: prompt,
      config: {
        // Nano banana models do not support responseMimeType or specific imageConfigs like Imagen
      }
    });

    // Iterate through parts to find the image
    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
           return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    return undefined;
  } catch (error) {
    console.error("Error generating sketch:", error);
    return undefined; // Fail silently for image, just show text
  }
};
