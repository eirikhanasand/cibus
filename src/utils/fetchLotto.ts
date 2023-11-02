/**
 * Fetches and returns the lottery winners
 * @returns Lottery data
 */
export default async function fetchLottery(): Promise<number[][] | undefined> {

    try {
        const response = await fetch("http://localhost:3000/lottery")

        if (!response.ok) {
            throw new Error(`Failed to fetch lottery.`)
        }
        
        return response.json()
    } catch (error) {
        console.log(error)
        return undefined
    }
}
