import { NextResponse } from "next/server";

export async function GET() {
  try {
    const sitemapUrl = "https://devcharles.com/sitemap.xml";
    const res = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    );

    if (res.ok) return NextResponse.json({ success: true, message: "Google pinged" });

    await fetch(`https://www.bing.com/webmaster/ping.aspx?siteMap=${encodeURIComponent(sitemapUrl)}`);

    return NextResponse.json({ success: false, message: "Failed to ping Google" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error pinging Google", error }, { status: 500 });
  }
}
