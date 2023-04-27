import express from 'express'
import route from './routes/index.routes'
import bodyParser from 'body-parser'
require('dotenv').config()
//
const app = express()
//

//
app.use(bodyParser.json())
//
app.use(bodyParser.urlencoded({ extended: true }))
//
//
app.use(route)
//
const ConnectRestFull = async (PORT: number | string = 3550) => {
   app.listen(PORT, () => {
      try {
         console.log(`Server REST FULL running on: http://localhost:${PORT}`)
      } catch (error) {
         console.log('Error connect REST FULL', error)
      }
   })
}
export default ConnectRestFull
