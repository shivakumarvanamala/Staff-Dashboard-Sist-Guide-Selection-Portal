import { useState } from "react";

import hum_berger from "./assets/hum_berger.svg";

import home from "./assets/home.svg";
import log_out from "./assets/log_out.svg";

import back_arrow from "./assets/back_arrow.svg";

export function TeamProfile() {
  const [team, setTeam] = useState(true); // change this according to the team of 2 or not by backend logic

  const [open, setOpen] = useState(false);

  const [projectDetails, setProjectDetails] = useState({
    title: "Guide Selection Portal Sathyabama",
    domain: "Web Technology",
    desc: "A portal to select the desired guides for the projects of the sathyabama students",
    projectApproval: "notYetValidated",
  });

  const [guideDetails, setGuideDetails] = useState({
    projectId: "CSE-25-0000",
    guideName: "Guide name",
    guideMaidId: "guide@staff.sathyabama.ac.in",
  });

  const [studentDetailsOne, setStudentDetailsOne] = useState({
    imgOne:
      "https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg",
    fullNameOne: "shiva",
    regNoOne: "40000000",
    secOne: "A-1",
    emailOne: "fake1@fakemail.com",
    mobileNoOne: "1234567890",
  });

  const [studentDetailsTwo, setStudentDetailsTwo] = useState({
    imgTwo:
      "https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg",
    fullNameTwo: "Kumar",

    regNoTwo: "40000001",
    secTwo: "A-2",
    emailTwo: "fake2@fakemail.com",
    mobileNoTwo: "0123456789",
  });

  return (
    <>
      <header className="h-fit bg-[#831238] flex items-center justify-between px-16 ">
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
                    <img className="h-4 w-4" src={home} alt="Home" />
                    Home
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
                  <img className="h-4 w-4" src={home} alt="Home" />
                  Home
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
      <main
        className="w-[96%] md:w-[90%] mx-auto h-fit flex flex-col justify-center items-center my-4"
        onClick={() => setOpen(false)}
      >
        <div className="hidden md:fixed md:w-fit md:h-full md:left-1 md:top-[5rem] md:flex md:items-center md:justify-center md:cursor-pointer">
          <a href="/" className="w-fit h-fit">
            <img
              className="bg-slate-200 m-4 p-2 w-10 rounded-full hover:bg-slate-300 hover:shadow-md"
              src={back_arrow}
              alt="⬅️"
              title="Go back"
            ></img>
          </a>
        </div>
        <section className="w-full md:w-[98%] h-12 bg-[#890632d7] flex justify-center items-center text-white font-medium text-2xl  mb-2">
          Team Profile
          {/* {projectDetails.projectApproval === true && (
            <img src={tick_mark} className="ml-2 mt-1 h-6 w-6" />
          )}
          {projectDetails.projectApproval === false && (
            <img src={cross_mark} className="ml-2 mt-1 h-6 w-6" />
          )} */}
        </section>
        <section className="w-full h-fit flex flex-col md:flex-row justify-evenly items-center">
          <article className="w-full md:w-[30vw] flex flex-col justify-evenly items-center mb-3">
            <div className="w-full h-fit bg-slate-50 flex flex-col justify-evenly items-center text-xl font-normal shadow-[0px_0px_5px_gray] rounded-md ">
              <div className="w-full h-fit flex justify-center items-center">
                <img
                  className="w-[9rem] h-[9rem] my-3 bg-white rounded-full border-2 border-slate-400"
                  src="https://sathyabama-erp-s3.s3.ap-south-1.amazonaws.com/admission/profile/606036-1706720845384-ErpUpload.png"
                  alt="Faculty"
                />
              </div>
              <div className="w-full h-[20vh] md:h-[30vh] flex flex-col justify-evenly items-center">
                <h1 className="font-medium text-xl">
                  {guideDetails.projectId}
                </h1>
                <h2 className="font-bold flex justify-center items-center text-xl capitalize break-before-all">
                  {guideDetails.guideName}
                </h2>
                <h3 className="font-[400] flex justify-center items-center break-before-all">
                  {guideDetails.guideMaidId}
                </h3>
              </div>
            </div>
          </article>
          <article className="w-full md:w-[55vw] h-fit bg-slate-50 flex flex-col justify-evenly items-center text-xl font-normal shadow-[0px_0px_5px_gray] rounded-md py-2 mb-3">
            <form
              // onSubmit={handleProjectDetails}
              className="w-[98%] bg-slate-50 rounded-md flex flex-col justify-around items-center gap-2 "
            >
              <div className="h-16 w-full bg-slate-200 flex items-center justify-center rounded-md border-[0.5px]">
                <label
                  htmlFor="title"
                  className="h-full w-[30%] pl-5 flex justify-start items-center text-lg md:text-xl font-medium"
                >
                  Project Title
                </label>
                <input
                  className="w-[75%] h-[80%] px-2 mr-2 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                  placeholder="Project title"
                  defaultValue={projectDetails.title}
                  readOnly
                  type="text"
                  name="title"
                  id="title"
                  spellCheck="off"
                  autoSave="off"
                />
              </div>
              <div className="h-16 w-full bg-slate-200 flex items-center justify-center rounded-md border-[0.5px]">
                <label
                  htmlFor="domain"
                  className="h-full w-[30%] pl-5 flex justify-start items-center text-lg md:text-xl font-medium"
                >
                  Project Domain
                </label>
                <input
                  className="w-[75%] h-[80%] px-2 mr-2 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                  placeholder="Project domain"
                  defaultValue={projectDetails.domain}
                  readOnly
                  type="text"
                  name="domain"
                  id="domain"
                  spellCheck="off"
                />
              </div>
              <div className="h-[31vh] w-full bg-slate-200 flex flex-col items-center justify-center rounded-md border-[0.5px]">
                <label
                  htmlFor="desc"
                  className="h-[25%] w-full pl-5 flex justify-start items-center text-lg md:text-xl font-medium"
                >
                  Project Description
                </label>
                <textarea
                  className="w-[98%] h-[70%] px-2 py-2 font-[400] text-lg outline-none border border-slate-400 rounded-md resize-none"
                  // placeholder="Project desc"
                  defaultValue={projectDetails.desc}
                  readOnly
                  type="text"
                  name="desc"
                  id="desc"
                  spellCheck="off"
                />
                <div className="w-full h-fit flex justify-center md:justify-end items-center ">
                  <button
                    className="mx-3 my-2 px-4 py-1 rounded-3xl text-[1rem] text-white font-medium shadow-[0px_0px_10px_gray] hover:scale-105 active:scale-100 active:shadow-[0px_0px_12px_black]"
                    type="button"
                    onClick={(prev) =>
                      setProjectDetails({
                        ...prev,
                        projectApproval: true,
                      })
                    }
                    style={{
                      backgroundColor:
                        projectDetails.projectApproval === false
                          ? "gray"
                          : "#2e8a2e",
                    }}
                  >
                    {projectDetails.projectApproval === true
                      ? "Approved"
                      : "Approve"}
                  </button>
                  <button
                    className="mx-3 my-2 px-4 py-1 rounded-3xl text-[1rem] text-white font-medium shadow-[0px_0px_10px_gray] hover:scale-105 active:scale-100  active:shadow-[0px_0px_12px_black]"
                    type="button"
                    onClick={(prev) =>
                      setProjectDetails({
                        ...prev,
                        projectApproval: false,
                      })
                    }
                    style={{
                      backgroundColor:
                        projectDetails.projectApproval === true
                          ? "gray"
                          : "#ac3f2c",
                    }}
                  >
                    {projectDetails.projectApproval === false
                      ? "Rejected"
                      : "Reject"}
                  </button>
                </div>
              </div>
            </form>
          </article>
        </section>
        <section className="w-full md:w-[97%] h-fit flex flex-col md:flex-row justify-center items-center gap-[0.1rem] md:gap-5">
          <form
            className={
              `${"h-fit w-full flex flex-col gap-1 justify-center items-center rounded shadow-[0px_0px_10px_gray] mb-4"}${" "}${
                !team ? "md:w-[60%]" : "md:w-[49.5%]"
              }`
              // +
              // " " +
              // !team
              //   ? "md:w-full"
              //   : "md:w-[48%]"
            }
          >
            <div className="w-full h-[3.5rem] bg-[#831238e8] text-white text-2xl font-medium flex flex-col justify-center items-center ">
              Student Details
            </div>
            <div className="w-full h-fit py-5 bg-slate-100 flex justify-center items-center">
              <img
                className="w-[10rem]  rounded-full border-2 border-slate-400"
                src={studentDetailsOne.imgOne}
                alt="studentOne"
              />
            </div>
            <div className="w-full h-fit bg-slate-50 flex flex-col justify-center items-center gap-[0.1rem] rounded-md">
              <div className="h-12 w-full bg-slate-200 flex items-center justify-center  ">
                <label
                  htmlFor="fullNameOne"
                  className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                >
                  Full Name
                </label>
                <input
                  className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md capitalize"
                  placeholder="Full Name"
                  defaultValue={studentDetailsOne.fullNameOne}
                  readOnly
                  type="text"
                  name="fullNameOne"
                  id="fullNameOne"
                  spellCheck="off"
                  autoSave="off"
                />
              </div>
              <div className="h-12 w-full bg-slate-200 flex items-center justify-center ">
                <label
                  htmlFor="emailOne"
                  className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                >
                  Email
                </label>
                <input
                  className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                  placeholder="Email"
                  defaultValue={studentDetailsOne.emailOne}
                  readOnly
                  type="text"
                  name="emailOne"
                  id="emailOne"
                  spellCheck="off"
                  autoSave="off"
                />
              </div>
              <div className="h-12 w-full bg-slate-200 flex items-center justify-center ">
                <label
                  htmlFor="regNoOne"
                  className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                >
                  Reg No.
                </label>
                <input
                  className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                  placeholder="Reg no."
                  defaultValue={studentDetailsOne.regNoOne}
                  readOnly
                  type="text"
                  name="regNoOne"
                  id="regNoOne"
                  spellCheck="off"
                  autoSave="off"
                />
              </div>
              <div className="h-12 w-full bg-slate-200 flex items-center justify-center ">
                <label
                  htmlFor="secOne"
                  className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                >
                  Section
                </label>
                <input
                  className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                  placeholder="Section"
                  defaultValue={studentDetailsOne.secOne}
                  readOnly
                  type="text"
                  name="secOne"
                  id="secOne"
                  spellCheck="off"
                  autoSave="off"
                />
              </div>
              <div className="h-12 w-full bg-slate-200 flex items-center justify-center ">
                <label
                  htmlFor="mobileNoOne"
                  className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                >
                  Mobile No.
                </label>
                <input
                  className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                  placeholder="Mobile no."
                  defaultValue={studentDetailsOne.mobileNoOne}
                  readOnly
                  type="text"
                  name="mobileNoOne"
                  id="mobileNoOne"
                  spellCheck="off"
                  autoSave="off"
                />
              </div>
            </div>
          </form>
          {team && (
            <form
              className={
                `${"h-fit w-full flex flex-col gap-1 justify-center items-center rounded shadow-[0px_0px_10px_gray] mb-4"}${" "}${
                  !team ? "md:w-full" : "md:w-[49.5%]"
                }`
                // +
                // " " +
                // !team
                //   ? "md:w-full"
                //   : "md:w-[48%]"
              }
            >
              <div className="w-full h-[3.5rem] bg-[#831238e8] text-white text-2xl font-medium flex flex-col justify-center items-center ">
                Student Details
              </div>
              <div className="w-full h-fit py-5 bg-slate-100 flex justify-center items-center">
                <img
                  className="w-[10rem]  rounded-full border-2 border-slate-400"
                  src={studentDetailsTwo.imgTwo}
                  alt="studentTwo"
                />
              </div>
              <div className="w-full h-fit bg-slate-50 flex flex-col justify-center items-center gap-[0.1rem] rounded-md">
                <div className="h-12 w-full bg-slate-200 flex items-center justify-center ">
                  <label
                    htmlFor="fullNameTwo"
                    className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md capitalize"
                    placeholder="Full Name"
                    defaultValue={studentDetailsTwo.fullNameTwo}
                    readOnly
                    type="text"
                    name="fullNameTwo"
                    id="fullNameTwo"
                    spellCheck="off"
                    autoSave="off"
                  />
                </div>
                <div className="h-12 w-full bg-slate-200 flex items-center justify-center ">
                  <label
                    htmlFor="emailTwo"
                    className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                  >
                    Email
                  </label>
                  <input
                    className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                    placeholder="Email"
                    defaultValue={studentDetailsTwo.emailTwo}
                    readOnly
                    type="text"
                    name="emailTwo"
                    id="emailTwo"
                    spellCheck="off"
                    autoSave="off"
                  />
                </div>
                <div className="h-12 w-full bg-slate-200 flex items-center justify-center ">
                  <label
                    htmlFor="regNoTwo"
                    className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                  >
                    Reg No.
                  </label>
                  <input
                    className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                    placeholder="Reg no."
                    defaultValue={studentDetailsTwo.regNoTwo}
                    readOnly
                    type="text"
                    name="regNoTwo"
                    id="regNoTwo"
                    spellCheck="off"
                    autoSave="off"
                  />
                </div>
                <div className="h-12 w-full bg-slate-200 flex items-center justify-center ">
                  <label
                    htmlFor="secTwo"
                    className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                  >
                    Section
                  </label>
                  <input
                    className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                    placeholder="Section"
                    defaultValue={studentDetailsTwo.secTwo}
                    readOnly
                    type="text"
                    name="secTwo"
                    id="secTwo"
                    spellCheck="off"
                    autoSave="off"
                  />
                </div>
                <div className="h-12 w-full bg-slate-200 flex items-center justify-center">
                  <label
                    htmlFor="mobileNoTwo"
                    className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                  >
                    Mobile No.
                  </label>
                  <input
                    className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                    placeholder="Mobile no."
                    defaultValue={studentDetailsTwo.mobileNoTwo}
                    readOnly
                    type="text"
                    name="mobileNoTwo"
                    id="mobileNoTwo"
                    spellCheck="off"
                    autoSave="off"
                  />
                </div>
              </div>
            </form>
          )}
        </section>
      </main>
      <footer className="w-[99vw] h-8 bg-slate-100 text-black text-center ">
        &copy; {new Date().getFullYear()} Sathyabama University. All rights
        reserved.
      </footer>
    </>
  );
}
