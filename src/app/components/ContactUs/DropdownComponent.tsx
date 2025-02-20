import Image from "next/image";
import ChevronDownBlack from "@/assets/ChevronDown_black.svg";

const DropdownComponent = (
  { field, list, id, placeholder }
    : { field: Record<string, unknown>, list: TDropdownListItem[], id: string, placeholder: string }) => {
  return (
    <>
      <div className="relative flex">
        <select
          {...field}
          id={id}
          aria-label={id}
          className="h-[54px] w-full text-Body-Regular-14 appearance-none px-4 text-Neutrals-950 border-[0.5px] border-Neutrals-500 bg-white"
          defaultValue=""
        >
          <option hidden value="">
            {placeholder}
          </option>
          {list?.length
            ? list.map(
              (item: TDropdownListItem) => (
                <option
                  key={item.value}
                  value={
                    item.value
                  }
                >
                  {item.label}
                </option>
              )
            )
            : ""}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <Image
            src={ChevronDownBlack}
            alt="down"
            height={24}
            width={24}
          />
        </div>
      </div>
    </>
  )
}

export default DropdownComponent

type TDropdownListItem = {
  label: string;
  value: string;
};