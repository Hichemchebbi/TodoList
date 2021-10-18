let form = document.getElementById('form')
let input = document.getElementById('input')
let todosUL = document.getElementById('todos')
let toodos = document.querySelector('.toodos')
let doos = document.querySelector('.doos')
var i=0 , j=0
let todos = JSON.parse(localStorage.getItem('todos'))
function loadOldTodos(){
if(todos){
  todos.map(todo => addTodo(todo))
}

else{
	todos = []
}

}

loadOldTodos()




form.addEventListener('submit',() =>{
	addTodo()
} )
function addTodo(todo){
		let todoText = input.value
		if(todo){
			todoText = todo.text
		}
		
		if(todoText){
			i++
			toodos.innerHTML = i
			let checkbox = document.createElement("input")
			let todoEl = document.createElement("li")
			let span = document.createElement("span")
			let button = document.createElement("button")
			let icon = document.createElement("i")
			span.innerText = todoText
      
			checkbox.addEventListener('click', () =>{ 
			todoEl.classList.toggle('completed') 
			updateLS()
			j++
		  doos.innerHTML = j
		})


			icon.addEventListener('click', (e)=>{
			e.preventDefault()
			todoEl.remove()
			updateLS()
			i--
			toodos.innerHTML = i
			})



      icon.setAttribute("class","far fa-trash-alt")
			checkbox.setAttribute("type","checkbox")
			todoEl.appendChild(checkbox)
			todoEl.appendChild(span)
			todoEl.appendChild(button)
			button.appendChild(icon)
			todosUL.appendChild(todoEl)
			cleanInput()
			updateLS()
		}
}
function updateLS(){
	todosEl = document.querySelectorAll('li')
	const todos = []

	todosEl.forEach(todoEl => {
		todos.push({
			text: todoEl.innerText,
			completed: todoEl.classList.contains('completed')
		})
	})
	localStorage.setItem("todos", JSON.stringify(todos))
}
function cleanInput(){
	input.value="";
}