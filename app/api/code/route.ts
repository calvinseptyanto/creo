import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are an expert in all programming languages. You will help users in generating code snippets. However, you may only answer in markdown code snippet. Please include any comments inside your code for explanations.",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }
    const freeTrial = await checkApiLimit();
    if (!freeTrial) {
      return new NextResponse("Free usage has exceeded.", { status: 403 });
    }
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [instructionMessage, ...messages],
    });
    await increaseApiLimit();
    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CODE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
