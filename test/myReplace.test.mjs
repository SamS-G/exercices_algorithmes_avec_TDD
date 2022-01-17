import {myReplace} from "../myReplace.js";

describe('Algorithme', () => {

    it('should return  store by mall.', function () {

        const wordOne = "store";
        const wordTwo = "mall";
        const sentence = "Let us go to the store";
        const result = myReplace(sentence, wordOne, wordTwo);
        expect(result).toMatch('Let us go to the mall')
    });

    it('should return He is Sitting on the couch.', function () {

        const wordOne = "Sleeping";
        const wordTwo = "sitting";
        const sentence = "He is Sleeping on the couch";
        const result = myReplace(sentence, wordOne, wordTwo);
        expect(result).toMatch('He is Sitting on the couch')
    });

    it('should return I think we should look down there.', function () {

        const wordOne = "up";
        const wordTwo = "Down";
        const sentence = "I think we should look up there";
        const result = myReplace(sentence, wordOne, wordTwo);
        expect(result).toMatch('I think we should look down there')
    });

    it('should return This has a spellngi error.', function () {

        const wordOne = "spellngi";
        const wordTwo = "spelling";
        const sentence = "This has a spellngi error";
        const result = myReplace(sentence, wordOne, wordTwo);
        expect(result).toMatch('This has a spelling error')
    });
})