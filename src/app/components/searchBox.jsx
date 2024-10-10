// import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { searchUser } from "../../actions/profile";
import { useState } from "react";
import { RiSearch2Line } from "@remixicon/react";
import Link from "next/link";

export default function SearchBox({ status }) {
  const [users, setUsers] = useState([]);

  async function handleSearch(term) {
    console.log(term);
    const data = (await searchUser(term)) ?? [];
    console.log(data);
    setUsers(data);
  }

  return (
    <div className={`${status ? "flex flex-col" : "hidden"} text-gray-900`}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className=" flex flex-row justify-between  rounded-2xl  py-[1.5vh] px-[2vw] my-2 text-sm outline-2 placeholder:text-gray-700 bg-white">
        <input
          className=" bg-transparent outline-none"
          placeholder="Search User"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <span className="text-gray-700">
          <RiSearch2Line />
        </span>
      </div>
      {users.map((user, i) => (
        <Link key={i} href={`/timelines/${user.username}`} className="py-[1vh] px[2vw] my-2 rounded-2xl text-center font-semibold  bg-white">
          {user.username}
        </Link>
      ))}
    </div>
  );
}
