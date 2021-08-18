select
"a"."firstName", "a"."lastName", "f"."title" as "film"
from "actors" as "a"
join "castMembers" using ("actorId")
join "films" as "f" using ("filmId")
where "title" = 'Jersey Sassy'
