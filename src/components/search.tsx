import searchLogo from "../assets/images/icon-search.svg";

export function Search() {
  return (
    <form
      action=""
      className="flex flex-col md:flex-row lg:max-w-[656px] lg:mx-auto lg:w-full items-center gap-3"
    >
      <div className="bg-[var(--neutral-800)] px-6 py-4 rounded-[12px] w-full flex gap-2">
        <img src={searchLogo} alt="search logo" />
        <input
          className="w-full outline-none"
          type="text"
          placeholder="Search for a place..."
        />
      </div>
      <button className="bg-[var(--blue-500)] w-full md:w-fit md:px-6 py-4 rounded-[12px] cursor-pointer">
        Search
      </button>
    </form>
  );
}
