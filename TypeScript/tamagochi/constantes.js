"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dream = exports.enemies = exports.games = exports.foods = exports.statusTamagotchiMessages = exports.tamagotchi = void 0;
// STATUS TAMAGOTCHI
exports.tamagotchi = {
    life: 5,
    hungry: 10,
    happiness: 10,
    fight: 10,
    sleep: 10
};
// STATUS MESSAGES
exports.statusTamagotchiMessages = {
    perfect: "Estoy perfecto chacho",
    life: "Tengo poca vida, aaaafgsf",
    hungry: "Tengo hambre mama",
    happiness: "Estoy troste",
    fight: "Tengo ganas de partir cabezas",
    sleep: "Me duermo zzzzz"
};
// EAT
exports.foods = {
    helado: {
        life: -2,
        hungry: 5,
        happiness: 4,
        fight: 0,
        sleep: -3,
    },
    lechuga: {
        life: 0,
        hungry: 3,
        happiness: 2,
        fight: -2,
        sleep: -2,
    },
    carne: {
        life: 2,
        hungry: 1,
        happiness: 0,
        fight: -5,
        sleep: 1,
    },
};
// PLAY
exports.games = {
    iphone: {
        life: -2,
        hungry: -4,
        happiness: 6,
        fight: -1,
        sleep: -4
    },
    rugby: {
        life: 0,
        hungry: -1,
        happiness: 2,
        fight: 0,
        sleep: -2
    },
    escondite: {
        life: -1,
        hungry: -3,
        happiness: 5,
        fight: -2,
        sleep: -3
    }
};
// FIGHT
exports.enemies = {
    judo: {
        life: -1,
        hungry: -4,
        happiness: -2,
        fight: 3,
        sleep: -1
    },
    boxeo: {
        life: -3,
        hungry: -6,
        happiness: -4,
        fight: 6,
        sleep: -3
    },
    deathMatch: {
        life: -4,
        hungry: -8,
        happiness: -6,
        fight: 10,
        sleep: -5
    }
};
// SLEEP 
exports.dream = {
    siesta: {
        life: 2,
        hungry: -2,
        happiness: 2,
        fight: 0,
        sleep: 2
    },
    dormir: {
        life: 4,
        hungry: -2,
        happiness: 4,
        fight: -2,
        sleep: 6
    },
    reborn: {
        life: 5,
        hungry: 10,
        happines: 10,
        fight: 10,
        sleep: 10
    }
};
