import React from "react";
function Header() {
  const [isOpen, setisOpen] = React.useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }
  return (
    <nav className="bg-white bg-opacity-95 lg:px-10 md:px-5 px-5 gotham-bold top-0 z-30">
      <div className="flex lg:flex-row flex-col float-right py-3 ">
        <div className="w-56 flex">
          <button
            type="button"
            className="block lg:hidden mr-2"
            onClick={handleClick}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`lg:flex space-y-4  lg:space-y-0 lg:pt-0 pt-10  lg:text-left lg:space-x-12 ${
            isOpen ? "block" : "hidden"
          } `}
        >
          <li className="list-none uppercase font-bold">
            <a href="#work">Works</a>
          </li>
          <li className="list-none uppercase font-bold">
            <a href="#blog">Blog</a>
          </li>
          <li className="list-none uppercase font-bold">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
