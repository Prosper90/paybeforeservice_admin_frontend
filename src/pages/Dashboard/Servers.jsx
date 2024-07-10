import React, { useState } from "react";
import Servers from "../../components/Server/Servers";
import ServeroneDetails from "../../components/Server/ServeroneDetails";
import ServertwoDetails from "../../components/Server/ServertwoDetails";
import ServerthreeDetails from "../../components/Server/ServerthreeDetails";

export default function Server() {
  const [selectedServer, setSelecetedServer] = useState("serverone");

  const serverInfo = () => {
    switch (selectedServer) {
      case "serverone":
        return <ServeroneDetails />;

      case "servertwo":
        return <ServertwoDetails />;

      case "serverthree":
        return <ServerthreeDetails />;

      default:
        break;
    }
  };

  return (
    <div className="p-7 mt-3 pb-24">
      <h1 className="text-black">Servers</h1>

      <Servers setSelecetedServer={setSelecetedServer} />

      <div className="bg-white rounded h-36 p-10 mt-16 text-[#555]">
        {serverInfo()}
      </div>
    </div>
  );
}
