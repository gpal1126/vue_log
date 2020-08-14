/* const addOneItem = (state, todoItem) => {
    console.log('todoItem');
    const obj = { completed: false, item: todoItem };
    //저장하는 로직
    localStorage.setItem(todoItem, JSON.stringify(obj));    //로컬스토리지에 데이터 넣기
    state.todoItems.push(obj);   //데이터 배열에 넣기
}

const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);  //localstorage todo item 삭제
    state.todoItems.splice(payload.index, 1);    //array todo item 삭제
}

const toggleOneItem = (state, payload) => {
    //토글 값 변경
    //todoItem.completed = !todoItem.completed;
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //로컬 스토리지의 데이터를 갱신
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
    localStorage.clear();   //localstorage todo all 삭제
    state.todoItems = [];    //array todo all 삭제
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }; */