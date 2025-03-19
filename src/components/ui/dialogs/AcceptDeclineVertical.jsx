import Button from "../Button";

const AcceptDeclineVertical = ({ icon, title, description }) => {
  return (
    <div className="p-4 rounded-xl shadow flex flex-col justify-center space-y-2 max-w-[550px] h-auto">
      {icon && <div className="flex justify-center">{icon}</div>}
      <div className="text-center">
        <p className="text-xl font-semibold text-dark-800 pb-3">{title}</p>
        <p className="text-light-600 text-sm pb-4">{description}</p>
      </div>
      <div className="flex gap-2 items-center w-full">
        <div className="w-1/2">
          <Button title="Accept" variant="dark" buttonWidth="full" />
        </div>
        <div className="w-1/2">
          <Button title="Decline" variant="light" buttonWidth="full" />
        </div>
      </div>
    </div>
  );
};

export default AcceptDeclineVertical;
