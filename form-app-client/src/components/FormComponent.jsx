function FormComponent({ children, question }) {
  return (
    <div className="w-full pl-6  ">
      <div className=" bg-gray-200 text-black font-bold rounded-md">
        <div className="">
          {/* title */}
          <div className="px-4 pt-4">
            <p>{question}</p>
          </div>
          {/* form */}
          <div className=" p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;
