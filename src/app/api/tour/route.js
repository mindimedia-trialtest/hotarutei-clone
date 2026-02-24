import tour from "@/data/tour.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(tour)
}