import Image from 'next/image';
import React from 'react';

// Define the type for the blog data
interface BlogDetail {
  title: string;
  imageUrl: string;
  ld: string;
}

interface DetailProps {
  data: BlogDetail;
}

const Detail: React.FC<DetailProps> = ({ data }) => {
  return (
    <div>
      <div className="justify-center w-[100%] h-[100%] bg-gray-200 p-9 flex-wrap grid justify-items-center">
        <h1 className="font-bold mt-1 text-indigo-950 text-3xl text-center pb-10">{data.title}</h1>
        <Image
          src={data.imageUrl}
          width={300}
          height={250}
          alt={data.title} // It's a good idea to use a meaningful alt text
          className="h-80"
        />
        <h1 className="font-bold m-3 text-indigo-950 text-3xl text-center pt-10 pb-10">Detail</h1>
        <p className="text-black text-xl/8 m-1 hyphens-auto text-center pb-20 lg:pr-32 lg:pl-32 pl-11 pr-11">{data.ld}</p>
      </div>
    </div>
  );
};

export default Detail;
