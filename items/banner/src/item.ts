import { getParcel } from '@decentraland/ParcelIdentity'

const fireEvent = (event: any, msg: any) => log('event!')


export default class AnalyticBanner {
    init() {}

    async renderBanner(host: Entity) {
        // const {parcelId, baseParcel} = await registerDclEvents()



        // const itemId = baseParcel.replace('-','m')
        const itemId = 'sciArt'
        // TODO: compute customerId
        const customerId = 'hTMR5yjBRdct61jGs7CzEPAFm3l2'
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
