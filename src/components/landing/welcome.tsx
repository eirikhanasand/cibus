import { Text, TextInput, TouchableOpacity, View, useColorScheme } from "react-native"
import WelcomeStyles from "./welcomeStyles"
import LightTheme from '@themes/lightTheme'
import DarkTheme from '@themes/darkTheme'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setDisplayLogin, setLogin } from "@redux/slices/login"
import { setName } from "@redux/slices/name"

// Props for the Signup component
type SignupProps = {
    signup: boolean
    setSignup: React.Dispatch<React.SetStateAction<boolean>>
    theme: ThemeProps
}

// Props for the Login component
type LoginProps = {
    theme: ThemeProps
}

// Props for the default screen
type DefaultScreenProps = {
    setSignup: React.Dispatch<React.SetStateAction<boolean>>
    theme: ThemeProps
    signup: boolean
}

/**
 * Component rendering the signup and login buttons on the landing screen.
 * @returns Welcome section
 */
export default function Welcome() {
    const { login } = useSelector((state: ReduxState) => state.login)

    const [signup, setSignup] = useState(false)
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

    return(
        <View style={login ? WelcomeStyles.viewTwoLogin : WelcomeStyles.viewTwo}>
            <DefaultScreen signup={signup} setSignup={setSignup} theme={theme} />
            <Signup signup={signup} setSignup={setSignup} theme={theme} />
            <Login theme={theme} />
        </View>
    )
}

function DefaultScreen({signup, setSignup, theme}: DefaultScreenProps) {
    const { login, displayLogin } = useSelector((state: ReduxState) => state.login)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const dispatch = useDispatch()

    if (signup || displayLogin || login) return <></>

    return (
        <View style={WelcomeStyles.spacedRow}>
            <TouchableOpacity 
                style={WelcomeStyles.textTwoTouchable} 
                onPress={() => setSignup(true)}>
                <Text style={{
                    ...WelcomeStyles.textTwo, 
                    color: theme.contrast, 
                    backgroundColor: theme.green
                }}>
                    {lang ? "Register deg" : "Sign up"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={WelcomeStyles.textTwoTouchable} 
                onPress={() => dispatch(setDisplayLogin())}>
                <Text style={{
                    ...WelcomeStyles.textTwo, 
                    color: theme.contrast, 
                    backgroundColor: theme.green
                }}>
                    {lang ? "Logg inn" : "Login"}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

/**
 * Component for rendering the signup button in the welcome section
 * @returns Signup button
 */
function Signup({signup, setSignup, theme}: SignupProps) {
    const { name } = useSelector((state: ReduxState) => state.name)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const dispatch = useDispatch()
    const [password, setPassword] = useState("")
    const [birthdate, setBirthdate] = useState("")

    function inputUsername(val: string) {
        dispatch(setName(val))
    }

    function inputPassword(val: string) {
        setPassword(val)
    }

    function handleSignup() {
        if (name.length) {
            setLogin()
        }
        
        setSignup(false)
    }

    if (!signup) return <></>

    return (
        <View>
            <TextInput 
                style={{
                    ...WelcomeStyles.inputText, 
                    backgroundColor: theme.darker,
                    color: theme.green
                }}
                placeholder = {lang ? "Brukernavn" : "Username"}
                placeholderTextColor={theme.card}
                textAlign="center"
                onChangeText={inputUsername}
                selectionColor={theme.green}
            />
            <TextInput 
                style={{
                    ...WelcomeStyles.inputText, 
                    backgroundColor: theme.darker,
                    color: theme.green
                }}
                placeholder={lang ? "Fødselsdato (DDMMYY)" : "Date of birth (DDMMYY)"}
                placeholderTextColor={theme.card}
                textAlign="center"
                inputMode="numeric"
                onChangeText={setBirthdate}
                maxLength={6}
                selectionColor={theme.green}
            />
            <TextInput 
                style={{
                    ...WelcomeStyles.inputText, 
                    backgroundColor: theme.darker,
                    color: theme.green
                }}
                placeholder = {lang ? "Passord" : "Password"}
                placeholderTextColor={theme.card}
                textAlign="center"
                secureTextEntry={true}
                onChangeText={inputPassword}
                selectionColor={theme.green}
            />
            <TouchableOpacity
                onPress={handleSignup}>
                <Text style={{
                    ...WelcomeStyles.textTwo, 
                    color: theme.contrast, 
                    backgroundColor: theme.green
                }}>
                    {lang ? "Register deg" : "Sign up"}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

/**
 * Component for rendering the login button in the welcome section
 * @returns login button
 */
function Login({theme}: LoginProps): JSX.Element {
    const { name } = useSelector((state: ReduxState) => state.name)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { login, displayLogin } = useSelector((state: ReduxState) => state.login)
    const dispatch = useDispatch()
    const [password, setPassword] = useState("")

    function inputUsername(val: string) {
        dispatch(setName(val))
    }

    function inputPassword(val: string) {
        setPassword(val)
    }

    function handleLogin() {
        if (name.length) {
            dispatch(setLogin())
        }

        dispatch(setDisplayLogin())
    }

    if (!displayLogin || login) return <></>

    return (
        <View>
            <TextInput 
                style={{
                    ...WelcomeStyles.inputText, 
                    backgroundColor: theme.darker,
                    color: theme.green
                }}
                placeholder = {lang ? "Brukernavn" : "Username"}
                placeholderTextColor={theme.card}
                textAlign="center"
                onChangeText={inputUsername}
                selectionColor={theme.green}
            />
            <TextInput 
                style={{
                    ...WelcomeStyles.inputText, 
                    backgroundColor: theme.darker,
                    color: theme.green
                }}
                placeholder = {lang ? "Passord" : "Password"}
                placeholderTextColor={theme.card}
                textAlign="center"
                secureTextEntry={true}
                onChangeText={inputPassword}
                selectionColor={theme.green}
            />
            <TouchableOpacity
                onPress={handleLogin}>
                <Text style={{
                    ...WelcomeStyles.textTwo, 
                    color: theme.contrast, 
                    backgroundColor: theme.green
                }}>
                    {lang ? "Logg inn" : "Login"}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
