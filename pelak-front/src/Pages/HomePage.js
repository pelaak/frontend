// src/App.js
import React from 'react';
import './homepage.css'; // Custom CSS for background and card effects

var image_address1 = "https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919"
var image_address2 = "https://weblight.ir/wp-content/uploads/farhang-o-tamaddon/mashahir/shahid/ebrahim-hadi/pic/ebrahim-hadi-16.jpg?_t=1628244649"
var image_address3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuUq3k3HcnTaapUobFHDtrrdUN8MeFFzPVQ&s"

function Home() {
  const people = [
    { name: 'عبداله باقری', image: image_address1 },
    { name: 'ابراهیم هادی', image: image_address2 },
    { name: 'قاسم سلیمانی', image: image_address3 },
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
                            <a className="nav-link" href="#">درباره ما</a>
                        </li>
                    </ul>
                </div>
                <a className="navbar-brand" href="#">
                    <div className="logo-container">
                        <img src="https://static.heyat.co/files/upload/disks_pre-images/ramezan/disk/heyat.co-nazr-mandegar-3-1.jpg" alt="لوگو راست" style={{ width: '70px', borderRadius: "5px" }} />
                    </div>
                </a>
            </div>
        </nav>

        <header className="text-center text-blak py-3">
            <h1>شهدا</h1>
        </header>
        <div className="container">
            <div className="card-container p-4 rounded">
                <div className="row">
                    {people.map((person, index) => (
                        <div className="col-6 mb-4" key={index}>
                            <div className="card text-center bg-light text-dark card-hover oval-card p-1">
                                <img src={person.image} alt={person.name} className="card-img-top oval-image m-0" />
                                <div className="card-body">
                                    <div><span style={{color: "red", fontSize: "10px"}}>شهید والامقام</span></div>
                                    <h7 className="card-title">{person.name}</h7>
                                </div>
                            </div>
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