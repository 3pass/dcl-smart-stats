const url = 'https://europe-west3-backend-339310.cloudfunctions.net/serve/mon4si-2430.jpg'

export type Props = {
    customerId: string,
    itemId: string
}

export default class Arrow implements IScript<Props> {

    init() {}

    spawn(host: Entity, props: Props) {
        const billboard = new Entity()
        billboard.setParent(host)
        const url = `https://europe-west3-backend-339310.cloudfunctions.net/serve/${props.customerId}-${props.itemId}.jpg`
        const loadedTexture = new Texture(url, {wrap: 0})
        const adMaterial = new BasicMaterial()
        adMaterial.texture = loadedTexture
        const billboardAd = new PlaneShape()
        const bill = new Billboard()

        billboard.addComponent(adMaterial)
        billboard.addComponent(bill)
        billboard.addComponent(billboardAd)
        billboard.addComponent(new Transform({
            position: new Vector3(1, 4, 1),
            rotation: new Quaternion(0, 0, 0, 0),
            scale: new Vector3(8, 6, 1)
        }))



    }
}
