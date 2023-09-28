import { useEffect, useState } from "react";

import ImageComponent from "../../components/ImageComponent";
import FormComponent from "../../components/FormComponent";
import Input from "../../components/Input";

import moment from "moment/moment";
import "moment/locale/es";
import { useUser } from "../../context/UserContext";

moment.locale("es");

function BirthDateComponent({ setBirthDate, children }) {
  const [date, setDate] = useState("");

  const { errors } = useUser();

  useEffect(() => {
    if (date != "") setBirthDate(moment(date).format("DD MMMM YYYY"));
  }, [date]);

  return (
    <div className="flex flex-col">
      <div className="flex">
        {/* profile image */}
        <div>
          <ImageComponent />
        </div>

        <FormComponent question={"¿Cuál es tu fecha de nacimiento?"}>
          <Input name="birthdate" type={"date"} data={date} setData={setDate} />
          {errors?.birthdate && <span>{errors.birthdate.message}</span>}
        </FormComponent>
      </div>
      {children}
    </div>
  );
}

export default BirthDateComponent;
