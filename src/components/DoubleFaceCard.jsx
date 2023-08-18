import my_pic from "/Project_images/About.jpg"
const DoubleFaceCard = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className="face_card">
        <div className="face1">
          <div className="face_card_image_box">
            <img src={my_pic} alt="pic"/>
            <h3 className="p-0 text-white text-center font-[25px] mt-[10px]">React Developer</h3>
          </div>
        </div>
        {/* this is for face2 */}
        <div className="face2">
          <div className="face_content">
            <p> love to build highly scalable and responsive website layout </p>
            <button className="inline text-gray-300 p-5 border-2 border-gray-400 mt-4 hover:bg-slate-400 hover:text-white">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleFaceCard;
