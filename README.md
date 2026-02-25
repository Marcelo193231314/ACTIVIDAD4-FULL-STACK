# ACTIVIDAD4-FULL-STACK
#  LigaManager - Sistema de Gestión de Ligas de Fútbol
El sistema implementa autenticación, conexión a base de datos en la nube, pruebas automatizadas y un flujo de despliegue continuo (CI/CD).

---
##  Tecnologías Utilizadas
* **Backend:** Node.js, Express.js

* **Base de Datos:** MongoDB Atlas (Mongoose ODM)

* **Seguridad:** JSON Web Tokens (JWT), bcryptjs, Helmet, CORS

* **Testing:** Jest, Supertest

* **Infraestructura:** Render (PaaS), GitHub Actions (CI/CD)

---

## Requisitos Previos

Para ejecutar este proyecto de manera local, necesitas tener instalado:

1.  [Node.js](https://nodejs.org/) (v18 o superior).

2.  Una cuenta activa en [MongoDB Atlas](https://www.mongodb.com/atlas) para obtener tu cadena de conexión.



---

## Instalar dependencias

npm install



## Configurar Variables de Entorno

Crea un archivo llamado .env en la raíz del proyecto y define las siguientes variables



PORT=4000

MONGO_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/nombre-db

JWT_SECRET=escribe_aqui_tu_clave_secreta



## Ejecución

npm start
