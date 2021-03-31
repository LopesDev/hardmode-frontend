const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                envirounment: 'Development'
            },
            webpackDevMiddleware: (config) => {
                config.watchOptions = {
                    poll: 1000,
                    aggregateTimeout: 300,
                }
                return config
            }
        }
    }

    return {
        env: {
            envirounment: 'Production'
        }
    }
}