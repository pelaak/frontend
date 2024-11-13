import React from 'react';

// Sample data for people and their flower images
const people = [{id: 1, name: 'Alice', flowerImage: 'https://example.com/flower1.jpg'}, {
    id: 2, name: 'Bob', flowerImage: 'https://example.com/flower2.jpg'
}, {id: 3, name: 'Charlie', flowerImage: 'https://example.com/flower3.jpg'}, {
    id: 4, name: 'Diana', flowerImage: 'https://example.com/flower4.jpg'
},];

const Home = () => {
    return (<div className="container mt-5">
        <h1 className="text-center">Home Page</h1>
        <div className="row">
            {people.map(person => (<div className="col-md-3 mb-4" key={person.id}>
                <div className="card">
                    <img src={person.flowerImage} className="card-img-top" alt={person.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                    </div>
                </div>
            </div>))}
        </div>
    </div>);
};

export default Home;