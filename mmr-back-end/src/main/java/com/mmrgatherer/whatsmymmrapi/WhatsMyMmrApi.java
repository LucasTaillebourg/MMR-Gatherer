package com.mmrgatherer.whatsmymmrapi;

import com.mmrgatherer.whatsmymmrapi.view.MultiQueueMmr;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(
        name="whatsMyMmrApi",
        url = "https://euw.whatismymmr.com/"
)
public interface WhatsMyMmrApi {

    @GetMapping("/api/v1/summoner?name={summonerName}")
    MultiQueueMmr getSummonerMmr(@PathVariable("summonerName") String summonerName);

}
