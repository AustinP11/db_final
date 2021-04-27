package com.example.springtemplate.daos;

import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.Team;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.TeamRepository;
import com.example.springtemplate.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TeamOrmDao {
    @Autowired
    TeamRepository teamRepository;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/api/team")
    public Team createTeam(@RequestBody Team team) {
        return teamRepository.save(team);
    }
    
    @GetMapping("/api/team")
    public List<Team> findAllTeams() {
        return (List<Team>) teamRepository.findAll();
    }
    
    @GetMapping("/api/team/{teamId}")
    public Team findTeamById(
            @PathVariable("teamId") Integer id) {
        return teamRepository.findById(id).get();
    }


    @DeleteMapping("/api/team/{teamId}")
    public void deleteTeam(
            @PathVariable("teamId") Integer id) {
        teamRepository.deleteById(id);
    }

    @PostMapping("/api/users/{userId}/team")
    public Team createTeamForUser(
        @PathVariable("userId") Integer uid,
        @RequestBody Team team) {
        team = teamRepository.save(team);
        //User user = userRepository.findById(uid).get();
        team.setUserId(uid);
        return teamRepository.save(team);
    }

    @PutMapping("/api/team/{teamId}")
    public Team updateTeam(
        @PathVariable("teamId") Integer id,
        @RequestBody() Team newTeam) {
        Team team = this.findTeamById(id);
        team.setName(newTeam.getName());
        team.setRecord(newTeam.getRecord());
        team.setSport(newTeam.getSport());
        team.setLastGame(newTeam.getLastGame());
        team.setUserId(newTeam.getUserId());
        return teamRepository.save(team);
    }
}