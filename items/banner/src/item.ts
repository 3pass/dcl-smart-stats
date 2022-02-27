import { getParcel } from '@decentraland/ParcelIdentity'

const fireEvent = (event: any, msg: any) => log('event!')

export const registerDclEvents = async () => {

    let enterTime = 0.0
    let connectionTime = 0.0

    const parcel = await getParcel()
    const { cid: parcelId } = parcel
    const baseParcel = parcel.land.sceneJsonData.scene.base

    onEnterSceneObservable.add(async (player) => {
        enterTime = Date.now()
        log('enter!!!')
        fireEvent('enterLand',{parcelId, baseParcel})
    })

    onLeaveSceneObservable.add(player => {
        const duration = Math.floor(Date.now() - enterTime)
        fireEvent('visitDuration', {parcelId, baseParcel, duration})
    })

    onPlayerConnectedObservable.add(player => {
        connectionTime = Date.now()
        fireEvent('connectLand',{parcelId, baseParcel})
    })

    onPlayerDisconnectedObservable.add(player => {
        const duration = Math.floor(Date.now() - connectionTime)
        fireEvent('connectionDuration', {parcelId, baseParcel, duration})
    })

    return {parcelId, baseParcel}
}

export default class AnalyticBanner {
    init() {}

    async renderBanner(host: Entity) {
        // const {parcelId, baseParcel} = await registerDclEvents()



        // const itemId = baseParcel.replace('-','m')
        const itemId = 5858
        // TODO: compute customerId
        const customerId = itemId
        const url = `https://europe-west3-backend-339310.cloudfunctions.net/serve/${customerId}-${itemId}.jpg`

        let QRPlane = new Entity()
        QRPlane.setParent(host)
        QRPlane.addComponent(new PlaneShape())
        QRPlane.addComponent(
            new Transform({
                position: new Vector3(0, 0.5, 0),
                rotation: Quaternion.Euler(0, 0, 0),
                scale: new Vector3(1, 1, 1),
            })
        )

        let QRMaterial = new Material()

        QRMaterial.metallic = 0
        QRMaterial.roughness = 1
        QRMaterial.specularIntensity = 0

        let QRTexture = new Texture(url)
        QRMaterial.albedoTexture = QRTexture
        QRPlane.addComponent(QRMaterial)

    }

    spawn(host: Entity) {
        this.renderBanner(host).then()
    }
}
