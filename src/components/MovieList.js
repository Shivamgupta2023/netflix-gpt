import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ titleHeading, MovieListData }) => {

  if (!MovieListData) return;

  return (
    <>
      <div className="mx-4 mt-4 md:text-3xl">{titleHeading}</div>
      <div className="flex overflow-x-scroll hide-scrollbar">
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
