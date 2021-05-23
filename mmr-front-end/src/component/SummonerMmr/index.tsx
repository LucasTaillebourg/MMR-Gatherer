import React, { ChangeEventHandler, useMemo, useState } from "react";
import { MultiQueueMmr } from "../../services/mmrGatherer";

import Styled from './styles'

interface Props {
    mmr?: MultiQueueMmr
    summonerName?: string
}

export const SummonerMmr = ({mmr, summonerName}: Props) => {

  return (
  <Styled.Container>
    <h2>{summonerName} MMR : </h2>
    <p>Normal MMR : {mmr?.normal?.avg}</p>
    <p>Ranked MMR : {mmr?.ranked?.avg}</p>
    <p>ARAM MMR : {mmr?.ARAM?.avg}</p>
  </Styled.Container>
  
  )
};

