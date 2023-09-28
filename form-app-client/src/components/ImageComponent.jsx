function ImageComponent() {
  const imgUrl =
    "https://plus.unsplash.com/premium_photo-1687832783320-35671afbf484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="w-16 h-20">
      <img
        className=" w-full h-full rounded-[40px] object-cover outline outline-offset-2 outline-[#f174dc]"
        src={imgUrl}
      />
    </div>
  );
}

export default ImageComponent;
