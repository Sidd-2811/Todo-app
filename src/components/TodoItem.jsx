import React from "react";

const TodoItem = ({todoName,todoDate,handleDeleteItem}) => {
 
  return (
    <div>
      <div className="container ">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button" onClick={()=>handleDeleteItem(todoName)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
