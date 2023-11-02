import { Section } from "@components/shared/default/defaultComponents"
import { Text, useColorScheme, SafeAreaView, TouchableOpacity, View } from "react-native"
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import JackpotStyles from "./jackpotStyles"
import text from "@text/play/jackpot.json"
import { useEffect, useState } from "react"
import fetchLottery from "@utils/fetchLotto"
import randomSetOfSeven from "@utils/randomSetOfSeven"
import fetchPurchased, { 
    deletePurchased, 
    postPurchased, 
    putPurchased 
} from "@utils/fetchPurchased"

type Purchase = {
    numbers: number[][] | undefined
    theme: {
        content: string;
        card: string;
        darker: string;
        contrast: string;
        green: string;
    }
    purchase: boolean
    setPurchase: React.Dispatch<React.SetStateAction<boolean>>
    rows: number[][]
    setRows: React.Dispatch<React.SetStateAction<number[][]>>
    ownedRows: number
    setOwnedRows: React.Dispatch<React.SetStateAction<number>>
}

type Row = {
    row: number[]
}

type Ball = {
    number: number
    theme: {
        content: string;
        card: string;
        darker: string;
        contrast: string;
        green: string;
    }
    index: number
}

type PurchaseSection = {
    rows: number[][]
    setRows:  React.Dispatch<React.SetStateAction<number[][]>>
    ownedRows: number
}

export default function JackpotScreen() {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme
    const [recentWinners, setRecentWinners] = useState<number[][]>()
    const [purchase, setPurchase] = useState(false)
    const [rows, setRows] = useState<number[][]>([randomSetOfSeven()])
    const [ownedRows, setOwnedRows] = useState<number>(0)

    useEffect(() => {
        (async() => {
            const recent = await fetchLottery()
            const owned = await fetchPurchased() 

            if (recent) {
                setRecentWinners(recent)
            }

            if (owned) {
                owned[0].length ? setRows(owned) : ''
                owned[0].length ? setOwnedRows(owned.length) : ''
            }
        })()
    }, [])

    return (
        <SafeAreaView style={{
            ...JackpotStyles.content, 
            backgroundColor: theme.content
        }}>
            <Purchase 
                numbers={ownedRows ? rows : recentWinners}
                theme={theme}
                purchase={purchase}
                setPurchase={setPurchase}
                rows={rows}
                setRows={setRows}
                ownedRows={ownedRows}
                setOwnedRows={setOwnedRows}
            />
        </SafeAreaView>
    )
}

function Purchase({numbers, theme, purchase, setPurchase, rows, setRows, ownedRows, setOwnedRows}: Purchase) {

    function handleCancel() {
        (async() => {
            const deleteSuccessful = await deletePurchased()
            
            if (deleteSuccessful) {
                setPurchase(false)
                setOwnedRows(0)
                setRows([randomSetOfSeven()])
            }
        })()
    }

    function handlePurchase() {
        if (purchase) {
            (async() => {
                const buy = ownedRows > 0 ? await putPurchased(rows) : await postPurchased(rows)

                if (buy) {
                    setOwnedRows(buy.length)
                }
            })()
        }

        setPurchase(!purchase)
    }

    return (
        <>
            {!numbers && <Section title={text.loading} />}
            {numbers && !purchase && <Section title={ownedRows > 0 ? text.owned : text.recent_winners}>
            <View style={JackpotStyles.ballRow}>
                {numbers.map((row) => <DisplayRow key={row.join()} row={row} />)}
            </View>
            </Section>}
            {purchase && <PurchaseSection rows={rows} setRows={setRows} ownedRows={ownedRows} />}
            {rows[0].length && <TouchableOpacity
                onPress={handlePurchase}>
                <Text style={{
                    ...JackpotStyles.textTwo, 
                    marginBottom: 12,
                    color: theme.contrast, 
                    backgroundColor: theme.green
                }}>
                    {text.purchase}
                </Text>
            </TouchableOpacity>}
            {ownedRows > 0 && !purchase && <TouchableOpacity
                onPress={handleCancel}>
                <Text style={{
                    ...JackpotStyles.textTwo, 
                    color: theme.contrast, 
                    backgroundColor: theme.green
                }}>
                    {text.cancel}
                </Text>
            </TouchableOpacity>}
        </>
    )
}

function DisplayRow({row}: Row) {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

    return (
        <View style={JackpotStyles.parent}>
            {row.map((number, index) => <Ball 
                key={row.join() + number} 
                number={number} 
                theme={theme} 
                index={index}
            />)}
        </View>
    )
}

function PurchaseSection({rows, setRows, ownedRows}: PurchaseSection) {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

    function addRow() {
        setRows([...rows, randomSetOfSeven()])
    }

    function removeRow() {
        setRows(rows.slice(0, rows.length - 1))
    }

    return (
        <>
            {rows && <Section title={ownedRows > 0 ? text.owned : text.suggested}>
            <View style={JackpotStyles.ballRow}>
                {rows.map((row, index) => <DisplayRow key={index} row={row} />)}
            </View>
            </Section>}
           {rows.length < 5 &&  <TouchableOpacity
                onPress={addRow}>
                <Text style={{
                    ...JackpotStyles.textTwo,
                    marginBottom: 12,
                    color: theme.contrast, 
                    backgroundColor: theme.green
                }}>
                    {text.add}
                </Text>
            </TouchableOpacity>}
            {rows.length > 1 && ownedRows < rows.length && <TouchableOpacity
                onPress={removeRow}>
                <Text style={{
                    ...JackpotStyles.textTwo,
                    marginBottom: 12,
                    color: theme.contrast,
                    backgroundColor: theme.green
                }}>
                    {text.remove}
                </Text>
            </TouchableOpacity>}
        </>
    )
}


function Ball({ number, theme, index }: Ball): JSX.Element {
    return (
        <View style={{...JackpotStyles.ball, backgroundColor: index > 4 ? 'black' : 'red'}}>
            <Text style={{...JackpotStyles.ballText, color: theme.content }}>
                {number}
            </Text>
        </View>
    )
}
