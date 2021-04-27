package com.example.springtemplate.daos;

import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.Team;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.PlayerRepository;
import com.example.springtemplate.repositories.TeamRepository;
import com.example.springtemplate.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PlayerOrmDao {
    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    TeamRepository teamRepository;

    @PostMapping("/api/player")
    public Player createPlayer(@RequestBody Player player) {
        return playerRepository.save(player);
    }

    @GetMapping("/api/player")
    public List<Player> findAllPlayers() {
        return (List<Player>) playerRepository.findAll();
    }

    @GetMapping("/api/player/{playerId}")
    public Player findPlayerById(
        @PathVariable("playerId") Integer id) {
        return playerRepository.findById(id).get();
    }


    @DeleteMapping("/api/player/{playerId}")
    public void deletePlayer(
        @PathVariable("playerId") Integer id) {
        playerRepository.deleteById(id);
    }

    @PostMapping("/api/team/{teamId}/player")
    public Player createPlayerForTeam(
        @PathVariable("teamId") Integer tid,
        @RequestBody Player player) {
        player = playerRepository.save(player);
        //User user = userRepository.findById(uid).get();
        player.setTeamId(tid);
        return playerRepository.save(player);
    }

    @PutMapping("/api/player/{playerId}")
    public Player updatePlayer(
        @PathVariable("playerId") Integer id,
        @RequestBody() Player newPlayer) {
        Player player = this.findPlayerById(id);
        player.setFirstName(newPlayer.getFirstname());
        player.setLastName(newPlayer.getLastname());
        player.setPoints(newPlayer.getPoints());
        player.setActive(newPlayer.getActive());
        player.setTeamId(newPlayer.getTeamId());
        return playerRepository.save(player);
    }
}