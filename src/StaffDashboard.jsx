import { useState } from "react";

import { projectDetails } from "./projectDetails"; // Project details js file
import { ProjectCard } from "./ProjectCard";

import log_out from "./assets/log_out.svg";
import lock from "./assets/lock.svg";

import hum_berger from "./assets/hum_berger.svg";

export const StaffDashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/*  <div className="w-fit flex flex-col gap-4"> */}
      <header className="h-fit bg-[#831238] flex items-center justify-between px-16 mb-5">
        <div className="flex justify-center items-center sm:max-md:justify-self-start ">
          <a href="#">
            <img
              className="h-12 my-3 float-start"
              src="https://erp.sathyabama.ac.in/assets/images/sathyabama_header-logo-A++.jpg"
              alt="logo"
            />
          </a>
        </div>

        <div
          className="relative flex items-center space-x-2 cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img
            className="h-auto w-9 rounded-full"
            src="https://sathyabama-erp-s3.s3.ap-south-1.amazonaws.com/admission/profile/606036-1706720845384-ErpUpload.png"
            alt="Faculty"
          />
          <div className="hidden md:flex md:items-center md:justify-center relative">
            <h3 className="text-white">SHIVA KUMAR VANAMALA</h3>
            &nbsp;&nbsp;&nbsp;
            <span
              className="rounded-full flex items-center justify-center"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <svg
                className="h-5 w-5 text-gray-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            {open && (
              <div className="hidden absolute md:top-[3rem] md:right-[2px] h-[9rem] w-[10rem] bg-white text-black shadow-2xl  md:flex md:flex-col md:justify-center md:items-center md:gap-[3px] z-50">
                <div className=" w-full text-[0.8rem] text-[#6C757D] font-semibold h-1/5 bg-slate-100">
                  &nbsp;&nbsp;&nbsp; Welcome!
                </div>
                <div className="w-full flex items-center justify-center h-2/5 bg-slate-100 text-[#6C757D]  hover:bg-slate-200">
                  <a
                    href="#"
                    className="w-full flex justify-start items-center gap-1 pl-2"
                  >
                    <img className="h-4 w-4" src={lock} alt="Lock" />
                    Change Password
                  </a>
                </div>
                <div className="w-full flex justify-center items-center h-2/5 bg-slate-100 text-[#6C757D] hover:bg-slate-200">
                  <a
                    href="/"
                    className=" w-full flex justify-start items-center gap-1 pl-2"
                  >
                    <img className="h-4 w-4" src={log_out} alt="LogOut" />
                    Log Out
                  </a>
                </div>
              </div>
            )}
          </div>
          {/* HumBerger icon for sm to md*/}
          <div className="h-5 w-5 md:hidden relative">
            <img src={hum_berger} alt="HumBerger" />
          </div>
          {open && (
            <div className="absolute top-[3.75rem] right-[-20px] h-[9rem] w-[10rem] md:hidden bg-white text-black shadow-2xl  flex flex-col justify-center items-center gap-[3px] z-50 ">
              <div className=" w-full text-[0.8rem] text-[#6C757D] font-semibold h-1/5 bg-slate-100">
                &nbsp;&nbsp;&nbsp; Welcome!
              </div>
              <div className="w-full flex items-center justify-center h-2/5 bg-slate-100 text-[#6C757D]  hover:bg-slate-200">
                <a
                  href="#"
                  className="w-full flex justify-start items-center gap-1 pl-2"
                >
                  <img className="h-4 w-4" src={lock} alt="Lock" />
                  Change Password
                </a>
              </div>
              <div className="w-full flex justify-center items-center h-2/5 bg-slate-100 text-[#6C757D] hover:bg-slate-200">
                <a
                  href="/"
                  className=" w-full flex justify-start items-center gap-1 pl-2"
                >
                  <img className="h-4 w-4" src={log_out} alt="LogOut" />
                  Log Out
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
      {/* <div className="w-fit mx-auto" onClick={() => setOpen(false)}>
          <div className="w-fit mx-16 lg:mx-24 md:mx-20 sm:mx-24 flex flex-wrap gap-x-12 gap-y-8 justify-start items-center rounded">
            {projectDetails.map((project, id) => (
              <ProjectCard
                key={id}
                teamLeadImg={project.teamLeadImg}
                id={project.projectId}
                registerNoOne={project.registerNoOne}
                studentOne={project.studentOne}
                registerNoTwo={project.registerNoTwo}
                studentTwo={project.studentTwo}
                title={project.projectTitle}
              />
            ))}
          </div>
        </div> */}
      <main
        className="w-[90%] h-fit mx-auto grid place-items-center grid-cols-1 md:grid-cols-3 gap-3 mb-5"
        onClick={() => setOpen(false)}
      >
        {projectDetails.map((project) => (
          <ProjectCard
            key={project.projectId}
            team={project.team}
            studentOneImg={project.studentOneImg}
            studentTwoImg={project.studentTwoImg}
            projectId={project.projectId}
            regNoOne={project.regNoOne}
            studentOne={project.studentOne}
            regNoTwo={project.regNoTwo}
            studentTwo={project.studentTwo}
            projectTitle={project.projectTitle}
            projectDomain={project.projectDomain}
          />
        ))}
      </main>

      <footer
        className="w-full h-8 bg-slate-100 flex items-center justify-center text-black "
        onClick={() => setOpen(false)}
      >
        <b>&copy;</b>&nbsp;
        {new Date().getFullYear()} Sathyabama University. All rights reserved.
      </footer>
      {/* </div> */}
    </>
  );
};
