import TodoItem from "./TodoItem"
import styles from './TodoItems.module.css'
// array pass kar re hai
const TodoItems = ({ todoItems,handleDeleteItem })=>{
return(
    <>
    <div className={`${styles.itemsContainer}`}>
        {
            todoItems.map((item,index)=>(
                <TodoItem key={item.name} todoDate={item.dueDate} todoName={item.name} handleDeleteItem={handleDeleteItem} />
            ))
        }
        
      </div>
    </>
)
}

export default TodoItems
