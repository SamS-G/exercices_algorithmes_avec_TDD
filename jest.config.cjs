module.exports = {
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?|mjs?)$",
    transform: {
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.js?$": "babel-jest",
        "^.+\\.mjs$": "babel-jest",
        "^.+\\.[t|j]sx?$": "babel-jest"
    },
    testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
    moduleFileExtensions: ["js", "jsx", "mjs"]
}