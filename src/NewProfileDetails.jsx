import { useState } from "react";

import tick_mark from "./assets/tick_mark.svg";
import cross_mark from "./assets/cross_mark.png";
import link from "./assets/link.svg";
import StaffNavbar from "./StaffNavbar";

// import back_arrow from "./assets/back_arrow.svg";

export const NewProfileDetails = () => {
  const [open, setOpen] = useState(false);

  const [projectDetails, setProjectDetails] = useState({
    team: true,
    projectId: "CSE-25-0000",
    projectTitle: "Project Management Portal",
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

  const [projectMarks, setProjectMarks] = useState({
    studentOneMarks: "",
    studentTwoMarks: "",
  });

  const [links, setLinks] = useState({
    documentation: "#",
    ppt: "#",
    researchPaper: "#",
  });

  const [documentation, setDocumentation] = useState("notYetValidated");
  const [ppt, setPpt] = useState("notYetValidated");
  const [researchPaper, setResearchPaper] = useState("notYetValidated");
  const [guideApproval, setGuideApproval] = useState("notYetValidated");

  const [isChecked, setIsChecked] = useState({
    communicated: false,
    accepted: false,
    paymentDone: false,
  });

  const [feedbacks, setFeedbacks] = useState({
    oneFeedback: "",
    twoFeedback: "",
  });

  const handleOneFeedback = (eve) => {
    setFeedbacks((prev) => ({
      ...prev,
      [eve.target.name]: eve.target.value,
    }));
  };
  const handleTwoFeedback = (eve) => {
    setFeedbacks((prev) => ({
      ...prev,
      [eve.target.name]: eve.target.value,
    }));
  };

  const handleProjectMarks = (eve) => {
    setProjectMarks((prev) => ({
      ...prev,
      [eve.target.name]: eve.target.value,
    }));
  };

  const handleFinalSubmit = () => {
    // Submit functionality here
  };

  return (
    <>
      <StaffNavbar open={open} setOpen={setOpen} />
      <main
        className="w-[95%] mx-auto flex flex-col lg:flex-row gap-4 my-4"
        onClick={() => setOpen(false)}
      >
        {/* Left section - Student profiles and project marks */}
        <section className="w-full lg:w-2/5">
          <article className="flex flex-col gap-4">
            {/* Project details card */}
            <div className="w-full bg-[#f4eeee] rounded shadow">
              <div className="p-4 text-center">
                <div className="text-lg md:text-xl font-medium">
                  {projectDetails.projectId}
                </div>
                <div className="text-lg md:text-xl font-semibold capitalize mt-2">
                  {projectDetails.projectTitle}
                </div>
                <div className="text-lg md:text-xl capitalize mt-2">
                  {projectDetails.projectDomain}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-y-2 border-y-white">
                {/* Student one */}
                <div
                  className={`${
                    projectDetails.team ? "w-full sm:w-1/2" : "w-full"
                  }
                  p-4 flex flex-col items-center ${
                    projectDetails.team
                      ? "border-b-2 sm:border-b-0 sm:border-r-2 border-white"
                      : ""
                  }`}
                >
                  <img
                    src={projectDetails.studentOneImg}
                    alt="Student1"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-black p-1 object-cover"
                  />
                  <div className="mt-4 text-center">
                    <div className="text-base md:text-lg font-medium">
                      {projectDetails.studentOneRegNo}
                    </div>
                    <div className="text-base md:text-lg font-medium">
                      {projectDetails.studentOneSection}
                    </div>
                    <div className="text-base md:text-lg font-bold capitalize mt-1">
                      {projectDetails.studentOneName}
                    </div>
                  </div>
                </div>

                {/* Student two (if team project) */}
                {projectDetails.team && (
                  <div className="w-full sm:w-1/2 p-4 flex flex-col items-center">
                    <img
                      src={projectDetails.studentTwoImg}
                      alt="Student2"
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-black p-1 object-cover"
                    />
                    <div className="mt-4 text-center">
                      <div className="text-base md:text-lg font-medium">
                        {projectDetails.studentTwoRegNo}
                      </div>
                      <div className="text-base md:text-lg font-medium">
                        {projectDetails.studentTwoSection}
                      </div>
                      <div className="text-base md:text-lg font-bold capitalize mt-1">
                        {projectDetails.studentTwoName}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 flex items-center justify-center">
                <a
                  href="/profile_details/team_profile"
                  className="w-full max-w-md h-10 flex items-center justify-center bg-[#fd4e00] rounded-md font-semibold text-white hover:scale-[1.01] active:scale-[0.99] hover:shadow-lg transition-all"
                >
                  Team Profile
                </a>
              </div>
            </div>

            {/* Project marks card */}
            <div className="w-full min-h-36 rounded-md shadow overflow-hidden">
              <div className="w-full h-12 md:h-16 text-lg md:text-xl font-medium text-white flex justify-center items-center bg-[#50547a]">
                Project Marks
              </div>
              <div className="flex flex-col sm:flex-row bg-[#e2e8f0]">
                {/* Student one marks */}
                <div
                  className={`${
                    projectDetails.team ? "w-full sm:w-1/2" : "w-full"
                  } p-4 border-b sm:border-b-0 ${
                    projectDetails.team ? "sm:border-r" : ""
                  } border-gray-300`}
                >
                  <div className="text-base md:text-lg font-semibold text-center mb-4">
                    {projectDetails.studentOneRegNo}
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">
                      <label
                        htmlFor="studentOneMarks"
                        className="text-sm md:text-base font-normal mr-2"
                      >
                        Enter Marks:
                      </label>
                      <input
                        className="w-24 text-center border border-gray-400 rounded px-2 py-1"
                        placeholder="Marks"
                        type="number"
                        id="studentOneMarks"
                        name="studentOneMarks"
                        value={projectMarks.studentOneMarks}
                        onChange={handleProjectMarks}
                        required
                        style={{
                          WebkitAppearance: "none",
                          MozAppearance: "textfield",
                          appearance: "none",
                        }}
                        min="0"
                        max="15"
                      />
                    </div>
                    <div className="text-sm md:text-base font-normal mt-2">
                      (Out of 15)
                    </div>
                  </div>
                </div>

                {/* Student two marks (if team project) */}
                {projectDetails.team && (
                  <div className="w-full sm:w-1/2 p-4">
                    <div className="text-base md:text-lg font-semibold text-center mb-4">
                      {projectDetails.studentTwoRegNo}
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center">
                        <label
                          htmlFor="studentTwoMarks"
                          className="text-sm md:text-base font-normal mr-2"
                        >
                          Enter Marks:
                        </label>
                        <input
                          className="w-24 text-center border border-gray-400 rounded px-2 py-1"
                          placeholder="Marks"
                          type="number"
                          id="studentTwoMarks"
                          name="studentTwoMarks"
                          value={projectMarks.studentTwoMarks}
                          onChange={handleProjectMarks}
                          required
                          style={{
                            WebkitAppearance: "none",
                            MozAppearance: "textfield",
                            appearance: "none",
                          }}
                          min="0"
                          max="15"
                        />
                      </div>
                      <div className="text-sm md:text-base font-normal mt-2">
                        (Out of 15)
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>
        </section>

        {/* Right section - Project status and approvals */}
        <section className="w-full lg:w-3/5">
          {/* Project status and approvals */}
          <article className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Project status card */}
            <div className="w-full min-h-36 max-w-2xl mx-auto">
              <div className="h-12 md:h-16 text-lg md:text-xl font-medium text-white flex justify-center items-center bg-[#50547a] rounded-t">
                Project Status
              </div>

              {/* Documentation status */}
              <div className="bg-slate-200 p-4 border-b-2 border-white min-h-36">
                <div className="text-[#831238] text-lg md:text-xl flex flex-wrap items-center justify-center font-medium gap-2 mb-4 text-center">
                  <a
                    href={links.documentation}
                    className="flex items-center gap-1"
                    title="Open Drive link"
                  >
                    <h3 className="cursor-pointer hover:text-blue-800 hover:underline">
                      Documentation
                    </h3>
                    <img src={link} alt="link" className="w-3 h-3" />
                  </a>
                  {documentation === true && (
                    <img src={tick_mark} className="w-5 h-5 md:w-6 md:h-6" />
                  )}
                  {documentation === false && (
                    <img src={cross_mark} className="w-5 h-5 md:w-6 md:h-6" />
                  )}
                </div>
                <div className="flex justify-center gap-3 flex-wrap">
                  <button
                    type="button"
                    onClick={() => setDocumentation(true)}
                    className="bg-[#2e8a2e] w-20 md:w-24 h-9 md:h-10 rounded-3xl text-white font-medium hover:shadow-lg hover:scale-105 transition-transform"
                    style={{
                      boxShadow:
                        documentation === true
                          ? "0 0 10px rgba(0, 0, 0, 0.8)"
                          : "none",
                      backgroundColor: documentation === false ? "gray" : "",
                    }}
                  >
                    {documentation === true ? "Approved" : "Approve"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setDocumentation(false)}
                    className="bg-[#ac3f2c] w-20 md:w-24 h-9 md:h-10 rounded-3xl text-white font-medium hover:shadow-lg hover:scale-105 transition-transform"
                    style={{
                      boxShadow:
                        documentation === false
                          ? "0 0 10px rgba(0, 0, 0, 0.8)"
                          : "none",
                      backgroundColor: documentation === true ? "gray" : "",
                    }}
                  >
                    {documentation === false ? "Rejected" : "Reject"}
                  </button>
                </div>
              </div>

              {/* PPT status */}
              <div className="bg-slate-200 p-4 min-h-36">
                <div className="text-[#831238] text-lg md:text-xl flex flex-wrap items-center justify-center font-medium gap-2 mb-4 text-center">
                  <a
                    href={links.ppt}
                    className="flex items-center gap-1"
                    title="Open Drive link"
                  >
                    <h3 className="cursor-pointer hover:text-blue-800 hover:underline">
                      PPT
                    </h3>
                    <img src={link} alt="link" className="w-3 h-3" />
                  </a>
                  {ppt === true && (
                    <img src={tick_mark} className="w-5 h-5 md:w-6 md:h-6" />
                  )}
                  {ppt === false && (
                    <img src={cross_mark} className="w-5 h-5 md:w-6 md:h-6" />
                  )}
                </div>
                <div className="flex justify-center gap-3 flex-wrap">
                  <button
                    type="button"
                    onClick={() => setPpt(true)}
                    className="bg-[#2e8a2e] w-20 md:w-24 h-9 md:h-10 rounded-3xl text-white font-medium hover:shadow-lg hover:scale-105 transition-transform"
                    style={{
                      boxShadow:
                        ppt === true ? "0 0 10px rgba(0, 0, 0, 0.8)" : "none",
                      backgroundColor: ppt === false ? "gray" : "",
                    }}
                  >
                    {ppt === true ? "Approved" : "Approve"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPpt(false)}
                    className="bg-[#ac3f2c] w-20 md:w-24 h-9 md:h-10 rounded-3xl text-white font-medium hover:shadow-lg hover:scale-105 transition-transform"
                    style={{
                      boxShadow:
                        ppt === false ? "0 0 10px rgba(0, 0, 0, 0.8)" : "none",
                      backgroundColor: ppt === true ? "gray" : "",
                    }}
                  >
                    {ppt === false ? "Rejected" : "Reject"}
                  </button>
                </div>
              </div>
            </div>

            {/* Research card */}
            <div className="w-full min-h-36 flex flex-col bg-slate-200 rounded">
              <div className="h-12 md:h-16 text-lg md:text-xl font-medium text-white flex justify-center items-center bg-[#50547a] rounded-t">
                Research
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div className="text-[#831238] text-lg md:text-xl flex items-center justify-center font-medium gap-2 mb-4 flex-wrap text-center">
                  <a
                    href={links.researchPaper}
                    className="flex items-center gap-1"
                    title="Open Drive link"
                  >
                    <h3 className="cursor-pointer hover:text-blue-800 hover:underline">
                      Research Paper
                    </h3>
                    <img src={link} alt="link" className="w-3 h-3" />
                  </a>
                  {researchPaper === true && (
                    <img src={tick_mark} className="w-5 h-5 md:w-6 md:h-6" />
                  )}
                  {researchPaper === false && (
                    <img src={cross_mark} className="w-5 h-5 md:w-6 md:h-6" />
                  )}
                </div>
                <ul className="flex flex-col gap-2 mb-4">
                  {[
                    { id: "communicated", label: "Communicated" },
                    { id: "accepted", label: "Accepted" },
                    { id: "paymentDone", label: "Payment Done" },
                  ].map(({ id, label }) => (
                    <li key={id} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={isChecked[id]}
                        id={id}
                        name={id}
                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded cursor-pointer form-checkbox focus:ring-indigo-500"
                        onChange={() =>
                          setIsChecked((prev) => ({
                            ...prev,
                            [id]: !prev[id],
                          }))
                        }
                      />
                      <label
                        htmlFor={id}
                        className="text-sm md:text-base font-medium cursor-pointer"
                      >
                        {label}
                      </label>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center gap-3 flex-wrap">
                  <button
                    type="button"
                    onClick={() => setResearchPaper(true)}
                    className="bg-[#2e8a2e] w-20 md:w-24 h-9 md:h-10 rounded-3xl text-white font-medium hover:shadow-lg hover:scale-105 transition-transform"
                    style={{
                      boxShadow:
                        researchPaper === true
                          ? "0 0 10px rgba(0, 0, 0, 0.8)"
                          : "none",
                      backgroundColor: researchPaper === false ? "gray" : "",
                    }}
                  >
                    {researchPaper === true ? "Approved" : "Approve"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setResearchPaper(false)}
                    className="bg-[#ac3f2c] w-20 md:w-24 h-9 md:h-10 rounded-3xl text-white font-medium hover:shadow-lg hover:scale-105 transition-transform"
                    style={{
                      boxShadow:
                        researchPaper === false
                          ? "0 0 10px rgba(0, 0, 0, 0.8)"
                          : "none",
                      backgroundColor: researchPaper === true ? "gray" : "",
                    }}
                  >
                    {researchPaper === false ? "Rejected" : "Reject"}
                  </button>
                </div>
              </div>
            </div>

            {/* Approval card */}
            <div className="w-full min-h-36 flex flex-col bg-slate-200 rounded">
              <div className="h-12 md:h-16 text-lg md:text-xl font-medium text-white flex justify-center items-center bg-[#50547a] rounded-t">
                Approval
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div className="text-[#831238] text-lg md:text-xl flex items-center justify-center font-medium gap-2 mb-4 flex-wrap text-center">
                  <h3>Guide Approval</h3>
                  {guideApproval === true && (
                    <img src={tick_mark} className="w-5 h-5 md:w-6 md:h-6" />
                  )}
                  {guideApproval === false && (
                    <img src={cross_mark} className="w-5 h-5 md:w-6 md:h-6" />
                  )}
                </div>
                <div className="flex justify-center gap-3 mt-auto flex-wrap">
                  <button
                    type="button"
                    onClick={() => setGuideApproval(true)}
                    className="bg-[#2e8a2e] w-20 md:w-24 h-9 md:h-10 rounded-3xl text-white font-medium hover:shadow-lg hover:scale-105 transition-transform"
                    style={{
                      boxShadow:
                        guideApproval === true
                          ? "0 0 10px rgba(0, 0, 0, 0.8)"
                          : "none",
                      backgroundColor: guideApproval === false ? "gray" : "",
                    }}
                  >
                    {guideApproval === true ? "Approved" : "Approve"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setGuideApproval(false)}
                    className="bg-[#ac3f2c] w-20 md:w-24 h-9 md:h-10 rounded-3xl text-white font-medium hover:shadow-lg hover:scale-105 transition-transform"
                    style={{
                      boxShadow:
                        guideApproval === false
                          ? "0 0 10px rgba(0, 0, 0, 0.8)"
                          : "none",
                      backgroundColor: guideApproval === true ? "gray" : "",
                    }}
                  >
                    {guideApproval === false ? "Rejected" : "Reject"}
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Comments section */}
          <article className="mt-4">
            <div className="h-12 md:h-16 text-lg md:text-xl font-medium text-white flex justify-center items-center bg-[#50547a] rounded-t">
              Students Feedback
            </div>
            <div className="bg-[#e2e8f0] p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="oneFeedback"
                    className="block text-lg md:text-xl text-center font-medium text-[#831238] mb-2"
                  >
                    41000001 - Student One Feedback
                  </label>
                  <textarea
                    className="w-full min-h-32 sm:min-h-40 md:min-h-48 rounded-lg p-3 text-base sm:text-lg border-2 border-gray-400 outline-none focus:border-black"
                    id="oneFeedback"
                    name="oneFeedback"
                    placeholder="Add Comments here"
                    value={feedbacks.oneFeedback}
                    onChange={handleOneFeedback}
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="twoFeedback"
                    className="block text-lg md:text-xl text-center font-medium text-[#831238] mb-2"
                  >
                    4100002 - Student Two Feedback
                  </label>
                  <textarea
                    className="w-full min-h-32 sm:min-h-40 md:min-h-48 rounded-lg p-3 text-base sm:text-lg border-2 border-gray-400 outline-none focus:border-black"
                    id="twoFeedback"
                    name="twoFeedback"
                    placeholder="Add Comments here"
                    value={feedbacks.twoFeedback}
                    onChange={handleTwoFeedback}
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>

      {/* Submit button */}
      <div
        className="w-[95%] mx-auto flex justify-center my-6"
        onClick={() => setOpen(false)}
      >
        <button
          className="bg-blue-600 w-32 h-10 rounded-3xl text-white font-medium hover:shadow-lg hover:scale-105 transition-transform"
          onClick={handleFinalSubmit}
        >
          Submit
        </button>
      </div>

      {/* Footer */}
      <footer className="w-full h-12 bg-slate-100 text-black flex items-center justify-center">
        &copy; {new Date().getFullYear()} Institution. All rights reserved.
      </footer>
    </>
  );
};

export default NewProfileDetails;
