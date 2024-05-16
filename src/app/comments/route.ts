import { NextRequest } from "next/server";
import { comments } from "./data";
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) => {
        return comment.text.toLowerCase().includes(query);
      })
    : comments;
  return Response.json(filteredComments);
}
// export async function GET() {
//   return Response.json(comments);
// }

export async function POST(request: Request) {
  const body = await request.json();
  const newC = {
    id: comments.length + 1,
    text: body.text,
  };

  comments.push(newC);
  return new Response(JSON.stringify(newC), {
    headers: {
      "Content-Type": "application/json",
    },

    status: 201,
  });
  // return Response.json(newC, { status: 201 });
}
