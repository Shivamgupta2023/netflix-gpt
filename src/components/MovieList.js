import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ titleHeading, MovieListData }) => {

  if (!MovieListData) return;

  return (
    <>
      <div className="mx-4 mt-4 text-3xl">{titleHeading}</div>
      <div className="flex overflow-x-scroll scroll-m-0">
        <div className="flex">
          {MovieListData.map((itm) => {
            if(!itm.poster_path) return;
            const { id, title, poster_path } = itm;
            return <MovieCard key={id} path={poster_path} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MovieList;
