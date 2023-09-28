function Answer({ data, children }) {
  return (
    <div className="self-end max-w-full   bg-[#f174dc] rounded-md mt-6 ">
      <div className="px-2 py-4  text-black ">
        <p>{data}</p>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Answer;
