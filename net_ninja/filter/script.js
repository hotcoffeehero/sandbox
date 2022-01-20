const restaurants = [
    {
        title: "Bill's",
        open_holidays: false
    }, 
    {
        title: "Shakey's",
        open_holidays: true
    },
    {
        title: "Teds's",
        open_holidays: false
    },
    {
        title: "McLaren's",
        open_holidays: true
    },
    {
        title: "Central Perk",
        open_holidays: false
    }, 
    {
        title: "Diagon Alley",
        open_holidays: true
    }
]

const open_on_holidays = restaurants.filter((restaurant)=>{
    return restaurant.open_holidays
})

console.log(open_on_holidays);