import React from 'react';
import bike1 from './../bike-1.png'
import bike2 from './../bike-2.png'
import bike3 from './../bike-3.png'

const News = () => {
    return (
       <div id='feature' className="container mt-3">
            <div className='row'>
            <h2 className="text-center mb-4">Latest News</h2>
            <SingleNews image={bike1} title='Ducati XDIAVEL S-73' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.'></SingleNews>

            <SingleNews image={bike2} title='Motorcycles & Scooters' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.'></SingleNews>

            <SingleNews image={bike3} title='2021 Honda CBR500R' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.'></SingleNews>
        </div>
       </div>
    );
};
function SingleNews(props){
return(
<div className='col mx-2 p-3 border rounded shadow'>
    <div className="w-100">
        <img className='img-fluid' src={props.image} alt="" />
    </div>
    <h3 className='mt-3'>{props.title}</h3>
    <p>{props.desc}</p>
    <button className='btn btn-danger'>Read More</button>
</div>
)
}
export default News;