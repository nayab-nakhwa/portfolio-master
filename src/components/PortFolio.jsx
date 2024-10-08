import React from "react";
import wedding from "/wedding.png";
import XOXO from "/tictac.png";
import freshcart from "/freshcart.png";
import calc from "/myproj2.jpeg";

function PortFolio() {
  const handleSource = () => {
    window.open("https://github.com/nayab-nakhwa", "_blank");
  };
  const openIndexFile = (path) => {
    window.open(path, "_blank");
  };

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 my-5">
          <div className="w-full mx-auto text-center h-[300px] border-[2px] border-purple-200 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 flex flex-col">
            <img
              src={wedding}
              className="w-[200px] mx-auto h-[120px] p-1 rounded-md border-[2px]"
              alt=""
            />
            <div className="flex flex-col justify-center">
              <div className="px-2 font-bold text-xl mb-2">Wedding planner</div>
              <p className="px-2 text-gray-700">
                Wedding Planner website for your dream wedding.
              </p>
            </div>
            <div className="px-6 py-4 space-x-3 flex justify-around md:flex-wrap">
              <button
                onClick={() =>
                  openIndexFile("/projects/weddingplanner/home.php")
                }
                className="bg-purple-500 hover:bg-purple-800 text-white font-bold px-4 py-2 rounded w-full md:w-auto"
              >
                Open
              </button>
              <button
                onClick={handleSource}
                className="bg-green-500 hover:bg-green-700 text-white font-bold flex px-4 py-2 rounded w-full md:w-auto"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29  19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                    fill="white"
                  ></path>
                </svg>{" "}
                Source code
              </button>
            </div>
          </div>
          <div className="w-full mx-auto text-center h-[300px] border-[2px] border-purple-200 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 flex flex-col">
            <img
              src={XOXO}
              className="w-[200px] mx-auto h-[120px] p-1 rounded-md border-[2px]"
              alt=""
            />
            <div className="flex flex-col justify-center">
              <div className="px-2 font-bold text-xl mb-2">XOXO Game</div>
              <p className="px-2 text-gray-700">
                XOXO Game using HTML, CSS and Javasript.
              </p>
            </div>
            <div className="px-6 py-4 space-x-3 flex justify-around md:flex-wrap">
              <button
                onClick={() =>
                  openIndexFile("/projects/JavaScriptGame/index.html")
                }
                className="bg-purple-500 hover:bg-purple-800 text-white font-bold px-4 py-2 rounded w-full md:w-auto"
              >
                Open
              </button>
              <button
                onClick={handleSource}
                className="bg-green-500 hover:bg-green-700 text-white font-bold flex px-4 py-2 rounded w-full md:w-auto"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19 .81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                    fill="white"
                  ></path>
                </svg>{" "}
                Source code
              </button>
            </div>
          </div>
          <div className="w-full mx-auto text-center h-[300px] border-[2px] border-purple-200 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 flex flex-col">
            <img
              src={freshcart}
              className="w-[200px] mx-auto h-[120px] p-1 rounded-md border-[2px]"
              alt=""
            />
            <div className="flex flex-col justify-center">
              <div className="px-2 font-bold text-xl mb-2">Fresh Cart</div>
              <p className="px-2 text-gray-700">
                E-Commerce Project using html, css, Javasript and bootstrap.
              </p>
            </div>
            <div className="px-6 py-4 space-x-3 flex justify-around md:flex-wrap">
              <button
                onClick={() => openIndexFile("/projects/FreshCart/index.html")}
                className="bg-purple-500 hover:bg-purple-800 text-white font-bold px-4 py-2 rounded w-full md:w-auto"
              >
                Open
              </button>
              <button
                onClick={handleSource}
                className="bg-green-500 hover:bg-green-700 text-white font-bold flex px-4 py-2 rounded w-full md:w-auto"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592  24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                    fill="white"
                  ></path>
                </svg>{" "}
                Source code
              </button>
            </div>
          </div>
          <div className="w-full mx-auto text-center h-[300px] border-[2px] border-purple-200 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 flex flex-col">
            <img
              src={calc}
              className="w-[200px] mx-auto h-[120px] p-1 rounded-md border-[2px]"
              alt=""
            />
            <div className="flex flex-col justify-center">
              <div className="px-2 font-bold text-xl mb-2">Calculator</div>
              <p className="px-2 text-gray-700">
                Web application Calculator using html, css and Javasript.
              </p>
            </div>
            <div className="px-6 py-4 space-x-3 flex justify-around md:flex-wrap">
              <button
                onClick={() => openIndexFile("/projects/calci/index.html")}
                className="bg-purple-500 hover:bg-purple-800 text-white font-bold px-4 py-2 rounded w-full md:w-auto"
              >
                Open
              </button>
              <button
                onClick={handleSource}
                className="bg-green-500 hover:bg-green-700 text-white font-bold flex px-4 py-2 rounded w-full md:w-auto"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                    fill="white"
                  ></path>
                </svg>{" "}
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