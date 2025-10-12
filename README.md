# Talika - A Modern To-Do List Application

Talika is a sleek and responsive to-do list application built with React, Vite, and Tailwind CSS. It provides a user-friendly interface for managing tasks, with features like task creation, completion, deletion, and search. The application leverages local storage to persist tasks across sessions.

## 🚀 Features

-   **Create Tasks**: Add new tasks with a title and description.
-   **View Tasks**: Tasks are displayed in an accordion view.
-   **Complete Tasks**: Mark tasks as complete.
-   **Delete Tasks**: Remove tasks from the list.
-   **Search Tasks**: Filter tasks by title.
-   **Local Storage**: Tasks are saved in the browser's local storage.
-   **Responsive Design**: The application is designed to work on various screen sizes.

## 🛠️ Tech Stack

-   **Frontend Framework**: React
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS
-   **UI Components**: Material-UI (for Accordion)
-   **Icons**: Font Awesome

## 📂 Project Structure

```
/
├── public/
│   ├── logo.jpg
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── react.svg
│   │   └── todolist.svg
│   ├── components/
│   │   ├── CreateTask.jsx
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── SCpanel.jsx
│   │   │   └── TaskPanel.jsx
│   │   └── other/
│   │       ├── Navbar.jsx
│   │       └── Task.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🔧 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd Talika
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

## 📖 How to Use

1.  **Add a Task**: Click on the "Create Task" button to open the task creation form. Enter a title and description, then click "Submit Task".
2.  **View Task Details**: Click on a task to expand the accordion and view its description.
3.  **Complete a Task**: Click the "Done" button within the task details to mark it as complete.
4.  **Delete a Task**: Click the "Delete" button on a task to remove it from the list.
5.  **Search for a Task**: Use the search bar to filter tasks by their title.

## 📜 Available Scripts

-   `npm run dev`: Start the development server.
-   `npm run build`: Build the application for production.
-   `npm run lint`: Run ESLint for code quality checks.
-   `npm run preview`: Preview the production build locally.

## 🤝 Contributing

Feel free to contribute to this project by:

1.  Forking the repository
2.  Creating a feature branch
3.  Making your changes
4.  Submitting a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**AdrishikharChowdhury**

-   GitHub: [AdrishikharChowdhury](https://github.com/AdrishikharChowdhury)
