import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import netflixBackground from "../assets/pictures/Netflix Background.webp";
import { MovieRow } from "../components";
import endpoints from "../services/fetchSettings";

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().favShows);
      });
    }
  }, [user?.email]);

  return (
    <div>
      <div className="">
        <img
          className="h-[60vh] w-full object-cover"
          src={netflixBackground}
          alt="netflix bg"
        />
        <div className="fixed left-0 top-0 h-[60vh] w-full bg-black/60"></div>
        <div className="absolute top-[25%] p-4 md:p-8">
          {" "}
          <h1 className="text-5xl">My profile</h1>
          <p className="my-4 text-lg">{`Logged as : ${user.email}`}</p>
        </div>
      </div>

      {/* movieRow using data from Firebase */}
      <MovieRow
        title={"My favorite list"}
        url={undefined}
        favoriteData={movies}
        likedYet={true}
      />
    </div>
  );
};

export default Profile;

// if (!user) {
//   return (
//     <>
//       <p>fetching shows...</p>
//     </>
//   );
// }
