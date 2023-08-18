const SplitButton = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className="w-[300px] h-[60px] border-2 border-sky-950 text-center leading-6 relative overflow-hidden">
        <span className="[clip-path:polygon(0_0, 100%_0, 100%_50%, 0_50%)] absolute top-0 left-0 w-full h-full text-3xl font-semibold font-alkatra uppercase text-orange-500 animate-split">
          LOADING
        </span>
        <span className="[clip-path:polygon(0_50%, 100%_50%, 100%_100%, 0_100%)] absolute top-0 left-0 w-full h-full text-3xl font-semibold font-alkatra uppercase text-green-500 animate-split-reverse">
          LOADING
        </span>
      </div>
    </div>
  );
};

export default SplitButton;
