export function DNApairing(paire) {
    let pairing =[];
for (let i =0; i < paire.length; i++) {
    if (paire[i] === "A"){
        pairing.push(["A", "T"])
    } else if (paire[i] === "T"){
        pairing.push(["T", "A"])
    } else if (paire[i] === "C") {
        pairing.push(["C", "G"])
    } else if (paire[i] ==="G") {
        pairing.push(["G", "C"])
    }
}
return pairing;
}