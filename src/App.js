/* eslint-disable react/jsx-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable quotes */
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

const projectID = "61a012f2-0282-45d6-823e-c56ce729b6b4";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
