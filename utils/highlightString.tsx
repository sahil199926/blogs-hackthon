export const highlightString = (
  text: string,
  keywords: string[], // Accept multiple keywords
  symbol: string
) => {
  const regex = new RegExp(`(\\d{1,10}(?:,\\d{10})*\\${symbol}\\s*(${keywords.join("|")}))`, "gi");

  const ret : (string | JSX.Element)[] = text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <span key={index} className="font-bold text-xl text-Neutrals-950">
        {part}
      </span>
    ) : (
      part
    ) 
  );
  const result = [ret[0]];
  for(let i = 1 ; i < ret.length ; i++){
    if(ret[i-1] && typeof ret[i-1] !== "string"){
      if( (ret[i-1] as JSX.Element)?.props?.children?.includes(ret[i]) ){
        continue
      }
    }
    result.push(ret[i]);
  }
  return result
};