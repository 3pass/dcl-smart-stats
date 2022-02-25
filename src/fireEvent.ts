import { getUserData } from "@decentraland/Identity"
import { getCurrentRealm, getPlatform } from "@decentraland/EnvironmentAPI"
import {getParcel, ILand} from '@decentraland/ParcelIdentity'



const url = `https://europe-west3-backend-339310.cloudfunctions.net/customEvent`


export const fireEvent = async (eventType: string, data = {}) => {

    const { userId, displayName, hasConnectedWeb3, publicKey }: any = await getUserData()
    const { serverName: realmName, room: realmRoom } = await getCurrentRealm() ?? {}
    const platform  = await getPlatform()

    log({ realmName, realmRoom })

    const json = {
        eventType,
        userId: hasConnectedWeb3 ? publicKey : userId,
        displayName,
        hasConnectedWeb3,
        realmName,
        realmRoom,
        platform,
        ...data
    }

    log({ json })

    const body = JSON.stringify(json)



    if (json.realmName !== 'localhost') {
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body
        })
    }
}
