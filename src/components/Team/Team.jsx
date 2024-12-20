
import React from 'react';
// import rajeev from '../directorimages/rajeevahuja.png';
import '../styles/Dmssg.css';
import karuna from '../TeamPhotos/Karuna Kanwar.jpg';
import riteeka from '../TeamPhotos/ritika_mahajan.jpg';
import narinder from '../TeamPhotos/narinder.jpg';
import mam from '../TeamPhotos/ms__akwinder_kaur_.jpeg';
import dharam from '../TeamPhotos/Dharamvir.jpeg';
import megha from '../TeamPhotos/megha.jpg';
import smita from "../TeamPhotos/smita.jpg";
import satyam from "../TeamPhotos/Satyam.jpg";
import img1 from '../global-images/11.png'
// import img2 from '../global-images/'
// import temp from '../'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const advisor = [
  {
    imgSrc: karuna,
    name: 'Mrs. Karuna Kanwar',
    designation: 'Incubation Manager',
    linkedin: "https://www.linkedin.com/in/karuna-kanwar-50293561/?originalSubdomain=in",
  },
  {
    imgSrc: karuna,
    name: 'Mrs. Karuna Kanwar',
    designation: 'Incubation Manager',
    linkedin: "https://www.linkedin.com/in/karuna-kanwar-50293561/?originalSubdomain=in",
  },
];
const teamMembers = [
  {
    imgSrc: satyam,
    name: 'Satyam Sarma',
    designation: 'Chief Executive Officer',
    linkedin: 'https://www.linkedin.com/in/satyam-sarma-b0071a260/',
  },
  {
    imgSrc: karuna,
    name: 'Ms. Karuna Kanwar',
    designation: 'Incubation Manager',
    linkedin: "https://www.linkedin.com/in/karuna-kanwar-50293561/?originalSubdomain=in",
  },
  {
    imgSrc: riteeka,
    name: 'Ms. Ritika Mahajan',
    designation: 'Startup Liaison Officer',
    linkedin: "https://www.linkedin.com/in/ritika-mahajan-8b6996285/",
  },
  {
    imgSrc: megha,
    name: 'Ms. Megha Bharadwaj',
    designation: 'CSR Officer',
    linkedin: "https://www.linkedin.com/in/karuna-kanwar-50293561/?originalSubdomain=in",
  },
  {
    imgSrc: narinder,
    name: 'Mr. Narinder Kumar',
    designation: 'Office Executive',
    linkedin: "https://www.linkedin.com/in/narinderpreet-singh-gill-011544251/",
  },

  {
    imgSrc: mam,
    name: 'Ms. Akwinder Kaur',
    designation: 'Accounts Executive',
    linkedin: "https://www.linkedin.com/in/akwinder-kaur-744b13251/",
  },
  {
    imgSrc: smita,
    name: 'Mrs. Smita Jha',
    designation: 'Purchase Executive',
    linkedin: "https://www.linkedin.com/in/smita-jha-13b195179",
  },
  {
    imgSrc: dharam,
    name: 'Mr. Dharamvir Singh',
    designation: 'Office Attendant',
    linkedin: "https://www.linkedin.com/in/dharamvir-singh-744027280/",
  },
];

function Team() {
  return (
    <div className='flex justify-center items-center h-auto bg-black'>
      <div className="container mx-5 flex-col">
        {/* <div className=''>
          <h1 className='text-center bg-clip-text text-transparent mb-5 bg-gradient-to-br from-purple-700 to-green-600 text-center mt-5 font-bold text-5xl'>Advisors</h1>
        </div>
        <div className='flex justify-center items-center'>
          <div className="grid xl:grid-cols-2  md:grid-cols-2 gap-3 flex-wrap">
            {advisor.map((member, index) => ( 
              <div key={index} className="outTeam__card hover:scale-90 hover:text-orange-200 transition duration-200 ease-in-out hover:bg-gradient-to-tr from-slate-900 to-green-500">
                <div className='grid grid-cols-1 justify-items-center'>
                  <img src={member.imgSrc} alt={member.name} className="outTeam__cardImg fa-border border-green-400 border-4" />
                  <div className='p-2 font-montserrat font-bold  rounded  text-center'>{member.name}</div>
                  <div className=' font-montserrat rounded  text-center'>{member.designation}</div>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faLinkedin} className='p-5 ' size="3x" color="#0077B5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <h1 className='text-center bg-clip-text text-transparent mb-5 bg-gradient-to-tr from-purple-700 to-green-600 text-center mt-5 font-bold text-5xl'>Dedicated Team</h1>
        <div className='flex justify-center items-center'>
          <div className="grid xl:grid-cols-3  md:grid-cols-2 gap-3 flex-wrap auto-rows-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className={`outTeam__card hover:scale-90 hover:text-orange-200 transition duration-200 ease-in-out hover:bg-gradient-to-tr from-zinc-900 to-purple-500 ${index === 6 ? 'xl:col-start-1' : ''}`}>
                <div className='grid grid-cols-1 justify-items-center'>
                  <img src={member.imgSrc} alt={member.name} className="outTeam__cardImg fa-border border-orange-400 border-4" />
                  <div className='p-2 font-montserrat font-bold  rounded  text-center'>{member.name}</div>
                  <div className=' font-montserrat rounded  text-center'>{member.designation}</div>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faLinkedin} className='p-5 ' size="3x" color="#0077B5" />
                  </a>
                </div>
              </div>
            ))}
            
          </div>

        </div>

      </div>
    </div>
  );
}

export default Team;
