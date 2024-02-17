/* eslint-disable react/prop-types */
export const ProjectCard = ({
  teamLeadImg,
  id,
  registerNoOne,
  studentOne,
  registerNoTwo,
  studentTwo,
  title,
}) => {
  return (
    <div className="bg-slate-200 h-[30rem] w-[24rem] rounded flex gap-5 flex-col items-center justify-between shadow-2xl shadow-slate-900 hover:shadow-lg hover:shadow-gray-600 hover:scale transition-shadow">
      <div className="h-[210px] w-full flex items-center justify-center relative">
        <img
          className="absolute z-0"
          src="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg"
          alt="Bg-image"
        />
        <img
          className="h-3/4 w-[9.5rem] object-cover rounded-full relative z-1 border-2 border-black"
          src={teamLeadImg}
          alt="project"
        />
      </div>
      <div className="flex flex-col items-center gap-4 pb-4">
        <h4 className="text-2xl font-medium">{id}</h4>
        <h3 className="text-xl h-14 font-medium">
          {registerNoOne} - {studentOne}
          <br />
          {registerNoTwo && `${registerNoTwo} - ${studentTwo}`}
        </h3>
        <p className="text-center text-lg">{title}</p>
        <a
          href="/profile_details"
          className="bg-[#d06a0f] h-8 w-[90%] flex justify-center items-center text-white font-bold rounded"
        >
          Profile Details
        </a>
      </div>
    </div>
  );
};
