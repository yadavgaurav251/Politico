<a href="https://www.instaclone.net"><img src="https://res.cloudinary.com/drwb19czo/image/upload/v1591476975/New_Project_1_yk24bj.png" title="Instaclone" alt="Instaclone banner"></a>

# Instaclone

> An instagram clone created with MongoDB, Express, React, and Socket.io

<a href="https://www.instaclone.net">Have a look at the live demo</a>

![Showcase GIF](/screenshots/NgmjOVkZ4L.gif)

## Tech

- Frontend: <a href="https://github.com/facebook/react">`React`</a>
- State management: <a href="https://github.com/reduxjs/redux">`Redux`</a>
- Routing: <a href="https://github.com/ReactTraining/react-router">`React Router`</a>
- Form management: <a href="https://github.com/jaredpalmer/formik">`Formik`</a>
- Animations: <a href="https://github.com/react-spring/react-spring">`React Spring`</a>
- Websocket management: <a href="https://github.com/socketio/socket.io">`Socket.io`</a>
- Backend: <a href="https://github.com/expressjs/express">`Express`</a>
- Database: <a href="https://github.com/Automattic/mongoose">`MongoDB`</a>
- Image hosting: <a href="https://cloudinary.com/">`Cloudinary`</a>

---

## Installation - Development

### Clone

- Clone this repo to your local machine using `https://github.com/yadavgaurav251/Politico`

### Setup

> Install npm dependencies using npm install

```shell
$ npm install && cd client && npm install
```

> Set up a MongoDB database either locally ( <a href='https://docs.mongodb.com/manual/installation/'>`Installation Guide`</a> )

> Create a free <a href="https://cloudinary.com/">`Cloudinary account`</a>

> Create a <a href='https://github.com/settings/developers'>`GitHub OAuth app`</a>

> Create a .env file in the root directory

> Set up required environment variables

```javascript
MONGO_URI= // mongodb://localhost:27017/instaclone
JWT_SECRET= // random string: j2390jf09kjsalkj4r93
CLOUDINARY_API_KEY= // Cloudinary API key
CLOUDINARY_API_SECRET= // Cloudinary API secret
CLOUDINARY_CLOUD_NAME= // Cloudinary cloud name
SMTP_HOST= // mail.example.com
SMTP_PORT= // 587
EMAIL_USERNAME= // example@example.com
EMAIL_PASSWORD= // Password
HOME_URL= // http://localhost:3000
GITHUB_CLIENT_ID= // Client id for GitHub OAuth app
GITHUB_CLIENT_SECRET= // Client secret for GitHub OAuth app
```

> In the root directory run both the backend and the front end with the following command

```shell
$ npm run dev
```

The app should launch automatically, enjoy playing around 😄

---

## Installation - Production with Docker

### Clone

- Clone this repo to your local machine using `https://github.com/Sandermoen/instaclone`

### Setup

> Create a free <a href="https://cloudinary.com/">`Cloudinary account`</a>

> Create a <a href='https://github.com/settings/developers'>`GitHub OAuth app`</a>

> Create a .env file in the root directory

> Set up required environment variables

```javascript
MONGO_URI= // mongodb://mongo:27017/instaclone
JWT_SECRET= // random string: j2390jf09kjsalkj4r93
CLOUDINARY_API_KEY= // Cloudinary API key
CLOUDINARY_API_SECRET= // Cloudinary API secret
CLOUDINARY_CLOUD_NAME= // Cloudinary cloud name
SMTP_HOST= // mail.example.com
SMTP_PORT= // 587
EMAIL_USERNAME= // example@example.com
EMAIL_PASSWORD= // Password
HOME_URL= // http://localhost:3000
GITHUB_CLIENT_ID= // Client id for GitHub OAuth app
GITHUB_CLIENT_SECRET= // Client secret for GitHub OAuth app
```

> In the root directory start the docker container by using the docker-compose file using the following command

```shell
$ docker-compose up
```

Docker will configure the rest for you, the project should be available on port 9000 unless you specified otherwise 😄

---

## Screenshots

![Showcase GIF](/screenshots/wg2j4iHJ7y.gif)
![Showcase GIF](/screenshots/n94XRALAUb.gif)
![Showcase GIF](/screenshots/oTWyTUbFvi.gif)
![Showcase GIF](/screenshots/yA6nMe6Xr4.gif)

## Support

Reach out to me at one of the following places!

- Email at <a href="mailto:smoensander@gmail.com">`smoensander@gmail.com`</a>

<a href="https://www.paypal.com/donate?hosted_button_id=QHRDHX96N3H4A"><img src="https://raw.githubusercontent.com/stefan-niedermann/paypal-donate-button/master/paypal-donate-button.png" title="Donate" alt="Donate button" width='200px'></a>
