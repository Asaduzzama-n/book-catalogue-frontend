import notFoundImg from "../assets/svgs/404 Error with a cute animal-amico.svg";
export default function NotFound() {
  return (
    <div>
      <img className="h-[800px] w-full" src={notFoundImg} alt="" />
    </div>
  );
}
