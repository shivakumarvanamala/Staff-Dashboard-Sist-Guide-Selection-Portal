/* eslint-disable react/prop-types */
import BgImage from "./assets/card_edited_bg.jpg";
export const ProjectCard = ({
  team,
  projectId,
  projectTitle,
  projectDomain,
  studentOneImg,
  studentTwoImg,
  regNoOne,
  studentOne,
  regNoTwo,
  studentTwo,
}) => {
  return (
    // <div className="max-w-md mx-auto overflow-hidden bg-white shadow-lg rounded-xl">
    // <img
    //   className="w-full h-[12rem] object-cover object-center"
    //   src="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg"
    //   alt="Bg-image"
    // />
    <div className="space-y-2 w-full md:w-[27rem] rounded-md shadow-[0px_0px_30px_gray] hover:shadow-[0px_0px_10px_gray] transition-shadow">
      <div className="relative flex w-full h-[13rem]  justify-center items-center mb-4">
        <img
          className="absolute object-cover  object-center w-full h-[13rem]"
          src={BgImage}
          alt="Bg-image"
        />
        <img
          className="w-[9rem] border-2 border-slate-400 rounded-full mr-4 relative"
          src={studentOneImg}
          alt="Student One"
        />
        {team && (
          <img
            className="w-[9rem] border-2 border-slate-400 rounded-full relative"
            src={studentTwoImg}
            alt="Student Two"
          />
        )}
      </div>
      <div className="flex flex-col items-center justify-center gap-3 p-4 mt-4">
        <p className="text-lg font-medium text-gray-600">
          Project ID : {projectId}
        </p>
        <p className="flex flex-col items-center justify-center h-12 gap-1 text-xl font-semibold text-gray-600 capitalize">
          <span>
            {studentOne} ({regNoOne})
          </span>
          {team && (
            <span>
              {studentTwo}({regNoTwo})
            </span>
          )}
        </p>
      </div>
      <h2 className="flex items-center justify-center p-4 mb-2 text-xl font-medium capitalize">
        {projectTitle}
      </h2>
      <p className="flex items-center justify-center p-4 text-base text-gray-700 capitalize">
        {projectDomain}
      </p>
      <div className="flex items-center justify-center w-full">
        <a
          href="/profile_details"
          className="bg-[#FB773C] h-8 w-[90%] flex justify-center items-center text-white font-bold rounded mb-2"
        >
          Profile Details
        </a>
      </div>
    </div>
  );
};
