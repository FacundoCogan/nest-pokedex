
export const EnvConfiguration = () => ({

    enviroment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    defaultLimit: +process.env.DEFAULT_LIMIT || 7 // porque las env por defecto
                                                // se guardan como strings
})