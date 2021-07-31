const poolTable = [
        0x00, 0x01, 0x01, 0x02, 0x02, 0x03, 0x03, 0x04, 0x04,
        0x05, 0x05, 0x06, 0x06, 0x07, 0x07, 0x08, 0x08, 0x09,
        0x09, 0x0a, 0x0a, 0x0b, 0x0b, 0x0c, 0x0c, 0x0d, 0x0e,
        0x0e, 0x0f, 0x0f, 0x10, 0x10, 0x11, 0x11, 0x12, 0x12,
        0x13, 0x13, 0x14, 0x14, 0x15, 0x15, 0x16, 0x16, 0x17,
        0x17, 0x18, 0x18, 0x19, 0x19, 0x1a, 0x1b, 0x1b, 0x1c,
        0x1c, 0x1d, 0x1d, 0x1e, 0x1e, 0x1f, 0x1f, 0x20, 0x20,
        0x21, 0x21, 0x22, 0x22, 0x23, 0x23, 0x24, 0x24, 0x25,
        0x25, 0x26, 0x26, 0x27, 0x28, 0x28, 0x29, 0x29, 0x2a,
        0x2a, 0x2b, 0x2b, 0x2c, 0x2c, 0x2d, 0x2d, 0x2e, 0x2e,
        0x2f, 0x2f, 0x30, 0x30, 0x31, 0x31, 0x32, 0x32, 0x33,
        0x33, 0x34, 0x34, 0x34, 0x34, 0x35, 0x35, 0x35, 0x35,
        0x37, 0x37, 0x37, 0x37, 0x38, 0x38, 0x38, 0x38, 0x39,
        0x39, 0x39, 0x39, 0x36, 0x36, 0x36, 0x36, 0x36, 0x36,
        0x36, 0x36, 0x36, 0x36, 0x36, 0x36, 0x36, 0x36, 0x36,
        ];

const translationTable = [
        ["red", "0"],
        ["red", "1"],
        ["red", "2"],
        ["red", "3"],
        ["red", "4"],
        ["red", "5"],
        ["red", "6"],
        ["red", "7"],
        ["red", "8"],
        ["red", "9"],
        ["red", "+2"],
        ["red", "Reverse"],
        ["red", "Skip"],
        ["blue", "0"],
        ["blue", "1"],
        ["blue", "2"],
        ["blue", "3"],
        ["blue", "4"],
        ["blue", "5"],
        ["blue", "6"],
        ["blue", "7"],
        ["blue", "8"],
        ["blue", "9"],
        ["blue", "+2"],
        ["blue", "Reverse"],
        ["blue", "Skip"],
        ["green", "0"],
        ["green", "1"],
        ["green", "2"],
        ["green", "3"],
        ["green", "4"],
        ["green", "5"],
        ["green", "6"],
        ["green", "7"],
        ["green", "8"],
        ["green", "9"],
        ["green", "+2"],
        ["green", "Reverse"],
        ["green", "Skip"],
        ["yellow", "0"],
        ["yellow", "1"],
        ["yellow", "2"],
        ["yellow", "3"],
        ["yellow", "4"],
        ["yellow", "5"],
        ["yellow", "6"],
        ["yellow", "7"],
        ["yellow", "8"],
        ["yellow", "9"],
        ["yellow", "+2"],
        ["yellow", "Reverse"],
        ["yellow", "Skip"],
        ["black", "WildCard"],
        ["black", "+4"],
        ["black", "Back"],
        ["black", "All+2"],
        ["black", "SwapHands"],
        ["black", "Boomerang"],
        ];

function range(start, stop) {
    let result = [];
    for (let i = start; i < stop; ++i) {
        result.push(i);
    }
    return result;
}

function emptyEverything() {
    document.getElementById("seed").innerHTML = "";
    document.getElementById("packType").innerHTML = "";
    document.getElementById("numPlayers").innerHTML = "";
    document.getElementById("discard").innerHTML = "";
    document.getElementById("playerCards").innerHTML = "";
}

function cardToElement(card) {
    const value = translationTable[card];
    const color = value[0];
    const name = value[1];

    switch (color) {
        case "blue":
            colorHex = "#3465a4";
            break;
        case "green":
            colorHex = "#73d216";
            break;
        case "red":
            colorHex = "#dd0000";
            break;
        case "yellow":
            colorHex = "#d6c000";
            break;
        case "black":
            colorHex = "#000000";
            break;
    }

    let result = document.createElement("span");
    result.style = "color: " + colorHex;
    result.innerHTML = name;
    return result;
}

function isLegalSeed(seed) {
    const legalCharacters = "0123456789abcdefABCDEF";
    if (seed.length != 4) {
        return false;
    }
    for (let i = 0; i < 4; ++i) {
        if (legalCharacters.indexOf(seed[i]) < 0) {
            return false;
        }
    }
    return true;
}

let uno = {
    shuffle0: function() {
        for (;;) {
            // @ rom0:$2410
            this.nextSeed();

            let cur;
            if (((this.seed >> 8) & 0x10) == 0) {
                cur = this.table2[0x78];
            } else {
                cur = this.table1[0x78];
            }
            if (cur >= 0x78) {
                break;
            }
            this.shuffle1(cur, 0x7f);
        }
    },
    shuffle1: function(n, m) {
        // @ rom0:$22a2
        this.shuffle2(n);

        // @ rom0:$22ab
        this.table1[n] = this.table1[m];
        this.table2[n] = m;
        this.table1[m] = n;
        this.table2[this.table1[n]] = n;
    },
    shuffle2: function(cur) {
        // @ rom0:$215e
        const cur2 = this.table2[cur];
        const cur1 = this.table1[cur];

        this.table1[cur2] = cur1;
        this.table2[cur1] = cur2;
    },
    shuffle3: function() {
        // @ rom0:$2392
        const cur1 = this.table1[0x7f];
        const cur2 = this.table2[0x7f];

        this.table1[0x78] = cur1;
        this.table2[cur1] = 0x78;
        this.table2[0x78] = cur2;
        this.table1[cur2] = 0x78;
        this.table1[0x7f] = 0x7f;
        this.table2[0x7f] = 0x7f;
    },
    shuffle4: function(n, m) {
        // @ rom0:$22ff
        this.shuffle2(n);
        this.table1[n] = m;
        this.table2[n] = this.table2[m];
        this.table2[m] = n;
        this.table1[this.table2[n]] = n;
    },
    shuffle5: function() {
        // @ rom0:$246e
        for (let i = 0; i < 7; ++i) {
            for (let j = 0; j < this.numPlayers; ++j) {
                this.shuffle6(0x79+j);
            }
        }
    },
    shuffle6: function(n) {
        // @ rom0:$235c
        const cur = this.shuffle7(n);
        this.shuffle4(this.table1[0x78], cur);
    },
    shuffle7: function(n) {
        // @ rom0:$21d8
        const value = this.table1[0x78];
        for (;;) {
            n = this.table1[n];
            if (n > value) {
                return n;
            }
        }
    },
    dealOwnCards: function() {
        const idPlayerCards = document.getElementById("playerCards");
        idPlayerCards.innerHTML = "";
        let idx = 0x79;
        for (let i = 0; i < 7; ++i) {
            let cur = this.table1[idx];
            let card = poolTable[cur];
            let element = cardToElement(card);
            idPlayerCards.appendChild(element);
            idx = cur;
        }
    },
    discardPile: function() {
        const idDiscardPile = document.getElementById("discard");
        const cur = this.table1[0x7e];
        const card = poolTable[cur];
        const element = cardToElement(card);
        idDiscardPile.appendChild(element);
    },
    shuffleDeck: function() {
        for (let i = 0; i < 17; ++i) {
            this.shuffle0();
            this.shuffle3();
        }

        // @ rom4:$721c
        const start = (this.packType == "Special") ? 0x70 : 0x6c;
        for (let i = start; i < 0x78; ++i) {
            this.shuffle4(i, 0x80);
        }

        this.shuffle5();
        this.shuffle1(this.table1[0x78], 0x7e);
    },
    nextSeed: function() {
        // @ rom0:2028
        this.seed = (this.seed + (this.seed << 4) + 0x5c93) & 0xffff;
    },
    initializeSeed: function() {
        // @ rom4:$70eb
        this.seed = (this.seed + 0x06f7) & 0xffff;
        this.seed = (this.seed >> 8) | ((this.seed & 0xff) << 8);
        this.nextSeed();
    },
    parseSeed: function() {
        const idSeedIn = document.getElementById("seedInput");
        const seedValue = idSeedIn.value;
        const idSeed = document.getElementById("seed");

        idSeedIn.select();

        if (!isLegalSeed(seedValue)) {
            idSeed.innerHTML = "Illegal seed";
            return false;
        }

        const seedIn = parseInt(seedValue, 16);
        let seedHex = seedIn.toString(16);
        seedHex = seedHex.padStart(4, "0");
        idSeed.innerHTML = "0x" + seedHex;

        this.seed = (seedIn >> 8) | ((seedIn & 0xff) << 8);

        return true;
    },
    initializeTables: function() {
        this.table1 = range(0x01, 0x79);
        this.table1 = this.table1.concat([0x00]);
        this.table1 = this.table1.concat(range(0x79, 0x82));

        this.table2 = [0x78];
        this.table2 = this.table2.concat(range(0x00, 0x78));
        this.table2 = this.table2.concat(range(0x79, 0x82));
    },
    setPackType: function() {
        const idPackTypeNormal = document.getElementById("packTypeChoice1");
        const idPackType = document.getElementById("packType");

        if (idPackTypeNormal.checked) {
            this.packType = "Normal";
        } else {
            this.packType = "Special";
        }

        idPackType.innerHTML = this.packType;
    },
    setNumPlayers: function() {
        const idNumPlayers2 = document.getElementById("numPlayersChoice1");
        const idNumPlayers3 = document.getElementById("numPlayersChoice2");
        const idNumPlayers4 = document.getElementById("numPlayersChoice3");

        const idNumPlayers = document.getElementById("numPlayers");

        if (idNumPlayers2.checked) {
            this.numPlayers = 2;
        } else if (idNumPlayers3.checked) {
            this.numPlayers = 3;
        } else {
            this.numPlayers = 4;
        }

        idNumPlayers.innerHTML = this.numPlayers;
    },
    deal: function() {
        emptyEverything();
        if (!this.parseSeed()) {
            return;
        }
        this.setPackType();
        this.setNumPlayers();
        this.initializeTables();
        this.initializeSeed();
        this.shuffleDeck();
        this.dealOwnCards();
        this.discardPile();
    }
};

document.getElementById("deal").addEventListener("click", function(event) {
    uno.deal();
});

document.getElementById("seedInput").addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
        uno.deal();
    }
});
