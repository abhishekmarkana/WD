let inputData = []
let Additem = () => {

    const alldata = JSON.parse(localStorage.getItem("item-list"))

    let inputval = document.myfrm.inputval.value
    let i_id = alldata != null ? alldata.length + 1 : 1

    let itemid = document.myfrm.hidden_id.value

    if (itemid != '') {
        let result = alldata.map((i) => {
            if (i.id == itemid) {
                i.Name = inputval
            }
            return i;
        })
        inputData = result
    } else {
        let obj = {
            id: i_id,
            Name: inputval
        }
        inputData.push(obj)
    }
    localStorage.setItem("item-list", JSON.stringify(inputData))

    document.myfrm.hidden_id.value = ''
    document.myfrm.inputval.value = ''
    document.myfrm.reset();
    disp()
    return false
}
const disp = () => {
    let alldata = JSON.parse(localStorage.getItem("item-list"))
    let tr = ''
    alldata.map((i) => {
        tr += `<div>${i.Name} <button onclick="upditem(${i.id})">ADD</button> <button onclick="delitem(${i.id})">DEL</button></div>`
    });
    document.getElementById("item-dis").innerHTML = tr

}
const delitem = (id) => {
    let alldata = JSON.parse(localStorage.getItem("item-list"))
    let arr = alldata.filter((i) => {
        return i.id != id
    })
    let j = 1
    let a = arr.map((i) => {
        return i
    })
    localStorage.setItem('item-list', JSON.stringify(a))
    disp()
}
const upditem = (id) => {
    let alldata = JSON.parse(localStorage.getItem("item-list"))
    let arr = alldata.find((i) => {
        return i.id == id;
    })
    document.myfrm.inputval.value = arr.Name
    document.myfrm.hidden_id.value = id
}
disp()