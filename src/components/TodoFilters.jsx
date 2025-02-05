import DeleteCompleted from "./DeleteCompleted"

const TodoFilters = ({filter, applyFilter, deleteAllTodosCompleted}) => {
  return (
    <div className="filter-todos">
      <button onClick={() => applyFilter("")} className={`button filter-button ${filter == "" ? 'filter-button-active' : ''}`}>All</button>
      <button onClick={() => applyFilter("Active")} className={`button filter-button ${filter == "Active" ? 'filter-button-active' : ''}`}>Active</button>
      <button onClick={() => applyFilter("Completed")} className={`button filter-button ${filter == "Completed" ? 'filter-button-active' : ''}`}>Completed</button>
      <DeleteCompleted deleteAllTodosCompleted={deleteAllTodosCompleted} />
    </div>
  )
}

export default TodoFilters