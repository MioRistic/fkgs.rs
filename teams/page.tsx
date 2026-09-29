'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// TYPES
type Team = {
  id: number;
  title: string;
  imageUrl: string;
  slug: string;
};

// DATA
const generateTeams = (): Team[] => [
  { id: 1, title: "Inter Miami", imageUrl: "/logos/Inter_Miami_CF_logo.svg.png", slug: "inter-miami" },
  { id: 2, title: "Atlanta United", imageUrl: "/logos/Atlanta_MLS.svg.png", slug: "atlanta-united" },
  { id: 3, title: "Austin FC", imageUrl: "/logos/Austin_FC_logo.svg.png", slug: "austin-fc" },
  { id: 4, title: "Charlotte FC", imageUrl: "/logos/Charlotte_FC_logo.svg.png", slug: "charlotte" },
  { id: 5, title: "Chicago Fire", imageUrl: "/logos/Chicago_Fire_logo,_2021.svg.png", slug: "chicago-fire" },
  { id: 6, title: "FC Cincinnati", imageUrl: "/logos/FC_Cincinnati_primary_logo_2018.svg.png", slug: "fc-cincinnati" },
  { id: 7, title: "Colorado Rapids", imageUrl: "/logos/Colorado_Rapids_logo.svg.png", slug: "colorado-rapids" },
  { id: 8, title: "Columbus Crew", imageUrl: "/logos/Columbus_Crew_logo_2021.svg.png", slug: "columbus-crew" },
  { id: 9, title: "D.C. United", imageUrl: "/logos/D.C._United_logo_(2016).svg.png", slug: "dc-united" },
  { id: 10, title: "FC Dallas", imageUrl: "/logos/FC_Dallas_logo.svg.png", slug: "fc-dallas" },
  { id: 11, title: "Houston Dynamo", imageUrl: "/logos/Houston_Dynamo_FC_logo.svg.png", slug: "houston-dynamo" },
  { id: 12, title: "Sporting Kansas City", imageUrl: "/logos/Sporting_Kansas_City_logo.svg.png", slug: "sporting-kansas-city" },
  { id: 13, title: "LA Galaxy", imageUrl: "/logos/Los_Angeles_Galaxy_logo.svg.png", slug: "la-galaxy" },
  { id: 14, title: "LAFC", imageUrl: "/logos/Los_Angeles_Football_Club.svg.png", slug: "lafc" },
  { id: 15, title: "Minnesota United", imageUrl: "/logos/Minnesota_United_FC_(MLS)_Primary_logo.svg.png", slug: "minnesota-united" },
  { id: 16, title: "CF Montréal", imageUrl: "/logos/CF_Montreal_logo_2023.svg.png", slug: "cf-montreal" },
  { id: 17, title: "Nashville SC", imageUrl: "/logos/Nashville_SC_logo,_2020.svg.png", slug: "nashville-sc" },
  { id: 18, title: "New England Revolution", imageUrl: "/logos/New_England_Revolution_(2021)_logo.svg.png", slug: "new-england-revolution" },
  { id: 19, title: "New York City FC", imageUrl: "/logos/New_York_City_FC.svg.png", slug: "nycfc" },
  { id: 20, title: "New York Red Bulls", imageUrl: "/logos/New_York_Red_Bulls_logo.svg.png", slug: "new-york-red-bulls" },
  { id: 21, title: "Orlando City SC", imageUrl: "/logos/Orlando_City_2014.svg.png", slug: "orlando-city" },
  { id: 22, title: "Philadelphia Union", imageUrl: "/logos/Philadelphia_Union_2018_logo.svg.png", slug: "philadelphia-union" },
  { id: 23, title: "Portland Timbers", imageUrl: "/logos/Portland_Timbers_logo.svg.png", slug: "portland-timbers" },
  { id: 24, title: "Real Salt Lake", imageUrl: "/logos/Real_Salt_Lake_2010.svg.png", slug: "real-salt-lake" },
  { id: 25, title: "San Jose Earthquakes", imageUrl: "/logos/San_Jose_Earthquakes_2014.svg.png", slug: "san-jose-earthquakes" },
  { id: 26, title: "Seattle Sounders FC", imageUrl: "/logos/Seattle_Sounders_logo.svg.png", slug: "seattle-sounders" },
  { id: 27, title: "Toronto FC", imageUrl: "/logos/Toronto_FC_Logo.svg.png", slug: "toronto-fc" },
  { id: 28, title: "Vancouver Whitecaps FC", imageUrl: "/logos/Vancouver_Whitecaps_FC_logo.svg.png", slug: "vancouver-whitecaps" },
  { id: 29, title: "St. Louis City SC", imageUrl: "/logos/St._Louis_City_SC_logo.svg.png", slug: "st-louis-city-sc" },
  { id: 30, title: "San Diego FC", imageUrl: "/logos/San_Diego_FC_logo.svg.png", slug: "san-diego" },
  { id: 31, title: "United States", imageUrl: "/logos/United_States_Soccer_Federation_logo_2016.svg.png", slug: "usa-national-team" },
  { id: 32, title: "Mexico", imageUrl: "/logos/Mexico_national_football_team_crest.svg.png", slug: "mexico-national-team" },
];

// REUSABLE GRID COMPONENT
type TeamGridProps = {
  title: string;
  data: Team[];
};

const TeamGrid: React.FC<TeamGridProps> = ({ title, data }) => (
  <div className="mb-16">
    <h2 className="text-3xl lg:text-4xl font-black text-[#020617] mb-6 border-l-4 border-blue-600 pl-4">
      {title}
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {data.map((team) => (
        <Link
          key={team.id}
          href={`/teams/${team.slug}`}
          className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
        >
          <div className="relative h-40 bg-gray-50 flex items-center justify-center p-6">
            <Image
              src={team.imageUrl}
              alt={team.title}
              width={100}
              height={100}
              className="object-contain group-hover:scale-110 transition"
            />
          </div>

          <div className="p-4 text-center">
            <h3 className="font-bold text-sm md:text-base text-[#020617] group-hover:text-blue-600 transition">
              {team.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

// MAIN PAGE
const TeamsPage: React.FC = () => {
  const teams = generateTeams();

  const eastTeams = teams.filter(team =>
    [
      "inter-miami","atlanta-united","charlotte","chicago-fire","fc-cincinnati",
      "columbus-crew","dc-united","cf-montreal","nashville-sc",
      "new-england-revolution","nycfc","new-york-red-bulls",
      "orlando-city","philadelphia-union","toronto-fc"
    ].includes(team.slug)
  );

  const westTeams = teams.filter(team =>
    [
      "austin-fc","colorado-rapids","fc-dallas","houston-dynamo",
      "sporting-kansas-city","la-galaxy","lafc","minnesota-united",
      "portland-timbers","real-salt-lake","san-jose-earthquakes",
      "seattle-sounders","vancouver-whitecaps","st-louis-city-sc","san-diego"
    ].includes(team.slug)
  );

  const nationalTeams = teams.filter(team =>
    ["usa-national-team","mexico-national-team"].includes(team.slug)
  );

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-16">

      {/* HEADER */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-4xl lg:text-5xl font-black text-[#020617]">
            Teams
          </h1>
          <p className="text-gray-600 mt-2">
            MLS Eastern • Western • National Teams
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <TeamGrid title="Eastern Conference" data={eastTeams} />
        <TeamGrid title="Western Conference" data={westTeams} />
        <TeamGrid title="National Teams" data={nationalTeams} />
      </div>

      

      {/* BACK TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#020617] text-white p-4 rounded-full shadow-lg hover:bg-gray-800"
      >
        ↑
      </button>

    </div>
  );
};

export default TeamsPage;