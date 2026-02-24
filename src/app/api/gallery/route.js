import gallery from "@/data/gallery.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(gallery)
}