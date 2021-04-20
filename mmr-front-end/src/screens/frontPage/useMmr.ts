import { useQuery } from "react-query";
import { mmrGathererApi } from "../../services";

export const useMmr = (userName: string) => {
  const query = async () => {
    if (userName === null) return;
    const request = await mmrGathererApi.getMmrUsingGET(userName);
    return request();
  };

  const { isLoading, data } = useQuery("getMmr", query, {
    select: (result) => result?.data,
  });

  return { isMmrLoading: isLoading, mmrData: data };
};
