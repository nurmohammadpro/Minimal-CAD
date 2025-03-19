import Button from "./components/ui/Button";
import InputField from "./components/ui/InputField";
import TextArea from "./components/ui/TextArea";
import PopOver from "./components/ui/PopOver";
import AcceptDecline from "./components/ui/dialogs/AcceptDecline";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AcceptDeclineVertical from "./components/ui/dialogs/AcceptDeclineVertical";
import AnnouncementIcon from "@mui/icons-material/Announcement";

const App = () => {
  return (
    <div>
      <h1 className="text-4xl font-display">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        reprehenderit, dolor voluptatibus inventore alias non vitae dolorem ea
        repellendus consequuntur ex, vero, deserunt doloribus ducimus! Ipsa
        veniam in veritatis adipisci!
      </h1>
      <Button title="Click Me" variant="dark" />
      <br />

      <InputField
        label="Email"
        placeholder=""
        type="password"
        variant="regular"
        helpText="Error"
      />

      <br />

      <TextArea
        label="Description"
        placeholder=""
        type="text"
        variant="regular"
        helpText="Error"
      />

      <br />

      <PopOver
        popOverHeader="Header"
        popOverDescription="Description"
        position="rightMiddle"
      />

      <br />

      <AcceptDecline
        title="Something we'd like to propose"
        description="In today's net-savvy world it has become common for any business to have a website which the use mostly"
        icon={NotificationsActiveIcon}
      />

      <br />

      <AcceptDeclineVertical
        title="Advertising"
        description="n today's net-savvy world it has become common for any business to have a website which the use mostly"
        icon={<AnnouncementIcon style={{ fontSize: "48px", color: "black" }} />}
      />
    </div>
  );
};

export default App;
