"use client";
import Image from "next/image";
// import { IBlogHeroSectionDetails, IJobsList } from "@/types";
import { Filter, X, Search } from "lucide-react";
import { useCallback, useState } from "react";
import { blogsFilter } from "@/app/constants";
import ChevronDownBlack from "@/assets/ChevronDown_black.svg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useRouter } from "next/navigation";

interface FormData {
  [key: string]: string[] | undefined;
}

const HeaderSection = () => {
  const [showDropdown, setShowDropdown] = useState("");
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [selectedData, setSelectedData] = useState<FormData>();

  const updateDropdown = (dropdown: string, bool: boolean) => {
    setShowDropdown((prev) => (dropdown === prev && !bool ? "" : dropdown));
  };

  const router = useRouter();

  const handleFilterApi = useCallback((filtereData: FormData) => {
    const queryString = new URLSearchParams(filtereData as unknown as Record<string, string>).toString();
    router.push(`/blog/all/?${queryString}`, {scroll: false})
  }, [router]);

  const onSubmit = () => {
    const filteredArray: string[] = [];
    const data = selectedData;

    blogsFilter.forEach((value) => {
      if (data?.[value.value]) {
        filteredArray.push(
          ...(data?.[value.value]?.filter((item) => item) || [])
        );
      }
    });

    setFilteredData(filteredArray);
    updateDropdown("", false);
    const queryString = new URLSearchParams(selectedData as unknown as Record<string, string>).toString();
    router.push(`/blog/all/?${queryString}`, {scroll: false})
  };

  const clearAll = () => {
    updateDropdown("", false);
    setFilteredData([]);
    setSelectedData({});
    handleFilterApi({})
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const key = showDropdown ? showDropdown : blogsFilter[0]?.value;
    const newData = checked
      ? [...(selectedData?.[key] || []), value]
      : selectedData?.[key]?.filter((prev: string) => prev !== value) || [];
    if (!newData.length) {
      const updatedData = selectedData;
      delete updatedData?.[key]
      setSelectedData({...updatedData})
    }
    else setSelectedData({ ...selectedData, [key]: newData })
  };

  const clearSelectedData = (item: string) => {
    const data = { ...selectedData };

    blogsFilter.forEach((key) => {
      if (data[key.value]?.includes(item)) {
        data[key.value] = data[key.value]?.filter((i) => i !== item);
      }
      if(!data[key.value]?.length){
        delete data[key.value]
      }
    });

    setSelectedData(data);
    setFilteredData((prev) => prev.filter((i) => i !== item));
    handleFilterApi(data)
  };

  const [sortBy, setSortBy] = useState<string>();

  const handleViewMode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  // const sortArrayData = useCallback(()=>{
  //   return updateNAnnouncements.list.sort((a,b)=>{
  //     if(!sortBy) return 0;
  //     if(sortBy === "most read") return b.views - a.views;
  //     if(sortBy === "latest") return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime();
  //     if(sortBy === "oldest") return new Date(a.postedAt).getTime() - new Date(b.postedAt).getTime();
  //     return 0;
  //   });
  // },[sortBy]);

  return (
    <div className="relative bg-primary-gradient">
      <div className="mx-auto max-w-8xl px-3 py-10 md:px-[68px]">
        <div className="mb-6 flex flex-col-reverse items-center justify-between md:flex-row">
          <h1 className="text-Display-Semibold-32">All Blogs</h1>
        </div>

        <div>
          <div className="flex justify-between">
            <div className="relative flex items-center justify-between w-full md:w-auto">
              <input
                className="border-1 h-[46px] w-full md:w-[450px] border px-4 py-[10px] outline-none"
                type="text"
                name=""
                id=""
                placeholder="Search Blogs"
              />
              <Search className="absolute right-4 text-Neutrals-950" />
            </div>
            <div className="z-20 hidden items-start justify-end gap-6 md:flex md:items-center md:justify-between">
            <div className="flex justify-between gap-4">
              {blogsFilter.map((data) => (
                <div
                  key={data.value}
                  className="relative bg-Neutrals-50 px-4 py-[11px] text-Body-Medium-16 text-Neutrals-950"
                  onMouseEnter={() => updateDropdown(data.value, false)}
                  onMouseLeave={() => updateDropdown("", false)}>
                  <div className="flex items-center">
                    <span className="capitalize">{data.label}</span>
                    {selectedData?.[data.value]?.length ? (
                      <div className="ml-2 h-6 w-6 rounded-full bg-Accent-Orange-950 text-center text-white">
                        {selectedData[data.value]?.length}
                      </div>
                    ) : null}
                    <div className="pointer-events-none flex items-center pl-2">
                      <Image
                        src={ChevronDownBlack}
                        alt="down"
                        height={24}
                        width={24}
                      />
                    </div>
                  </div>
                  {showDropdown === data.value && (
                    <div className="absolute right-0 top-[48px] z-10 flex flex-col gap-1 border border-Neutrals-300 bg-white p-4">
                      {data.options.map((option) => (
                        <label key={option.value} className="flex items-center">
                          <input
                            name={option.value}
                            type="checkbox"
                            className="mr-2"
                            value={option.label}
                            onChange={handleChange}
                            checked={
                              selectedData?.[showDropdown]?.includes(
                                option.label
                              ) || false
                            }
                          />
                          {option.label}
                        </label>
                      ))}
                      <div className="mt-4 flex justify-between gap-4 text-nowrap">
                        <button
                          type="button"
                          className="border border-Accent-Orange-950 px-4 py-[11px] text-Accent-Orange-950"
                          onClick={clearAll}>
                          Clear All
                        </button>
                        <button
                          type="button"
                          className="border border-Accent-Orange-950 bg-Accent-Orange-950 px-4 py-[11px] text-white"
                          onClick={onSubmit}>
                          Apply Filter
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="relative ml-auto w-min md:m-0">
                <select
                  className="relative w-40 appearance-none bg-Neutrals-50 px-4 py-[11px] text-Body-Medium-16 text-Neutrals-950 outline-none"
                  defaultValue=""
                  onChange={handleViewMode}>
                  <option hidden value={sortBy}>
                    Sort by
                  </option>
                  <option className="px-2 py-1" value="most recent">
                    Most Recent
                  </option>
                  <option className="px-2 py-1" value="most read">
                    Most Read
                  </option>
                  <option className="px-2 py-1" value="default">
                   Default
                  </option>
                </select>

                <Image
                  className="absolute right-[14px] top-3"
                  src={ChevronDownBlack}
                  alt="down"
                  height={24}
                  width={24}
                />
              </div>
            </div>
          </div>
          </div>
    
          <div className="z-20 mt-4 flex items-center justify-start gap-2 md:hidden">
            <Drawer>
              <DrawerTrigger>
                <div className="flex items-center gap-1 bg-Neutrals-100 px-2 py-3 text-Link-medium-14 text-Neutrals-950">
                  <Filter className="h-5 w-5" />
                  <span>Filter</span>
                  {filteredData?.length ? (
                    <div className="ml-2 flex h-5 w-5 items-center justify-center rounded-2xl bg-Accent-Orange-950 text-Body-Medium-16 text-white">
                      {filteredData?.length}
                    </div>
                  ) : null}
                </div>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="flex items-center justify-between border-b border-Neutrals-200">
                  <DrawerTitle>Filter</DrawerTitle>
                  <DrawerClose>
                    <X />
                  </DrawerClose>
                </DrawerHeader>
                <form>
                  <div className="grid h-56 grid-cols-7">
                    <div className="col-span-3 flex flex-col gap-2 bg-Primary-Mordor-Blue-Bg-50 px-4 py-8">
                      {blogsFilter.map((data, index) => (
                        <div
                          key={data.value}
                          className="flex items-baseline justify-between">
                          <div
                            className={`w-24 text-Body-Medium-16 capitalize ${(!showDropdown && index === 0) || data.value === showDropdown ? "text-Neutrals-950" : "text-Neutrals-900"}`}
                            onClick={() => updateDropdown(data.value, true)}>
                            {data.label}
                          </div>
                          {selectedData?.[data.value]?.length ? (
                            <div className="ml-2 flex h-5 w-5 items-center justify-center rounded-2xl bg-Accent-Orange-950 text-Body-Medium-16 text-white">
                              {selectedData[data.value]?.length}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                    <div className="col-span-4 flex flex-col gap-2 px-4 py-8 text-Body-Medium-14 text-Neutrals-950">
                      {blogsFilter
                        .find(
                          (filter) =>
                            filter.value ===
                            (showDropdown || blogsFilter[0].value)
                        )
                        ?.options.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center">
                            <input
                              name={option.value}
                              type="checkbox"
                              className="mr-2 checked:bg-Accent-Orange-800"
                              value={option.label}
                              onChange={handleChange}
                              checked={
                                selectedData?.[
                                  showDropdown || blogsFilter[0].value
                                ]?.includes(option.label) || false
                              }
                            />
                            {option.label}
                          </label>
                        ))}
                    </div>
                  </div>
                  <DrawerFooter>
                    <div className="mt-4 flex justify-between gap-4 text-nowrap">
                      <DrawerClose
                        type="button"
                        className="w-35 border border-Accent-Orange-950 px-4 py-[11px] text-Accent-Orange-950"
                        onClick={clearAll}>
                        Clear All
                      </DrawerClose>
                      <DrawerClose
                        type="button"
                        className="flex-1 border border-Accent-Orange-950 bg-Accent-Orange-950 px-4 py-[11px] text-white"
                        onClick={onSubmit}>
                        Apply Filter
                      </DrawerClose>
                    </div>
                  </DrawerFooter>
                </form>
              </DrawerContent>
            </Drawer>
            <div className="relative w-min ">
                <select
                  className="relative w-32 appearance-none bg-Neutrals-100 px-2 py-3 text-Link-medium-14 text-Neutrals-950 outline-none"
                  defaultValue=""
                  onChange={handleViewMode}>
                  <option hidden value="">
                    Sort by
                  </option>
                  <option className="px-2 py-1" value="most recent">
                    Most Recent
                  </option>
                  <option className="px-2 py-1" value="most read">
                    Most Read
                  </option>
                  <option className="px-2 py-1" value="default">
                    Default
                  </option>
                </select>

                <Image
                  className="absolute right-[14px] top-3"
                  src={ChevronDownBlack}
                  alt="down"
                  height={24}
                  width={24}
                />
              </div>
          </div>
        </div>
        {filteredData && filteredData.length ? <div className="relative z-[15] mt-10 flex flex-col md:flex-row items-start md:items-center gap-4">
              <span className="text-Neutrals-800 text-nowrap">Filters Selected</span>
              <div className="flex w-full overflow-hidden">
                <div className="flex gap-4 overflow-auto scrollbar-hide items-center">
                  {filteredData.map((item) => (
                    <div key={item} className="flex gap-1 md:gap-2 items-center py-[6px] px-2 md:px-4 text-[14px] leading-5 md:font-medium text-Neutrals-950 border border-Neutrals-300 rounded-[6px] flex-shrink-0">
                      <span>{item}</span>
                      <button onClick={() => clearSelectedData(item)}><X className="w-[14px] h-[14px]" /></button>
                    </div>
                  ))}
                </div>
                <div className="md:ml-4 flex items-center sticky right-0">
                  <div onClick={clearAll} className="text-Body-Medium-16 text-nowrap py-[6px] text-Accent-Orange-950 cursor-pointer bg-white ">Clear All</div>
                </div>
              </div>
            </div> : null}
      </div>
    </div>
  );
};

export default HeaderSection;
