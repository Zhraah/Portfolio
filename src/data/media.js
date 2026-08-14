import betterCallSaulPoster from "../assets/media/imdb-better-call-saul.jpg";
import lastOfUsPoster from "../assets/media/imdb-the-last-of-us.jpg";
import severancePoster from "../assets/media/imdb-severance.jpg";
import siliconValleyPoster from "../assets/media/imdb-silicon-valley.jpg";

const moviePlaylist = [
  {
    title: "Silicon Valley",
    year: "2014",
    rating: "8.5",
    poster: siliconValleyPoster,
    href: "https://www.imdb.com/title/tt2575988/",
  },
  {
    title: "Severance",
    year: "2022",
    rating: "8.6",
    poster: severancePoster,
    href: "https://www.imdb.com/title/tt11280740/",
  },
  {
    title: "Better Call Saul",
    year: "2015",
    rating: "9.0",
    poster: betterCallSaulPoster,
    href: "https://www.imdb.com/title/tt3032476/",
  },
  {
    title: "The Last of Us",
    year: "2023",
    rating: "8.4",
    poster: lastOfUsPoster,
    href: "https://www.imdb.com/title/tt3581920/",
  },
];

export { moviePlaylist };
