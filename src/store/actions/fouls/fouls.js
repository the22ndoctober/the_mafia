export function increment(state) {
    if(state!== 4){return state += 1}
    if(state === 4) return state
}
  
export function decrement(state) {
    if(state!== 0) return state -= 1
    if(state === 0) return state
}