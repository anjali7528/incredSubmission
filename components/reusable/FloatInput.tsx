interface IFloatInput {
  label: String;
}

function FloatInput({ label }: IFloatInput) {
  return (
    <div className="relative">
      <input
        type="text"
        className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
        placeholder=" "
      />
      <label className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-700  peer-placeholder-shown:scale-100 focus-within: peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
        {label}
      </label>
    </div>
  );
}

export default FloatInput;
