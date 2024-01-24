import noDataFoundImg from "../../assets/svgs/No-data-cuate.svg";
export default function NoDataFound(props: any) {
  const { message } = props;
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <img className="h-60" src={noDataFoundImg} alt="" />
        <p className="text-3xl font-semibold text-center">{message}</p>
      </div>
    </div>
  );
}
