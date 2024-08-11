import React from "react";
import wedding from "/wedding.png"
import XOXO from "/tictac.png"
import freshcart from "/freshcart.png"
import calc from "/myproj2.jpeg"


function PortFolio() {

  const handleSource =()=>{
    window.open('https://github.com/nayab-nakhwa', '_blank');
  }
  const openIndexFile = (path) => {
    window.open(path, '_blank');
  };
 
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
            <div
              className="md:w-[300px] mx-auto text-center md:h-[300px] border-[2px] border-purple-200 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={wedding}
                className="w-[200px] mx-auto h-[120px] p-1 rounded-md border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">Wedding planner</div>
                <p className="px-2 text-gray-700">
                  Wedding Planner website for your dream wedding.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                 <button  onClick={() => openIndexFile('/projects/weddingplanner/home.php')}  className="bg-purple-500 hover:bg-purple-800 text-white font-bold px-4 py-2 rounded">
                 Open
                </button> 
                <button onClick={handleSource} className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
            <div
              className="md:w-[300px] mx-auto text-center md:h-[300px] border-[2px] border-purple-200 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={XOXO}
                className="w-[200px] mx-auto h-[120px] p-1 rounded-md border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">XOXO Game</div>
                <p className="px-2 text-gray-700">
                  XOXO Game using HTML, CSS and Javasript.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <button onClick={() => openIndexFile('/projects/JavaScriptGame/index.html')} className="bg-purple-500 hover:bg-purple-800 text-white font-bold px-4 py-2 rounded">
                  Open
                </button>
                <button  onClick={handleSource} className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
            <div
              className="md:w-[300px] mx-auto text-center md:h-[300px] border-[2px] border-purple-200 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={freshcart}
                className="w-[200px] mx-auto h-[120px] p-1 rounded-md border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">Fresh Cart</div>
                <p className="px-2 text-gray-700">
                  E-Commerce Project using html, css, Javasript and bootstrap.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <button onClick={() => openIndexFile('/projects/FreshCart/index.html')} className="bg-purple-500 hover:bg-purple-800 text-white font-bold px-4 py-2 rounded">
                  Open
                </button>
                <button onClick={handleSource} className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
            <div
              className="md:w-[300px] mx-auto text-center md:h-[300px] border-[2px] border-purple-200 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={calc}
                className="w-[200px] mx-auto h-[120px] p-1 rounded-md border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">Calculator</div>
                <p className="px-2 text-gray-700">
                  Web application Calculator using html, css and Javasript.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <button onClick={() => openIndexFile('/projects/calci/index.html')} className="bg-purple-500 hover:bg-purple-800 text-white font-bold px-4 py-2 rounded">
                  Open
                </button>
                <button onClick={handleSource} className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
