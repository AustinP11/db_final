package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.sql.Date;
import java.util.List;
import javax.persistence.*;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private Date dateOfBirth;

//    @OneToMany(mappedBy = "user")
//    @JsonIgnore
//    private List<Team> team;
//
//    public List<Team> getTeams() {
//        return team;
//    }
//
//    public void setTeams(List<Team> team) { this.team = team; }

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public Date getBirth() { return dateOfBirth; }
    public void setBirth(Date dateOfBirth) { this.dateOfBirth = dateOfBirth; }

//    public User(String username, String password, String first_name, String last_name, String email, String birth) {
//        this.username = username;
//        this.password = password;
//        this.firstName = first_name;
//        this.lastName = last_name;
//        this.email = email;
//        this.dateOfBirth = birth;
//    }
//
//    public User() {}
}
