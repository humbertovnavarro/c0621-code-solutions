select "c"."name" as "country" , count(*) as "cityCount" from "cities"
join "countries" as "c" using ("countryId")
group by "c"."name";
