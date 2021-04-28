package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.sql.Date;
import java.util.List;
import javax.persistence.*;

@Entity
@Table(name="team")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Double record;
    private String sport;
    private Date lastGame;
    @Column(name = "user_id")
    private Integer userId;


    public Double getRecord() {
        return record;
    }

    public void setRecord(Double record) {
        this.record = record;
    }

    public String getSport() {
        return sport;
    }

    public void setSport(String sport) {
        this.sport = sport;
    }

    public Date getLastGame() {
        return lastGame;
    }

    public void setLastGame(Date lastGame) {
        this.lastGame = lastGame;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getUserId() { return userId; }

    public void setUserId(int userId) { this.userId = userId; }

}
