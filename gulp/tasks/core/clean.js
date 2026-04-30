import { deleteAsync } from 'del'
import { path } from '../../config/path.js'

// * --- EXPORT GULP TASK CLEAN BUILD DIRECTORY
// * ------------------------------------------
export function clean(done) {
    deleteAsync(path.clean).then(() => {
        done()
    })
}
