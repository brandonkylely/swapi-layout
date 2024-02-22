import axios from "axios";
import { useAtom } from "jotai";
import { useState } from "react";
import { swapiURL } from "../api";
import { feedAtom } from "../state";

export default function Header() {
  const [search, setSearch] = useState()
  const [feed, setFeed] = useAtom(feedAtom)

  const handleSetSearch = (e) => {
    setSearch(e.target.value)
  }

  async function fetchSearch() {
    event.preventDefault()
    const response = await axios.get(`${swapiURL}/starships/${search}`)
    console.log(response.data)
    setFeed(response.data)
  }

  return (
    <>
      <div className="navbar relative bg-gray-100 shadow-md">
      <div className="flex-none">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Sample</a>
        </div>
        <div className="flex-none gap-2">
          <form className="flex flex-row form-control">
            <input
              type="text"
              name="search"
              onChange={handleSetSearch}
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
            <button onClick={fetchSearch}> ID Search</button>
          </form>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="sample-pic.avif"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
