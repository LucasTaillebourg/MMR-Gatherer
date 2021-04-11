package com.mmrgatherer.rest.resource;

import com.mmrgatherer.service.MmrService;
import com.mmrgatherer.whatsmymmrapi.view.MultiQueueMmr;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mmr")
@CrossOrigin
public class MmrResource {

    private final MmrService mmrService;

    @Autowired
    public MmrResource(final MmrService mmrService) {
        this.mmrService = mmrService;
    }

    @GetMapping()
    public MultiQueueMmr getMmr(@RequestParam("summoner-name") final String summonerName){
        return mmrService.getSummonerMmr(summonerName);
    }



}
