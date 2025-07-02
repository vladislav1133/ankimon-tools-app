import { EventResult } from "../types/events"


export const getEvWinner = (lastEvent: EventResult, fullCatch = false) => {
    const firstUser = lastEvent.users[0]

    if (fullCatch) {
        return firstUser.caughtNum === firstUser.pokemons.length ? firstUser : null;
    }

    return firstUser;
}

export const getEvSlowKing = (lastEvent: EventResult) => {
    const firstUser = lastEvent.users[lastEvent.users.length - 1]
    return firstUser;
}