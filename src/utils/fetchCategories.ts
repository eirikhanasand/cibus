/**
 * Fetches and returns all categories
 * @returns Categories
 */
export default async function fetchCategories(): Promise<Category[] | undefined> {

    try {
        const response = await fetch("http://localhost:3000/categories")

        if (!response.ok) {
            throw new Error(`Failed to fetch categories.`)
        }
        
        return response.json()
    } catch (error) {
        console.log(error)
        return undefined
    }
}
