import {useRoute} from "vue-router";

const dishes = [
    {
        id: 0,
        label: 'Тыквенный крем-суп',
        time: '40-50 минут',
        img: 'pumpkin_soup.png',
        category: 'первое',
        reviews: ['Рецепт просто супер! Получилось очень вкусно, вся семья в восторге. Спасибо!'],
    },
    { id: 1, label: 'Суп солянка', time: '1.5-2 часа', img: 'solyanka.png', category: 'первое', reviews: ['Рецепт хуета'], },
    { id: 2, label: 'Грибной бульон', time: '1-1.5 часа', img: 'mushroom.png', category: 'первое', reviews: [] },
    { id: 3, label: 'Куриный бульон', time: '1.5-2 часа', img: 'chicken.png', category: 'первое', reviews: [] },
    { id: 4, label: 'Окрошка на кефире', time: '20-30 минут', img: 'okroshka.png', category: 'первое', reviews: [] },
    { id: 5, label: 'Борщ с говядиной', time: '2-2.5 часа', img: 'borsch.png', category: 'первое', reviews: [] },
    { id: 6, label: 'Карбонара', time: '20-30 минут', img: 'carbonara.png', category: 'второе', reviews: [] },
    { id: 7, label: 'Пельмени', time: '1.5-2 часа', img: 'dumplings.png', category: 'второе', reviews: [] },
    { id: 8, label: 'Мясо по-франзцуски', time: '1.5-2 часа', img: 'french_meat.png', category: 'второе', reviews: [] },
    { id: 9, label: 'Говяжий стейк', time: '5-15 минут', img: 'steak.png', category: 'второе', reviews: [] },
    { id: 10, label: 'Лазанья', time: '1.5-2 часа', img: 'lasagna.png', category: 'второе', reviews: [] },
    { id: 11, label: 'Блинчики с мясом', time: '1-1.5 часа', img: 'meat_pancakes.png', category: 'второе', reviews: [] },
    { id: 12, label: 'Кростини', time: '15-20 минут', img: 'crostini.png', category: 'закуски', reviews: [] },
    {
        id: 13,
        label: 'Шарики из крабовых палочек в сырной панировке',
        time: '30-40 минут',
        img: 'crab.png',
        category: 'закуски',
        reviews: [],
    },
    { id: 14, label: 'Свекольные пхали', time: '1-1.5 часа', img: 'phali.png', category: 'закуски', reviews: [] },
    {
        id: 15,
        label: 'Рулет из лаваша с красной рыбой и латуком',
        time: '20-30 минут',
        img: 'roll.png',
        category: 'закуски',
        reviews: [],
    },
    { id: 16, label: 'Овощные канапе с сыром', time: '20-30 минут', img: 'canape.png', category: 'закуски', reviews: [] },
    { id: 17, label: 'Гуакамоле с авокадо', time: '10-15 минут', img: 'guacamole.png', category: 'закуски', reviews: [] },
    { id: 18, label: 'Пахлава', time: '2-3 часа', img: 'pahlava.png', category: 'десерты', reviews: [] },
    { id: 19, label: 'Чизкейк', time: '4-5 часов', img: 'cheesecake.png', category: 'десерты', reviews: [] },
    {
        id: 20,
        label: 'Ванильное мороженое',
        time: '4–6 часов',
        img: 'vanile_icecream.png',
        category: 'десерты',
        reviews: [],
    },
    { id: 21, label: 'Круассаны с шоколадом', time: '4-5 часов', img: 'croissant.png', category: 'десерты', reviews: [] },
    { id: 22, label: 'Пирог с вишней', time: '1,5–2 часа', img: 'chery_pie.png', category: 'десерты', reviews: [] },
    { id: 23, label: 'Капкейки', time: 'около 1 часа', img: 'cupcake.png', category: 'десерты', reviews: [] },
]


export function getCurrentCategoryDishes() {
    return dishes.filter((dish) => dish.category === useRoute().params.label)
}

export function getCurrentDishById(dishId) {
    return dishes.find((dish) => dish.id === dishId)

}