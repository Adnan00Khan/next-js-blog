export default function Header() {
    return (
      <div className={`flex w-full items-start lg:px-24 px-11 `}>
        <div className="flex h-[300px] w-full flex-shrink-0 flex-col overflow-clip">
          <div className="font-inter relative flex w-[1740px] flex-grow flex-col items-start gap-y-6 rounded-b-[48px] bg-gray-200  sm:pl-[70px] pl-[20px] pt-24 text-indigo-950">

            <div className="xl:text-sm sm:text-[15px] text-[10px] uppercase leading-none tracking-[1.92px]">
              Welcome to Blogs
            </div>
            <div className="self-stretch text[20px] lx:text-[60px] sm:text-[40px] font-bold capitalize leading-[1.1] tracking-[0px]">
              <span>
                <p>Best Blogs</p>
                <p>Collection for your</p>
              </span>
            </div>
            <div className="flex items-end pt-6">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  

  