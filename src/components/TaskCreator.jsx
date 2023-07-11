import { useForm } from "react-hook-form";
import { Input } from '@chakra-ui/react'


// eslint-disable-next-line react/prop-types
export default function TaskCreator({ createNewTask }) {
  

  
  const registerOptions = {
    tarea: {
      required: "Ingresa una TareApp",
      minLength: {
        value: 3,
        message: "Tu TareApp debe tener más de 3 letras",
      },
      maxLength: {
        value: 40,
        message: "Tu TareApp MAXIMO debe tener 40 letras",
      }
    },
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    createNewTask(data.tarea, data.descripcion);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        borderColor="black"
        w="95%"
        mt="50px"
        _placeholder={{ color: 'black', fontWeight: 'semibold', opacity: 0.3}}
        //variant="outline"
        name="tarea"
        id="nueva-tareapp"
        className="nueva-tarea"
        type="text"
        placeholder="Ingresa nueva TareApp"
        defaultValue=""
        {...register("tarea", registerOptions.tarea)}
      />
      {errors.tarea && (
        <span className="error" role="alert">
          {errors.tarea.message}
        </span>
      )}

      <Input
        borderColor="black"
        w="95%"
        _placeholder={{ color: 'black', fontWeight: 'semibold', opacity: 0.3}}
        name="descripcion"
        id="nueva-descripcion"
        className="nueva-tarea"
        type="text"
        placeholder="Descripcion de la TareApp"
        defaultValue=""
        {...register("descripcion")}
      />
      <button className="button-agregar">AGREGAR</button>
    </form>
  );
}

