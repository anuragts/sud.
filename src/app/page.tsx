import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex">
      <div className="w-1/2 p-10">
        <div className="">
          <Image src="/pic2.jpeg" className="border-2 rounded-[4rem] border-[#000000]" alt="Image 2" width={250} height={250} />
          <Image src="/pic3.jpg" className="border-2 mt-[-10rem] ml-[10rem] rotate-12	 rounded-[4rem] border-[#000000]" alt="Image 3" width={250} height={300} />
          <Image src="/pic1.jpeg" className="border-2 mt-[-15rem] -rotate-12 rounded-[4rem] border-[#000000]" alt="Image 1" width={250} height={250} />
          <Image src="/arrow.png" className="ml-[30rem] mt-[-28rem]   " alt="Image 1" width={250} height={250} />
        </div>
      </div>
      <div className="w-1/2 p-10">
        <h1 className="text-5xl mt-[4rem] font-semibold mb-10">Hi I’m Sudhanshu  !!</h1>
        <p className="text-3xl font-semibold text-[#696969] mb-[5rem]">
          Transforming concepts into captivating web experiences.
        </p>
        <Link className="text-[#000000] text-xl px-6 py-4 border-2 rounded-xl border-[#000000] font-semibold bg-[#D2E0FB] hover:underline shadow-2xl" href="/">know more</Link>
      </div>
    </div>
  );
}
