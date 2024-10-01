import './App.css';
import Navbar from './componets/Navbar/Navbar';
import Home from './componets/Home/Home';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import SignIn from './componets/SignIn/SignIn';
import Signup from './componets/SignUp/Signup';
import Cart from './pages/Cart/Cart';
import Profile from './pages/Profile/Profile';
import {useState } from 'react';
import Notification from "./Notification"




function App() {
  const [signupClick, setSignupClick] = useState(false);

  const [signInClick, setSigInpClick] = useState(false);

  const [isUserLogin, setIsUserLogin] = useState(false);

  const [item,setItem] = useState([
    {
    _id: 1,
    Image:"https://media.istockphoto.com/id/518151630/photo/bora-bora-bungalow.jpg?s=612x612&w=0&k=20&c=mYLxQ41-_ZcNuLQ5FoC3pIpmdxVFaSJRkUKbLaZhnOA=",
    place:"Bora Bora",
    country:"New Zealand",
    price:"₹50,127",
    content:"The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is know for its laxurious stays and adventurous activities."

    },

    {
      _id: 2,
      Image:"https://media.istockphoto.com/id/1339071089/photo/machu-picchu-inca-ruins.jpg?s=612x612&w=0&k=20&c=IB4nyTaMi566ef4JM-0nuyFmoOOPqFhhTJktBr7F-s0=",
      place:"Machu Picchu",
      country:"peru",
      price:"₹56,780",
      content:"Huayna Picchu is a mountain in peru, rising over Machu Picchu. This place is Popular among tourists as the sunrise from the sun gate is simply spectacular."
    },

    {
      _id: 3,
    Image:"https://travel.usnews.com/dims4/USNEWS/6d52857/2147483647/resize/600x400%5E%3E/crop/600x400/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Faquatic_life_dZuhRSO.jpg",
    place:"Great barrier Reef",
    country:"Australia",
    price:"₹58,476",
    content:"One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is 'lavish' and 'beauty'."
    },

    {
      _id: 4,
    Image: "https://hblimg.mmtcdn.com/content/hubble/img/Cappadocia/mmt/activities/m_Cappadocia_4-min_l_674_1000.jpg",
    place:"Cappadocia",
    country:"Turkey",
    price:"₹66,830",
    content:"According to the world Tourism Ranking, 45 Million people visit Turkey each yea This place is known for its laxurious stays and adventurous activities."
    },

    {
      _id: 5,
    Image:"https://www.goatsontheroad.com/wp-content/uploads/2015/02/best-things-to-do-in-guanajuato-mexico.jpg",
    place:"Guanajuato",
    country:"Mexico",
    price:"₹91,891",
    content:"A city in central Mexico, Guanajuato is know for its history of silver mining and colonial architecture. the houses in the city are very attractively painted with the most bright colors available."
    },

    {
      _id: 6,
    Image:"https://traveltipzone.com/wp-content/uploads/cinque-terre-what-to-know-when-traveling-to-cinque-terre-img-7359-e1681112282749-1200x661.jpg",
    place:"Cinque Terre",
    country:"Italy",
    price:"₹70,171",
    content:"The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodies and love seafood, you will be exhilarated with the choice you are about to get here."
    },

    {
      _id: 7,
    Image:"https://www.fourseasons.com/alt/img-opt/~70..0,0000-38,8027-2500,0000-1406,2500/publish/content/dam/fourseasons/images/web/JTT/JTTS_191.jpg",
    place:"Angkor Wat",
    country:"Cambodiya",
    price:"₹65,994",
    content:"Angkot wat represents the entira range of khner art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its laxurious."
    },


    {
      _id: 8,
    Image:"https://th-thumbnailer.cdn-si-edu.com/KPHiwfaC7pBGVYeQOt3_RF6L4Dw=/800x450/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
    place:"Taj Mahal",
    country:"India",
    price:"₹83,537",
    content:"An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its laxurious."
    },

    {
      _id: 9,
    Image:"https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/article/stories/wanderlust/island-hopper-the-best-islands-around-bali/gili-meno.jpg?modified=20190820101836",
    place:"Bali Island",
    country:"Indonesia",
    price:"₹41,768",
    content:"Bali is an Indonesian Island and ine of the best holiday destination in the indonesian archipelago. Bali is known for its volcanic mountains,histoy."
    },


    {
      _id: 10,
    Image:"https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/09/shutterstock_219250780-800.jpg",
    place:"Zermatt",
    country:"Switzerland ",
    price:"₹81,350",
    content:"A picturesque country in Central Europe, is renowned for its stunning Alps, crystal-clear lakes, charming villages, and vibrant cities. It offers a blend of natural beauty."
    },

    {
      _id: 11,
    Image:"https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/03/05150015/bergen.jpeg",
    place:"Bergen",
    country:"Norway",
    price:"₹56,987",
    content:"A Scandinavian country, boasts stunning fjords, Northern Lights, vibrant cities, and rich Viking history, offering unparalleled natural beauty and cultural heritage."
    },

    {
      _id: 12,
    Image:"https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2019/04/LUX-North-Male-Atoll-Feature.jpg" ,
    place:"Male Atoll",
    country:"Maldives",
    price:"₹88,259",
    content:"The Maldives boasts stunning white beaches, turquoise waters, vibrant coral reefs, and luxurious resorts, making it a tropical paradise."
    },
    
  ])

  const [packagedata,setPackagedata] = useState([
    {
    _id: 13,
    Image:'https://shegowandering.com/wp-content/uploads/2021/06/130-1024x683.png',
    country:"United Kingdom",
    price:"₹42,500"

    },
    {
      _id: 14,
    Image:'https://www.shutterstock.com/image-photo/sydney-australia-november-10-2015-600nw-383965549.jpg',
    country:"Austrelia",
    price:"₹45,780"
    },

    {
      _id: 15,
    Image:'https://media.istockphoto.com/id/154918211/photo/city-of-dubai-burj-khalifa.jpg?s=612x612&w=0&k=20&c=IQ1upJGlnISqrBcBpmDS8HTCw-u6j08GkrFwV2QEMQk=',
    country:"Dubai",
    price:"₹55,620"
    },

    {
      _id: 16,
    Image:'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_590481020_20200203140332.jpg',
    country:"Malesiya",
    price:"₹49,800"
    },

    {
      _id: 17,
    Image:'https://www.transindiatravels.com/wp-content/uploads/lotus-temple.jpg',
    country:"India",
    price:"₹60,000"
    },

    {
      _id: 18,
    Image:'https://www.planetware.com/photos-large/USNY/usa-best-places-new-york.jpg',
    country:"United States",
    price:"₹53,410"
    },
  ])
 

  return (
    <div>
      {signupClick ? <Signup  setSigInpClick={setSigInpClick} setSignupClick={setSignupClick} isUserLogin={setIsUserLogin} /> : <></>}
      {signInClick ? <SignIn setSignupClick={setSignupClick}   setSigInpClick={setSigInpClick} isUserLogin={setIsUserLogin} /> : <></>}

 <BrowserRouter>
   
 <Navbar setSignupClick={setSignupClick} signupClick={signupClick}  setSigInpClick={setSigInpClick} signInClick={signInClick} isUserLogin={isUserLogin} setIsUserLogin={setIsUserLogin} />
        <Routes>
          <Route path="/" element={<Home item={item} setItem={setItem} packagedata={packagedata} setPackagedata={setPackagedata} />}/>
          <Route path='/Cart' element={<Cart item={item} setItem={setItem} packagedata={packagedata} setPackagedata={setPackagedata}/>} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter> 

     <Notification />
     
    </div>
  );
}




export default App;
