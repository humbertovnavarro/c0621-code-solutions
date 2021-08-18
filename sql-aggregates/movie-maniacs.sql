select "firstName", "lastName", sum(amount) as "total" from "payments"
join "customers" using ("customerId")
group by ("firstName", "lastName")
order by ("total") desc
