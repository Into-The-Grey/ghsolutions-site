import { publishedWriteups } from "@/lib/writeups";

const siteUrl = "https://greyhat-solutions.com";

function escapeXml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&apos;");
}

export async function GET() {
    const items = publishedWriteups
        .map((writeup) => {
            const url = `${siteUrl}/writeups/${writeup.slug}`;
            return `
        <item>
          <title>${escapeXml(writeup.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${new Date(writeup.date).toUTCString()}</pubDate>
          <description>${escapeXml(writeup.summary)}</description>
          <category>${escapeXml(writeup.category)}</category>
        </item>
      `;
        })
        .join("");

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>GreyHat Solutions Writeups</title>
    <link>${siteUrl}/writeups</link>
    <description>Technical writeups, project notes, build logs, lab notes, and operational field notes from GreyHat Solutions.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

    return new Response(rss, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
}
