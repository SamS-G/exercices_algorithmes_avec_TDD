import {fearNotLetter} from '../fearNotLetter.js'
describe("Retrouver la lettre manquante", ( )=> {
    it('should return d',  () => {
        const string= "abce";
        const expected = "d";
        const result = fearNotLetter(string);
        expect(result).toEqual(expected);
    });
})