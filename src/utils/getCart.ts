export default function getCart(cart: number[], ads: Ad[]) {
    return ads.filter((ad) => cart.includes(ad.id))
}