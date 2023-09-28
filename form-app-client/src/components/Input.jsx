import { useUser } from "../context/UserContext";

function Input({ type, placeholder, data, setData, name = "name" }) {
  const { register } = useUser();

  return (
    <input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      className="p-2 my-2 rounded-md font-semibold w-full"
      value={data}
      onChange={(e) => {
        setData(e.target.value);
      }}
    />
  );
}

export default Input;
