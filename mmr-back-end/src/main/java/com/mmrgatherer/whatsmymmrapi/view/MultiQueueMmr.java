package com.mmrgatherer.whatsmymmrapi.view;


import com.fasterxml.jackson.annotation.JsonProperty;

public class MultiQueueMmr {
    private Mmr ranked;
    private Mmr normal;
    private Mmr aram;

    public MultiQueueMmr(@JsonProperty("ranked") Mmr ranked,
                         @JsonProperty("normal") Mmr normal,
                         @JsonProperty("ARAM") Mmr aram) {
        this.ranked = ranked;
        this.normal = normal;
        this.aram = aram;
    }

    public Mmr getRanked() {
        return ranked;
    }

    public Mmr getNormal() {
        return normal;
    }

    public Mmr getAram() {
        return aram;
    }
}
