import { useState } from "react";

import { projectDetails } from "./projectDetails"; // Project details js file
import { ProjectCard } from "./ProjectCard";

import hum_berger from "./assets/hum_berger.svg";

import log_out from "./assets/log_out.svg";
import lock from "./assets/lock.svg";
import StaffNavbar from "./StaffNavbar";

export const StaffDashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StaffNavbar open={open} setOpen={setOpen} />
      <br />
      <br />

      <main
        className="max-w-7xl px-4 mx-auto grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
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
        className="flex items-center justify-center w-full h-8 text-black bg-slate-100 "
        onClick={() => setOpen(false)}
      >
        <b>&copy;</b>&nbsp;
        {new Date().getFullYear()} Institution. All rights reserved.
      </footer>
      {/* </div> */}
    </>
  );
};
