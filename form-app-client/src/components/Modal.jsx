import { toast } from "react-toastify";
import { registerRequest } from "../api/user";
import { useUser } from "../context/UserContext";

function Modal() {
  const { user, setIsOpen, setUser } = useUser();

  const handleContinue = () => {
    registerRequest(user);
    toast.success("Added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setIsOpen(false);
  };
  const handleCancel = () => {
    setUser(null);
    setIsOpen(false);
  };

  return (
    <div className="absolute  bg-gray-300 rounded-md">
      <div className="p-8 ">
        <header className="mb-5 text-black">
          <p className="text-2xl">Estás seguro de que deseas continuar?</p>
        </header>
        <div className="text-black mb-5">
          <p className="font-semibold">Se agregarán los siguientes datos:</p>
          <p>{user?.birthdate && `Fecha de nacimiento: ${user.birthdate}`}</p>
          <p>{user?.email && `Correo electrónico: ${user.email}`}</p>
          <p>{user?.phoneNumber && `Teléfono celular: ${user.phoneNumber}`}</p>
          {user?.fullName?.trim() != "" &&
            `Nombre: ${user.firstName} ${user.secondName} ${user.paternalLastName} ${user.maternalLastName}`}
        </div>
        <div className="flex justify-around">
          <button
            className="p-3 rounded-md bg-[#ff80b0] "
            onClick={handleContinue}
          >
            continuar
          </button>
          <button
            className="p-3 rounded-md bg-[#c01752]"
            onClick={handleCancel}
          >
            cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
