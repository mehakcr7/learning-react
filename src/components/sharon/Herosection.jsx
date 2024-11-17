import React from "react";

function Herosection() {
  return (
    <div>
      <div className="flex px-56 justify-between h-svh text-white ">
        <div className="text-center flex flex-col  gap-10 ">
          <h1 className="text-8xl font-extrabold text-red-600">
            DESIGN <br /> YOUR <br /> DREAM <br /> HOME
          </h1>
          <p className="text-slate-400">
            Strong foundations, solid designs: <br />
            Trust us to bring your concrete visions to life.
          </p>
          <div className="flex justify-center">
          <div className="border border-black w-52 h-10 items-center	bg-red-600 rounded-lg flex gap-4 justify-center hover:bg-black hover:border-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>

            <button className="font-bold">Know more</button>
          </div>
          </div>
        </div>
        <div>
          <img
            src="https://sharonindustry.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.3ce56fc6.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
