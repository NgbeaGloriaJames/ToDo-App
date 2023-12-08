const app = Vue.createApp({
    data() {
        return {
            todoContent: '',
            todos: [],
            sN: 1,
        };
    },
    methods: {
        addTodo() {
            const trimmedContent = this.todoContent.trim();
            if (trimmedContent !== '') {
                this.todos.push({
                    todoContent: trimmedContent,
                    id: this.sN,
                    completed: false,
                });
                this.sN++;

                // Update local storage
                localStorage.setItem('todos', JSON.stringify(this.todos));
            }
            this.todoContent = '';
        },
        editTodo(index) {
            const newContent = prompt('Edit ToDo:', this.todos[index].todoContent);
            if (newContent !== null) {
                this.todos[index].todoContent = newContent;

                // Update local storage
                localStorage.setItem('todos', JSON.stringify(this.todos));
            }
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);

            //   storage
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        toggleDone(index) {
            this.todos[index].completed = !this.todos[index].completed;

            //   storage
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
    },
    mounted() {
        // Load todos from local storage after the app is mounted
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
});