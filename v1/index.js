import _ from 'c1'

export default {
    $ixAsd: {
        important: true,
        color: 'red',
        width: 10,
        active: {
            div: {
                width: 20
            }
        },
        before: {
            content: '汉',
            marginTop: 20
        },
        animate: {
            name: 'keyframes',
            rules: [{
                from: 0,
                to: 40,
                width: 20,
                height: 10
            }]
        },
        dev: {
            div: {
                width: 120
            }
        },
        span: {

        },
        ['dev|$span', ['$span', 'span'], 'nie']: {
            
        }
    }
}