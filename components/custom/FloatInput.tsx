import React from "react";

interface IFloatInput {
  label: String;
}

function FloatInput({ label }: IFloatInput) {
  return (
    <div className="relative z-0">
      <input
        type="text"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-buttongreen focus:outline-none focus:ring-0 focus:border-buttongreen peer"
        placeholder=" "
      />
      <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-buttongreen peer-focus:dark:text-buttongreen peer-placeholder-shown:scale-100 focus-within: peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
        {label}
      </label>
    </div>
  );
}

export default FloatInput;