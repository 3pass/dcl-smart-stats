import { getParcel } from '@decentraland/ParcelIdentity'

const fireEvent = (event: any, msg: any) => log('event!')


export default class AnalyticBanner {

    init() {}

    async renderBanner(host: Entity) {
        // const {parcelId, baseParcel} = await registerDclEvents()


        const parcel = await getParcel()
        const { cid: parcelId } = parcel
        const baseParcel = parcel.land.sceneJsonData.scene.base
        log({baseParcel, parcelId})


        // const itemId = baseParcel.replace('-','m')
        // TODO: itemId as parameter
        const itemId = 'default'
        const url = `https://europe-west3-backend-339310.cloudfunctions.net/serve/dcl-${baseParcel}-${itemId}.jpg`

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
        log('hello from spawn')
        this.renderBanner(host).then()
    }
}
