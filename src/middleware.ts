import { get } from "@vercel/edge-config";
import { type NextRequest, NextResponse } from "next/server";

async function middleware(request: NextRequest) {
  const isInMaintenanceMode = await get("isMaintenance");

  if (isInMaintenanceMode) {
    console.log("Under Maintenance...");
    request.nextUrl.pathname = "/maintenance";
    return NextResponse.rewrite(request.nextUrl);
  } else {
    console.log("working");
  }
}
export default middleware;
