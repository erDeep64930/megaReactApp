import my_pic from "/Project_images/About.jpg"

const RotatedCardHoverImage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center ">

    
    <div className="card">
      <div className="image_box">
        <img src={my_pic} alt="my_pic"/>
      </div>
      <div className="details">
        <h1 className="p-0 m-0 font-tilt text-lime-500">Web Developer</h1>
        <h2 className="font-dancing text-rose-400">Deepak</h2>
      </div>
    </div>
    </div>
  );
};

export default RotatedCardHoverImage;
