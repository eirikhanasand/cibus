/**
 * Fetches and returns all ads
 * @returns Ads
 */
export default async function fetchAds(): Promise<Ad[] | undefined> {

    try {
        const response = await fetch("http://localhost:3000/ads")

        if (!response.ok) {
            throw new Error(`Failed to fetch ads.`)
        }
        
        return response.json()
    } catch (error) {
        console.log(error)
        return undefined
    }
}
