function kali(a, b) {
    return a * b;
}

function bagi(a, b) {
    if (b === 0) {
        throw new Error("Pembagian dengan nol tidak diperbolehkan.");
    }
    return a / b;
}

module.exports = { kali, bagi };
