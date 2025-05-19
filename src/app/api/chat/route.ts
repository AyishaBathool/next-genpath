import { NextResponse } from 'next/server';

const HUGGINGFACE_API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2";
const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY || "";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await fetch(HUGGINGFACE_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: `<s>[INST] You are a genetic health assistant. Your role is to provide accurate, helpful information about genetic diseases, their symptoms, treatments, and inheritance patterns. Always be professional, clear, and empathetic in your responses.

User: ${message} [/INST]</s>`,
        parameters: {
          max_new_tokens: 1024,
          temperature: 0.7,
          top_p: 0.95,
          return_full_text: false
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    const text = result[0].generated_text;

    return NextResponse.json({ response: text });
  } catch (error: any) {
    console.error('Error details:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate response',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
} 