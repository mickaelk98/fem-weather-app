import logo from "../assets/images/logo.svg";
import unitsLogo from "../assets/images/icon-units.svg";
import dorpdownLogo from "../assets/images/icon-dropdown.svg";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className="mt-4 md:mt-8 lg:mt-12 mb- flex justify-between">
      <img className="self-start" src={logo} alt="app logo" />
      <div className="flex flex-col items-end gap-2.5">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-fit flex items-center gap-2 px-4 py-3 cursor-pointer rounded-[8px] bg-[var(--neutral-800)]"
        >
          <img src={unitsLogo} alt="unit logo" />
          <p>Units</p>
          <img src={dorpdownLogo} alt="dorpdown logo" />
        </div>
        {/* dropDown */}
        {isOpen && (
          <ul className="absolute top-18 md:top-22 lg:top-26 p-4 rounded-[12px] bg-[var(--neutral-800)] w-[214px] flex flex-col gap-3.5">
            <li className="cursor-pointer">Switch to imperial</li>
            <li className="text-[var(--neutral-300)]">Temperature</li>
            <li>Celsius (°C)</li>
            <li>Fahrenheit (°F)</li>
            <li className="text-[var(--neutral-300)]">Wind Speed</li>
            <li>km/h</li>
            <li>mph</li>
            <li className="text-[var(--neutral-300)]">Precipitation</li>
            <li>Millimeters (mm)</li>
            <li>Inches (in)</li>
          </ul>
        )}
      </div>
    </header>
  );
}
