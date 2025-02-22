export const foods = [
    {
        "nr": "20001",
        "articleid": "35001",
        "articletype": "200",
        "name": "Pizza",
        "priceinclvat": "120.00",
        "category": "Main Course",
        "packaging": "Box",
        "producer": "Local Kitchen",
        "countryoforiginlandname": "Sweden"
    },
    {
        "nr": "20002",
        "articleid": "35002",
        "articletype": "200",
        "name": "Burger",
        "priceinclvat": "85.00",
        "category": "Main Course",
        "packaging": "Wrapper",
        "producer": "Local Grill",
        "countryoforiginlandname": "Sweden"
    }
];

export function getAllFoodNames() {
    return foods.map((food) => food.name);
}