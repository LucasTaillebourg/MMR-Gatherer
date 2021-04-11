package com.mmrgatherer.service;

import com.mmrgatherer.whatsmymmrapi.WhatsMyMmrApi;
import com.mmrgatherer.whatsmymmrapi.view.MultiQueueMmr;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MmrService {

    private final WhatsMyMmrApi whatsMyMmrApi;

    @Autowired
    public MmrService(final WhatsMyMmrApi whatsMyMmrApi) {
        this.whatsMyMmrApi = whatsMyMmrApi;
    }

    public MultiQueueMmr getSummonerMmr(String summonerName){
        return this.whatsMyMmrApi.getSummonerMmr((summonerName));
    }

}
