import React from "react";
import { Star, Check } from "lucide-react";

function Success() {
  const MilestoneCard = ({
    title,
    subtitle,
    icon,
    color,
    buttonText,
    buttonColor,
  }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center relative overflow-hidden">
        <div
          className={`w-20 h-20 ${color} rounded-full flex items-center justify-center mb-4`}
        >
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
        <button
          className={`${buttonColor} text-white font-bold py-2 px-4 rounded-full hover:opacity-90 transition duration-300 text-sm`}
        >
          {buttonText}
        </button>
      </div>
    );
  };
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600 rounded-l-full opacity-10 transform translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-gray-800">
          Completions &
        </h2>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
          Success Screens
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MilestoneCard
            title="Trip Completion II"
            subtitle="You've Successfully Completed!"
            icon={<Check className="w-10 h-10 text-white" />}
            color="bg-yellow-400"
            buttonText="View Trip Details"
            buttonColor="bg-indigo-500"
          />
          <MilestoneCard
            title="Sub Level Completion II"
            subtitle="You've Successfully Completed!"
            icon={<Check className="w-10 h-10 text-white" />}
            color="bg-blue-400"
            buttonText="View My Challenges"
            buttonColor="bg-yellow-500"
          />
          <MilestoneCard
            title="Level Completion II"
            subtitle="You've Successfully Completed!"
            icon={<Check className="w-10 h-10 text-white" />}
            color="bg-purple-400"
            buttonText="View My Challenges"
            buttonColor="bg-blue-500"
          />
          <MilestoneCard
            title="Congratulations !!!"
            subtitle="You Won! Star Driver Badge From CD App"
            icon={<Star className="w-10 h-10 text-white" />}
            color="bg-indigo-400"
            buttonText="View My Profile"
            buttonColor="bg-purple-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Success;
