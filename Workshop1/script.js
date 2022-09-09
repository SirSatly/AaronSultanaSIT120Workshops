function test()
{
    alert("Java script is running");
    document.getElementById("demo").innerHTML = "Hello World!";
}

Vue.component('toDo', {
    template: '<div><h2>ToDo list</h2><input type="checkbox"><label>Item 1</label><br><input type="checkbox"><label>Item 2</label><br><input type="checkbox"><label>Item 3</label></div>'
})

var app = new Vue({
    el: '#app',
})