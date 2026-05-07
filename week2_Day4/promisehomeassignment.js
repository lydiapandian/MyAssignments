let fetchDataFromDatabase = new Promise((resolve,reject)=>{
const data = true
setTimeout(()=>{
if(true)
{
    resolve("Data fetched successfully!")
}else
{
    reject("Data not found!")
}
})
},3000)
fetchDataFromDatabase.then((message)=>{console.log(message)}).catch((message)=>{console.log(message)})