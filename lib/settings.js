import {__dirname} from './utils.js'
import fs from 'fs-extra'
import path from 'path'
import rc from 'rc'


export default async() => {
    const base = path.resolve(path.join(__dirname, '../'))
    const defaults = JSON.parse(await fs.readFile(path.join(base, '.ta1k.defaults'), 'utf8'))

    const settings = {
        app: rc('ta1k', defaults),
        dev: {host: '127.0.0.1', port: 35729},
        dir: {
            app: path.join(base, 'app'),
            base,
            build: path.join(base, 'build'),
            node: path.resolve(path.join(base, 'node_modules')),
            theme: path.resolve(base, 'theme', 'default'),
            tmp: path.join(base, 'build', '.tmp'),
        },
    }

    settings.dir.theme = path.resolve(base, 'theme', settings.app.theme)

    return settings
}