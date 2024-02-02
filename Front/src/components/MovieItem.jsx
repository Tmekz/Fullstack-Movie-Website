import React, { useEffect, useState } from "react";
import { getImageUrl } from "../services/fetchSettings";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const MovieItem = ({ movie, likedYet }) => {
  // state for like
  const [like, setLike] = useState(likedYet);
  // destructuring
  const { title, backdrop_path, poster_path } = movie;

  // import user from
  const { user } = UserAuth();

  // remove from liked
  const handleLikeDislike = async () => {
    const userEmail = user?.email;

    if (userEmail) {
      const userDoc = doc(db, "users", userEmail);
      if (like) {
        await updateDoc(userDoc, {
          favShows: arrayRemove({ ...movie }),
        });
      } else {
        await updateDoc(userDoc, {
          favShows: arrayUnion({ ...movie }),
        });
      }
      setLike(!like);
    } else {
      alert("You must be logged in to save a movie");
    }
  };

  return (
    <div className="relative m-2 inline-block h-60 w-[160px] cursor-pointer overflow-hidden rounded-lg sm:w-[200px] md:h-[200px] md:w-[240px] lg:w-[400px]">
      <Link
        to={`/movie/${movie.id}`}
        aria-label={`Voir les détails du film : ${title}`}
      >
        <img
          className="block h-full w-full object-cover object-top"
          src={getImageUrl(backdrop_path ?? poster_path, "w500")}
          alt={title}
        />

        <div className="absolute left-0 top-0 h-full w-full bg-black/80 opacity-0 hover:opacity-100">
          <p className="flex h-full w-full items-center justify-center whitespace-normal text-center text-xs font-bold text-white md:text-lg ">
            {title}
          </p>
          <p onClick={handleLikeDislike}>
            {like ? (
              <FaHeart
                size={30}
                className="absolute left-3 top-3  text-red-600 hover:brightness-150 "
              />
            ) : (
              <FaRegHeart
                size={30}
                className="absolute left-3 top-3 hover:text-red-600"
              />
            )}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieItem;
