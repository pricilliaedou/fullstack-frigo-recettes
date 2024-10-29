import { useState } from "react";

const ToggleButton = ({ onToggle }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled(!isToggled);
    onToggle();
  };

  return (
    <button
      onClick={handleChange}
      className={`p-2 rounded-lg transition-colors duration-300 ${
        isToggled ? "bg-red-500 text-white" : "bg-green-500 text-white"
      }`}
    >
      {isToggled ? "Fermer le frigo" : "Ouvrir le Frigo"}
    </button>
  );
};

export default ToggleButton;
