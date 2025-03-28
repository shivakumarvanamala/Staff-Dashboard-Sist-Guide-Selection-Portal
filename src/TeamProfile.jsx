import { useState } from "react";

import StaffNavbar from "./StaffNavbar";

export function TeamProfile() {
  const [team, setTeam] = useState(true);

  const [open, setOpen] = useState(false);

  const [projectDetails, setProjectDetails] = useState({
    title: "Project Management Portal for an institution",
    domain: "Web Technology",
    desc: "A portal to select the desired staffs for the projects",
    projectApproval: "notYetValidated",
  });

  // const [guideDetails, setGuideDetails] = useState({
  //   projectId: "CSE-25-0000",
  //   guideName: "Staff name",
  //   guideMaidId: "staff.dept@institution.in",
  // });

  return (
    <>
      <StaffNavbar open={open} setOpen={setOpen} />

      <main
        className="w-[96%] md:w-[90%] mx-auto h-fit flex flex-col justify-center items-center my-4"
        onClick={() => setOpen(false)}
      >
        <section className="w-full md:w-[98%] h-12 bg-[#50547a] flex justify-center items-center text-white font-medium text-2xl  mb-2">
          Team Profile
        </section>
        <section className="flex flex-col items-center w-full h-fit md:flex-row justify-evenly">
          <article className="w-full md:w-[30vw] flex flex-col justify-evenly items-center mb-3">
            <div className="w-full h-fit bg-slate-50 flex flex-col justify-evenly items-center text-xl font-normal shadow-[0px_0px_5px_gray] rounded-md ">
              <div className="flex items-center justify-center w-full h-fit">
                <img
                  className="w-[9rem] h-[9rem] my-3 bg-white rounded-full border-2 border-slate-400"
                  src="https://sathyabama-erp-s3.s3.ap-south-1.amazonaws.com/admission/profile/606036-1706720845384-ErpUpload.png"
                  alt="Faculty"
                />
              </div>
              <div className="w-full h-[20vh] md:h-[30vh] flex flex-col justify-evenly items-center">
                <h1 className="text-xl font-medium">CSE-25-0000</h1>
                <h2 className="flex items-center justify-center text-xl font-bold capitalize break-before-all">
                  Staff name
                </h2>
                <h3 className="font-[400] flex justify-center items-center break-before-all">
                  staff.dept@institution.in
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
                  // defaultValue={projectDetails.title}
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
                  // defaultValue={projectDetails.domain}
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
                  placeholder="Project Description"
                  // defaultValue={projectDetails.desc}
                  readOnly
                  type="text"
                  name="desc"
                  id="desc"
                  spellCheck="off"
                />
                <div className="flex items-center justify-center w-full h-fit md:justify-end ">
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
            className={`${"h-fit w-full flex flex-col gap-1 justify-center items-center rounded shadow-[0px_0px_10px_gray] mb-4"}${" "}${
              !team ? "md:w-[60%]" : "md:w-[49.5%]"
            }`}
          >
            <div className="w-full h-[3.5rem] bg-[#50547a] text-white text-2xl font-medium flex flex-col justify-center items-center ">
              Student Details
            </div>
            <div className="flex items-center justify-center w-full py-5 h-fit bg-slate-100">
              <img
                className="w-[10rem]  rounded-full border-2 border-slate-400"
                src="https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg"
                alt="studentOne"
              />
            </div>
            <div className="w-full h-fit bg-slate-50 flex flex-col justify-center items-center gap-[0.1rem] rounded-md">
              <div className="flex items-center justify-center w-full h-12 bg-slate-200 ">
                <label
                  htmlFor="fullNameOne"
                  className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                >
                  Full Name
                </label>
                <input
                  className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md capitalize"
                  placeholder="Full Name"
                  // defaultValue={studentDetailsOne.fullNameOne}
                  readOnly
                  type="text"
                  name="fullNameOne"
                  id="fullNameOne"
                  spellCheck="off"
                  autoSave="off"
                />
              </div>
              <div className="flex items-center justify-center w-full h-12 bg-slate-200 ">
                <label
                  htmlFor="emailOne"
                  className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                >
                  Email
                </label>
                <input
                  className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                  placeholder="Email"
                  // defaultValue={studentDetailsOne.emailOne}
                  readOnly
                  type="text"
                  name="emailOne"
                  id="emailOne"
                  spellCheck="off"
                  autoSave="off"
                />
              </div>
              <div className="flex items-center justify-center w-full h-12 bg-slate-200 ">
                <label
                  htmlFor="regNoOne"
                  className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                >
                  Reg No.
                </label>
                <input
                  className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                  placeholder="Reg no."
                  // defaultValue={studentDetailsOne.regNoOne}
                  readOnly
                  type="text"
                  name="regNoOne"
                  id="regNoOne"
                  spellCheck="off"
                  autoSave="off"
                />
              </div>
              <div className="flex items-center justify-center w-full h-12 bg-slate-200 ">
                <label
                  htmlFor="secOne"
                  className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                >
                  Section
                </label>
                <input
                  className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                  placeholder="Section"
                  // defaultValue={studentDetailsOne.secOne}
                  readOnly
                  type="text"
                  name="secOne"
                  id="secOne"
                  spellCheck="off"
                  autoSave="off"
                />
              </div>
              <div className="flex items-center justify-center w-full h-12 bg-slate-200 ">
                <label
                  htmlFor="mobileNoOne"
                  className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                >
                  Mobile No.
                </label>
                <input
                  className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                  placeholder="Mobile no."
                  // defaultValue={studentDetailsOne.mobileNoOne}
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
              className={`${"h-fit w-full flex flex-col gap-1 justify-center items-center rounded shadow-[0px_0px_10px_gray] mb-4"}${" "}${
                !team ? "md:w-full" : "md:w-[49.5%]"
              }`}
            >
              <div className="w-full h-[3.5rem] bg-[#50547a] text-white text-2xl font-medium flex flex-col justify-center items-center ">
                Student Details
              </div>
              <div className="flex items-center justify-center w-full py-5 h-fit bg-slate-100">
                <img
                  className="w-[10rem]  rounded-full border-2 border-slate-400"
                  src="https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg"
                  alt="studentTwo"
                />
              </div>
              <div className="w-full h-fit bg-slate-50 flex flex-col justify-center items-center gap-[0.1rem] rounded-md">
                <div className="flex items-center justify-center w-full h-12 bg-slate-200 ">
                  <label
                    htmlFor="fullNameTwo"
                    className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md capitalize"
                    placeholder="Full Name"
                    // defaultValue={studentDetailsTwo.fullNameTwo}
                    readOnly
                    type="text"
                    name="fullNameTwo"
                    id="fullNameTwo"
                    spellCheck="off"
                    autoSave="off"
                  />
                </div>
                <div className="flex items-center justify-center w-full h-12 bg-slate-200 ">
                  <label
                    htmlFor="emailTwo"
                    className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                  >
                    Email
                  </label>
                  <input
                    className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                    placeholder="Email"
                    // defaultValue={studentDetailsTwo.emailTwo}
                    readOnly
                    type="text"
                    name="emailTwo"
                    id="emailTwo"
                    spellCheck="off"
                    autoSave="off"
                  />
                </div>
                <div className="flex items-center justify-center w-full h-12 bg-slate-200 ">
                  <label
                    htmlFor="regNoTwo"
                    className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                  >
                    Reg No.
                  </label>
                  <input
                    className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                    placeholder="Reg no."
                    // defaultValue={studentDetailsTwo.regNoTwo}
                    readOnly
                    type="text"
                    name="regNoTwo"
                    id="regNoTwo"
                    spellCheck="off"
                    autoSave="off"
                  />
                </div>
                <div className="flex items-center justify-center w-full h-12 bg-slate-200 ">
                  <label
                    htmlFor="secTwo"
                    className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                  >
                    Section
                  </label>
                  <input
                    className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                    placeholder="Section"
                    // defaultValue={studentDetailsTwo.secTwo}
                    readOnly
                    type="text"
                    name="secTwo"
                    id="secTwo"
                    spellCheck="off"
                    autoSave="off"
                  />
                </div>
                <div className="flex items-center justify-center w-full h-12 bg-slate-200">
                  <label
                    htmlFor="mobileNoTwo"
                    className="h-full w-[30%] pl-5 flex justify-start items-center text-xl font-medium"
                  >
                    Mobile No.
                  </label>
                  <input
                    className="w-[75%] h-[80%] px-2 mr-1 font-[400] text-lg outline-none border border-slate-400 rounded-md"
                    placeholder="Mobile no."
                    // defaultValue={studentDetailsTwo.mobileNoTwo}
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
        &copy; {new Date().getFullYear()} Institution. All rights reserved.
      </footer>
    </>
  );
}
