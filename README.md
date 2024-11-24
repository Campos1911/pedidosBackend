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
| <kbd>POST /api/users/login</kbd> | retrieves a token with the user id [response details](#post-login-detail)
| <kbd>POST /api/users/register</kbd> | register the user [request details](#post-register-detail)
| <kbd>GET /get/food</kbd> | get all foods that are on the database [request details](#get-food-detail)
| <kbd>POST /create/food</kbd> | create a new food [request details](#post-food-detail)
| <kbd>PATCH /edit/food/:foodId</kbd> | edit a food on the database [request details](#patch-food-detail)
| <kbd>DELETE /delete/food/:foodId</kbd> | delete a food from the database [request details](#delete-food-detail)
| <kbd>GET /get/orders/:userId</kbd> | get all orders from a user [request details](#get-order-detail)
| <kbd>POST /create/order</kbd> | create a new order [request details](#post-order-detail)
| <kbd>PATCH /edit/order/:orderId</kbd> | edit a order on the database [request details](#patch-order-detail)
| <kbd>DELETE /delete/order/:orderId</kbd> | delete a order from the database [request details](#delete-order-detail)

<h3 id="post-login-detail">POST LOGIN</h3>

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

<h3 id="post-register-detail">POST REGISTER</h3>

**REQUEST**

```json
{
  "email": "teste1@teste.com",
  "password": "123456",
  "name": "Teste"
}
```

<h3 id="get-food-detail">GET FOOD</h3>

**RESPONSE**

```json
{
  "foods": [
    {
      "id": "6740cab6fa15dfd58d0c8147",
      "name": "Produto 1",
      "type": "Teste",
      "value": 10.5
    },
    {
      "id": "6740ed78023a0183d2d63e3d",
      "name": "Produto 2",
      "type": "Teste",
      "value": 10.5
    }
  ]
}
```

<h3 id="post-food-detail">POST FOOD</h3>

**REQUEST**

```json
{
  "name": "Produto 2",
  "type": "Teste",
  "value": 10.5
}
```

**RESPONSE**

```json
{
  "message": "Sucesso! Alimento criado"
}
```

<h3 id="patch-food-detail">PATCH FOOD</h3>

**REQUEST**

```json
{
  "name": "Produto Modificado",
  "type": "Teste",
  "value": 10.5
}
```

**RESPONSE**

```json
{
  "message": "Alimento editado!"
}
```

<h3 id="delete-food-detail">DELETE FOOD</h3>

**RESPONSE**

```json
{
  "message": "Deletado com sucesso!"
}
```

<h3 id="get-order-detail">GET ORDERS BY USER ID</h3>

**RESPONSE**

```json
{
  "orders": []
}
```

<h3 id="post-order-detail">POST ORDER</h3>

**REQUEST**

```json
{
  "userId": "674243d9c3e7f750904d025e",
  "foodId": ["6740cab6fa15dfd58d0c8147"]
}
```

**RESPONSE**

```json
{
  "order": {
    "id": "67436275ff5f9c95cb12b039",
    "foodId": ["6740cab6fa15dfd58d0c8147"],
    "userId": "674243d9c3e7f750904d025e",
    "createdAt": "2024-11-24T17:29:25.191Z",
    "updatedAt": "2024-11-24T17:29:25.191Z"
  }
}
```

<h3 id="patch-order-detail">PATCH ORDER</h3>

**REQUEST**

```json
{
  "foodId": ["6740cab6fa15dfd58d0c8147"]
}
```

**RESPONSE**

```json
{
  "message": "Editado com sucesso",
  "pedido": {
    "id": "67436275ff5f9c95cb12b039",
    "foodId": ["6740cab6fa15dfd58d0c8147"],
    "userId": "674243d9c3e7f750904d025e",
    "createdAt": "2024-11-24T17:29:25.191Z",
    "updatedAt": "2024-11-24T17:30:34.136Z"
  }
}
```

<h3 id="delete-order-detail">DELETE ORDER</h3>

**RESPONSE**

```json
{
  "message": "Pedido deletado!"
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
