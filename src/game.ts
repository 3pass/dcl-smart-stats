import { Spawner } from '../node_modules/decentraland-builder-scripts/spawner'
import Arrow  from './item'

const arrow = new Arrow()
const spawner = new Spawner(arrow)

spawner.spawn(
    'arrow',
    new Transform({
        position: new Vector3(4, 0, 8)
    })
)

