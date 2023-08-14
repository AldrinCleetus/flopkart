import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { themes } from "../utils/contants";

const UserProfile = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [showDropDown, setshowDropDown] = useState(false);
  const [themesDropDown, setThemesDropDown] = useState(false);

  const toggleDropDown = () => {
    setshowDropDown((prev) => !prev);
    setThemesDropDown(false);
  };

  const changeThemeData = (color: string) => {
    document.body.style.setProperty("--primary-color", color);
  };

  if (!isAuthenticated) {
    return (
      <div
        onClick={() => loginWithRedirect()}
        className="flex gap-1 cursor-pointer"
      >
        <svg
          className="w-7 h-7 my-auto text-primary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
          />
        </svg>
        <p className="hidden md:block my-auto text-lg font-semibold">
          SignIn/SignUp
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex gap-1 my-auto cursor-pointer relative">
        <img
          onClick={toggleDropDown}
          className="w-10 h-10 rounded-lg"
          src={user?.picture}
          alt="user"
        />

        <div
          className={`${
            showDropDown ? "" : "hidden"
          } absolute z-10 top-12 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="multiLevelDropdownButton"
          >
            <li>
              <Link
                onClick={toggleDropDown}
                to={"/wishlist"}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                WishList
              </Link>
            </li>
            <li>
              <button
                onClick={() => setThemesDropDown((prev) => !prev)}
                id="doubleDropdownButton"
                data-dropdown-toggle="doubleDropdown"
                data-dropdown-placement="right-start"
                type="button"
                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Theme
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>
              <div
                id="doubleDropdown"
                className={`z-10 ${
                  themesDropDown ? "" : "hidden"
                } absolute top-12 left-44 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="doubleDropdownButton"
                >
                  {themes.map((theme, index) => {
                    return (
                      <li onClick={() => changeThemeData(theme.color)}>
                        <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          {theme.name}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            <li>
              <a
                onClick={() => logout()}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default UserProfile;
