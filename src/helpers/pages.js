const rangeFromPageNumber = (pageNumber) => {
    const elementsPerPage = 4
    return [(pageNumber - 1) * elementsPerPage, (pageNumber) * elementsPerPage - 1]
}
export {rangeFromPageNumber}