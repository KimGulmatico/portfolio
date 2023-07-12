import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

interface BreakpointProps {
  xs?: any;
  sm?: any;
  md?: any;
  lg?: any;
  xl?: any;
  _2xl?: any;
}

export const useBreakpoint = ({ xs, sm, md, lg, xl, _2xl }: BreakpointProps) => {
  const [value, setValue] = useState<any>(null)

  const isXsMax = useMediaQuery("(max-width: 639px)");
  const isSmMax = useMediaQuery("(max-width: 767px)");
  const isMdMax = useMediaQuery("(max-width: 1023px)");
  const isLgMax = useMediaQuery("(max-width: 1278px)");
  const isXlMax = useMediaQuery("(max-width: 1534px)");
  const is2xlMax = useMediaQuery("(max-width: 9999px)");

  const getOffset = useCallback(() => {
    if(isXsMax) {
      return xs
    }
    if(isSmMax) {
      return sm || xs
    }
    if(isMdMax) {
      return md || sm || xs
    }
    if(isLgMax) {
      return lg || md || sm || xs
    }
    if(isXlMax) {
      return xl || lg || md || sm || xs
    }
    if(is2xlMax) {
      return _2xl || xl || lg || md || sm || xs
    }
  }, [isXsMax, isSmMax, isMdMax, isLgMax, isXlMax, is2xlMax, xs, sm, md, lg, xl, _2xl])

  useEffect(() => {
    window.addEventListener("resize", () => {
      setValue(getOffset())
    } );
    const val = getOffset()
    setValue(val);
    console.log(val, 'init')
  }, [getOffset]);

  return value;
}