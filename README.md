<h1 align="center" style="font-weight: bold;">Orders System 💻</h1>

<p align="center">
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a> • 
  <a href="#routes">API Endpoints</a> •
 <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>

<p align="center">
    <b>This project is used to study about backend. The idea is to simulate the creation of food orders</b>
</p>

<h2 id="technologies">💻 Technologies</h2>

- MongoDB
- NodeJS
- Fastify
- Joi

<h2 id="started">🚀 Getting started</h2>

<h3>Prerequisites</h3>

- NodeJS
- MongoDB

<h3>Cloning</h3>

How to clone your project

```bash
git clone https://github.com/Campos1911/pedidosBackend
```

<h3>Config .env variables</h2>

Use the `.env.example` as reference to create your configuration file `.env` with your AWS Credentials

```yaml
DATABASE_URL={YOUR_MONGODB_DATABASE_URL}
```

<h3>Starting</h3>

How to start your project

```bash
cd project-name
npm run dev
```

<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route | description  
|----------------------|-----------------------------------------------------
| <kbd>POST /login</kbd> | retrieves a token with the user id [response details](#post-login-detail)
| <kbd>POST /register</kbd> | register the user [request details](#post-register-detail)

<h3 id="post-login-detail">POST /login</h3>

**REQUEST**

```json
{
  "email": "anthoni@teste.com",
  "password": "4444444"
}
```

**RESPONSE**

```json
{
  "token": "encoded token"
}
```

<h3 id="post-register-detail">POST /register</h3>

**REQUEST**

```json
{
  "email": "teste1@teste.com",
  "password": "123456",
  "name": "Teste"
}
```

<h2 id="colab">🤝 Developers </h2>

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/119754605?s=96&v=4" width="100px;" alt="Anthoni Campos Profile Picture"/><br>
        <sub>
          <b>Anthoni Campos</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
