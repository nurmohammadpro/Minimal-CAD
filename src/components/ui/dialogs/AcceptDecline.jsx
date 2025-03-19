import CloseIcon from "@mui/icons-material/Close";
import Button from "../Button";

const AcceptDecline = ({ icon: Icon, title, description }) => {
  return (
    <div className="w-full max-w-[550px] h-auto shadow rounded-xl flex flex-col justify-center p-4">
      <div className="flex justify-between items-center pb-3">
        <div className="flex gap-2 items-center">
          {Icon && <Icon />}
          <p className="text-xl font-semibold text-dark-800">{title}</p>
        </div>
        <CloseIcon className="cursor-pointer" />
      </div>
      <div className="pb-3">
        <p className="text-light-600 text-sm">{description}</p>
      </div>
      <div className="flex gap-2 items-center justify-end">
        <Button title="Accept" variant="dark" />
        <Button title="Decline" variant="light" />
      </div>
    </div>
  );
};

export default AcceptDecline;
