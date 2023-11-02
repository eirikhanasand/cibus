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
    StatsScreen: any
    MenuScreen: any
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
}

type PurchasedGames = {
    lotto: number[] | null
    pogchamp: number[] | null
    megaluck: number[] | null
    eveningspin: number[] | null
}
