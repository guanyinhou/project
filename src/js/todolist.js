window.onload = function () {
    // 材料區
    var ulDOM = document.querySelector('ul');
    var submitDOM = document.querySelector('.input-sub');
    var inputDOM = document.querySelector('.input-here');
    var totalDOM = document.querySelector('.note-total span');
    var delAll = document.querySelector('.clear-all a');
    const arr = [
        {
            purpose: '寫功課',
            finished: false
        },
        {
            purpose: '準時睡覺',
            finished: true
        }
    ]
    render();
    delAll.addEventListener('click', arrEmpty);
    submitDOM.addEventListener('click', addProject);
    // console.log(arr)
    // console.log(ulDOM)
    
    // 計算區
    function finishProject(e){
        // console.log(e)
        // console.log(e.target.parentElement.dataset.id)
        // console.log(e.target.checked)
        let arrNum = e.target.parentElement.dataset.id;
        arr[arrNum].finished = e.target.checked;
        // console.log(arr)
    }
    function addProject() {
        arr.push({
            purpose: inputDOM.value,
            finished: false
        });
        inputDOM.value = ''
        render()
        // console.log(arr)
    }
    function removeProject(e){
        // console.log(e)
        // console.log(e.target.parentElement.dataset.id)
        e.target.parentElement.remove();
        arr.splice(e.target.parentElement.dataset.id,1)
        render()
        // console.log(arr)
    }
    function arrEmpty(){
        ulDOM.innerHTML = '';
        arr.splice(0, arr.length);
        // arr = [];
        // console.log(arr)
        // console.log(ulDOM)
        render()
    }

    // 渲染區
    function render() {
        let str = '';
        // console.log(arr)
        arr.forEach(function (item, i) {
            // console.log(item)
            str += `<li data-id="${i}">
                <label data-id="${i}">
                    <input type="checkbox" ${item.finished ? 'checked' : ''}>
                    <span>${item.purpose}</span>
                </label>
                <button class="del">X</button>
            </li>`;
        })
        ulDOM.innerHTML = str;
        totalDOM.innerHTML = arr.length;

        var delDOM = document.querySelectorAll('.del');
        // console.log(delDOM)
        delDOM.forEach(function (btn) {
            btn.addEventListener('click', removeProject);
        })

        var finishDOM = document.querySelectorAll('.todo-list input');
        finishDOM.forEach(function(item){
            item.addEventListener('click', finishProject);
        })
    }
}