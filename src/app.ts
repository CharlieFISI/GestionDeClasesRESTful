import express, { Application } from 'express'

import indexRouter from './index'
import claseRouter from './routes/clases'
import fechaclaseRouter from './routes/fechaclases'
import ingresoRouter from './routes/ingresos'

export class App {
  private readonly app: Application

  constructor (private readonly port: number | string) {
    this.app = express()
    this.settings()
    this.middlewares()
    this.routes()
  }

  settings (): void {
    this.app.set('port', this.port)
  }

  middlewares (): void {
    this.app.use(express.json())
  }

  routes (): void {
    this.app.use(indexRouter)
    this.app.use('/api/clases', claseRouter)
    this.app.use('/api/fechaclases', fechaclaseRouter)
    this.app.use('/api/ingresos', ingresoRouter)
  }

  async listen (): Promise<void> {
    await this.app.listen(this.port)
    console.log(`¡Servidor conectado al puerto ${this.port}!`)
  }
}
