/* eslint-disable react/prop-types */

import Star from "./assets/Star.svg";
import StarFill from "./assets/Star_fill.svg";

function Card({ item }) {
  return (
    <div className="my-5">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="rounded-xl w-full my-3"
        />
        {item.popular && (
          <p className="absolute top-3 left-3 bg-yellow rounded-[3rem] py-1 px-2 text-[10px] text-dark font-semibold">
            Popular
          </p>
        )}
      </div>

      <span className="flex items-center justify-between my-2">
        <p className="font-semibold text-base">{item.name}</p>
        <p className="bg-light-green rounded-md text-xs px-2 py-1 text-darker font-medium">
          {item.price}
        </p>
      </span>
      {item.rating ? (
        <div className="flex items-center justify-between text-sm font-bold">
          <span className="flex items-center">
            <img src={StarFill} alt="" />
            <p className="ml-2 mr-1">{item.rating}</p>
            <p className="text-gray">({item.votes} votes)</p>
          </span>
          {!item.available && <p className="text-orange-red">Sold Out</p>}
        </div>
      ) : (
        <div className="flex items-center justify-between text-sm font-bold">
          <span className="flex items-center">
            <img src={Star} alt="" />
            <p className="ml-2 text-gray">No Ratings</p>
          </span>
          {!item.available && <p className="text-orange-red">Sold Out</p>}
        </div>
      )}
    </div>
  );
}

export default Card;
