
import React, { ChangeEventHandler } from "react";

const Toggle = ({
  isChecked,
  handleChange,
}: {
  isChecked: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <>
      <label
        htmlFor="checkbox"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            id="checkbox"
            name="checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
            className="sr-only peer"
          />
          <div className="block h-8 w-14 rounded-full bg-[#E5E7EB]"></div>
          <div className="absolute w-6 h-6 transition rounded-full dot left-1 top-1 peer-checked:translate-x-full bg-[#6c7ae0]"></div>
        </div>
      </label>
    </>
  );
};

export default Toggle;
