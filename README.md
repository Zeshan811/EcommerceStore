
---

````md id="proj1"
# E-Commerce Store (Admin + User) – HTML, CSS, JavaScript

This project is a simple e-commerce web application with separate Admin and Store (User) modules. It uses HTML, CSS, JavaScript, and Local Storage to manage products without a backend.

---

## 🚀 Features

### 👨‍💼 Admin Panel
- Add new products (name, price, image)
- Store data using Local Storage
- Manage product list
- Simple dashboard UI

### 🛍️ Store (User Side)
- View all products in grid layout
- Responsive product cards
- Dynamic product loading
- Clean UI for browsing products

### 💾 Data Handling
- Local Storage used for saving products
- No backend required
- Fast and lightweight system

---

## 📁 Project Structure

```bash
project-root/
│
├── index.html          # Main entry (store/user view)
├── index.css           # Global styling
│
├── admin/              # Admin panel
│   ├── admin.html
│   ├── admin.js
│   ├── admin.css
│
├── store/              # User store logic
│   ├── store.js
│   ├── products.js
│
├── assets/             # Images and media
│   ├── images/
│
└── README.md
````

---

## ⚙️ How to Run

1. Clone the repository:

```bash id="run1"
git clone <repository-url>
```

2. Open project folder:

```bash id="run2"
cd project-name
```

3. Run in browser:

* Open `index.html` (main store page)
* Open `admin/admin.html` (admin panel)

---

## 🧠 How It Works

1. Admin adds product via form
2. Product is saved in Local Storage
3. Store page reads data from Local Storage
4. Products are displayed dynamically
5. No database or backend required

---

## 💡 Concepts Used

* HTML5 structure
* CSS Flexbox & Grid
* JavaScript DOM manipulation
* Local Storage API
* Modular folder structure

---

## 🎯 Future Improvements

* Backend integration (Node.js / Flask)
* Database (MongoDB / Firebase)
* Authentication system (Admin login)
* Add to cart system
* Payment integration
* Product filtering and search

---

## 👨‍💻 Author

* ذیشان حیدر

---

## 📄 License

This project is created for learning and portfolio purposes.

```

---
