import React from "react";

function ServiceCard(props) {
  return (
    <div className="p-4 m-2 bg-slate-100 rounded-md h-[150px] w-[300px] flex flex-col items-center space-y-3 dark:bg-gray-800">
      <h1 className="text-customColor text-xl font-heading">{props.heading}</h1>
      <p className="text-justify text-sm dark:text-slate-200 font-paragraph">{props.content}</p>
    </div>
  );
}

export default ServiceCard;