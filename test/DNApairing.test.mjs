import {DNApairing} from '../DNApairing.js'
describe('Créer des paires',  () => {

    it('should return  [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]] ',  () => {
const paire =  "ATCGA";
const expected = [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]];
const result =  DNApairing(paire);
expect(result).toEqual( expected)
    });

    it('should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]] ',  () => {
        const paire =  "TTGAG";
        const expected =[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]];
        const result =  DNApairing(paire);
        expect(result).toEqual( expected)
    });

    it('should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]',  () => {
        const paire = "CTCTA";
        const expected =[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]];
        const result =  DNApairing(paire);
        expect(result).toEqual( expected)
    });
});