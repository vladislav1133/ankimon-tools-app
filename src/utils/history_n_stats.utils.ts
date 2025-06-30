import { EventResult } from "../types/events"


export const getEvWinner = (lastEvent: EventResult, fullCatch = false) => {
    const firstUser = lastEvent.users[0]
    console.log('eee ###', firstUser)


    if (fullCatch) {
        return firstUser.caughtNum === firstUser.pokemons.length ? firstUser : null;
    }

    return firstUser;
}