import {uniteUnique} from '../uniteUnique.js'
describe("Retrouver un nouveau tableau de valeurs uniques", ( )=> {
    it('should return [1, 3, 2, 5, 4] ',  () => {
        const array1= [1, 3, 2];
        const array2 = [5, 2, 1, 4];
        const array3 =  [2, 1];
        const expected = [1, 3, 2, 5, 4];
        const result = uniteUnique(array1, array2, array3);
        expect(result).toEqual(expected);
    });

    it('should return [1, 2, 3, 5] ',  () => {
        const array1= [1, 2, 3];
        const array2 = [5, 2, 1];
        const expected = [1, 2, 3, 5];
        const result = uniteUnique(array1, array2);
        expect(result).toEqual(expected);
    });
    it('should return [1, 2, 3, 5, 4, 6, 7, 8] ',  () => {
        const array1= [1, 2, 3];
        const array2 = [5, 2, 1, 4];
        const array3= [ 2, 1];
        const array4 = [ 6, 7, 8];
        const expected = [1, 2, 3, 5, 4, 6, 7, 8];
        const result = uniteUnique(array1, array2, array3, array4);
        expect(result).toEqual(expected);
    });
})