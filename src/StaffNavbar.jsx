import hum_berger from "./assets/hum_berger.svg";
import home from "./assets/home.svg";
import log_out from "./assets/log_out.svg";

const StaffNavbar = ({ open, setOpen }) => {
  return (
    <header className="h-fit bg-[#333652] flex items-center justify-between px-4 md:px-16">
      <div className="flex items-center justify-center">
        <a href="#">
          <img
            className="h-10 my-3 md:h-12"
            src="https://cdn.freebiesupply.com/logos/large/2x/for-dummies-1-logo-png-transparent.png"
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
          className="h-auto rounded-full w-8 md:w-9"
          src="https://sathyabama-erp-s3.s3.ap-south-1.amazonaws.com/admission/profile/606036-1706720845384-ErpUpload.png"
          alt="Faculty"
        />
        <div className="relative hidden md:flex md:items-center md:justify-center">
          <h3 className="text-white text-sm md:text-base">
            staff.dept@institution.in
          </h3>
          <span
            className="flex items-center justify-center rounded-full ml-2"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 text-gray-100"
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
            <div className="absolute top-10 right-0 h-36 w-40 bg-white text-black shadow-2xl flex flex-col z-50">
              <div className="w-full text-sm text-[#6C757D] font-semibold h-8 bg-slate-100 flex items-center pl-2">
                Welcome!
              </div>
              <div className="w-full flex items-center h-14 bg-slate-100 text-[#6C757D] hover:bg-slate-200">
                <a
                  href="#"
                  className="flex items-center justify-start w-full gap-1 pl-2"
                >
                  <img className="w-4 h-4" src={home} alt="Home" />
                  Home
                </a>
              </div>
              <div className="w-full flex items-center h-14 bg-slate-100 text-[#6C757D] hover:bg-slate-200">
                <a
                  href="/"
                  className="flex items-center justify-start w-full gap-1 pl-2"
                >
                  <img className="w-4 h-4" src={log_out} alt="LogOut" />
                  Log Out
                </a>
              </div>
            </div>
          )}
        </div>
        {/* Mobile menu icon */}
        <div className="relative w-5 h-5 md:hidden">
          <img src={hum_berger} alt="Menu" />
        </div>
        {open && (
          <div className="absolute top-12 right-0 h-36 w-40 md:hidden bg-white text-black shadow-2xl flex flex-col z-50">
            <div className="w-full text-sm text-[#6C757D] font-semibold h-8 bg-slate-100 flex items-center pl-2">
              Welcome!
            </div>
            <div className="w-full flex items-center h-14 bg-slate-100 text-[#6C757D] hover:bg-slate-200">
              <a
                href="#"
                className="flex items-center justify-start w-full gap-1 pl-2"
              >
                <img className="w-4 h-4" src={home} alt="Home" />
                Home
              </a>
            </div>
            <div className="w-full flex items-center h-14 bg-slate-100 text-[#6C757D] hover:bg-slate-200">
              <a
                href="/"
                className="flex items-center justify-start w-full gap-1 pl-2"
              >
                <img className="w-4 h-4" src={log_out} alt="LogOut" />
                Log Out
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default StaffNavbar;
