"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

// Define types for the data
interface BlogData {
  title: string;
  imageUrl: string;
  currentSlug: string;
  sd: string;
  ld: string;
}

export default function Cards() {
  // State to store the fetched data
  const [data, setData] = useState<BlogData[]>([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == 'blogs']{
          title,
          "imageUrl": image.asset->url,
          "currentSlug": slug.current,
          sd,
          ld
        }`);
        setData(result); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means it runs once when the component mounts

  return (
    <div className="flex flex-grow flex-wrap items-center justify-center md:gap-x-4 gap-y-6 leading-[1.3] min-[1910px]:flex-nowrap pt-20 pb-20">
      {data.map((val, i) => (
        <div key={i} className="flex">
          <div className="w-[250px] sm:w-[250px] md:w-[250px] lg:w-[250px] h-[430px] bg-gray-200 rounded-xl shadow-xl m-3 relative">
            <Image src={val.imageUrl} width={300} height={300} alt="" className="h-40 rounded-xl" />
            <h1 className="font-bold mt-1 text-indigo-950 text-center">{val.title}</h1>
            <p className="text-indigo-950 text-sm/4 m-1 justify-center text-center pb-11">{val.sd}</p>
            <Link href={`/blogDetail/${val.currentSlug}`}>
              <button className="rounded-xl bg-gray-200 w-[100px] mt-1 ml-8 justify-center absolute bottom-4 left-10 text-center text-indigo-950 border-solid border-2 border-indigo-950">
                More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
