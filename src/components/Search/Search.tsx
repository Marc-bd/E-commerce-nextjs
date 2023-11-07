import { InputHTMLAttributes } from "react";

interface PropsSearch extends InputHTMLAttributes<HTMLInputElement> {

}

export default function Search({ ...rest }: PropsSearch) {
  return (
    <div className="w-72 md:items-center ">
      <input
        {...rest}
        className="peer h-full w-full border-0 rounded-md
        bg-gray-200 pt-2.5 pb-2 text-sm
        text-blue-600 pl-3
        outline outline-0 transition-all placeholder-shown:
        disabled:border-0 disabled:bg-blue-gray-50"

      />
    </div>

  );
}