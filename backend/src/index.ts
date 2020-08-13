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
      image: 'https://i.pinimg.com/originals/f8/27/ed/f827ed9a704146f65b96226f430abf3c.png'
    }
  }

  try {
    const result = await admin.messaging().send(message)
    return res.json(result)
  } catch (error) {
    return res.status(500).send(error)
  }
})

app.get('/sendAll', async (req, res) => {
  const result = await admin.messaging().sendMulticast({
    tokens: [
      'e6oGLip3TLeWiomtFjRGRB:APA91bGx2_1fV4r4qa_1i1gq8W_qGX6OGMv7ZbPzH3Qy861iKm-b-YJ0C4F4E2RxFhbvVvIIBVJX_4VI95pIiudnQm0vMpsdEwI991G4SlhENDBKPD3UHCnnknkOnqP37fkMuO8tPlm0',
      'eSCu45rXTjqfmkNlfHX0zL:APA91bFUGJfcIjpu5dFChRXB8oB8w569gZYeY7Gr-vwLScQyAeg-IdSLqRKlDI-6E1M9AW0uHQ0DDQCuv6otf8Pg6FzWRPsILkVC3LvEQU29huPUbBwHOdZsuuYkLFgCeyk-qfRWhaRC',
    ],
    notification: {
      title: 'Test',
      body: 'aaaaaaaaaaaaaaa',
      imageUrl: 'https://i.pinimg.com/originals/f8/27/ed/f827ed9a704146f65b96226f430abf3c.png'
    }
  })

  return res.json(result)
})


app.listen(9000, () => {
  console.log('Server run in 9000')
})
