import ToDoList from "./components/toDoList/ToDoList";
import CreateTaskForm from "./components/createTaskForm/CreateTaskForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <Router>
        <Routes >
          <Route path='/' element={<ToDoList />} />
          <Route path='/create' element={<CreateTaskForm />}  />
        </Routes>
    </Router>
    </>
  );
}

export default App;
