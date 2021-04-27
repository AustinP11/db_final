Database Final Project 
Group 13
Austin Parente 

UML Diagram: https://lucid.app/lucidchart/invitations/accept/inv_72474062-898d-4712-b423-1a19394f4cdc?viewport_loc=130%2C-21%2C2328%2C1073%2CHWEp-vi-RSFO

Description: For this project I decided to go with a sports route. So, in this case a user can have a favorite team, and then those teams can have players on them. 
User: The user has a first and last name, as well as a username and apssword, so that they could access their account if it existed. They then have an email and a date of bith 
so who they are is well documented
Team: Each team has the name of the team, the sport that it is, which is a choice from the enumeration (as shown in the UML diagram), the record of that team, and the last day
that they played in a game, and a foreign key to the users
Sport: This is the portable enumeration that the sport category of the team block uses, they must choose one of these sports, as they are what the databasse can handle
Player: A player has their first and last name, and due to the variety of the sports, I simplified everything down to a points field for each player, as well as a variable 
for whether or not they are currently active, and a foreign key to the team they are on, or the team they ended on
User-Team: Each user can have many different favorite teams, and the teams field has a foreign key that realtes to the id of the user class for which that 
team is their favorite
Team-Player: Each team can have many different players, both that are active or inactive, and the player field has a foreign key to the id of the team that they are on
Code: For the code I created a list of all of the different either users, teams, or players, along with the ability to update, delete, or create new ones of those using the 
interface provided. 
