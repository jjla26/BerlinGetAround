const Tickets = [
    {
        id: 1,
        name:"Single ticket Berlin AB",
        area_id:1,
        price: 2.9,
        reduceFare: 1.8,
        category_id: 2,
        type_id: 1,
        period_id: null,
        option_id: 1,
        detail_id: 1,
    },
    {
        id: 2,
        name:"Single ticket Berlin BC",
        area_id:2,
        price: 3.3,
        reduceFare: 2.3,
        category_id: 2,
        type_id: 1,
        period_id: null,
        option_id: 1,
        detail_id: 1,
    },
    {
        id: 3,
        name:"Single ticket Berlin ABC",
        area_id:3,
        price: 3.6,
        reduceFare: 2.6,
        category_id: 2,
        type_id: 1,
        period_id: null,
        option_id: 1,
        detail_id: 1,
    },
    {
        id: 4,
        name:"4-trip ticket AB",
        area_id:1,
        price: 9.0,
        reduceFare: 5.6,
        category_id: 2,
        type_id: 2,
        period_id: null,
        option_id: 1,
        detail_id: 2
    },
    {
        id: 5,
        name:"4-trip ticket BC",
        area_id:2,
        price: 12.0,
        reduceFare: 8.4,
        category_id: 2,
        type_id: 2,
        period_id: null,
        option_id: 1,
        detail_id: 2
    },
    {
        id: 6,
        name:"4-trip ticket ABC",
        area_id:3,
        price: 13.20,
        reduceFare: 9.6,
        category_id: 2,
        type_id: 3,
        period_id: null,
        option_id: 1,
        detail_id: 2,
    },
    {
        id: 7,
        name:"Day ticket Berlin AB",
        area_id:1,
        price: 8.6,
        reduceFare: 5.5,
        category_id: 2,
        type_id: 3,
        period_id: 2,
        option_id: 2,
        detail_id: 3
    },
    {
        id: 8,
        name:"Day ticket Berlin BC",
        area_id:2,
        price: 9.0,
        reduceFare: 5.8,
        category_id: 2,
        type_id: 3,
        period_id: 2,
        option_id: 2,
        detail_id: 3
    },
    {
        id: 9,
        name:"Day ticket Berlin ABC",
        area_id:3,
        price: 9.6,
        reduceFare: 6.0,
        category_id: 2,
        type_id: 3,
        period_id: 2,
        option_id: 2,
        detail_id: 3
    },
    {
        id: 10,
        name:"Small group day ticket Berlin AB",
        area_id:1,
        price: 23.5,
        reduceFare: null,
        category_id: 2,
        type_id: 4,
        period_id: 2,
        option_id: 2,
        detail_id: 4
    },
    {
        id: 11,
        name:"Small group day ticket Berlin BC",
        area_id:2,
        price: 24.3,
        reduceFare: null,
        category_id: 2,
        type_id: 4,
        period_id: 2,
        option_id: 2,
        detail_id: 4
    },
    {
        id: 12,
        name:"Small group day ticket Berlin ABC",
        area_id:3,
        price: 24.9,
        reduceFare:null,
        category_id: 2,
        type_id: 4,
        period_id: 2,
        option_id: 2,
        detail_id: 4
    },
    {
        id: 13,
        name:"7-day ticket VBB eco-ticket Berlin AB",
        area_id:1,
        price: 34.0,
        reduceFare:null,
        category_id: 2,
        type_id: null,
        period_id: 3,
        option_id: 2,
        detail_id: null
    },
    {
        id: 14,
        name:"7-day ticket VBB eco-ticket Berlin BC",
        area_id:2,
        price: 35.5,
        reduceFare:null,
        category_id: 2,
        type_id: null,
        period_id: 3,
        option_id: 2,
        detail_id: null
    },
    {
        id: 15,
        name:"7-day ticket VBB eco-ticket Berlin ABC",
        area_id:3,
        price: 41.0,
        reduceFare:null,
        category_id: 2,
        type_id: null,
        period_id: 3,
        option_id: 2,
        detail_id: null
    },
    {
        id: 16,
        name:"VBB eco-ticket Berlin AB",
        area_id:1,
        price: 84.0,
        reduceFare:null,
        category_id: 2,
        type_id: null,
        period_id: 4,
        option_id: 2,
        detail_id: 5
    },
    {
        id: 17,
        name:"VBB eco-ticket Berlin BC",
        area_id:2,
        price: 86.0,
        reduceFare:null,
        category_id: 2,
        type_id: null,
        period_id: 4,
        option_id: 2,
        detail_id: 5
    },
    {
        id: 18,
        name:"VBB eco-ticket Berlin ABC",
        area_id:3,
        price: 104.0,
        reduceFare:null,
        category_id: 2,
        type_id: null,
        period_id: 4,
        option_id: 2,
        detail_id: 5
    },
    {
        id: 19,
        name:"10 o’clock ticket Berlin AB",
        area_id:1,
        price: 61.0,
        reduceFare:null,
        category_id: 2,
        type_id: 5,
        period_id: 4,
        option_id: 2,
        detail_id: 6
    },
    {
        id: 20,
        name:"10 o’clock ticket Berlin BC",
        area_id:2,
        price: 63.0,
        reduceFare:null,
        category_id: 2,
        type_id: 5,
        period_id: 4,
        option_id: 2,
        detail_id: 6
    },
    {
        id: 21,
        name:"10 o’clock ticket Berlin ABC",
        area_id:3,
        price: 76.0,
        reduceFare:null,
        category_id: 2,
        type_id: 5,
        period_id: 4,
        option_id: 2,
        detail_id: 6
    },
    {
        id: 22,
        name:"CityTourCard 2 days AB",
        area_id:1,
        price: 19.9,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 5,
        option_id: 2,
        detail_id: 7
    },
    {
        id: 23,
        name:"CityTourCard 2 days ABC",
        area_id:3,
        price: 22.9,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 5,
        option_id: 2,
        detail_id: 7
    },
    {
        id: 24,
        name:"CityTourCard 3 days AB",
        area_id:1,
        price: 29.9,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 6,
        option_id: 2,
        detail_id: 7
    },
    {
        id: 25,
        name:"CityTourCard 3 days ABC",
        area_id:3,
        price: 33.9,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 6,
        option_id: 2,
        detail_id: 7
    },
    {
        id: 26,
        name:"CityTourCard 4 days AB",
        area_id:1,
        price: 36.9,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 7,
        option_id: 2,
        detail_id: 7
    },
    {
        id: 27,
        name:"CityTourCard 4 days ABC",
        area_id:3,
        price: 41.9,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 7,
        option_id: 2,
        detail_id: 7
    },
    {
        id: 28,
        name:"CityTourCard 5 days AB",
        area_id:1,
        price: 42.9,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 8,
        option_id: 2,
        detail_id: 7
    },
    {
        id: 29,
        name:"CityTourCard 5 days ABC",
        area_id:3,
        price: 46.9,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 8,
        option_id: 2,
        detail_id: 7
    },
    {
        id: 30,
        name:"CityTourCard 6 days ABC",
        area_id:1,
        price: 44.9,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 9,
        option_id: 2,
        detail_id: 7
    },
    {
        id: 31,
        name:"CityTourCard 6 days ABC",
        area_id:3,
        price: 47.9,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 9,
        option_id: 2,
        detail_id: 7
    },
    {
        id: 32,
        name:"WelcomeCard 48 hours AB",
        area_id:1,
        price: 23.0,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 5,
        option_id: 2,
        detail_id: 8
    },
    {
        id: 33,
        name:"WelcomeCard 48 hours ABC",
        area_id:3,
        price: 28.0,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 5,
        option_id: 2,
        detail_id: 8
    },
    {
        id: 34,
        name:"WelcomeCard 72 hours AB",
        area_id:1,
        price: 33.0,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 6,
        option_id: 2,
        detail_id: 8
    },
    {
        id: 35,
        name:"WelcomeCard 72 hours ABC",
        area_id:3,
        price: 38.0,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 6,
        option_id: 2,
        detail_id: 8
    },
    {
        id: 36,
        name:"WelcomeCard 4 days AB",
        area_id:1,
        price: 40.0,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 7,
        option_id: 2,
        detail_id: 8
    },
    {
        id: 37,
        name:"WelcomeCard 4 days ABC",
        area_id:3,
        price: 45.0,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 7,
        option_id: 2,
        detail_id: 8
    },
    {
        id: 38,
        name:"WelcomeCard 5 days AB",
        area_id:1,
        price: 46.0,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 8,
        option_id: 2,
        detail_id: 8
    },
    {
        id: 39,
        name:"WelcomeCard 5 days ABC",
        area_id:3,
        price: 49.0,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 8,
        option_id: 2,
        detail_id: 8
    },
    {
        id: 40,
        name:"WelcomeCard 6 days AB",
        area_id:1,
        price: 49.0,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 9,
        option_id: 2,
        detail_id: 8
    },
    {
        id: 41,
        name:"WelcomeCard 6 days ABC",
        area_id:3,
        price: 42.0,
        reduceFare:null,
        category_id: 1,
        type_id: null,
        period_id: 9,
        option_id: 2,
        detail_id: 8
    },
    
]

export default Tickets 