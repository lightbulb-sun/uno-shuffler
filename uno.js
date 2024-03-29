const opponentIndicesTable = [
        0x00, 0x01, 0x02, 0x03, 0x00, 0x01, 0x02, 0x03, 0x01,
        0x02, 0x03, 0x04, 0x06, 0x07, 0x08, 0x09, 0x08, 0x09,
        0x0a, 0x0b, 0x00, 0x01, 0x02, 0x03, 0x01, 0x02, 0x03,
        0x04, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a,
        0x08, 0x09, 0x0a, 0x0b, 0x00, 0x01, 0x02, 0x03, 0x02,
        0x03, 0x04, 0x05, 0x05, 0x06, 0x07, 0x08, 0x08, 0x09,
        0x0a, 0x0b, 0x08, 0x09, 0x0a, 0x0b,
        ];

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

const lookupTable = [
        0x00, 0x01, 0x01, 0x02, 0x02, 0x03, 0x03, 0x04, 0x04, 0x05,
        0x05, 0x06, 0x06, 0x07, 0x07, 0x08, 0x08, 0x09, 0x09, 0x0a,
        0x0a, 0x0b, 0x0b, 0x0c, 0x0c, 0x00, 0x01, 0x01, 0x02, 0x02,
        0x03, 0x03, 0x04, 0x04, 0x05, 0x05, 0x06, 0x06, 0x07, 0x07,
        0x08, 0x08, 0x09, 0x09, 0x0a, 0x0a, 0x0b, 0x0b, 0x0c, 0x0c,
        0x00, 0x01, 0x01, 0x02, 0x02, 0x03, 0x03, 0x04, 0x04, 0x05,
        0x05, 0x06, 0x06, 0x07, 0x07, 0x08, 0x08, 0x09, 0x09, 0x0a,
        0x0a, 0x0b, 0x0b, 0x0c, 0x0c, 0x00, 0x01, 0x01, 0x02, 0x02,
        0x03, 0x03, 0x04, 0x04, 0x05, 0x05, 0x06, 0x06, 0x07, 0x07,
        0x08, 0x08, 0x09, 0x09, 0x0a, 0x0a, 0x0b, 0x0b, 0x0c, 0x0c,
        0x0d, 0x0d, 0x0d, 0x0d, 0x0e, 0x0e, 0x0e, 0x0e, 0x10, 0x10,
        0x10, 0x10, 0x11, 0x11, 0x11, 0x11, 0x12, 0x12, 0x12, 0x12,
        0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f,
        ];

const translationTable = [
        ["red", "0", 0],
        ["red", "1", 1],
        ["red", "2", 2],
        ["red", "3", 3],
        ["red", "4", 4],
        ["red", "5", 5],
        ["red", "6", 6],
        ["red", "7", 7],
        ["red", "8", 8],
        ["red", "9", 9],
        ["red", "+2", 20],
        ["red", "Rev", 20],
        ["red", "Skip", 20],
        ["blue", "0", 0],
        ["blue", "1", 1],
        ["blue", "2", 2],
        ["blue", "3", 3],
        ["blue", "4", 4],
        ["blue", "5", 5],
        ["blue", "6", 6],
        ["blue", "7", 7],
        ["blue", "8", 8],
        ["blue", "9", 9],
        ["blue", "+2", 20],
        ["blue", "Rev", 20],
        ["blue", "Skip", 20],
        ["green", "0", 0],
        ["green", "1", 1],
        ["green", "2", 2],
        ["green", "3", 3],
        ["green", "4", 4],
        ["green", "5", 5],
        ["green", "6", 6],
        ["green", "7", 7],
        ["green", "8", 8],
        ["green", "9", 9],
        ["green", "+2", 20],
        ["green", "Rev", 20],
        ["green", "Skip", 20],
        ["yellow", "0", 0],
        ["yellow", "1", 1],
        ["yellow", "2", 2],
        ["yellow", "3", 3],
        ["yellow", "4", 4],
        ["yellow", "5", 5],
        ["yellow", "6", 6],
        ["yellow", "7", 7],
        ["yellow", "8", 8],
        ["yellow", "9", 9],
        ["yellow", "+2", 20],
        ["yellow", "Rev", 20],
        ["yellow", "Skip", 20],
        ["black", "Wild", 50],
        ["black", "+4", 50],
        ["black", "Back", 0],
        ["black", "All+2", 75],
        ["black", "Swap", 75],
        ["black", "Boomerang", 75],
        ];

const opponentNameTable = {
        0x00: "Angel",
        0x01: "Bopsy",
        0x02: "Honey",
        0x03: "Dizzy",
        0x04: "Dotty",
        0x05: "Zeppo",
        0x06: "Candy",
        0x07: "Daisy",
        0x08: "Binky",
        0x09: "Elvis",
        0x0a: "Lucky",
        0x0b: "Norty",
        0x0c: "Maxie",
        0x0d: "Laslo",
        };

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
    document.getElementById("skill").innerHTML = "";
    document.getElementById("discard").innerHTML = "";
    document.getElementById("playerCards").innerHTML = "";
    document.getElementById("firstMove").innerHTML = "";
    document.getElementById("drawPile").innerHTML = "";
    document.getElementById("opponentCards1").innerHTML = "";
    document.getElementById("opponentCards2").innerHTML = "";
    document.getElementById("opponentCards3").innerHTML = "";
    document.getElementById("rowOpp1").style = "display: none;";
    document.getElementById("rowOpp2").style = "display: none;";
    document.getElementById("rowOpp3").style = "display: none;";
    document.getElementById("hand").style = "color: #000";
    document.getElementById("opponentName1").style = "color: #000";
    document.getElementById("opponentName2").style = "color: #000";
    document.getElementById("opponentName3").style = "color: #000";
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

function switchEndian(x) {
    return (x >> 8) | ((x & 0xff) << 8);
}

function fun_1fab(bc, de) {
    // @ rom0:$1fab
    if (de == 0) {
        return 0;
    }
    let hl = bc;
    bc = 0;
    let a = 0x10;
    let carry = 0;

    for (;;) {
        let value = (bc << 16) | hl;
        let var_d3de = a;
        let tmp = (value << 1);
        carry = (tmp > 0xffffffff) ? 1 : 0;
        value = (tmp & 0xffffffff);
        bc = (value >> 16);
        hl = (value & 0xffff);
        let pushed_bc = bc;

        a = (bc & 0xff);
        let sub = (a - (de & 0xff) - carry);
        carry = (sub < 0) ? 1 : 0;
        a = (sub & 0xff);
        bc = (bc & 0xff00) | a;

        a = (bc >> 8);
        sub = (a - (de >> 8) - carry);
        carry = (sub < 0) ? 1 : 0;
        a = (sub & 0xff);
        bc = (bc & 0x00ff) | (a << 8);

        carry = (carry == 1) ? 0 : 1;
        if (carry == 0) {
            bc = pushed_bc;
        }

        a = var_d3de - 1;
        if (a != 0) {
            continue;
        }

        return bc;
    }
}

function fun_1ffa(bc, de) {
    // @ rom0:$1ffa
    let hl = 0;

    for (let i = 0; i < 15; ++i) {
        let tmp = (de << 1);
        if (tmp > 0xffff) {
            hl += bc;
        }
        de = (tmp & 0xffff);
        hl <<= 1;
    }

    if ((de & 0x8000)) {
        hl += bc;
    }

    return (hl & 0xffff);
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
        let totalPoints = 0;
        idPlayerCards.innerHTML = "";
        let idx = 0x79;
        for (let i = 0; i < 7; ++i) {
            let cur = this.table1[idx];
            let card = poolTable[cur];
            let element = cardToElement(card);
            let points = translationTable[card][2];
            totalPoints += points;
            idPlayerCards.appendChild(element);
            idPlayerCards.appendChild(document.createTextNode(" "));
            idx = cur;
        }
        const pointsNode = document.createTextNode("(" + totalPoints + " points)");
        idPlayerCards.appendChild(pointsNode);
    },
    dealOpponentCards: function(n) {
        document.getElementById("rowOpp" + n).style = "display: table-row;";
        const span = document.getElementById("opponentCards" + n);
        let totalPoints = 0;
        span.innerHTML = "";
        let idx = 0x79 + n;
        for (let i = 0; i < 7; ++i) {
            let cur = this.table1[idx];
            let card = poolTable[cur];
            let element = cardToElement(card);
            let points = translationTable[card][2];
            totalPoints += points;
            span.appendChild(element);
            span.appendChild(document.createTextNode(" "));
            idx = cur;
        }
        const pointsNode = document.createTextNode("(" + totalPoints + " points)");
        span.appendChild(pointsNode);
    },
    dealAllOpponentCards: function() {
        for (let i = 1; i < this.numPlayers; ++i) {
            this.dealOpponentCards(i);
        }
    },
    discardPile: function() {
        const idDiscardPile = document.getElementById("discard");
        const cur = this.table1[0x7e];
        const card = poolTable[cur];
        const element = cardToElement(card);
        idDiscardPile.appendChild(element);
    },
    determineFirstPlayer: function() {
        // @ rom61:$7102

        this.nextSeed();
        let s = switchEndian(this.seed);
        let e = fun_1fab(s, this.numPlayers) & 0xff;

        this.nextSeed();
        s = switchEndian(this.seed);
        const numIterations = fun_1fab(s, 0x05) + 10;

        let result = 0;
        // @ rom61:$71a3
        for (let i = 0; i < numIterations; ++i) {
            // @ rom61:$714a
            this.nextSeed();
            s = switchEndian(this.seed);
            let de = fun_1ffa(s & 0x0f, this.numPlayers);
            result = (de >> 4);
        }
        this.firstPlayer = result;

        let name = "";
        const style = "color: #3180de";
        if (this.firstPlayer == 0) {
            name = "Player";
            const elem = document.getElementById("hand");
            elem.style = style;
        } else {
            const idx = this.firstPlayer;
            name = this.opponentNames[idx-1];
            const elem = document.getElementById("opponentName" + idx);
            elem.style = style;
        }

        const elem = document.getElementById("firstMove");
        elem.innerHTML = name;
    },
    getDrawPile: function() {
        const idDrawPile = document.getElementById("drawPile");
        let result = document.createElement("span");
        idDrawPile.innerHTML = "";

        for (let i = 0; i < 55; ++i) {
            const cur = this.table1[0x78];
            const card = poolTable[cur];
            const element = cardToElement(card);
            idDrawPile.appendChild(element);
            idDrawPile.appendChild(document.createTextNode(" "));

            // @ rom4:$670e
            this.shuffle6(0x79);
        }
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

        // @ rom4:$727b
        for (;;) {
            const cur = this.table1[0x78];
            if (lookupTable[cur] > 0x0d) {
                this.shuffle4(cur, 0x78);
            } else {
                break;
            }
        }

        // @ rom4:$72ae
        this.shuffle1(this.table1[0x78], 0x7e);

        // @ rom61:$6c64
        this.nextSeed();
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
    setSkill: function() {
        for (let i = 1; i < 6; ++i) {
            const elem = document.getElementById("skillChoice" + i);
            if (elem.checked) {
                this.skill = i;
                break;
            }
        }
        document.getElementById("skill").innerHTML = this.skill;
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
    getOpponentIndex: function(x, y) {
        // @ rom0:$2f04
        this.nextSeed();

        let e = (switchEndian(this.seed) >> 8) & 0x03;
        let de = fun_1ffa(0x14, y) + 0x2ec8;
        let temp = (x << 2);
        let total = (temp & 0xff) + (de & 0xff);
        let carry = (total > 0xff) ? 1 : 0;
        total &= 0xff;
        let d = (temp >> 8) + (de >> 8) + carry;

        total += (e & 0xff);
        carry = (total > 0xff) ? 1 : 0;
        total &= 0xff;
        d = (e >> 8) + d + carry;

        let idx = ((d << 8) | total) - 0x2ec8;

        return opponentIndicesTable[idx];
    },
    generate1OpponentName: function() {
        // @ rom0:$2f79
        this.opponentIndices = [this.getOpponentIndex(this.skill-1, 0x01)];
    },
    generate2OpponentNames: function() {
        // @ rom0:$2f8c
        let a = this.getOpponentIndex(this.skill-1, 0x00);
        let b = -1;
        do {
            b = this.getOpponentIndex(this.skill-1, 0x02);
        } while (a == b);

        this.nextSeed();
        if (((this.seed >> 8) & 0x10) != 0) {
            let tmp = a;
            a = b;
            b = tmp;
        }
        this.opponentIndices = [a, b];
    },
    generate3OpponentNames: function() {
        // @ rom0:$2fe9
        let a = this.getOpponentIndex(this.skill-1, 0x00);
        let b = -1;
        let c = -1;
        do {
            b = this.getOpponentIndex(this.skill-1, 0x01);
        } while (a == b);
        do {
            c = this.getOpponentIndex(this.skill-1, 0x02);
        } while ((a == c) || (b == c));
        let result = [a, b, c];

        this.nextSeed();
        let idx = fun_1fab(this.seed >> 8, 0x03);
        let tmp = result[idx];
        result[idx] = result[2];
        result[2] = tmp;

        this.nextSeed();
        if (((this.seed >> 8) & 0x0f) != 0) {
            tmp = result[0];
            result[0] = result[1];
            result[1] = tmp;
        }
        this.opponentIndices = result;
    },
    generateOpponentNames: function() {
        const oldSeed = this.seed;
        this.seed = switchEndian(this.seed);
        switch (this.numPlayers) {
            case 2:
                this.generate1OpponentName();
                break;
            case 3:
                this.generate2OpponentNames();
                break;
            case 4:
                this.generate3OpponentNames();
                break;
        }
        this.seed = oldSeed;
        this.opponentNames = this.opponentIndices.map(x => opponentNameTable[x]);
    },
    displayOpponentNames: function() {
        for (let i = 1; i < this.numPlayers; ++i) {
            let elem = document.getElementById("opponentName" + i);
            elem.innerHTML = this.opponentNames[i-1];
        }
    },
    deal: function() {
        emptyEverything();
        if (!this.parseSeed()) {
            return;
        }
        this.setSkill();
        this.setPackType();
        this.setNumPlayers();
        this.initializeTables();
        this.generateOpponentNames();
        this.displayOpponentNames();
        this.initializeSeed();
        this.shuffleDeck();
        this.dealOwnCards();
        this.dealAllOpponentCards();
        this.discardPile();
        this.determineFirstPlayer();
        this.getDrawPile();
    }
};

document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();
    uno.deal();
});
