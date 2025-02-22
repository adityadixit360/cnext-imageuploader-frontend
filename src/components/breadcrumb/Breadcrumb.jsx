import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Breadcrumb = ({ path, onNavigate }) => {
  return (
    <div className="flex items-center space-x-2 text-gray-600 mb-4 flex-wrap">
      <button
        className="text-blue-600 hover:underline flex items-center"
        onClick={() => onNavigate("/")}
      >
        Home
      </button>
      {path.length > 0 && (
        <ChevronRightIcon className="h-5 w-5 text-gray-500" />
      )}
      {path.map((item, index) => (
        <React.Fragment key={item.id}>
          <button
            className="text-blue-600 hover:underline"
            onClick={() => onNavigate(item.id, index)}
          >
            {item.name}
          </button>
          {index < path.length - 1 && (
            <ChevronRightIcon className="h-5 w-5 text-gray-500" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
