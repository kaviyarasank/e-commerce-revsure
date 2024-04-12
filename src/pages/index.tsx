import { StaticValues } from "@/constants";
import React from "react"

const dashboard = () => {
  return (
    <div className="text-center p-3">
      {StaticValues.welcomeMsg}
    </div>
  )
};

export default dashboard;
