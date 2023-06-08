import React from 'react';

const UserCard = () => {
  return (
    <section className="w-full rounded-[10px] bg-white p-5 flex flex-col items-center">
      <img
        className="w-[70px] h-[70px] rounded-full mb-5"
        src="https://robohash.org/hicveldicta.png" alt=""
      />

      <h1 className="text-base mb-5 line-clamp-1">
        Salvador Stewart Flynn Thomas Salva Salve
      </h1>

      <p className="text-base line-clamp-1">
        Leading specialist of the department of cent
      </p>
      <p className="text-base line-clamp-1">
        frontend_develop@gmail.com
      </p>
      <p className="text-base">
        +38 (098) 278 44 24
      </p>
    </section>
  );
}

export default UserCard;
