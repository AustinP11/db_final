package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Team;
import com.example.springtemplate.models.User;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface TeamRepository
        extends CrudRepository<Team, Integer> {
  @Query(value = "SELECT * FROM team",
      nativeQuery = true)
  public List<Team> findAllTeam();
  @Query(value = "SELECT * FROM team WHERE id=:teamId",
      nativeQuery = true)
  public Team findTeamById(@Param("teamId") Integer id);
}
