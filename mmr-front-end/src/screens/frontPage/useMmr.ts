import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { mmrGathererApi } from "../../services";

export const useMmr = (userName: string) => {
  const query = async () => {
    if (userName === null) return;
    const request = await mmrGathererApi.getMmrUsingGET(userName);
    return request();
  };

  const { isLoading, data, refetch, isError, isFetched } = useQuery("getMmr", query, {
    select: (result) => result?.data,
    enabled: false,
    onError: () => toast.error("Can't fetch " + userName + " mmr")
  });

  return { isMmrLoading: isLoading, mmrData: data, refetchMmr: refetch, isErrorFetchingMmr: isError, isMmrFetched: isFetched };
};
