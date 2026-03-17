import { NextResponse } from "next/server";

export async function GET() {
  const sitemapUrl = "https://devcharles.com/sitemap.xml";

  const googlePing = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  const bingPing = `https://www.bing.com/webmaster/ping.aspx?siteMap=${encodeURIComponent(sitemapUrl)}`;

  if (process.env.NODE_ENV !== "production") {
    return NextResponse.json({ message: "Disabled in dev" });
  }

  try {
    const [googleRes, bingRes] = await Promise.allSettled([
      fetch(googlePing),
      fetch(bingPing),
    ]);

    const result = {
      google:
        googleRes.status === "fulfilled" && googleRes.value.ok
          ? "success"
          : "failed",
      bing:
        bingRes.status === "fulfilled" && bingRes.value.ok
          ? "success"
          : "failed",
    };

    return NextResponse.json({
      success: result.google === "success" || result.bing === "success",
      result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error pinging search engines",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}