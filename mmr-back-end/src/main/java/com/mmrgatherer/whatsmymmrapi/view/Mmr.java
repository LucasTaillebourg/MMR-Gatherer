package com.mmrgatherer.whatsmymmrapi.view;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class Mmr {
    private final int average;
    private final int error;
    private final String warn;
    private final int timestamp;
    private final List<Mmr> historical;

    public Mmr(@JsonProperty("avg") int average,
               @JsonProperty("err") int error,
               @JsonProperty("warn") String warn,
               @JsonProperty("timestamp") int timestamp,
               @JsonProperty("historical") List<Mmr> historical) {
        this.average = average;
        this.error = error;
        this.warn = warn;
        this.timestamp = timestamp;
        this.historical = historical;
    }

    public int getAverage() {
        return average;
    }

    public int getError() {
        return error;
    }

    public String getWarn() {
        return warn;
    }

    public int getTimestamp() {
        return timestamp;
    }

    public List<Mmr> getHistorical() {
        return historical;
    }
}
