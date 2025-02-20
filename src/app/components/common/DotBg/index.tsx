import React from "react";
import dotImg from "@/assets/dots-lines-pattern.svg";
import Image from "next/image";

interface DotBgProps {
  cropWidthStart: number;
  cropWidthEnd: number;
  cropHeightStart: number;
  cropHeightEnd: number;
}

/**
 * Component to render a cropped background image with dots and lines pattern.
 * max width of the image is 1156.01px
 * max height of the image is 489px
 * @param {DotBgProps} props - The properties for the DotBg component.
 * @param {number} props.cropWidthStart - The starting x-coordinate for the crop area {min value it will take is 0, max value it will take is 1156.01}.
 * @param {number} props.cropWidthEnd - The ending x-coordinate for the crop area {min value it will take is 1, max value it will take is 1156.01}.
 * @param {number} props.cropHeightStart - The starting y-coordinate for the crop area {min value it will take is 0, max value it will take is 489}.
 * @param {number} props.cropHeightEnd - The ending y-coordinate for the crop area {min value it will take is 1, max value it will take is 489}.
 * @returns {JSX.Element} The JSX element representing the cropped background image with dots and lines pattern.
 */
function DotBg(props: DotBgProps): JSX.Element {
  const { cropWidthStart, cropWidthEnd, cropHeightStart, cropHeightEnd } =
    props;

  // The width and height of the area to crop
  const cropWidth = cropWidthEnd - cropWidthStart;
  const cropHeight = cropHeightEnd - cropHeightStart;

  return (
    <div
      style={{
        width: cropWidth,
        height: cropHeight,
        overflow: "hidden",
        position: "relative",
      }}>
      <Image
        src={dotImg}
        alt="Dots and Lines - Pattern"
        style={{
          width: "1156.01px",
          maxWidth: "auto",
          height: "489px",
          objectFit: "cover",
          objectPosition: `-${cropWidthStart}px -${cropHeightStart}px`,
        }}
      />
    </div>
  );
}

export default DotBg;
