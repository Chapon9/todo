function DeleteCompleted({deleteAllTodosCompleted}) {
    return (
      <button 
        className="btn btn-danger" 
        onClick={deleteAllTodosCompleted}>
        Delete completed
      </button>
  
    )
  }
  
  export default DeleteCompleted