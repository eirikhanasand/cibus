export default function getRelevant(cart: Ad[], lang: boolean) {
    const words: string[] = cart.map((ad) => lang ? ad.title_no : ad.title_en)
    const categories: string[] = cart.map((ad) => lang ? ad.category_no : ad.category_en)

    const relevant: Ad[] = cart.reduce((relevantAds: Ad[], ad) => {
        const isAdRelevant =
            words.some((word) => ad.title_no.includes(word) || ad.title_en.includes(word)) ||
            categories.some((category) => ad.category_no.includes(category) || ad.category_en.includes(category))

        if (isAdRelevant && !cart.includes(ad)) {
            relevantAds.push(ad);
        }

        return relevantAds;
    }, []);

    return relevant.slice(5)
}
