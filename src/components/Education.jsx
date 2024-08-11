import React from "react";

function Education() {
  return (
    <>
      <div
        name="Education"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">Education</h1>
          <div className="grid grid-cols-1 md:grid-cols-1 my-3">
            <div className="flex  w-full flex-col lg:flex-row gap-10">
              <div className="card  bg-base-300 rounded-md border w-600 md:w-900 border-purple-500  hover:scale-105 hover:text-purple-500 hover:bg-white hover:border hover:border-purple-800 bg-purple-200 text-black shadow duration-300 hover:shadow-purple-800 grid h-32  flex-grow place-items-center">
             <span className="font-bold text-xl underline"> Bsc in Computer Science</span> 8.00/10 CGPA <div>Gogte Jogalekar College, Ratnagiri </div> <div className="text-sm">July 2020 - July 2023</div>
              </div>
              <div className="card bg-base-300 rounded-md border border-purple-3 hover:scale-105  hover:text-purple-500 hover:bg-white hover:border hover:border-purple-800 bg-purple-200 text-black shadow duration-300 hover:shadow-purple-800  grid h-32   flex-grow place-items-center">
             <span className="font-bold text-xl underline"> Hsc in General Science</span><div>Gogte Jogalekar College, Ratnagiri </div> <div className="text-sm">July 2018 - April 2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
