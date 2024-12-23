
import React from 'react';
// import rajeev from '../directorimages/rajeevahuja.png';
import './Team.css';
import colonel from './colonel.JPG';
import general from './general.jpg';
import atharva from './atharva.png';
// import img2 from '../global-images/'
// import temp from '../'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const teamMembers = [
  {
    imgSrc: general,
    name: 'Retd. Lt. Gen. S.S. Mahal',
    designation: 'Professor Of Practice',
    linkedin: "https://www.linkedin.com/in/lt-gen-surinder-singh-mahal-7789b82b9/",
  },
  {
    imgSrc: atharva,
    name: 'Atharva Poundarik',
    designation: 'Faculty In-Charge',
    linkedin: 'https://www.linkedin.com/in/atharva-poundarik-44723b44/',
  },
  {
    imgSrc: colonel,
    name: 'Retd. Col. Prabir Sengupta',
    designation: 'Professor Of Practice',
    linkedin: 'https://www.linkedin.com/in/colprabirsengupta/',
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
        <br />
        <br />
        <br />
        <br />
        <h1 className='text-center bg-clip-text text-transparent mb-5 bg-gradient-to-tr from-red-100 to-blue-300 text-center mt-5 font-montserrat font-bold text-5xl'>Dedicated Team</h1>
        <div className='flex justify-center items-center'>
          <div className="grid xl:grid-cols-3  md:grid-cols-2 gap-3 flex-wrap auto-rows-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className={`outTeam__card hover:scale-90 hover:text-orange-200 transition duration-200 ease-in-out hover:bg-gradient-to-tr from-zinc-900 to-purple-500 ${index === 6 ? 'xl:col-start-1' : ''}`}>
                <div className='grid grid-cols-1 justify-items-center'>
                  <img src={member.imgSrc} alt={member.name} className="outTeam__cardImg fa-border border-yellow-500 border-4" />
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
