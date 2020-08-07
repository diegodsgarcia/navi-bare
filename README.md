<h1 align="center">Navi Expo Bare</h1>

<p align="center">
  <img src="src/assets/navi.png">
</p>

# Vantagens

- Notificações direto pela FCM, com isso possuindo mais controle e manipulação
- Debug da notificação direto pelo portal do FCM
- Debug direto pelo emulador

# Desvantagens

- Necessário toda configuração do FCM para cada plataforma (Android / iOS)
- Perder o client do Expo
- Necessário possuir uma API própria pra envio de notificações via HTTP

### Arquitetura

![Arquitetura Expo Bare](https://docs.microsoft.com/en-us/xamarin/android/data-cloud/google-messaging/firebase-cloud-messaging-images/01-server-fcm-app.png)