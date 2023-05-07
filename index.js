const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd08f87792amsh9239bf1e648df1ep1ed957jsn5874eff70f93',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};
var arr

const fetchData = async () =>{
    await fetch('https://coinranking1.p.rapidapi.com/coins', options)
	.then(response => response.json())
    .then(response => arr=response)
	.catch(err => console.error(err));
}

const timepass = () =>{
    console.log('tp')


} 
const run = async () =>{
    await fetchData()
    console.log('f', arr?.data?.coins[0], 'f')
    timepass()
}

run()

