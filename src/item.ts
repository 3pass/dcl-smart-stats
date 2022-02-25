import { registerDclEvents } from "../lib/eventListeners"

const url = 'https://europe-west3-backend-339310.cloudfunctions.net/serve/mon4si-2430.jpg'

export default class LandLyticsLight {

    init() {}

    spawn(host: Entity) {
        registerDclEvents()
    }
}
