import { useEffect, useState } from "react";

import ImageComponent from "../../components/ImageComponent";
import FormComponent from "../../components/FormComponent";
import Input from "../../components/Input";
import { useUser } from "../../context/UserContext";

function ContactComponent({ setContact, children, AnswerComponent }) {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { errors } = useUser();

  useEffect(() => {
    setContact({
      email: email,
      phoneNumber: phoneNumber,
    });
  }, [email, phoneNumber]);

  return (
    <div className="flex flex-col">
      <div className="flex">
        {/* profile image */}
        <div>
          <ImageComponent />
        </div>

        <FormComponent question={"Datos de contacto"}>
          <Input
            name="email"
            type={"email"}
            placeholder={"Correo electrónico"}
            data={email}
            setData={setEmail}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <Input
            name="phoneNumber"
            type={"tel"}
            placeholder={"Teléfono celular"}
            data={phoneNumber}
            setData={setPhoneNumber}
          />
          {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
        </FormComponent>
      </div>
      {children}
    </div>
  );
}

export default ContactComponent;
