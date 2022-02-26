import { Spawner } from '../node_modules/decentraland-builder-scripts/spawner'
import SignPost  from './item'

const post = new SignPost()
const spawner = new Spawner(post)

spawner.spawn(
  'post',
  new Transform({
    position: new Vector3(4, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)
