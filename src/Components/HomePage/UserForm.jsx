import { useForm } from "react-hook-form";
import { API_URL } from '../../helpers/const';
import { useEffect, useState } from 'react';
import axios from "axios";

import Button from '../Shared/Button';
import Input from '../Shared/Input';
import InputFile from '../Shared/InputFile';
import Radio from '../Shared/Radio';
import {
  emailRules,
  nameRules,
  phoneRules,
  photoRules,
  positionRules
} from "../../helpers/validationRules";

const UserForm = () => {
  const [position, setPosition] = useState(null);
  const [isFormSend, setIsFormSend] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const tokenRes = await axios.get(`${API_URL}/token`);
    const photo = data.photo[0];

    const res = await axios.post(`${API_URL}/users`, {
      ...data,
      photo
    }, {
      headers: {
        "Content-Type": 'multipart/form-data',
        "Token": tokenRes.data.token
      }
    });

    setIsFormSend(true);
  };

  const getPositionList = async () => {
    const res = await axios.get(`${API_URL}/positions`);

    if (res.status === 200) {
      setPosition(res.data.positions);
    }
  }

  useEffect(() => {
    getPositionList();
    return () => { };
  }, []);

  if (isFormSend) {
    return (
      <div className="bg-no-repeat bg-center bg-contain bg-form-success max-w-[328px] h-[290px] mx-auto mb-4"></div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input
        className="mb-[50px]"
        placeholder="Your name"
        name="name"
        required
        {...register("name", nameRules)}
        helperText={errors.name?.message}
        error={errors.name}
      />

      <Input
        className="mb-[50px]"
        placeholder="Email"
        name="email"
        required
        {...register("email", emailRules)}
        helperText={errors.email?.message}
        error={errors.email}
      />

      <Input
        className="mb-[43px]"
        placeholder="Phone"
        name="phone"
        required
        {...register("phone", phoneRules)}
        helperText={errors.phone?.message}
        error={errors.phone}
      />

      <p className="text-black text-base mb-[11px]">
        Select your position
      </p>

      <div className="flex flex-col mb-[47px]">
        {
          position?.map(radio => {
            return <Radio
              key={radio.id}
              label={radio.name}
              checked={radio.id === 1}
              value={radio.id}
              {...register("position_id", positionRules)}
              error={errors.position_id}
            />
          })
        }
      </div>

      <div className="mb-[50px]">
        <InputFile
          buttonText="Upload"
          placeholder="Upload your photo"
          name="photo"
          required
          {...register("photo", photoRules)}
          error={errors.photo}
          helperText={errors.photo?.message}
        />
      </div>

      <div className="text-center">
        <Button
          type="submit"
          color="yellow"
        >
          Sign up
        </Button>
      </div>
    </form>
  );
}

export default UserForm;
