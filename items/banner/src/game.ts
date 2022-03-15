import { Spawner } from "../node_modules/decentraland-builder-scripts/spawner"
import AnalyticBanner from "./item"

log('starting!!!')

const banner = new AnalyticBanner()
const spawner = new Spawner(banner)

spawner.spawn(
    'banner',
    new Transform({
        position: new Vector3(4, 1, 8),
        scale: new Vector3(2, 2, 0.1),
    }), {}
);

onEnterSceneObservable.add((player) => {
    log('enter!!! ' + player.userId)
})
