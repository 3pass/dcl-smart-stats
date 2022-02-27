import { Spawner } from '../node_modules/decentraland-builder-scripts/spawner'
import { AnalyticCube }  from './analyticCube'

const cube = new AnalyticCube()
const spawner = new Spawner(cube)

spawner.spawn(
  'sign',
  new Transform({
    position: new Vector3(4, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)
