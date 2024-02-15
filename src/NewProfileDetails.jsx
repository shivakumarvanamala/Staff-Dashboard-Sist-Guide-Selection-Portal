import { useState } from "react";

import tick_mark from "./assets/tick_mark.svg";
import cross_mark from "./assets/cross_mark.png";

import hum_berger from "./assets/hum_berger.svg";

import home from "./assets/home.svg";
import log_out from "./assets/log_out.svg";

import back_arrow from "./assets/back_arrow.svg";

export const NewProfileDetails = () => {
  const [projectDetails, setProjectDetails] = useState({
    team: true,
    projectId: "CSE-25-0000",
    projectTitle: "Guide selection portal",
    projectDomain: "Web technology",
    studentOneImg:
      "https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg",
    studentOneRegNo: "41000001",
    studentOneSection: "A1",
    studentOneName: "Student one name",
    studentTwoImg:
      "https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg",
    studentTwoRegNo: "41000002",
    studentTwoSection: "B1",
    studentTwoName: "Student two name",
  });

  const [open, setOpen] = useState(false);

  const [documentation, setDocumentation] = useState("notYetValidated");
  const [ppt, setPpt] = useState("notYetValidated");
  const [researchPaper, setResearchPaper] = useState("notYetValidated");
  const [guideApproval, setGuideApproval] = useState("notYetValidated");

  const [isChecked, setIsChecked] = useState({
    communicated: true,
    accepted: false,
    paymentDone: true,
  });

  return (
    <>
      <header className="h-fit bg-[#831238] flex items-center justify-between px-16">
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
        className="w-[96%] md:w-[90%] h-fit m-auto my-4"
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
        <section className="w-fit h-fit flex flex-col md:flex-row justify-center items-center">
          <article className="w-fit h-fit flex flex-col justify-center items-center gap-2">
            <form className="w-fit h-fit flex flex-col justify-center items-center rounded bg-[#f4eeee] ">
              <div className="w-[95vw] md:w-[35vw] h-[20vh] flex flex-col justify-center items-center">
                <span className="w-full flex justify-center items-center text-xl font-medium">
                  {projectDetails.projectId}
                </span>
                <br />
                <span className="w-full flex justify-center items-center capitalize text-xl font-semibold">
                  {projectDetails.projectTitle}
                </span>
                <br />
                <span className="w-full flex justify-center items-center capitalize text-xl font-[400]">
                  {projectDetails.projectDomain}
                </span>
              </div>
              <div className="w-full h-[50vh] flex justify-center items-center gap-2 border-y-2 border-y-white">
                <div
                  className={`${
                    projectDetails.team ? "w-1/2" : "w-full"
                  }${" "}${"h-full flex flex-col justify-center items-center border-r-2 border-r-white"}`}
                >
                  <img
                    src={projectDetails.studentOneImg}
                    alt="Student1"
                    className="w-[10rem] rounded-full border border-black p-1"
                  />
                  <br />
                  <div className="w-full h-[20vh] flex flex-col items-center justify-center">
                    <span className="w-full m-auto text-center break-before-all text-xl font-medium">
                      {projectDetails.studentOneRegNo}
                    </span>
                    <span className="w-full m-auto text-center break-before-all text-xl font-medium">
                      {projectDetails.studentOneSection}
                    </span>
                    <span className="w-full m-auto text-center break-before-all text-xl font-bold capitalize">
                      {projectDetails.studentOneName}
                    </span>
                  </div>
                </div>
                {projectDetails.team && (
                  <div
                    className={`${
                      projectDetails.team ? "w-1/2" : "w-full"
                    }${" "}${"h-full flex flex-col justify-center items-center"}`}
                  >
                    <img
                      src={projectDetails.studentOneImg}
                      alt="Student1"
                      className="w-[10rem] rounded-full border border-black p-1"
                    />
                    <br />
                    <div className="w-full h-[20vh] flex flex-col items-center justify-center">
                      <span className="w-full m-auto text-center break-before-all text-xl font-medium">
                        {projectDetails.studentOneRegNo}
                      </span>
                      <span className="w-full m-auto text-center break-before-all text-xl font-medium">
                        {projectDetails.studentOneSection}
                      </span>
                      <span className="w-full m-auto text-center break-before-all text-xl font-bold capitalize">
                        {projectDetails.studentOneName}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full h-fit mt-2 flex justify-center items-center">
                <a
                  href="#"
                  className="w-[90%] h-[2.5rem] mb-3 flex items-center justify-center bg-[#d06a0f] rounded-md font-semibold text-white hover:scale-[1.01] active:scale-[0.99] hover:shadow-[0px_0px_10px_gray] "
                >
                  Team Profile
                </a>
              </div>
            </form>
            <form className="w-fit h-fit flex flex-col justify-center items-center rounded-md gap-2">
              <div className="w-[95vw] md:w-[35vw] h-[3rem] text-xl font-medium text-white flex justify-center items-center bg-[#890632d7] rounded">
                Project Marks
              </div>
              <div className="w-full h-[20vh] flex justify-center items-center gap-1">
                <div
                  className={`${
                    projectDetails.team ? "w-1/2" : "w-full"
                  }${" "}${"h-full flex flex-col justify-center items-center bg-[#e2e8f0] "}`}
                >
                  <div className="w-full h-1/2 flex justify-center items-center break-before-all text-lg font-semibold ">
                    {projectDetails.studentOneRegNo}
                  </div>
                  <div className="mb-5 w-full h-1/2 flex flex-col justify-center items-center break-before-all">
                    <div>
                      <label htmlFor="studentOneMarks" className="font-normal">
                        Enter Marks : &nbsp;
                      </label>
                      <input
                        className="text-center"
                        placeholder="Marks"
                        type="number"
                        required
                        style={{
                          WebkitAppearance: "none" /* for Safari */,
                          MozAppearance: "textfield" /* for Firefox */,
                          appearance: "none" /* for other modern browsers */,
                        }}
                        id="studentOneMarks"
                        name="studentOneMarks"
                        min="0"
                        max="15"
                        maxLength="2"
                      />
                    </div>
                    <span className="font-normal "> &#40;Out of 15&#41;</span>
                  </div>
                </div>
                {projectDetails.team && (
                  <div
                    className={`${
                      projectDetails.team ? "w-1/2" : "w-full"
                    }${" "}${"h-full flex flex-col justify-center items-center bg-[#e2e8f0] "}`}
                  >
                    <div className="w-full h-1/2 flex justify-center items-center break-before-all text-lg font-semibold ">
                      {projectDetails.studentOneRegNo}
                    </div>
                    <div className="mb-5 w-full h-1/2 flex flex-col justify-center items-center break-before-all">
                      <div>
                        <label
                          htmlFor="studentTwoMarks"
                          className="font-normal"
                        >
                          Enter Marks : &nbsp;
                        </label>
                        <input
                          className="text-center"
                          placeholder="Marks"
                          type="number"
                          required
                          style={{
                            WebkitAppearance: "none" /* for Safari */,
                            MozAppearance: "textfield" /* for Firefox */,
                            appearance: "none" /* for other modern browsers */,
                          }}
                          id="studentTwoMarks"
                          name="studentTwoMarks"
                          min="0"
                          max="15"
                          maxLength="2"
                        />
                      </div>
                      <span className="font-normal"> &#40;Out of 15&#41;</span>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </article>
          <article className="w-fit h-fit">
            <form className="w-fit h-fit"></form>
            <form className="w-fit h-fit"></form>
            <form className="w-fit h-fit"></form>
          </article>
        </section>
        <section className="w-fit h-fit"></section>
      </main>
    </>
  );
};
