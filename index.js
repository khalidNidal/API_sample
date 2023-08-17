let data = []
let list = document.querySelector("ul")


async function getdata() {
    let request = await fetch("https://jsonplaceholder.typicode.com/posts")
    let response = await request.json()
    data = response
    console.log(data)
    displaydata()
    console.log(data[0].userId)

}
getdata()

function displaydata() {
    let content = " ";
    for (let i = 0; i < data.length; i++) {
        content += `<li>

        <div>userId : ${data[i].userId}</div>
      <div>id :${data[i]  .id} </div>
         <div>title : ${data[i]  .title}</div>
         <div>body :${data[i].body} </div>        

        </li>
        `
    }
    list.innerHTML = content
}




