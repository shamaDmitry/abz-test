import { useForm } from "react-hook-form";
import { _axios } from '../../helpers/fetcher';
import { API_URL } from '../../helpers/const';
import { useEffect, useState } from 'react';

import Button from '../Shared/Button';
import Input from '../Shared/Input';
import InputFile from '../Shared/InputFile';
import Radio from '../Shared/Radio';
import { emailRules, nameRules } from "../../helpers/validationRules";

const UserForm = () => {
  const [position, setPosition] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  console.log(errors);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const getPositionList = async () => {
    const res = await _axios.get(`${API_URL}/positions`);

    if (res.status === 200) {
      setPosition(res.data.positions);
    }
  }

  useEffect(() => {
    getPositionList();
    return () => { };
  }, []);


  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input
        className="mb-[50px]"
        placeholder="Your name"
        name="name"
        required
        {...register("name", nameRules)}
        helperText={errors.name?.message}
        errors={errors.name}
      />

      <Input
        className="mb-[50px]"
        placeholder="Email"
        name="email"
        required
        {...register("email", emailRules)}
        helperText={errors.email?.message}
      />

      <Input
        className="mb-[43px]"
        placeholder="Phone"
        name="phone"
        required
        {...register("phone", { required: true })}
        helperText="+38 (XXX) XXX - XX - XX"
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
              value={radio.id}
              {...register("position", { required: true })}
            />
          })
        }
      </div>

      <div className="mb-[50px]">
        <InputFile />
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

  // const { handleSubmit, control, reset } = useForm({
  //   defaultValues: {
  //     checkbox: false,
  //   }
  // });
  // const onSubmit = data => console.log(data);

  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <Controller
  //       name="checkbox"
  //       control={control}
  //       rules={{ required: true }}
  //       render={({ field }) => <Input {...field} />}
  //     />
  //     <input type="submit" />
  //   </form>
  // );
}

export default UserForm;
