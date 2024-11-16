import React, {useState} from 'react';
import {useParams} from 'react-router-dom'; // اضافه کردن این خط
import {Tabs, Tab} from 'react-bootstrap';
import './pelak.css'; // Custom CSS for background and card effects

var image_address1 = "https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919"

var d = `هورزلر، که احتمالاً ناشناخته‌ترین سرمربی لیگ انگلیس است، گفت: «این فقط سه امتیاز است، اما سیتی یکی از بهترین تیم‌های جهان و گواردیولا یکی از بهترین مربیان است. این پیروزی باید به ما کمک کند تا به خود افتخار کنیم و اعتماد به نفس بگیریم.»
هورزلر تنها جوان‌ترین سرمربی دائمی تاریخ لیگ برتر نیست. او از صعود به بوندسلیگا با سن پائولی آمده و به جوان‌ترین سرمربی تبدیل شده که به بوندسلیگا صعود کرده است. امره جان، که با او در آکادمی بایرن هم‌تیمی بود، پیش‌بینی کرد: «او در مربیگری دوران بزرگی خواهد داشت.»`

var b = `علاوه بر فشار متقابل، بازی با خط دفاعی جلو کشیده نیز نقش مهمی دارد: «خط دفاعی جلو کشیده نیاز به کار زیادی دارد، اما اگر به صورت فشرده دفاع کنی، درصد بازیابی توپ و رسیدن به جلو سریع‌تر بالاست.»
او دوست دارد از بالا دفاع کند و با بیشترین تعداد بازیکن ممکن به محوطه جریمه حریف حمله کند: «همیشه سعی می‌کنم درصد گلزنی را افزایش دهم و این کار را با حمله به محوطه جریمه انجام می‌دهم.»
تیم سن پائولی او به بوندسلیگا صعود کرد و تیمی بود که بیشترین شوت‌ها را در هر بازی (۱۵.۶۸)، بیشترین مسافت طی شده (۱۲۲.۲۴ کیلومتر) و بیشترین دویدن‌های با شدت بالا را در بوندسلیگا داشت.`

function Pelak() {
    const {id} = useParams()

    const [activeKey, setActiveKey] = useState('will');

    const person = {
        id: 1,
        name: 'عبداله باقری',
        image: image_address1,
        will: d,
        memories: [d, b],
        fatherName: "علی",
        birthDate: "1361/02/06",
        martyrdomDate: "1369/06/12"
    }
    const [selectedImage, setSelectedImage] = useState(null);

    const photos = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuceGnKmmyF0V_77yQnFzgBLeB9kAsOO1p5E_AlYJGdpcdd7WOt2-K6hjG-LvyehqkhyA&usqp=CAU", 'https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919', 'https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919', 'https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919', 'https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919', 'https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919', 'https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919', 'https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919', 'https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919', 'https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919', 'https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919', 'https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919', 'https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919', 'https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919', 'https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919', 'https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919', 'https://shafighefakeh.ir/gallery/var/resizes/1403139185/6104023.jpg?m=1723436919', // مسیر عکس‌های بیشتر
    ];

    const showFullScreen = (image) => {
        setSelectedImage(image);
    };

    const closeFullScreen = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="logo-container">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1iXJSICqCgserhWeGFVhh2Ec085BQZBXLiNsbekoXgGxudjPJ"
                            alt="لوگو چپ"
                            style={{width: '45px', borderRadius: "5px"}}/>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">خانه</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://ble.ir/hosseyyn">ارتباط با ما</a>
                            </li>
                        </ul>
                    </div>
                    <div className="logo-container">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuceGnKmmyF0V_77yQnFzgBLeB9kAsOO1p5E_AlYJGdpcdd7WOt2-K6hjG-LvyehqkhyA&usqp=CAU"
                            alt="لوگو راست"
                            style={{width: '45px', borderRadius: "5px"}}/>
                    </div>
                </div>
            </nav>
            <div className="container pelak-info bg-night">
                <div className="pelak-header">
                    <div className="pelak-top my-3 gap-3">
                        <img src={person.image} alt={person.name} className="main-image mb-3"/>
                        <div className="old-block">
                            <h1 className="text-white">{person.name}</h1>
                            <p className="text-white">فرزند {person.fatherName}</p>
                            <div className={"d-inline-block"}>
                                <p className="old-fields biurth bg-success"><strong>تاریخ
                                    تولد:</strong> {person.birthDate}
                                </p>
                                <p className="old-fields death bg-danger"><strong>تاریخ
                                    شهادت:</strong> {person.martyrdomDate}</p>
                            </div>
                        </div>
                    </div>

                    <div className="personal-info my-3">
                        <p><strong>محل شهادت:</strong> {person.fatherName}</p>
                        <p><strong>عملیات:</strong> {person.fatherName}</p>
                        <p><strong>شغل:</strong> {person.fatherName}</p>
                    </div>
                </div>


                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mt-1"
                    activeKey={activeKey}
                    onSelect={(k) => setActiveKey(k)}
                    justify
                >
                    <Tab eventKey="will" title="وصیت‌نامه">
                        <div className="tab-btn will-section my-3">
                            <p>{person.will}</p>
                        </div>
                    </Tab>
                    <Tab eventKey="picturse" title="تصاویر">
                        <div className="tab-btn photo-gallery my-3">
                            <div className="photo-scroller">
                                {photos.map((photo, index) => (<img
                                    key={index}
                                    src={photo}
                                    alt={`photo-${index}`}
                                    className="gallery-photo"
                                    onClick={() => showFullScreen(photo)}
                                />))}
                            </div>
                        </div>
                        {selectedImage && (<div className="full-screen-overlay" onClick={closeFullScreen}>
                            <img src={selectedImage} alt="Full Screen" className="full-screen-image"/>
                        </div>)}
                    </Tab>
                    <Tab eventKey="memorise" title="خاطرات">
                        <div className="tab-btn memories-section my-3">
                            <ul>
                                {person.memories.map((memory, index) => (<li key={index}>{memory}</li>))}
                            </ul>
                        </div>
                    </Tab>
                </Tabs>

            </div>
        </div>
    );
}

export default Pelak;
