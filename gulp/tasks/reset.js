import { deleteAsync as del } from 'del'

export const reset = () => {
    const app = global.app
    return del(app.path.clean)
}
