
const namozvaqti = 'https://islomapi.uz/api/monthly?region=Toshkent&month=4'
const demo = document.getElementById('demo')
fetch(namozvaqti)
.then((res) =>{
  return res.json()
})

.then((data)=>{
  console.log(data);
})

// demo.innerHTML = `
// <h2>${data.times}</h2>

// `