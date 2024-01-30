import React, { useEffect, useState } from "react";
import sliderData from "../../data/sliderData";
import leftChevron from "../assets/Icons/left-arrow.svg";
import rightChevron from "../assets/Icons/right-arrow.svg";


const Slider = () => {
  // initilisation de l'index à 1
  const [sliderIndex, setSliderIndex] = useState(1);

  // permet de changer l'index pour changer d'images
  const toggleImage = (indexPayload) => {
    let newState;
    //permet lorsqu'on arrive sur la photo 5 + payload +1 au click = 6 alors on repasse newState et donc sliderIndex à 1 pour revenir à la premiere photo
    if (indexPayload + sliderIndex > sliderData.length) {
      newState = 1;

      // ici on veut revenir à 5 car on click sur le bouton précédent qui à un sliderindex à 1. Donc si - 1 serait à 0 = bug. On veut revenir à 5 qui est aussi égal à sliderData.length.
    } else if (indexPayload + sliderIndex < 1) {
      newState = sliderData.length;

      // tous les autres cas de figure normaux
    } else {
      newState = indexPayload + sliderIndex;
    }
    setSliderIndex(newState);

    //AUTOMATIQUE SLIDER
    // ici va utiliser une fonction call back directement dans l'élément qui change le state : "setSliderIndex". Pas svt utilisé
    // setSliderIndex((state) => {
    //   if (indexPayload + state > sliderData.length) {
    //     return 1;
    //   } else if (indexPayload + state < 1) {
    //     return sliderData.length;
    //   } else {
    //     return state + indexPayload;
    //   }
    // });
  };

  // AUTOMATIQUE SLIDER
  // useEffect(() => {
  //   const intervalID = setInterval(() => toggleImage(+1), 2000);

  //   return () => clearInterval(intervalID);
  // }, []);

  return (
    <>
      <p className="index-info mx-0 mb-[25px] mt-[115px] text-center   text-white ">
        {/* SliderIndex commence à 1 avec le usestate, et la length correspond à "5" éléments dans le tableau de data */}
        {sliderIndex} / {sliderData.length}
      </p>
      <div className="slider relative mx-auto my-0 aspect-[3/2] max-w-[600px]  ">
        <p className="image-info z-1 absolute right-0 border-b-[1px] border-l-[1px] border-black bg-[#f1f1f1]  px-2 py-3">
          {/* méthode qui va appeler un call back et retourne l'objet dont l'id est = à sliderIndex puis sort moi le resultat description */}
          {sliderData.find((obj) => obj.id === sliderIndex).description}
        </p>
        <img
          className="h-full w-full bg-cover"
          //on importe les images 1 ou 2 ou 3 grace à l'index de sliderindex
          src={`/images/img-${sliderIndex}.jpg`}
          alt=""
        />
        <button
          onClick={() => toggleImage(-1)}
          className="navigation-button prev-button absolute -left-[100px] top-2/4 flex h-12 w-12 -translate-y-2/4 cursor-pointer items-center justify-center rounded-full border-2 bg-transparent hover:bg-[#4e4e4e56]"
        >
          <img src={leftChevron} className="w-4" alt="left arrow previous " />
        </button>
        <button
          onClick={() => toggleImage(+1)}
          className="navigation-button prev-button absolute -right-[100px] top-2/4 flex h-12 w-12 -translate-y-2/4 cursor-pointer items-center justify-center rounded-full border-2 bg-transparent"
        >
          <img src={rightChevron} className="w-4" alt="rigth arrow next " />
        </button>
      </div>
    </>
  );
};

export default Slider;
