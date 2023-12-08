const app = Vue.createApp({
        data() {
            return {
                todoContent: '',
                todos: [],
                sN: 1,
             }
        },
        methods: {
            addTodo(){
                this.todos.push({
                    todoContent: this.todoContent,
                    id: this.sN,
                })
                this.sN++;
                this.todoContent = '';
                },
                editTodo(index) {
                    const newContent = prompt('Edit ToDo:', this.todos[index].todoContent);
                    if (newContent !== null) {
                        this.todos[index].todoContent = newContent;
                    }
                },
                deleteTodo(index) {
                    const confirmDelete = confirm('Are you sure you want to delete this ToDo?');
                    if (confirmDelete) {
                        this.todos.splice(index, 1);
                    }
                },
        }
        
    })
