// src/App.js
import React from 'react';
import './homepage.css'; // Custom CSS for background and card effects
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

var image_address1 = "https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919"
var image_address2 = "https://weblight.ir/wp-content/uploads/farhang-o-tamaddon/mashahir/shahid/ebrahim-hadi/pic/ebrahim-hadi-16.jpg?_t=1628244649"
var image_address3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuUq3k3HcnTaapUobFHDtrrdUN8MeFFzPVQ&s"

function Home() {
  const people = [
    {id: 1, name: 'عبداله باقری', image: image_address1 },
    {id: 2, name: 'ابراهیم هادی', image: image_address2 },
    {id: 3, name: 'قاسم سلیمانی', image: image_address3 },
    {id: 4, name: 'عبداله باقری', image: image_address1 },
    {id: 5, name: 'ابراهیم هادی', image: image_address2 },
    {id: 6, name: 'قاسم سلیمانی', image: image_address3 },
    {id: 7, name: 'عبداله باقری', image: image_address1 },
    {id: 8, name: 'ابراهیم هادی', image: image_address2 },
    {id: 9, name: 'قاسم سلیمانی', image: image_address3 },
    {id: 10, name: 'عبداله باقری', image: image_address1 },
    {id: 11, name: 'ابراهیم هادی', image: image_address2 },
    {id: 12, name: 'قاسم سلیمانی', image: image_address3 },
    {id: 13, name: 'عبداله باقری', image: image_address1 },
    {id: 14, name: 'ابراهیم هادی', image: image_address2 },
    {id: 15, name: 'قاسم سلیمانی', image: image_address3 },
  ];

  return (
    <div className="bg-night">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <div className="logo-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuceGnKmmyF0V_77yQnFzgBLeB9kAsOO1p5E_AlYJGdpcdd7WOt2-K6hjG-LvyehqkhyA&usqp=CAU" alt="لوگو چپ" style={{ width: '70px', borderRadius: "5px" }} />
                    </div>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">خانه</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ارتباط با ما</a>
                        </li>
                    </ul>
                </div>
                <a className="navbar-brand" href="#">
                    <div className="logo-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1iXJSICqCgserhWeGFVhh2Ec085BQZBXLiNsbekoXgGxudjPJ" alt="لوگو راست" style={{ width: '70px', borderRadius: "5px" }} />
                    </div>
                </a>
            </div>
        </nav>

        <header className="text-center text-blak py-3">
            <h1>شهدا</h1>
        </header>
        <div className="container">
            <div className="card-container p-4 rounded">
                <div className="row justify-content-center">
                    {people.map((person, index) => (
                        <div className="col-md-3 col-6 mb-4" key={index}>
                            <Link to={`/pelak/${person.id}`} className="card text-center bg-light text-dark card-hover oval-card p-1 text-decoration-none">
                                <img src={person.image} alt={person.name} className="card-img-top oval-image m-0" />
                                <div className="card-body">
                                    <div><span style={{color: "red", fontSize: "8px"}}>شهید والامقام</span></div>
                                    <h9 className="card-title" style={{fontSize: "12px"}}>{person.name}</h9>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <footer className="text-center text-white py-3">
            <p>تمامی حقوق محفوظ است © 2024</p>
        </footer>
    </div>
);
}

export default Home;