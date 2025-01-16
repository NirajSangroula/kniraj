import "@testing-library/jest-dom";
import {rangeFromPageNumber} from "../helpers/pages";
test('rangeFromPageNumber', () => {
    expect(rangeFromPageNumber(1)).toEqual([0, 3]);
    expect(rangeFromPageNumber(2)).toEqual([4, 7]);
    expect(rangeFromPageNumber(3)).toEqual([8, 11]);
})