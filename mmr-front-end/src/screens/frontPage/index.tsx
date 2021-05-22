import React, { useMemo } from "react";
import { useMmr } from "./useMmr";

const FrontPage = () => {
  const { mmrData, isMmrLoading } = useMmr("Settrak");

  const avg = useMemo(() => {
    return mmrData?.normal?.avg;
  }, [mmrData]);

  return <div>{!isMmrLoading && <div>{avg}</div>}</div>;
};

export default FrontPage;

