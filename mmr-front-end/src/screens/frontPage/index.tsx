import React, { ChangeEventHandler, useMemo, useState } from "react";
import { useMmr } from "./useMmr";

import Styled from './styles'
import { SummonerMmr } from "../../component/SummonerMmr";

const FrontPage = () => {
  const [inputSummonerName, setInputSummonerName] = useState('')
  const [summonerName, setSummonerName] = useState('')

  const { mmrData, isMmrLoading, refetchMmr, isErrorFetchingMmr, isMmrFetched } = useMmr(summonerName);

  const handleChange = (event: any) =>  {
    setInputSummonerName(event.target.value)
  }

  const handleClick = () => {
    setSummonerName(inputSummonerName)
    setInputSummonerName('')
    refetchMmr()
  }

  return (
  <Styled.Container>
    <h1>What's this summoner MMR ? </h1>
    <Styled.Input value={inputSummonerName} onChange={handleChange} />
    <button disabled={isMmrLoading} onClick={handleClick}>Get summoner MMR</button>
    {isMmrLoading ? <p>Fetching {summonerName} mmr </p> : null}


    {isMmrFetched ?  <SummonerMmr mmr={mmrData} summonerName={summonerName} /> : null}
  </Styled.Container>
  
  )
};

export default FrontPage;

