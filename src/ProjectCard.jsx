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
    <div className="space-y-4 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-md shadow-lg hover:shadow-md transition-shadow min-h-[24rem] flex flex-col justify-between">
      <div className="relative flex w-full h-[12rem] justify-center items-center mb-4">
        <img
          className="absolute object-cover object-center w-full h-full rounded-t-md"
          src={BgImage}
          alt="Bg-image"
        />
        <div
          className={`flex ${
            team ? "gap-4" : "gap-0"
          } sm:gap-4 relative items-center justify-center`}
        >
          <img
            className="w-[8rem] sm:w-[7rem] md:w-[9rem] border-2 border-slate-400 rounded-full"
            src={studentOneImg}
            alt="Student One"
          />
          {team && (
            <img
              className="w-[8rem] sm:w-[7rem] md:w-[9rem] border-2 border-slate-400 rounded-full"
              src={studentTwoImg}
              alt="Student Two"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 p-4 text-center flex-grow">
        <p className="text-lg font-medium text-gray-600">
          Project ID: {projectId}
        </p>
        <p className="text-xl font-semibold text-gray-600 capitalize min-h-[3rem] flex flex-col justify-center">
          {studentOne} ({regNoOne})
          {team && (
            <span className="block">
              {studentTwo} ({regNoTwo})
            </span>
          )}
        </p>
      </div>
      <h2 className="text-center p-4 text-xl font-medium capitalize">
        {projectTitle}
      </h2>
      <p className="text-center p-4 text-base text-gray-700 capitalize">
        {projectDomain}
      </p>
      <div className="flex items-center justify-center w-full pb-2">
        <a
          href="/profile_details"
          className="w-[95%] h-10 flex items-center justify-center bg-[#fd4e00] rounded-md font-semibold text-white hover:scale-[1.01] active:scale-[0.99] hover:shadow-lg transition-all"
        >
          Profile Details
        </a>
      </div>
    </div>
  );
};
