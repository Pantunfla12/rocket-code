import { useState } from "react";

import FullNameComponent from "./components/FullNameComponent";
import BirthDateComponent from "./components/BirthDateComponent";
import ContactComponent from "./components/ContactComponent";
import Answer from "../components/Answer";
import Modal from "../components/Modal";

import { MdOutlineTimer } from "react-icons/md";
import { RiSurveyLine } from "react-icons/ri";

import { useUser } from "../context/UserContext";

function HomePage() {
  const [fullName, setFullName] = useState({});
  const [birthDate, setBirthDate] = useState("");
  const [contact, setContact] = useState({});

  const { handleSubmit, isOpen, setIsOpen, user, setUser } = useUser();

  const onSubmit = handleSubmit((data) => {
    setUser(data);
    setIsOpen(true);
  });

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center ">
      {/* header */}
      {isOpen && <Modal />}
      <div className="h-1/5  w-[520px]">
        <header className="flex justify-between px-4 py-9 h-full  bg-[#f174dc] rounded-t-md">
          <div className="flex flex-col justify-between text-black">
            <div>
              <p className="text-3xl font-bold">Título de formulario</p>
            </div>
            <div className="flex items-center gap-x-2">
              <MdOutlineTimer />
              <p>En menos de 5 minutos.</p>
            </div>
          </div>
          <div className="self-center text-7xl">
            <RiSurveyLine />
          </div>
        </header>
      </div>
      <div className=" w-[520px]  max-h-[60%] bg-white rounded-b-md overflow-y-scroll overflow-x-hidden">
        {/* body */}

        <form onSubmit={onSubmit}>
          <div className="flex flex-col w-full p-6 gap-y-6  ">
            <FullNameComponent setFullName={setFullName}>
              {Object.values(fullName).some((value) => value != "") && (
                <Answer>
                  <p>
                    {`${fullName.firstName} ${fullName.secondName} ${fullName.paternalLastName} ${fullName.maternalLastName}`}
                  </p>
                </Answer>
              )}
            </FullNameComponent>

            {Object.values(fullName).some((value) => value != "") && (
              <BirthDateComponent setBirthDate={setBirthDate}>
                {birthDate != "" && <Answer data={birthDate} />}
              </BirthDateComponent>
            )}

            {birthDate != "" && (
              <ContactComponent setContact={setContact}>
                {(contact?.email || contact?.phoneNumber) && (
                  <Answer>
                    <p>
                      {contact.email && `Correo electrónico: ${contact.email}`}
                    </p>
                    <p>
                      {contact.phoneNumber &&
                        `Teléfono celular: ${contact.phoneNumber}`}
                    </p>
                  </Answer>
                )}
              </ContactComponent>
            )}

            <button className="w-3/4 bg-[#f64283] self-center py-3 rounded-md ">
              Iniciar
            </button>
            {user && (
              <Answer>
                <p>
                  {user?.birthdate && `Fecha de nacimiento: ${user.birthdate}`}
                </p>
                <p>{user?.email && `Correo electrónico: ${user.email}`}</p>
                <p>
                  {user?.phoneNumber && `Teléfono celular: ${user.phoneNumber}`}
                </p>
                {user?.fullName?.trim() != "" &&
                  `Nombre: ${user.firstName} ${user.secondName} ${user.paternalLastName} ${user.maternalLastName}`}
              </Answer>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
