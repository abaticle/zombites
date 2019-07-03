import { writable } from 'svelte/store';

export const screen = writable("game")

export const debug = writable({
    data: []
})