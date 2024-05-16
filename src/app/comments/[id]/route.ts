import { NextRequest } from "next/server";
import { comments } from "../data";
import { redirect } from "next/navigation";
import { headers, cookies } from "next/headers";
export const dynamic = "force-dynamic";
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  //   redirect("/comments");
  //redirect("/profile");

  const theme = request.cookies.get("theme");
  console.log("theme", theme);

  const themeCookie = cookies();
  console.log("themeCookie", themeCookie.get("theme"));

  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));

  const headerList = headers();
  console.log(headerList.get("Authorization"));

  const comment = comments.find((c) => c.id === parseInt(params.id));
  return Response.json({ comment });
}
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { text } = await request.json();
  const comment = comments.findIndex((c) => c.id === parseInt(params.id));
  comments[comment].text = text;
  return Response.json(comments[comment], { status: 200 });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex((c) => c.id === parseInt(params.id));
  const deleted = comments[index];
  comments.splice(index, 1);
  return Response.json(deleted);
}
