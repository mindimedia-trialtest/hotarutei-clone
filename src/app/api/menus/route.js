import menus from "@/data/menus.json";

export async function GET() {
  return Response.json(menus)
}