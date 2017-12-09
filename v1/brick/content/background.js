import { color } from '../../lib/colorReplace'

function bkColor(color, a) {
    return {
        backgroundColor: color(a)
    }
}

function bcImage(options) {
    const { url } = options
    return {
        backgroundImgage: url,
    }
}