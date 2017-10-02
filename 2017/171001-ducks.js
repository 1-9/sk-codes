//     Task description

//   In this task we will consider some ducks. Each duck belongs to a particular species and lives in one of several ponds. Each pond is described by its temperature and location city. Each species is described by two values: its thermal preferences and its temperature limit. Depending on their thermal preferences, ducks from a given species may prefer temperatures not higher or not lower than the temperature limit. A duck of a certain species will only feel comfortable if the temperature in the pond fulfills its thermal preferences (i.e. it is above/below or equal to the species' limit temperature).

// You are given three tables: species, ponds and ducks, with following structure:

//   create table species (
//       id integer not null,
//       temp_preferences varchar(1) check(temp_preferences in ('+', '-')),
//       temp_limit integer not null,
//       unique(id)
//   );

//   create table ponds (
//       id integer not null,
//       temperature integer not null,
//       city varchar(10),
//       unique(id)
//   );

//   create table ducks (
//       id integer not null,
//       name varchar(10),
//       species_id integer not null,
//       pond_id integer not null,
//       unique(id)
//   );
// The column temp_preferences in table species determines whether temp_limit is the minimum ("+") or maximum ("-") acceptable temperature for the given species.

// For each pond we would like to count the ducks which live in it and feel comfortable.

// Write an SQL query that returns a table consisting of two columns: pond_id, happy_ducks, ordered by pond_id. Every pond should appear in this table.

// For example, for the following data:

//   species:

//    id      | temp_preferences | temp_limit
//   ---------+------------------+------------
//    30      | +                | 15
//    40      | -                | 20
//    50      | -                | 31

//   ponds:

//    id       | temperature | city
//   ----------+-------------+---------
//    1        | 13          | Oregon
//    2        | 31          | Oregano

//   ducks:

//    id       | name     | species_id | pond_id
//   ----------+----------+------------+---------
//    1        | Martin   | 50         | 2
//    3        | Bruno    | 30         | 1
//    9        | Ignacio  | 40         | 2
//    27       | Hedwig   | 40         | 1
//    81       | Marina   | 30         | 2
// your query should return:

//    pond_id | happy_ducks
//   ---------+-------------
//    1       | 1
//    2       | 2
// For the following data:

//   species:

//    id      | temp_preferences | temp_limit
//   ---------+------------------+------------
//    1       | +                | 10

//   ponds:

//    id       | temperature | city
//   ----------+-------------+-----------
//    10       | 5           | Bialystok

//   ducks:

//    id       | name     | species_id | pond_id
//   ----------+----------+------------+---------
//    10       | Lotto    | 1          | 10
// your query should return:

//    pond_id | happy_ducks
//   ---------+-------------
//    10      | 0
// Copyright 2009–2017 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
// Custom test casesformat: "insert into species values (30, '+'…
// 0/10

// Solution

// 1
// 2
