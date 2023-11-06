export default function getTotal(cart: number[], ads: Ad[]) {
    const cartItems = ads.filter((ad) => cart.includes(ad.id))

    let total: number = 0
    cartItems.forEach((item) => total += item.price)

    return total
}
