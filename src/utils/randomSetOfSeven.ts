export default function randomSetOfSeven() {
    const sorted: number[] = [];

    while (sorted.length < 7) {
      const num: number = Math.floor(Math.random() * (36)) + 1;
      if (!sorted.includes(num)) sorted.push(num);
    }
    
    return sorted.sort((a, b) => a - b);
}
