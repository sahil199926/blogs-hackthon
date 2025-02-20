import { IRelatedReportsList } from "@/types";
import { Calendar, MapPin } from "lucide-react";
import React from "react";

function RelatedReports({
  relatedReport,
}: {
  relatedReport: IRelatedReportsList;
}) {
  return (
    <article className="relative h-full">
      <div className="mr-2 h-full max-w-[320px] border bg-Primary-Mordor-Blue-Bg-100 md:mb-4 md:max-w-full">
        <div className="flex flex-col p-[14px]">
          <div className="col mb-2 flex items-center text-Body-Regular-12 text-Neutrals-800">
            {relatedReport.shortTitle}
          </div>
          <h3 className="mb-3 text-Display-Semibold-14">
            {relatedReport.title}
          </h3>
          <div className="flex justify-between bg-white text-Body-Medium-12 text-Neutrals-950">
            <div className="flex items-center gap-[3px]">
              <MapPin className="h-4 w-4 text-Accent-Orange-950" />{" "}
              <span>
                {relatedReport.marketSizeData[0].key}{" "}
                {relatedReport.marketSizeData[0].value}
              </span>{" "}
            </div>
            <div className="flex items-center gap-[3px]">
              <Calendar className="h-4 w-4 text-Accent-Orange-950" />{" "}
              <span>
                {relatedReport.marketSizeData[1].key}{" "}
                {relatedReport.marketSizeData[1].value}
              </span>{" "}
            </div>
          </div>
          <div
            id="Segregation Line"
            className="mt-[18px] h-[1px] w-full bg-[#65789B]"
          />
          <div className="mt-3">
            {relatedReport.marketSizeData.map(
              (data: { key: string; value: string }, index: number) => {
                if (index < 2) return null;
                return (
                  <div key={index} className="text-Neutrals-950">
                    <span className="text-Body-Medium-12 font-semibold">
                      {data.key}:
                    </span>
                    <br />
                    <span className="text-Body-Regular-12">{data.value}</span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default RelatedReports;
