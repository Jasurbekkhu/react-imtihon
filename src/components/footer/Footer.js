import React from 'react'
import "./Footer.css"
import {AiFillFacebook,AiFillInstagram,AiFillYoutube} from "react-icons/ai"
import {TiChartBarOutline} from "react-icons/ti"
import {BsTelegram} from "react-icons/bs"
function Footer() {
    const DATA = [
        {
            id: "u-1",
            img: "https://asaxiy.uz/custom-assets/images/icons/market.svg",
            title: "Endi bozorga borishga hojat yo'q",
            about: "Bizda qulay narxlar va uyga yetkazib berish mavjud"
        },
        // {
        //     id: "u-2",
        //     img: "https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg",
        //     title: "Tez yetkazib berish",
        //     about: "Bizning xizmatimiz sizni ajablantiradi"
        // },
        // {
        //     id: "u-3",
        //     img: "https://asaxiy.uz/custom-assets/images/icons/return.svg",
        //     title: "Siz uchun qulayliklar",
        //     about: "Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati"
        // },
        // {
        //     id: "u-4",
        //     img: "https://asaxiy.uz/custom-assets/images/icons/card.svg",
        //     title: "Bo'lib to'lash",
        //     about: "3, 6, 9 va 12 oy davomida oldindan to'lovsiz"
        // },
    ]
  return (
    <div className='footer'>
      
            {
                DATA?.map((i, inx)=>   <div key={inx} className="wimdow1">
            
            <div className="win__child">
                <img src={i.img} alt="" />
            <h2>{i.title}</h2>
                <h3>{i.about}</h3>
            </div>
            <div className="win__child">
            <img src={i.img} alt="" />
            <h2>{i.title}</h2>
                <h3>{i.about}</h3>
            </div>
            <div className="win__child">
            <img src={i.img} alt="" />
            <h2>{i.title}</h2>
                <h3>{i.about}</h3>
            </div>
            <div className="win__child">
            <img src={i.img} alt="" />
            <h2>{i.title}</h2>
                <h3>{i.about}</h3>
            </div>
        </div>)}
<div className="window__all">
        <div className="wimdow4">
            <h2>Ma'lumotlar</h2>
            <h3>Buyurtma qanday beriladi?</h3>
            <h3>Muddatli toʻlov asosida sotib olishning umumiy qoidalari</h3>
            <h3>Muddatli toʻlov shartlari</h3>
            <h3>Ommaviy oferta (Foydalanuvchi bitimi)</h3>
            <h3>Tovarlarni yetkazib berish va toʻlov turlari</h3>
            <h3>
Buyurtmani bekor qilish va tovarni qaytarish</h3>
            <h3>Biz haqimizda</h3>
            <h3>Promo Kod (Kupon) ni aktivlashtirish!</h3>
            <h3>Olib ketish punktlari</h3>
        </div>

        <div className="wimdow2">
            <h2>Biz bilan aloqa</h2>
            <h3>+998 71 200 01 05</h3>
            <h3>info@asaxiy.uzinfo@asaxiy.uz</h3>
            <h3>Chilonzor 3, ToshkentChilonzor 3, Toshkent</h3>
        </div>

        <div className="wimdow3">
            <h2>Biz ijtimoiy tarmoqlarda :</h2>
            <i className='i'><AiFillFacebook/>
            <span><BsTelegram/></span> 
            <span><AiFillInstagram/></span>
            <span><AiFillYoutube/></span>
            <span><TiChartBarOutline/></span>
            </i>
        </div>
</div>
<hr className='hr'/>
<div className="pay">
    <h2>To'lov turlari :</h2>
    <img src="https://asaxiy.uz/custom-assets/images/apelsin-logo.svg" width={50} alt="" />
    <img src="https://asaxiy.uz/custom-assets/images/payme.svg" width={50} alt="" />
    <img src="https://asaxiy.uz/custom-assets/images/visa.svg" width={50} alt="" />
    <img src="https://asaxiy.uz/custom-assets/images/mastercard.svg" width={30}alt="" />
    <img src="https://asaxiy.uz/custom-assets/images/humo.svg" width={40} alt="" />
    <img src="https://asaxiy.uz/custom-assets/images/uzcard.svg" width={25} alt="" />
</div>
<hr className='hr'/>
<h4>2015-2022 Internet-do’kon asaxiy.uz: Maishiy texnikalar va boshqalar.Mahsulotni yetkazib berish barcha viloyatlarda amalga oshiriladi. Barcha huquqlar himoyalangan.</h4>
    </div>
  )
}

export default Footer