import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'
import 'dotenv/config'

const app = Fastify()


app.register(cors)
app.register(appRoutes)

const PORT  = process.env.PORT


app.listen({
    port: parseInt(PORT!),
}).then(() => console.log("running...", )
)