export const PRODUCTS = [
    {
        title: 'title',
        description: 'description',
        imageSource: '', //link or name in public folder
        price: '',
        size: ['size-1', 'size-2'],
        opinions: [
            {
                author: 'author',
                opinion: 'opinion'
            }
        ],
        quantity: 0,
        category: 'category'
    },
    {
        title: 'White T-shirt',
        description: 'Classic white t-shirt',
        imageSource: '', //link or name in public folder
        price: '39,99',
        size: ['XS', 'S', 'M', 'L', 'XL','XXL'],
        opinions: [
            {
                author: 'doublekcrystals',
                opinion: 'I love it!'
            }
        ],
        quantity: 0,
        category: 'Tops'
    },
    {
        title: 'Red T-shirt',
        description: 'Classic red t-shirt',
        imageSource: '', //link or name in public folder
        price: '40',
        size: ['XS', 'S', 'M', 'L', 'XL','XXL'],
        opinions: [
            {
                author: 'cathy096',
                opinion: "It arrived ripped apart, I don't recommend buying from this store"
            }
        ],
        quantity: 0,
        category: 'Tops'
    },
    {
        title: 'Corduroy trousers',
        description: 'Casual trousers, plain seam',
        imageSource: '', //link or name in public folder
        price: '59,99',
        size: ['XS', 'S', 'M', 'L', 'XL','XXL'],
        opinions: [
            {
                author: 'cathy097',
                opinion: "Nice"
            }
        ],
        quantity: 0,
        category: 'Bottoms'
    }
] 

export const LANGUAGE = {
    shop: ['Shop', 'Sklep'],
    collections: ['Collections', "Kolekcje"],
    archive: ['Archive', 'Archiwum'],
    cart: ['Cart', 'Koszyk'],
    search: ['Search', 'Szukaj'],
    wishlist: ['Wishlist', 'Lista życzeń'],
    help: ['Help', 'Pomoc'],
    about: ['About', 'O nas'],
    contact: ['Contact', 'Kontakt'],
    sale: ['Sale', 'Wyprzedaż'],
    company: ['Company', 'O marce'],
    acceptQuestion: ['Do you want to be up to date with our offer and current promotions? Subscribe to the newsletter.', 'Chcesz być na bieżąco z naszą ofertą i aktualnymi promocjami? Zapisz się do naszego newslettera.'],
    iAccept:['I accept the newsletter conditions.', 'Akceptuję warunki newslettera'],
    save:['Save', 'Zapisz'],
    career:['Career', 'Praca'],
    address:['Address', 'Adres'],
    delivery:['Delivery', 'Dostawa'],
    sizeGuide:['Size guide', 'Przewodnik po rozmiarach'],
    privacyPolicy:['Privacy policy', 'Polityka prywatności'],
    termsAndConditions:['Terms and conditions', 'Regulamin'],
}