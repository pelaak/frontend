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

    return (<div className="container bg-night">
        <div className="pelak-header">
            <div className="pelak-top my-3 gap-3">
                <img src={person.image} alt={person.name} className="main-image mb-3"/>
                <div className="old-block">
                    <h1>{person.name}</h1>
                    <p>فرزند {person.fatherName}</p>
                    <p className="old-fields bg-success bg-opacity-50"><strong>تاریخ
                        تولد:</strong> {person.birthDate}
                    </p>
                    <p className="old-fields bg-danger bg-opacity-50"><strong>تاریخ
                        شهادت:</strong> {person.martyrdomDate}</p>
                </div>
            </div>

            <div className="pelak-btn personal-info my-3">
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
                <div className="will-section my-3">
                    <p>{person.will}</p>
                </div>
            </Tab>
            <Tab eventKey="picturse" title="تصاویر">
                <div className="photo-gallery my-3">
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
                <div className="memories-section my-3">
                    <ul>
                        {person.memories.map((memory, index) => (<li key={index}>{memory}</li>))}
                    </ul>
                </div>
            </Tab>
        </Tabs>

    </div>);
}

export default Pelak;
