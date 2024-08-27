export const products = [
    { id: 0, title: "The Housemaid", author: "Freida McFadden", price: 6.93, img: "https://m.media-amazon.com/images/I/81AHTyq2wVL._SY425_.jpg" },
    { id: 1, title: "The Silent Patient", author: "Alex Michaelides", price: 14.35, img: "https://m.media-amazon.com/images/I/91BbLCJOruL._SY425_.jpg" },
    { id: 2, title: "True Intent", author: "Michael Stagg", price: 14.99, img: "https://m.media-amazon.com/images/I/91huSGVUUVL._SY466_.jpg" },
    { id: 3, title: "Only The Guilty", author: "Dan Decker", price: 19.99, img: "https://m.media-amazon.com/images/I/81G7cbmIrVL._SY466_.jpg" },
    { id: 4, title: "The First Harm", author: " Steven Piskula", price: 19.99, img: "https://m.media-amazon.com/images/I/41ZAYVjdUVL._SY445_SX342_.jpg" },
    { id: 5, title: "The Doctor's Secret", author: "Cole Baxter", price: 12.99, img: "https://m.media-amazon.com/images/I/71zqlfq4ahL._SY425_.jpg" },
    { id: 6, title: "The Husband Killer", author: "Sonya Bateman", price: 8.99, img: "https://m.media-amazon.com/images/I/91GEFFI2rPL._SY466_.jpg" },
    { id: 7, title: "The Newlyweds", author: "Kaelin Wennerberg", price: 10.99, img: "https://m.media-amazon.com/images/I/91zdBorDsJL._SY466_.jpg" },
    { id: 8, title: "I Know Your Secret", author: " J.M. O'Rourke", price: 21.99, img: "https://m.media-amazon.com/images/I/712c+FHQdhL._SY425_.jpg" },
]
export const basketItems = []

export const productsReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            const findElement = products.find(elm => elm.id === action.payload)
            const isInBasket = state.find(elm => elm.id === action.payload)
            if (!isInBasket) {
                return [...state, { ...findElement, quantity: 1 }]
            } else {
                return state.map(elm => {
                    return elm.id === action.payload ? { ...elm, quantity: elm.quantity + 1 } : elm
                })
            }
        case "ADD_QUANTITY":
            return state.map(elm => {
                return elm.id === action.payload ? { ...elm, quantity: elm.quantity + 1 } : elm
            })
        case "MINUS_QUANTITY":
            const findIndex = state.findIndex(elm => elm.id == action.payload)
            if (state[findIndex].quantity > 1) {
                return state.map((elm, i) => {
                    return i === findIndex ? { ...elm, quantity: elm.quantity - 1 } : elm
                })
            } else {
                return state.filter(elm => elm.id !== action.payload)
            }
        case "DELETE":
            return state.filter(elm => elm.id !== action.payload)
        default:
            return [...state]
    }
}