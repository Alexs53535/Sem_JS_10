const div1 = document.createElement('div')
const body1 = document.querySelector('body')
body1.appendChild('div');
const parseData = JSON.parse ('data1')
console.log(parseData)
parseData.message.forEach(element => {
    div1.insertAdjacentHTML('beforeend' `
  <figure>
  <img src="${element}" />
  <figcaption>An elephant at sunset</figcaption>
</figure>`)
});
 
const url1 ="https://jsonplaceholder.typicode.com/users"
async function Get_data (url1){ 
    const responce = await fetch(url1)
    const json_1 = await responce.json()
    return json_1
} 

try {
    const myData = await Get_data(url1)
    console.log(myData)
    myData.forEach(element => {
        div1.insertAdjacentHTML("beforeend", `
           <h2>${element.name}</h2> 
           <p>${element.email}</p>`)
           
    })
} catch (error) {
    console.log(`'Ошибка' ${error.message}`)
}