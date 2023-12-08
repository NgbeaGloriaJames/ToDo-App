const app = Vue.createApp({
    data() {
        return {
            todoContent: '',
            todos: [],
            sN: 1,
        }
    },
    methods: {
        addTodo() {
            this.todos.push({
                todoContent: this.todoContent,
                id: this.sN,
                completed: false,
            });
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
            this.todos.splice(index, 1);
        },
        toggleDone(index) {
            this.todos[index].completed = !this.todos[index].completed;
        },
    }
});