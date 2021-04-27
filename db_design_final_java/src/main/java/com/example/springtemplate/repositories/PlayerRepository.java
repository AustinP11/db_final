package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.User;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface PlayerRepository
        extends CrudRepository<Player, Integer> {
  @Query(value = "SELECT * FROM player",
      nativeQuery = true)
  public List<Player> findAllPlayers();
  @Query(value = "SELECT * FROM player WHERE id=:playerId",
      nativeQuery = true)
  public Player findPlayerById(@Param("playerId") Integer id);
}
