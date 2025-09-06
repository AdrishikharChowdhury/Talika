import React from 'react'
import { useState, useEffect } from 'react'
import Heading from './components/Heading'
import ButtonStyle from './components/ButtonStyle'
import Tasks from './components/Tasks'

const App = () => {
  let tasks=document.querySelector("#tasks")
  const [task, settask] = useState('');
  const [key, setkey] = useState('')
  const taskAdd=()=>{
    let taskElement=document.createElement("div");
    if(task===""){
      return;
    }
    tasks.style.display="flex";
    taskElement.id="task-element";
    taskElement.className="lg:text-xl md:text-md text-sm bg-white px-4 py-2 rounded-xl border-2 border-black whitespace-normal break-words active:scale-95 shadow-xl active:shadow-lg cursor-pointer font-bold"
    taskElement.innerText=`${task}`;
    tasks.append(taskElement);
    settask('');
    
    // Save tasks to localStorage
    saveTasksToStorage();
  }
  let taskElements=document.querySelectorAll("#task-element");
  taskElements.forEach(element => {
  element.onclick = (e) => {
        let strike=window.getComputedStyle(element);
        let strikeproperty=strike.getPropertyValue('background-color');
        console.log(strikeproperty)
        if(strikeproperty==='rgb(0, 0, 0)')
        {
          element.remove();
          saveTasksToStorage();
          let taskArray = Array.from(document.querySelectorAll("#task-element"));
          if(taskArray.length==[])
          {
            tasks.style.display="none";
          }
        }
        else{
          element.classList.remove("bg-white");
          element.classList.add("bg-black");
          element.classList.add("text-white");
          element.classList.add("line-through");
          saveTasksToStorage();
        }
      };
    });
    const handlekeydown=(event)=>{
    setkey(event.key);
      if(event.key==='Enter')
      {
        taskAdd();
      }
      else{
        return;
      }
    }
    const saveTasks = (tasks) => localStorage.setItem('todoTasks', JSON.stringify(tasks))
    const loadTasks = () => JSON.parse(localStorage.getItem('todoTasks') || '[]')
    
    // Save current tasks to localStorage
    const saveTasksToStorage = () => {
      const taskElements = document.querySelectorAll("#task-element");
      const tasksArray = Array.from(taskElements).map(element => ({
        text: element.innerText,
        completed: element.classList.contains('bg-black')
      }));
      saveTasks(tasksArray);
    };
    
    // Load tasks from localStorage on component mount
    useEffect(() => {
      const savedTasks = loadTasks();
      const tasksContainer = document.querySelector("#tasks");
      
      if (tasksContainer) {
        // Clear any existing tasks first to prevent duplicates
        tasksContainer.innerHTML = '';
        
        if (savedTasks.length > 0) {
          tasksContainer.style.display = "flex";
          savedTasks.forEach(savedTask => {
            let taskElement = document.createElement("div");
            taskElement.id = "task-element";
            taskElement.className = savedTask.completed 
              ? "lg:text-xl md:text-md text-sm bg-black text-white px-4 py-2 rounded-xl border-2 border-black whitespace-normal break-words active:scale-95 shadow-xl active:shadow-lg cursor-pointer font-bold line-through"
              : "lg:text-xl md:text-md text-sm bg-white px-4 py-2 rounded-xl border-2 border-black whitespace-normal break-words active:scale-95 shadow-xl active:shadow-lg cursor-pointer font-bold";
            taskElement.innerText = savedTask.text;
            tasksContainer.append(taskElement);
            
            // Add click event to loaded task
            taskElement.onclick = (e) => {
              let strike = window.getComputedStyle(taskElement);
              let strikeproperty = strike.getPropertyValue('background-color');
              if (strikeproperty === 'rgb(0, 0, 0)') {
                taskElement.remove();
                saveTasksToStorage();
                let taskArray = Array.from(document.querySelectorAll("#task-element"));
                if (taskArray.length === 0) {
                  tasksContainer.style.display = "none";
                }
              } else {
                taskElement.classList.remove("bg-white");
                taskElement.classList.add("bg-black");
                taskElement.classList.add("text-white");
                taskElement.classList.add("line-through");
                saveTasksToStorage();
              }
            };
          });
        } else {
          // If no saved tasks, hide the tasks container
          tasksContainer.style.display = "none";
        }
      }
    }, []);
  return (
    <>
    <div className="flex flex-col justify-center gap-6 px-6 py-8 lg:w-2/5 md:w-4/5 w-9/10 border-2 shadow-2xl rounded-2xl h-max">
      <Heading />
      <div className="w-full flex flex-col gap-6 2xl:flex-row items-center min-h-10 justify-between h-max">
        <input
        value={task} 
        onChange={(e)=>{
          settask(e.target.value);
        }} type="text" name="" id="task-name" className='shadow-[2.5px_3px_0_rgba(0,0,0,1)] pl-5 border-2 rounded-xl h-12 w-full c focus:shadow-[5.5px_7px_0_black] focus:outline-none' placeholder='Enter your task...' 
        onKeyDown={handlekeydown}/>
        <button 
        className="relative z-10 px-6 py-4 bg-[#e8e8e8] text-[#212121] font-extrabold lg:text-base text-md 2xl:w-2/5 w-full rounded-xl shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] overflow-hidden transition-all duration-250 ease-in-out border-0 group hover:text-white cursor-pointer"
        onClick={taskAdd}
        >
          <ButtonStyle />
          Add Task
        </button>
      </div>
      <Tasks />
    </div>
    </>
  )
}

export default App