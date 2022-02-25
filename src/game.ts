import { Spawner } from '../node_modules/decentraland-builder-scripts/spawner'
import LandLyticsLight from './item'

const llytics = new LandLyticsLight()
const spawner = new Spawner(llytics)

const url = 'https://europe-west3-backend-339310.cloudfunctions.net/serve/mon4si-2430.jpg'


spawner.spawn(
    'arrow',
    new Transform({
        position: new Vector3(8, 0, 8)
    })
)

const billboard = new Entity()

const loadedTexture = new Texture(url, {wrap: 0})
const adMaterial = new BasicMaterial()
adMaterial.texture = loadedTexture
const billboardAd = new PlaneShape()
const bill = new Billboard()

billboard.addComponent(adMaterial)
billboard.addComponent(bill)
billboard.addComponent(billboardAd)
billboard.addComponent(new Transform({
    position: new Vector3(8, 4, 8),
    rotation: new Quaternion(0, 0, 0, 0),
    scale: new Vector3(8, 6, 1)
}))
engine.addEntity(billboard)

