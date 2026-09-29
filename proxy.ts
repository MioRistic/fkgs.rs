import { NextResponse } from "next/server";

export async function proxy(request: Request) {
  const userAgent = request.headers.get("user-agent") || "";
  const pathname = new URL(request.url).pathname;

  const bots = [
    "googlebot",
    "facebookexternalhit",
    "twitterbot",
    "linkedinbot",
    "discordbot",
    "whatsapp",
    "telegrambot",
    "slackbot",
    "pinterestbot",
    "embedly",
    "redditbot",
    "applebot",
  ];

  const IGNORE_EXTENSIONS = [
    ".js", ".css", ".xml", ".png", ".jpg", ".jpeg", ".gif", ".pdf", ".txt",
    ".ico", ".svg", ".woff", ".ttf", ".webmanifest",
  ];

  const isBot = bots.some(bot => userAgent.toLowerCase().includes(bot));
  const extension = pathname.slice(((pathname.lastIndexOf(".") - 1) >>> 0) + 1);
  const isStatic = extension && IGNORE_EXTENSIONS.includes(`.${extension}`);

  if (isStatic) {
    return NextResponse.next();
  }

  return NextResponse.next();
}
