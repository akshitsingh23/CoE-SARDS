
// import React from 'react';
// // import rajeev from '../directorimages/rajeevahuja.png';
// import './Team.css';
// import colonel from './colonel.JPG';
// import general from './general.jpg';
// import atharva from './atharva.png';
// import harbans from './harbans.jpg';
// import admiral from './admiral.jpg';
// import vir from './Vir.jpeg';
// import prabir2 from './prabir2.jpg';
// // import img2 from '../global-images/'
// // import temp from '../'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';



// const teamMembers = [
//   {
//     imgSrc: general,
//     name: 'Lt. Gen. Surinder S. Mahal PVSM, AVSM, VSM (Retd)',
//     designation: 'Professor Of Practice',
//     linkedin: "https://www.linkedin.com/in/lt-gen-surinder-singh-mahal-7789b82b9/",
//   },
//   {
//     imgSrc:admiral,
//     name: 'Rear Adm Brijesh Vashishta (Retd)',
//     designation: 'Professor Of Practice',
//     linkedin: 'https://www.linkedin.com/in/',
//   },
//   {
//     imgSrc: vir,
//     name : "Virbhadra Singh Rawat",
//     designation : "Professor of Practice",
//     linkedin : "https://www.linkedin.com/in/virbhadra-singh-rawat-018359168",
//   },
//   {
//     imgSrc: atharva,
//     name: 'Dr. Atharva Poundarik',
//     designation: 'Faculty In-Charge',
//     linkedin: 'https://www.linkedin.com/in/atharva-poundarik-44723b44/',
//   },
//   {
//     imgSrc: colonel,
//     name: 'Col. Prabir Sengupta VSM (Retd)',
//     designation: 'Adjunct Faculty',
//     linkedin: 'https://www.linkedin.com/in/colprabirsengupta/',
//   },
  
//   {
//     imgSrc: harbans,
//     name: 'Harbans Bharadwaj (Veteran)',
//     designation: 'Sr. Executive Officer',
//     linkedin: '/',
//   }
// ];

// function Team() {
//   return (
//     <div className='flex justify-center items-center h-auto bg-black'>
//       <div className="container mx-5 flex-col">
//         <br />
//         <br />
//         <br />
//         <br />
//         <h1 className='text-center bg-clip-text text-transparent mb-5 bg-gradient-to-tr from-red-100 to-blue-300 text-center mt-5 font-montserrat font-bold text-5xl'>Dedicated Team</h1>
//         <div className='flex justify-center items-center'>
//           <div className="grid xl:grid-cols-3   md:grid-cols-2 gap-3 flex-wrap auto-rows-auto">
//             {teamMembers.map((member, index) => (
//               <div key={index} className={`outTeam__card hover:scale-105 hover:text-orange-200 transition duration-200 ease-in-out hover:bg-gradient-to-tr from-zinc-900 to-blue-500 ${index === 6? 'xl:col-start-3' : ''}`}>
//                 <div className='flex flex-col justify-between h-[400px]'>
//                   <div className='grid grid-cols-1 justify-items-center'>
//                     <img src={member.imgSrc} alt={member.name} className="outTeam__cardImg fa-border border-yellow-500 border-4" />
//                     <div className='p-2 font-montserrat font-bold rounded text-center'>{member.name}</div>
//                     <div className='font-montserrat rounded text-center'>{member.designation}</div>
//                   </div>
//                   <div className='flex justify-center'>
//                     <Link to={member.linkedin} target="_blank" rel="noopener noreferrer">
//                       <FontAwesomeIcon icon={faLinkedin} className='p-5' size="3x" color="#0077B5" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}

//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default Team;
import React from 'react';
import './Team.css';
import colonel from './colonel.JPG';
import general from './general.jpg';
import atharva from './atharva.png';
import harbans from './harbans.jpg';
import admiral from './admiral.jpg';
import vir from './Vir.jpeg';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const teamMembers = {
  administration: [
    {
      imgSrc: atharva,
      name: 'Dr. Atharva Poundarik',
      designation: 'Faculty In-Charge',
      linkedin: 'https://www.linkedin.com/in/atharva-poundarik-44723b44/',
    },
    {
      imgSrc: colonel,
      name: 'Col. Prabir Sengupta VSM (Retd)',
      designation: 'Adjunct Faculty',
      linkedin: 'https://www.linkedin.com/in/colprabirsengupta/',
    },
    {
      imgSrc: harbans,
      name: 'Harbans Bharadwaj (Veteran)',
      designation: 'Sr. Executive Officer',
      linkedin: '/',
    },
  ],
  professorsOfPractice: [
    {
      imgSrc: general,
      name: 'Lt. Gen. Surinder S. Mahal PVSM, AVSM, VSM (Retd)',
      designation: 'Professor Of Practice',
      linkedin: 'https://www.linkedin.com/in/lt-gen-surinder-singh-mahal-7789b82b9/',
    },
    {
      imgSrc: admiral,
      name: 'Rear Adm Brijesh Vashishta (Retd)',
      designation: 'Professor Of Practice',
      linkedin: 'https://www.linkedin.com/in/',
    },
    {
      imgSrc: vir,
      name: 'Virbhadra Singh Rawat',
      designation: 'Professor of Practice',
      linkedin: 'https://www.linkedin.com/in/virbhadra-singh-rawat-018359168',
    },
  ],
};

function Team() {
  return (
    <div
      className="flex justify-center items-center h-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10"
    >
      <div className="container mx-5 flex-col">
        <br />
        <br />
        <h1 className="text-center bg-clip-text text-transparent mb-5 bg-gradient-to-tr from-red-400 to-blue-300 text-center mt-5 font-montserrat font-bold text-5xl">
          Dedicated Team
        </h1>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Administration Section */}
          <div className='flex flex-col items-center '>
            <h2 className="text-center text-orange-400 font-montserrat font-bold text-4xl mb-5">
              Administration
            </h2>
            <div className="grid sm:grid-cols-2 gap-5 ">
              {teamMembers.administration.map((member, index) => (
                <div
                  key={index}
                  className="outTeam__card hover:scale-105 hover:text-orange-200 transition duration-200 ease-in-out bg-gradient-to-br from-gray-900 to-gray-700 shadow-lg rounded-lg p-5"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="grid grid-cols-1 justify-items-center">
                      <img
                        src={member.imgSrc}
                        alt={member.name}
                        className="outTeam__cardImg fa-border border-orange-400 border-4 rounded-full"
                      />
                      <div className="mt-3 p-2 font-montserrat font-bold rounded text-center text-lg">
                        {member.name}
                      </div>
                      <div className="font-montserrat rounded text-center text-gray-400">
                        {member.designation}
                      </div>
                    </div>
                    <div className="flex justify-center mt-3">
                      <Link to={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="p-5 hover:text-blue-300"
                          size="2x"
                          color="#0077B9"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professors of Practice Section */}
          <div className='flex flex-col items-center'>
            <h2 className="text-center text-blue-400 font-montserrat font-bold text-4xl mb-5">
              Professors of Practice
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {teamMembers.professorsOfPractice.map((member, index) => (
                <div
                  key={index}
                  className="outTeam__card hover:scale-105 hover:text-blue-200 transition duration-200 ease-in-out bg-gradient-to-br from-gray-800 to-gray-700 shadow-lg rounded-lg p-5"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="grid grid-cols-1 justify-items-center">
                      <img
                        src={member.imgSrc}
                        alt={member.name}
                        className="outTeam__cardImg fa-border border-blue-400 border-4 rounded-full"
                      />
                      <div className="mt-3 p-2 font-montserrat font-bold rounded text-center text-lg">
                        {member.name}
                      </div>
                      <div className="font-montserrat rounded text-center text-gray-400">
                        {member.designation}
                      </div>
                    </div>
                    <div className="flex justify-center mt-3">
                      <Link to={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="p-5"
                          size="2x"
                          color="#0077B5"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
