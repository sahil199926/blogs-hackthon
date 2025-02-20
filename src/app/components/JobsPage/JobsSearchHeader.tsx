"use client";
import { IJobsList } from "@/types";
import { Filter, X } from "lucide-react";
import { useCallback, useState } from "react";
import Image from "next/image";
// import DotBg from "../common/DotBg";
import ChevronDownBlack from "@/assets/ChevronDown_black.svg";
import JobsCard from "./JobsCard";
import { jobsFilter } from "@/app/constants";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { useRouter } from "next/navigation";

interface FormData {
  [key: string]: string[] | undefined;
}
interface IFilteredData {
  [key: string]: string;
}
function JobsSearchHeader({ jobsList, FilteredData }: { jobsList: Array<{department: string | undefined, list: IJobsList[]}>, FilteredData: IFilteredData }) {
  const [showDropdown, setShowDropdown] = useState("");
  const [filteredData, setFilteredData] = useState<string[]>(() => FilteredData && Object.values(FilteredData).length ? Object.values(FilteredData).flat().toString().split(",") : []);
  const [selectedData, setSelectedData] = useState<FormData>(() => {
    const initialData: FormData = {};
    if (FilteredData) {
      Object.keys(FilteredData).forEach((key) => {
        initialData[key] = FilteredData[key]?.split(",");
      });
    }
    return initialData;
  });

  const router = useRouter();


  const updateDropdown = (dropdown: string, bool: boolean) => {
    setShowDropdown((prev) => dropdown === prev && !bool ? "" : dropdown);
  }

  const handleFilterApi = useCallback((filtereData: FormData) => {
    const queryString = new URLSearchParams(filtereData as unknown as Record<string, string>).toString();
    router.push(`/jobs/?${queryString}`, {scroll: false})
  }, [router]);


  const onSubmit = () => {
    const filteredArray: string[] = [];
    const data = selectedData;

    jobsFilter.forEach((value) => {
      if (data?.[value.value]) {
        filteredArray.push(...data?.[value.value]?.filter((item) => item) || []);
      }
    });

    setFilteredData(filteredArray);
    updateDropdown("", false);
    const queryString = new URLSearchParams(selectedData as unknown as Record<string, string>).toString();
    router.push(`/jobs/?${queryString}`, {scroll: false})
  }

  const clearAll = () => {
    updateDropdown("", false);
    setFilteredData([]);
    setSelectedData({});
    handleFilterApi({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const key = showDropdown ? showDropdown : jobsFilter[0]?.value;
    const newData = checked
      ? [...(selectedData?.[key] || []), value]
      : selectedData?.[key]?.filter((prev: string) => prev !== value) || [];
    if (!newData.length) {
      const updatedData = selectedData;
      delete updatedData[key]
      setSelectedData({...updatedData})
    }
    else setSelectedData({ ...selectedData, [key]: newData })
  }

  const clearSelectedData = (item: string) => {
    const data = { ...selectedData };

    jobsFilter.forEach((key) => {
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
  }
  
  return (
    <div className="flex justify-center relative overflow-hidden">
      <section className="w-full max-w-8xl">
        <div className="p-4 md:px-[88px] md:py-20">
          <div className="border-b border-Neutrals-200 py-10">
            <div className="flex justify-between">
              <h2 className="text-Display-Semibold-24 md:text-Display-Semibold-32">Job Openings</h2>
              <form className="z-20 md:flex gap-6 items-start justify-end hidden">
                {jobsFilter.map((data) => (
                    <div key={data.value} className="relative px-4 py-[11px] text-Body-Medium-16 text-Neutrals-950 bg-Neutrals-50"
                    onMouseEnter={() => updateDropdown(data.value, false)}
                    onMouseLeave={() => updateDropdown("", false)}>
                    <div className="flex items-center">
                      <span className="capitalize">{data.label}</span>
                      {selectedData?.[data.value]?.length ? (
                      <div className="ml-2 w-6 h-6 text-center text-white rounded-full bg-Accent-Orange-950">
                        {selectedData[data.value]?.length}
                      </div>
                      ) : null}
                      <div className="pointer-events-none flex items-center pl-2">
                      <Image src={ChevronDownBlack} alt="down" height={24} width={24} />
                      </div>
                    </div>
                    {showDropdown === data.value && (
                      <div className="absolute top-[48px] right-0 z-10 flex flex-col gap-1 p-4 bg-white border border-Neutrals-300">
                      {data.options.map((option) => (
                        <label key={option.value} className="flex items-center">
                        <input
                          name={option.value}
                          type="checkbox"
                          className="mr-2"
                          value={option.label}
                          onChange={handleChange}
                          checked={selectedData?.[showDropdown]?.includes(option.label) || false}
                        />
                        {option.label}
                        </label>
                      ))}
                      <div className="flex justify-between gap-4 mt-4 text-nowrap">
                        <button type="button" className="px-4 py-[11px] border border-Accent-Orange-950 text-Accent-Orange-950" onClick={clearAll}>Clear All</button>
                        <button type="button" className="px-4 py-[11px] border border-Accent-Orange-950 bg-Accent-Orange-950 text-white" onClick={onSubmit}>Apply Filter</button>
                      </div>
                      </div>
                    )}
                    </div>
                ))}
              </form>
              <div className="md:hidden z-20">
                <Drawer>
                  <DrawerTrigger>
                    <div className="flex items-center gap-1 px-2 py-3 text-Link-medium-14 text-Neutrals-950 bg-Neutrals-100">
                      <Filter className="w-5 h-5" />
                      <span>Filter</span>
                      {
                        filteredData?.length ? <div className="ml-2 w-5 h-5 flex items-center justify-center text-Body-Medium-16 text-white rounded-2xl bg-Accent-Orange-950">
                          {filteredData?.length}
                        </div> : null
                      }
                    </div>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="flex justify-between items-center border-b border-Neutrals-200">
                      <DrawerTitle>Filter</DrawerTitle>
                      <DrawerClose><X /></DrawerClose>
                    </DrawerHeader>
                    <form>
                      <div className="grid grid-cols-7 h-56">
                        <div className="col-span-3 gap-2 flex flex-col bg-Primary-Mordor-Blue-Bg-50 py-8 px-4">
                          {jobsFilter.map((data, index) => (
                            <div key={data.value} className="flex items-baseline justify-between">
                              <div
                                className={`w-24 text-Body-Medium-16 capitalize ${((!showDropdown && index === 0) || (data.value === showDropdown)) ? "text-Neutrals-950" : "text-Neutrals-900"}`}
                                onClick={() => updateDropdown(data.value, true)}
                              >
                                {data.label}
                              </div>
                              {selectedData?.[data.value]?.length ? (
                                <div className="ml-2 w-5 h-5 flex items-center justify-center text-Body-Medium-16 text-white rounded-2xl bg-Accent-Orange-950">
                                  {selectedData[data.value]?.length}
                                </div>
                              ) : null}
                            </div>
                          ))}
                        </div>
                        <div className="col-span-4 flex flex-col gap-2 text-Body-Medium-14 text-Neutrals-950 py-8 px-4">
                          {jobsFilter
                            .find((filter) => filter.value === (showDropdown || jobsFilter[0].value))
                            ?.options.map((option) => (
                              <label key={option.value} className="flex items-center">
                                <input
                                  name={option.value}
                                  type="checkbox"
                                  className="mr-2 checked:bg-Accent-Orange-800"
                                  value={option.label}
                                  onChange={handleChange}
                                  checked={selectedData?.[showDropdown || jobsFilter[0].value]?.includes(option.label) || false}
                                />
                                {option.label}
                              </label>
                            ))}
                        </div>
                      </div>
                      <DrawerFooter>
                        <div className="flex justify-between gap-4 mt-4 text-nowrap">
                          <DrawerClose type="button" className="px-4 w-35 py-[11px] border border-Accent-Orange-950 text-Accent-Orange-950" onClick={clearAll}>
                            Clear All
                          </DrawerClose>
                          <DrawerClose type="button" className=" flex-1 px-4 py-[11px] border border-Accent-Orange-950 bg-Accent-Orange-950 text-white" onClick={onSubmit}>
                            Apply Filter
                          </DrawerClose>
                        </div>
                      </DrawerFooter>
                    </form>
                  </DrawerContent>
                </Drawer>
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

        {/* Jobs Cards */}
        <JobsCard jobsList={jobsList} />
      </section >
    </div >
  );
}

export default JobsSearchHeader;
