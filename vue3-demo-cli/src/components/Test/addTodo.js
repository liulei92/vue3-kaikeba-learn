export default function (data) {
  const addTodo = () => {
    if (!data.todoItem) return
    data.todoList.push({ title: data.todoItem, completed: false })
    data.todoItem = ''
  }
  return { addTodo }
}
