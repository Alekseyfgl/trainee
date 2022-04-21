
type FIXME = ['initial'?, 'inWork'?, 'fullfilled'?,]

type OrderState = 'initial' | 'inWork' | 'buyingSupplies' | 'producing' | 'fullfilled'

export const getUserOrderStates = (orderStates: OrderState[]): FIXME => {
    const filteredStates = [] as FIXME
    orderStates.forEach((element) => {
        if (element !== 'buyingSupplies' && element !== 'producing') {
            filteredStates.push(element)
        }
    })
    return filteredStates
}

console.log(getUserOrderStates(['initial', 'inWork', 'buyingSupplies', 'producing', 'fullfilled']))