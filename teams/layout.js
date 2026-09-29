// app/teams/layout.js

export const metadata = {
    title: "Trending Teams | SoccerHub",
    description: "Browse trending football teams including MLS and National Teams. Discover logos and team info.",
    openGraph: {
      title: "Trending Teams | SoccerHub",
      description: "Explore trending teams from MLS and more. Click to visit team pages.",
      url: "https://yourdomain.com/teams",
      images: [
        {
          url: "https://yourdomain.com/preview-image.png",
          width: 1200,
          height: 630,
          alt: "Trending Teams Preview Image",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Trending Teams | SoccerHub",
      description: "Explore trending teams from MLS and more. Click to visit team pages.",
      images: ["https://yourdomain.com/preview-image.png"],
      site: "@yourTwitterHandle",
    },
  };
  
  export default function TeamsLayout({ children }) {
    return <>{children}</>;
  }
  