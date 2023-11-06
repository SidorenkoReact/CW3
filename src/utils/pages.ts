


export function getPageArray(totalCount: number, countPerPage: number) {
    const countPages = Math.ceil(totalCount/countPerPage)
    const pageArray = []
    for (let p = 0; p < countPages; p++) {
        pageArray.push(p + 1)
    }
    return pageArray
}