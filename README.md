# 📦 **Inventory Management System**

The Inventory Management System is a full-stack web application built with Angular (frontend) and Spring Boot (backend) that allows users to manage products, customers, and sales efficiently. It includes secure JWT-based login, and full CRUD operations. The system uses MySQL for database storage and provides a responsive user interface for both admins and users to perform inventory-related tasks seamlessly.

---

## 🚀 **Features**

* ✅ **User Authentication (JWT-based)**
* 📦 **Manage Products** (Add, Edit, Delete, View)
* 👥 **Customer Management**
* 💰 **Sales Recording**
* 🔒 **Secure REST APIs** with Spring Security
* 🛢️ **MySQL Database Integration**
* 📱 **Fully responsive Angular frontend**

---

## 🧰 **Tech Stack**

### 🔙 **Backend (Spring Boot)**

* ☕ Java 17
* 🚀 Spring Boot
* 🔐 Spring Security
* 🔑 JWT (JSON Web Token)
* 📦 Spring Data JPA
* 🌀 Hibernate
* 🛢️ MySQL
* 🛠️ Maven

### 🔜 **Frontend (Angular)**

* 🌐 Angular
* 🧪 Angular CLI
* 🟦 TypeScript
* 🎨 Bootstrap / CSS
* 🔄 RxJS & Angular HTTPClient

---

## 📁 **Project Structure**

### 📦 **Backend**

📂 Located in `src/main/java/com/example/inventory/`:

* `config/` → 🔐 Security, CORS, JWT configuration
* `controller/` → 📡 REST APIs for Auth, Products, Customers, and Sales
* `model/` → 🧩 Entity classes: `Product`, `Customer`, `Sales`, `User`
* `repository/` → 💾 Spring Data JPA Repositories
* `service/` → 🧠 Business logic & JWT utilities

---

### 📂 **Frontend**

📂 Located in `src/app/`:

* `components/` → 🧱 Angular components like `login`, `product-form`, `product-list`, `sales`, etc.
* `services/` → 🔄 HTTP service for API communication
* `guards/` → 🛡️ Route guards for authentication

---

## ▶️ **How to Run**

### ✅ **Backend Setup**

1. **Install MySQL**
2. **Create a database** named: `ims_mysql`
3. **Configure Database** in `src/main/resources/application.properties`:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/ims_mysql  
   spring.datasource.username=root  
   spring.datasource.password=your_password  
   spring.jpa.hibernate.ddl-auto=update  
   ```
4. **Run the Backend**

   ```bash
   cd ims_backend
   mvn install
   mvn spring-boot:run
   ```

   📌 Server runs at: `http://localhost:8080`

---

### ✅ **Frontend Setup**

1. **Install Node.js & Angular CLI**

   ```bash
   npm install -g @angular/cli
   ```
2. **Navigate to Frontend Folder**

   ```bash
   cd ims_frontend
   npm install
   ng serve
   ```

   🌐 Opens in browser: `http://localhost:4200`

---

## 🧪 **Testing**

You can use **Thunder Client** (VS Code) or **Postman** to test APIs.

### 🔐 Login Endpoint:

**POST** `http://localhost:8080/api/auth/login`

```json
{
  "username": "admin",
  "password": "1234"
}
```

### 📦 Product API Examples:

* **GET** `/api/products`
* **POST** `/api/products`
* **PUT** `/api/products/{id}`
* **DELETE** `/api/products/{id}`

---

## 🛡️ **Security**

* 🔑 JWT is used for secure authentication.
* 🔒 Spring Security allows `/api/auth/**` and protects all other routes.
* 🌐 CORS is enabled for `http://localhost:4200`.

---

## 📌 **Notes**

* Make sure **backend runs before frontend**.
* JWT Token is stored in browser local storage (used for protected APIs).
* Spring Boot **auto-generates tables** from JPA Entity classes.

---

## 📷 **Screenshots (Optional)**
**Login Page**
![image](https://github.com/user-attachments/assets/1fd78d29-7ca6-421e-aaee-aab705e9c70e)
**Customer Management Page**
![Screenshot 2025-06-15 112028](https://github.com/user-attachments/assets/ab168f6b-f532-4509-bbee-cf0a84e09120)
**Product Management Page**
![Screenshot 2025-06-15 112003](https://github.com/user-attachments/assets/7d3d4c59-6054-4820-80aa-e38c94b3b8d5)
**Product List Page**
![Screenshot 2025-06-15 111942](https://github.com/user-attachments/assets/57aafd9d-9cc6-4ce6-98f6-6542b98bdf19)
**Sales Recording Page**
![Screenshot 2025-06-15 111836](https://github.com/user-attachments/assets/d414a073-06a5-4efa-a36e-93b34f651452)

## 👨‍💻 **Developed By**

**Inventory Management System – Full Stack Web App**
Built with ❤️ using **Angular & Spring Boot**

---

