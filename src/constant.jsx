export const PRODUCTS = [
    {   
        id: 3,
        title: 'White T-shirt',
        color: 'white',
        description: 'Classic white t-shirt',
        imageSource: './productPhotos/pexels-photo-9558601.jpg', //link or name in public folder
        price: '39,99',
        size: ['XS', 'S', 'M', 'L', 'XL','XXL'],
        reviews: [
            {
                author: 'doublekcrystals',
                review: 'I love it!'
            }
        ],
        quantity: 0,
        category: 'Tops'
    },
    {   
        id: 2,
        title: 'White T-shirt',
        color: 'white',
        description: 'Classic white t-shirt',
        imageSource: './productPhotos/pexels-photo-9558601.jpg', //link or name in public folder
        price: '39,99',
        size: ['XS', 'S', 'M', 'L', 'XL','XXL'],
        reviews: [
            {
                author: 'doublekcrystals',
                review: 'I love it!'
            }
        ],
        quantity: 0,
        category: 'Tops'
    },
    {
        id: 1,
        title: 'Red T-shirt',
        color: 'red',
        description: 'Classic red t-shirt',
        imageSource: '', //link or name in public folder
        price: '40',
        size: ['XS', 'S', 'M', 'L', 'XL','XXL'],
        reviews: [
            {
                author: 'cathy096',
                review: "It arrived ripped apart, I don't recommend buying from this store"
            }
        ],
        quantity: 0,
        category: 'Tops'
    },
    {
        id: 0,
        title: 'Corduroy trousers',
        color: 'white',
        description: 'Casual trousers, plain seam',
        imageSource: '', //link or name in public folder
        price: '59,99',
        size: ['XS', 'S', 'M', 'L', 'XL','XXL'],
        reviews: [
            {
                author: 'cathy097',
                review: "Nice"
            }
        ],
        quantity: 0,
        category: 'Bottoms'
    }
] 

export const LANGUAGE = {
    //NAVBAR
    shop: ['Shop', 'Sklep'],
    collections: ['Collections', "Kolekcje"],
    newin: ['New in', 'Nowo??ci'],
    cart: ['Cart', 'Koszyk'],
    search: ['Search', 'Szukaj'],
    wishlist: ['Wishlist', 'Ulubione'],
    login:['Log in', 'Zaloguj'],
    //FOOTER
    help: ['Help', 'Pomoc'],
    about: ['About', 'O nas'],
    contact: ['Contact', 'Kontakt'],
    sale: ['Sale', 'Wyprzeda??'],
    company: ['Company', 'O marce'],
    acceptQuestion: ['Do you want to be up to date with our offer and current promotions? Subscribe to the newsletter.', 'Chcesz by?? na bie????co z nasz?? ofert?? i aktualnymi promocjami? Zapisz si?? do naszego newslettera.'],
    iAccept:['I accept the newsletter conditions.', 'Akceptuj?? warunki newslettera'],
    save:['Save', 'Zapisz'],
    career:['Career', 'Praca'],
    address:['Address', 'Adres'],
    delivery:['Delivery', 'Dostawa'],
    sizeGuide:['Size guide', 'Przewodnik po rozmiarach'],
    privacyPolicy:['Privacy policy', 'Polityka prywatno??ci'],
    termsAndConditions:['Terms and conditions', 'Regulamin'],
    homepage:['Home', 'Strona g????wna'],
    //PRODUCT
    size:['Size', 'Rozmiar'],
    color:['Color', 'Kolor'],
    price:['Price', 'Cena'],
    sort:['Sort', 'Sortuj'],
    freedelivery:['Free delivery', 'Darmowa dostawa'],
    freereturn:['Free return', 'Darmowy zwrot'],
    details:['See details', 'Szczeg????y'],
    youmight:['You might also like', 'Mo??e ci si?? tak??e spodoba??'],
    reviews:['Reviews', 'Opinie'],
    recentlyviewed:['Recently viewed', 'Ostatnio ogl??dane'],
    addtocart:['Add to cart', 'Dodaj do koszyka'],
    //COLORS
    white:['white', 'bia??y'],
    black:['black', 'czarny'],
    red:['red', 'czerwony'],
    green:['green', 'zielony'],
    blue:['blue', 'niebieski'],
}