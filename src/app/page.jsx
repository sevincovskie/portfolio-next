import Image from "next/image";

export default function Home() {
  return ( 
   <div className="h-full flex flex-col px-4 sm:px-12 lg:px-20 xl:px-48 lg:flex-row gap-8">
    {/* Image container */}
    <div className="h-1/2 relative lg:h-full lg:w-1/2">
    <Image src="/hero.png" alt="" fill className="object-contain"/>
    </div>

    {/* Text container */}
    <div className="h-1/2 flex flex-col gap-8 items-centr justify-center lg:h-full lg:w-1/2">
    {/* Title */}
    <h1 className="text-4xl font-bold md:text-6xl"> Men bele men hele</h1>
    {/* Desc */}
    <p className="md:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus rem modi consectetur reiciendis earum sit eaque asperiores. Libero, ullam mollitia!</p>
    {/* Button */}
    <div className="w-full flex gap-4">
    <button className="p-4 rounded-lg bg-black ring-1 ring-black text-white">View My Work</button>
    <button className="p-4 rounded-lg bg-white ring-1 ring-black text-black">Contact Me</button>
    </div>
    </div>
   
   </div>
   
  
  
  );
}
