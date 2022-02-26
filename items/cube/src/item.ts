import { registerDclEvents } from '../lib'


type ChangeTextType = { newText: string }

export default class SignPost {
  init() {}

  async spawn(host: Entity) {
    const sign = new Entity()
    sign.setParent(host)

    const {parcelId, baseParcel} = await registerDclEvents()

    const itemId = baseParcel.replace('-','m')

    log({ parcelId })

    sign.addComponent(new GLTFShape('models/Game_Cube_D.glb'))
    sign.addComponent(new Transform({}))

    // TODO: compute customerId
    const customerId = itemId

    const url = `https://europe-west3-backend-339310.cloudfunctions.net/serve/${customerId}-${itemId}.jpg`

    let QRTexture = new Texture(url)
    let QRMaterial = new Material()
    QRMaterial.metallic = 0
    QRMaterial.roughness = 1
    QRMaterial.specularIntensity = 0
    QRMaterial.albedoTexture = QRTexture

    let QRPlane = new Entity()
    QRPlane.setParent(host)
    QRPlane.addComponent(new PlaneShape())
    QRPlane.addComponent(QRMaterial)
    QRPlane.addComponent(
      new Transform({
        position: new Vector3(-0.61, 0.34, -0.3),
        rotation: Quaternion.Euler(0, -270, 0),
        scale: new Vector3(0.58, 0.58, 0.58),
      })
    )
    let QRPlane2 = new Entity()
    QRPlane2.setParent(host)
    QRPlane2.addComponent(new PlaneShape())
    QRPlane2.addComponent(QRMaterial)
    QRPlane2.addComponent(
      new Transform({
        position: new Vector3(-0.02, 0.34, -0.3),
        rotation: Quaternion.Euler(0, 270, 0),
        scale: new Vector3(0.58, 0.58, 0.58),
      })
    )
  }
}
