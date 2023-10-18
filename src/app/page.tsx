import Knowmore from "./components/buttons/Knowmore";
import Collage from "./components/Collage";

export default function LandingPage() {
  return (
    <div className="flex">
      <div className="w-1/2 p-10">
        <Collage />
      </div>
      <div className="w-1/2 p-10">
        <h1 className="text-5xl mt-[4rem] font-semibold mb-10">Hi I’m Sudhanshu  !!</h1>
        <p className="text-3xl font-semibold text-[#696969] mb-[5rem]">
          ✱ Transforming concepts into captivating web experiences.
        </p>
        <Knowmore />
      </div>
    </div>
  );
}
