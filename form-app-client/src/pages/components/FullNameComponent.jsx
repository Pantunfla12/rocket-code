import { useEffect, useState } from "react";

import ImageComponent from "../../components/ImageComponent";
import FormComponent from "../../components/FormComponent";
import Input from "../../components/Input";
import { useUser } from "../../context/UserContext";

function FullNameComponent({ setFullName, children }) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [pLastName, setPLastName] = useState("");
  const [mLastName, setMLastName] = useState("");

  const { errors } = useUser();

  useEffect(() => {
    setFullName({
      firstName: firstName,
      secondName: secondName,
      paternalLastName: pLastName,
      maternalLastName: mLastName,
    });
  }, [firstName, secondName, pLastName, mLastName]);

  return (
    <div className="flex flex-col">
      <div className="flex">
        {/* profile image */}
        <div>
          <ImageComponent />
        </div>
        <FormComponent question={"¿Cuál es tu nombre?"}>
          <Input
            name="firstName"
            type={"text"}
            placeholder={"Nombre"}
            data={firstName}
            setData={setFirstName}
          />
          {errors.firstName && <span>{errors.firstName.message}</span>}

          <Input
            name="secondName"
            type={"text"}
            placeholder={"Segundo Nombre"}
            data={secondName}
            setData={setSecondName}
          />
          <Input
            name="paternalLastName"
            type={"text"}
            placeholder={"Apellido Paterno"}
            data={pLastName}
            setData={setPLastName}
          />
          {errors.paternalLastName && (
            <span>{errors.paternalLastName.message}</span>
          )}
          <Input
            name="maternalLastName"
            type={"text"}
            placeholder={"Apellido Materno"}
            data={mLastName}
            setData={setMLastName}
          />
        </FormComponent>
      </div>
      {children}
    </div>
  );
}

export default FullNameComponent;
