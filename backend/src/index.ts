import express from 'express'
import cors from 'cors'
import admin from 'firebase-admin'

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  projectId: 'navi-ce013'
})

const app = express()
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
  return res.send('Envie alguma notificação com /send')
})

app.post('/send', async (req, res) => {
  const { token, title, body } = req.body

  const message = {
    token: token,
    notification: {
      title,
      body,
    }
  }

  try {
    const result = await admin.messaging().send(message)
    return res.json(result)
  } catch (error) {
    return res.status(500).send(error)
  }
})

app.listen(9000, () => {
  console.log('Server run in 9000')
})
