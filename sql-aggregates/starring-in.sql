select "c"."name" as "category", count(*) from "films"
join "filmCategory" using ("filmId")
join "categories" as "c" using("categoryId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "firstName" = 'Lisa' and "lastName" = 'Monroe'
group by "c"."name";
