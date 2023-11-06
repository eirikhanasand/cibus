// Theme colors available
type ThemeProps = {
    content: string
    card: string
    darker: string
    contrast: string
    green: string
}

// Screens available
type RootStackParamList = {
    LandingScreen: any
    PlayScreen: PlayScreenProps
    CartScreen: any
    MenuScreen: any
    AdScreen: any
}

// Props for the Welcome component
type WelcomeProps = {
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
    login: boolean
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

type PlayScreenProps = {
    category: string
}

type ReduxState = {
    animate: {
        animate: boolean
    }
    name: {
        name: string
    }
    login: {
        login: boolean
        displayLogin: boolean
    }
    theme: {
        value: boolean
        theme: Theme
    }
    lang: {
        lang: boolean
    }
    search: {
        input: ""
    }
    ad: {
        ad: Ad
        ads: Ad[]
    }
    category: {
        category: Category
    }
    bookmarks: {
        bookmarks: number[]
    }
    cart: {
        cart: number[]
    }
}

type Ad = {
    id: number
    title_no: string
    title_en: string
    description_no: string
    description_en: string
    category_no: string
    category_en: string
    subcategory_no: string
    subcategory_en: string
    location: string
    price: number
    seller: Seller
    images: string[]
}

type Seller = {
    id: number
    name: string
    phone: number
}

type Category = {
    categories_no: SubCatArray[]
    categories_en: SubCatArray[]
}

type SubCatArray = {
    title: string
    subcategories: string[]
}

type Theme = {
    content: string
    card: string
    darker: string
    contrast: string
    green: string
}
