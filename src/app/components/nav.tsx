"use client"

import Link from "next/link";

export default function Navigation() {
  return (
    <div
      className={`font-inter w-full bg-white capitalize leading-[1.1] tracking-[0px]`}
    >
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between bg-indigo-950 px-6 py-3 text-[13px] text-white sm:px-10 lg:px-32">
        <div className="flex items-center gap-x-2 opacity-70">
          <svg
            className="h-4 w-4 flex-shrink-0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 19.4l-6.6-6.6L5.4 10l3.6 3.6L18.6 4 21 6.4 9 19.4z"
              fill="currentColor"
            />
          </svg>
          <div>best blogs</div>
        </div>
        <div className="flex items-center gap-x-4 opacity-70">
          <div>Eng</div>
          <div>Need Help</div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-y-4 bg-gray-200 px-6 py-5 font-medium text-indigo-950 sm:px-10 lg:flex-nowrap lg:px-32">
        <div className="flex items-center justify-center gap-x-2">
          <div className="text-[22px] leading-[1.2] sm:text-[26px]">Blogs</div>
        </div>
       
      </div>

      {/* Links and Contact */}
      <div className="flex flex-wrap items-center justify-between px-6 py-[20px] text-sm font-medium leading-[1.1] text-zinc-500 sm:px-10 lg:px-32 lg:py-[30px]">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-8">
          <div className="text-[teal]">
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="../blogpage">Blogs</Link>
          </div>
        </div>
      
      </div>

      <hr />
    </div>
  );
}


