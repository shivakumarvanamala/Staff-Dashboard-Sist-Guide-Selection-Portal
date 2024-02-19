/* eslint-disable react/prop-types */
// export const ProjectCard = ({
//   team,
//   projectId,
//   projectTitle,
//   projectDomain,
//   studentOneImg,
//   studentTwoImg,
//   regNoOne,
//   studentOne,
//   regNoTwo,
//   studentTwo,
// }) => {
//   return (
//     // <article className="bg-slate-200 w-full h-full md:h-[30rem] md:w-[26rem] rounded flex space-y-3 flex-col items-center justify-between shadow-2xl shadow-slate-900 hover:shadow-lg hover:shadow-gray-600 hover:scale transition-shadow">
//     //   <div className="w-full h-fit flex flex-col justify-center items-center relative">
//     <article className="bg-slate-200 w-fit h-fit rounded flex space-y-3 flex-col items-center justify-between shadow-2xl shadow-slate-900 hover:shadow-lg hover:shadow-gray-600 hover:scale transition-shadow">
//       <div className="w-full h-fit flex flex-col justify-center items-center relative">
//         <img
//           className= w-[40rem] h-[10rem] z-0 object-fit bg-center"
//           src="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg"
//           alt="Bg-image"
//         />
//         <img
//           className="w-[9rem] object-cover rounded-full relative z-1 border-2 border-black"
//           src={studentOneImg}
//           alt="project"
//         />
//       </div>
//     </article>
//   );
// };

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
    // <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
    //   <img
    //     className="w-full h-[12rem] object-cover object-center"
    //     src="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg"
    //     alt="Bg-image"
    //   />
    <div className="space-y-2 rounded-md shadow-[0px_0px_30px_gray] hover:shadow-[0px_0px_10px_gray] hover:scale transition-shadow">
      <div className="flex w-full h-[13rem] bg-[#e9d8de] justify-center items-center  p-4 mb-4">
        <img
          className="w-[9rem]  border-2 border-slate-400 rounded-full mr-4 relative"
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
      <div className="mt-4 p-4">
        <p className="text-gray-600 text-lg font-medium">
          Project ID : {projectId}
        </p>
        <p className="text-gray-600 text-xl font-semibold">
          {studentOne} ({regNoOne})
          {team && (
            <>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              {studentTwo}({regNoTwo})
            </>
          )}
        </p>
      </div>
      <h2 className="font-bold text-xl mb-2 p-4">{projectTitle}</h2>
      <p className="text-gray-700 text-base p-4">{projectDomain}</p>
    </div>
    // </div>
    // <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-2xl shadow-slate-900 hover:shadow-lg hover:shadow-gray-600 hover:scale transition-shadow my-4 relative">
    //   {/* <img
    //     className="w-full h-[12rem] object-cover object-left-top absolute "
    //     src="https://images.ctfassets.net/po6t8ne9irg9/6qIjUaF2o4aJW0O4Yiukrw/e82bf9081da54ab1b7d58e1226b64ccb/student-project-bank-summary.jpg"
    //     alt="Bg-image"
    //   />
    //   <div className="p-4"> */}
    //   <div className="flex w-full h-[13rem] items-center mb-4 bg-blue-600 p-4">
    //     <img
    //       className="w-[9rem]  border-2 border-slate-400 rounded-full mr-4 relative"
    //       src={studentOneImg}
    //       alt="Student One"
    //     />
    //     {team && (
    //       <img
    //         className="w-[9rem] border-2 border-slate-400 rounded-full relative"
    //         src={studentTwoImg}
    //         alt="Student Two"
    //       />
    //     )}
    //   </div>
    //   <div className="mt-4 p-4">
    //     <p className="text-gray-600 text-lg font-medium">{projectId}</p>
    //     <br />
    //     <p className="text-gray-600 text-xl font-semibold">
    //       {studentOne} ({regNoOne})
    //       {team && (
    //         <>
    //           &nbsp;&nbsp;|&nbsp;{studentTwo} ({regNoTwo})
    //         </>
    //       )}
    //     </p>
    //     <br />
    //   </div>
    //   <h2 className="font-[400] text-xl mb-2">{projectTitle}</h2>
    //   <br />
    //   <p className="text-gray-700 font-medium text-lg">{projectDomain}</p>
    // </div>
    // // </div>
  );
};
