"use client"
import { ITopics } from "@/types";
import { ArcherContainer, ArcherElement } from 'react-archer';
import Topic from "./Topic";


function CircleLayout ({ topics , title , description }: { topics: ITopics[] ,title : string , description : string }) {
  const topicsLength = topics.length
  const numbers  = Array.from({ length: topicsLength }, (_, i) => i + 1);
  const isOdd = topicsLength % 2 !== 0;
  const middleIndex = Math.floor(topicsLength / 2);
  const colors = ["#2583a8","#F38749","#51d0d2"];
  const randomColorClasses = distributeColors(colors,topicsLength)
  
  return (
    <div className="w-full ">

      <ArcherContainer strokeColor="black" endMarker={false} strokeWidth={2}>
      <div className="relative flex w-full flex-col items-center justify-center h-full">
        
        {topicsLength < 6 ? 
          <CircleSegments className="absolute hidden md:block top-[150px]" segments={topicsLength} colors={randomColorClasses} size={250} /> : 
          <CircleSegments className="absolute hidden md:block top-[250px]" segments={topicsLength} colors={randomColorClasses} size={250} />
        }
        <div  className={`absolute hidden md:block ${topicsLength < 6 ? "top-[100px]" : "top-[200px]"} pointer-events-none`}>

          <div className="relative flex items-center justify-center w-[350px] h-[350px] rounded-full  ">
            <div className="hidden md:flex flex-col absolute  items-center justify-center ">
              <h2 className="text-Display-Semibold-16 text-center text-[#2583A8]">{title}</h2>
              <p className="text-Body-Regular-12 w-[60%] text-center text-Neutrals-900">{description}</p>
            </div>
            {/* Numbers on the border */}
            {numbers.map((number, index) => {
              // Calculate the angle for each number
              const angle = (360 / numbers.length) * index - 90 + (360 / topicsLength )/2  ; // Start from top (-90°)
              const radians = (angle * Math.PI) / 180;

              // Calculate position of the small circle
              const x = 120 * Math.cos(radians); // 120 is radius + small offset
              const y = 120 * Math.sin(radians);

                return (
                  <ArcherElement
                    id={`id-${index+1}`}
                    key={index}
                    relations={[
                      {
                        targetId: `component-${index+1}`,
                        targetAnchor: index === middleIndex || index === middleIndex + 1 || index === middleIndex - 1  ? 'top' : index < middleIndex ? 'right' : 'left',
                        sourceAnchor: index === middleIndex || index === middleIndex + 1 || index === middleIndex - 1 ? 'bottom' : index < middleIndex ? 'left' : 'right',
                        style: { strokeDasharray: '5,5' },
                      },
                    ]}
                  >
                    <div
                      className={`absolute flex items-center border-4 border-white justify-center w-8 h-8 rounded-full  text-white text-sm font-medium bg-[${randomColorClasses[index % randomColorClasses.length]}]`}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        backgroundColor : randomColorClasses[index % randomColorClasses.length]
                      }}
                    >
                      {number}
                    </div>
                  </ArcherElement>
                );
              })}
          </div>  
        </div>
        

        <div className={`h-full ${topicsLength <=4 ? "min-h-[600px]" : "min-h-[800px]"} w-full flex flex-col ${ !isOdd ? "md:gap-[300px]" : "gap-4"} items-start md:flex-row-reverse justify-between `}>
          <div className="w-full self-center flex flex-col items-center justify-center md:hidden">
            <h2 className="text-Display-Semibold-24 text-center text-Neutrals-950">{title}</h2>
            <p className="text-Body-Regular-14 w-[60%] text-center text-Neutrals-900">{description}</p>
          </div>
          <div className="flex flex-col flex-shrink self-start h-full w-full  items-end justify-between">
            {topics.map((topic, index) => (index < middleIndex &&
              <Topic key={index} number={index + 1} headColor={randomColorClasses[index % randomColorClasses.length]} topic={topic}  position="left"/>
            ))}
          </div>
          {isOdd && <div
              key={middleIndex}
              className={ "flex flex-col flex-shrink self-end items-center justify-center w-full h-full" }
            >
              <Topic key={middleIndex} number={middleIndex + 1} headColor={randomColorClasses[middleIndex % randomColorClasses.length]} topic={topics[middleIndex]} position="top"/>
            </div>}
          <div className="flex flex-col flex-shrink items-start md:items-end md:flex-col-reverse w-full h-full justify-between">
            {topics.map((topic, index) => ( (( isOdd && index > middleIndex ) || ((!isOdd && index >= middleIndex))) &&
              <Topic key={index} number={index + 1} headColor={randomColorClasses[index % randomColorClasses.length]} topic={topic}  position="right"/>
            ))}
          </div>
        </div>
      </div>
      </ArcherContainer>
      </div>
        
  );
};


interface CircleSegmentsProps {
  segments: number;
  colors: string[];
  size?: number;
  className ?: string ;
}

function CircleSegments({ segments ,colors, className ="", size = 200 }: CircleSegmentsProps) {
  const radius = size / 2;
  const strokeWidth = 25;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const segmentLength = circumference / segments;


  // Generate segments with equal sizes
  const segmentElements = Array.from({ length: segments }, (_, index) => {
    const startOffset = (index * segmentLength);
    // Use modulo to repeat colors if we have more segments than colors
    const color = colors[index % colors.length];
    // const rotation = (360 / segments) * index;
    return (
      <circle
        key={index}
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
        strokeDashoffset={-startOffset}
        style={{
          transformOrigin: 'center',
        }}
      />
    );
  });

  return (
    <svg width={size} height={size} className={`${className}`} style={{  transform: 'rotate(-90deg)' }}>
      {segmentElements}
    </svg>
  );
}

function distributeColors(colors: string[], numElements: number): string[] {
  if (colors.length === 0 || numElements === 0) return [];

  const result: string[] = [];
  let colorIndex = 0;

  for (let i = 0; i < numElements; i++) {
    let newColor = colors[colorIndex];

    while (i > 0 && result[i - 1] === newColor) {
      colorIndex = (colorIndex + 1) % colors.length;
      newColor = colors[colorIndex];
    }

    result.push(newColor);
    colorIndex = (colorIndex + 1) % colors.length;
  }

  if (numElements > 1 && result[0] === result[numElements - 1]) {
    const lastColorIndex = colors.indexOf(result[numElements - 1]);
    const newLastColor = colors[(lastColorIndex + 1) % colors.length];
    result[numElements - 1] = newLastColor;
  }

  return result;
}


export default CircleLayout;