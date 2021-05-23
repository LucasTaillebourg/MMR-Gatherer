import React, { ChangeEventHandler, useMemo, useState } from "react";
import { useMmr } from "./useMmr";

import Styled from './styles'

const FrontPage = () => {
  const [summonerName, setSummonerName] = useState('')

  const { mmrData, isMmrLoading, refetchMmr, isErrorFetchingMmr } = useMmr(summonerName);

  const handleChange = (event: any) =>  {
    setSummonerName(event.target.value)
  }

  const handleClick = () => {
    refetchMmr()
  }


  const avg = useMemo(() => {
    return mmrData?.normal?.avg;
  }, [mmrData]);

  return (
  <Styled.Container>
    <h1>What's this summoner MMR ? </h1>
    <Styled.Input value={summonerName} onChange={handleChange} />
    <button onClick={handleClick}>Get summoner MMR</button>
    {isMmrLoading ? <p>Fetching {summonerName} Mmr</p> : <div>{avg}</div>}
  </Styled.Container>
  
  )
};

export default FrontPage;

