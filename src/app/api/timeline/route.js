import timeline from "@/data/timeline.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(timeline)
}