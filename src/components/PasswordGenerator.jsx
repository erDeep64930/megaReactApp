import { FiCopy } from "react-icons/fi";
export const PasswordGenerator = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-gray-900 via-slate-700 via-zinc-700 to-black flex justify-center items-center ">
      <div className="border border-rose-600 p-10">
        <div>
          <h1>Password Generator</h1>
        </div>
        {/* this is for display container start here */}
        <div className="display_container">
          <input
            readOnly
            placeholder="password"
            className="display"
            data="passwordDisplay"
          />
          <button>
            <span data="copyMsg"></span>
            <FiCopy />
          </button>
        </div>
        {/* this is for display container end here */}
        {/* this is input container start here */}
        <div className="input_container">
          <div className="length_container">
            <p>Password length</p>
            <p data="lengthNumber">0</p>
          </div>
          {/* slider */}
          <div>
            <input type="range" min="1" max="20" data="data_length_slider" />
          </div>
          {/* checkbox */}
          <div>
            <input type="checkbox" id="uppercase" />
            <label for="uppercase">Include uppercase</label>
          </div>

          <div>
            <input type="checkbox" id="lowercase" />
            <label for="lowercase">Include number</label>
          </div>

          <div>
            <input type="checkbox" id="number" />
            <label for="number">Include number</label>
          </div>

          <div>
            <input type="checkbox" id="symbols" />
            <label for="symbols">Include Symbols</label>
          </div>

          {/* strength section */}
          <div className="strength_container">
            <p data="indicator">Strength</p>
            <div></div>
          </div>
          {/*button  */}
          <button>Generate Password</button>
        </div>
        {/* this is input container start here */}
      </div>
    </div>
  );
};
