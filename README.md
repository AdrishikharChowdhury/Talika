# To-Do List App

A modern, interactive To-Do List application built with React, Vite, and Tailwind CSS. This app allows users to add tasks, mark them as complete, and delete completed tasks with a clean and responsive user interface.

## 🚀 Features

- **Add Tasks**: Enter tasks using the input field and add them by clicking "Add Task" or pressing Enter
- **Mark Complete**: Click on any task to mark it as completed (changes background to black with strikethrough)
- **Delete Tasks**: Click completed tasks again to remove them from the list
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean design with shadows, hover effects, and smooth transitions
- **Real-time Interaction**: Tasks are added and managed dynamically without page refresh

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.12
- **Animation Library**: Motion 12.23.12 (installed but not yet implemented)
- **Development**: ESLint for code quality

## 📂 Project Structure

```
src/
├── App.jsx              # Main application component with task logic
├── main.jsx             # React app entry point
├── index.css            # Global styles and Tailwind imports
└── components/
    ├── ButtonStyle.jsx  # Reusable button hover effect component
    ├── Heading.jsx      # Application header component
    └── Tasks.jsx        # Tasks container component
```

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "To-Do List"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 How to Use

1. **Adding Tasks**: 
   - Type your task in the input field
   - Click "Add Task" button or press Enter
   - The task will appear in the tasks container below

2. **Completing Tasks**:
   - Click on any task to mark it as completed
   - Completed tasks turn black with white text and strikethrough

3. **Deleting Tasks**:
   - Click on completed (black) tasks to remove them
   - The task will be permanently deleted from the list

## 🎨 UI Components

### App.jsx
The main component that handles:
- Task state management with React hooks
- DOM manipulation for dynamic task creation
- Event handling for task interactions
- Keyboard navigation (Enter key support)

### Components Overview
- **Heading.jsx**: Displays the "To-Do List" title with responsive typography
- **Tasks.jsx**: Container for all tasks with flexible layout
- **ButtonStyle.jsx**: Provides animated hover effect for the Add Task button

## 📱 Responsive Design

The app is fully responsive with breakpoints:
- **Mobile**: Optimized for small screens with appropriate text sizes
- **Tablet (md)**: Medium screens with adjusted layouts
- **Desktop (lg)**: Large screens with optimal spacing and typography
- **Extra Large (2xl)**: Row layout for input and button on very large screens

## 🎨 Styling Features

- **Modern Shadows**: Box shadows and hover effects for depth
- **Smooth Transitions**: CSS transitions for interactive elements
- **Active States**: Visual feedback on button presses
- **Hover Effects**: Button animations using pseudo-elements
- **Clean Typography**: Responsive font sizes and weights

## 🔮 Future Enhancements

Potential improvements that could be added:
- [ ] Implement motion animations for task additions/removals
- [ ] Add task persistence with localStorage
- [ ] Task editing functionality
- [ ] Task categories or labels
- [ ] Due dates and priorities
- [ ] Search and filter capabilities
- [ ] Dark mode toggle
- [ ] Task reordering with drag & drop

## 🚨 Current Implementation Notes

The current implementation uses a hybrid approach combining React state management with direct DOM manipulation. While functional, future versions could benefit from:
- Pure React state management (removing direct DOM access)
- Better separation of concerns
- Enhanced accessibility features
- TypeScript integration

## 📄 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint for code quality
- `npm run preview`: Preview production build locally

## 🤝 Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**AdrishikharChowdhury**
- GitHub: [AdrishikharChowdhury](https://github.com/AdrishikharChowdhury)

---

**Built with ❤️ using React and Tailwind CSS**
