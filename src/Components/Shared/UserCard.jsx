import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const UserCard = ({ data }) => {
  const {
    name,
    email,
    phone,
    position,
    photo,
    registration_timestamp
  } = data;

  return (
    <section className="w-full rounded-[10px] bg-white p-5 flex flex-col items-center">
      <p className="font-bold mb-4 text-center">
        Date registration: {dayjs.unix(registration_timestamp).format('DD/MM/YYYY HH:MM:ss')}
      </p>
      <img
        className="w-[70px] h-[70px] rounded-full mb-5"
        src={photo} alt=""
      />
      <h1 className="text-base mb-5 text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
        {name}
      </h1>
      <p className="text-base text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
        {position}
      </p>
      <p className="text-base text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
        {email}
      </p>
      <p className="text-base">
        {phone}
      </p>
    </section>
  );
}

UserCard.propTypes = {
  "data": PropTypes.object,
}

export default UserCard;
