import React from 'react';
import  './design.css'

const HistoryFactsComponent = () => {
  const historyFacts = [
    "* The Indus Valley Civilization, one of the world's oldest urban civilizations, flourished in India around 2500 BCE.",
    "* Maharashtra has a rich history dating back to ancient times, with various dynasties ruling over the region.",
    "* The Maratha Empire, founded by Chhatrapati Shivaji Maharaj, was one of the most significant powers in India during the 18th century.",
    "* The Battle of Panipat, fought in 1761, had a major impact on Indian history and marked the beginning of British dominance.",
    "* The Peshwas, the prime ministers of the Maratha Empire, played a crucial role in shaping Maharashtra's history.",
    "* The British East India Company gained control over Mumbai (then known as Bombay) in 1668 and later developed it into a major trading hub.",
    "* Mahatma Gandhi, the father of the Indian independence movement, initiated several nonviolent protests and movements in Maharashtra.",
    "* The city of Pune served as the capital of the Maratha Empire and played a significant role in the Indian freedom struggle.",
    "* The first railway line in India was laid between Mumbai and Thane in Maharashtra in 1853.",
    "* The Samyukta Maharashtra movement in the 1950s led to the creation of the state of Maharashtra on May 1, 1960.",
    "* Maharashtra is home to several UNESCO World Heritage Sites, including Ajanta and Ellora Caves, Chhatrapati Shivaji Terminus, and Elephanta Caves.",
    "* The Raigad Fort, located in Maharashtra, was the capital of the Maratha Empire and holds historical significance.",
    "* The Mughal Empire under Emperor Aurangzeb annexed several regions of Maharashtra in the 17th century.",
    "* Shivneri Fort, located near Pune, is the birthplace of Chhatrapati Shivaji Maharaj.",
    "* The Indian National Congress, one of India's major political parties, was founded in Maharashtra in 1885.",
    "* Maharashtra played a vital role in the Satyagraha and Quit India movements during India's struggle for independence.",
    "* The Ellora Caves in Maharashtra showcase an impressive blend of Hindu, Buddhist, and Jain rock-cut temples and monasteries.",
    "* The ancient city of Paithan in Maharashtra was a major center of trade and known for its vibrant textiles.",
    "* The Bollywood film industry, based in Mumbai, Maharashtra, is one of the largest and most influential film industries in the world.",
    "* The Kailasa Temple at the Ellora Caves is the world's largest monolithic sculpture, carved out of a single rock.",
    "* The Battle of Pratapgad, fought in 1659, was a significant battle between the forces of Shivaji Maharaj and the Adil Shahi Sultanate.",
    "* The Aga Khan Palace in Pune served as a prison for Mahatma Gandhi and his wife, Kasturba Gandhi, during the Quit India movement.",
    "* Maharashtra is known for its vibrant folk art forms, including Lavani, Tamasha, and Powada.",
    "* The Gateway of India, an iconic monument in Mumbai, was built to commemorate the visit of King George V and Queen Mary to India.",
    "* The state of Maharashtra is named after the goddess Maha Lakshmi, the presiding deity of the region.",
    "* The Nashik Kumbh Mela, held every 12 years, is one of the largest religious gatherings in the world.",
    "* The Rashtrakuta dynasty, with its capital in Manyakheta (present-day Malkhed in Maharashtra), ruled a vast empire in the Deccan region.",
    "* The Ajanta Caves in Maharashtra house exquisite Buddhist cave paintings and sculptures dating back to the 2nd century BCE.",
    "* Maharashtra has a rich tradition of saints and spiritual leaders, including Saint Tukaram, Saint Dnyaneshwar, and Saint Eknath.",
    "* The Shaniwar Wada, a historic fortification in Pune, was the seat of the Peshwas and witnessed several key events in Maratha history.",
    "* The Mahalakshmi Temple in Kolhapur is one of the most famous temples in Maharashtra and attracts devotees from all over the country.",
    "* The Ashtavinayak temples, a group of eight ancient temples dedicated to Lord Ganesha, are located in Maharashtra.",
    "* The Indian state of Maharashtra has a diverse cuisine, known for its spicy and flavorful dishes like Vada Pav, Puran Poli, and Misal Pav.",
    "* The Tadoba Andhari Tiger Reserve in Maharashtra is one of the largest and oldest national parks in India.",
    "* Maharashtra has a rich tradition of classical music and dance forms, with renowned artists like Pandit Bhimsen Joshi and Pt. Birju Maharaj hailing from the state.",
    "* The UNESCO World Heritage Site of Elephanta Caves, located on Elephanta Island in Mumbai Harbor, features ancient rock-cut caves dedicated to Lord Shiva.",
    "* The Solapur Chaddar, a traditional hand-woven blanket, is a famous textile product from Maharashtra.",
    "* The Lonar Crater Lake, located in the Buldhana district of Maharashtra, is the world's third-largest crater formed by a meteorite impact.",
    "* The Vipassana International Academy, a renowned center for meditation, is situated in Igatpuri, Maharashtra.",
    "* The Bhimashankar Wildlife Sanctuary in Maharashtra is home to the endangered Indian Giant Squirrel and several other wildlife species.",
    "* Maharashtra is known for its vibrant festivals, including Ganesh Chaturthi, Diwali, Gudi Padwa, and Makar Sankranti.",
    "* The Daulatabad Fort, also known as Devagiri Fort, near Aurangabad, witnessed the rule of several dynasties, including the Yadavas and the Delhi Sultanate.",
    "* The Khandoba Temple in Jejuri is a famous pilgrimage site dedicated to Lord Khandoba, an incarnation of Lord Shiva.",
    "* The Maharashtra State Police is one of the largest police forces in the country, responsible for maintaining law and order in the state.",
    "* The Hazur Sahib Nanded, located in Nanded, Maharashtra, is one of the five Takhts (thrones) of Sikhism and holds religious significance for Sikhs.",
    "* The Lavasa city near Pune is India's first planned hill city and is known for its picturesque surroundings and infrastructure.",
    "* The Sindhudurg Fort, located on an island off the coast of Malvan in Maharashtra, is a famous sea fort built by Chhatrapati Shivaji Maharaj.",
    "* Maharashtra is home to several renowned educational institutions, including the University of Mumbai, Savitribai Phule Pune University, and IIT Bombay.",
    "* The Ajinkyatara Fort in Satara offers panoramic views of the surrounding valleys and is a popular trekking destination.",
    "* The Kolhapuri chappal, a traditional Indian footwear style, originated in Kolhapur, Maharashtra, and is known for its distinctive design.",
  ];

 
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">50 Interesting History Facts about Indian History and Maharashtra</h2>
      <ul className="list-group background-image-list">
        {historyFacts.map((fact, index) => (
          <li key={index} className="list-group-item">{fact}</li>
        ))}
      </ul>
    </div>
  );
  
  
  // return (
  //   <div className="container mt-4">
  //     <h2 className="text-center mb-4">50 Interesting History Facts about Indian History and Maharashtra</h2>
  //     <ul className="list-group">
  //       {historyFacts.map((fact, index) => (
  //         <li key={index} className="list-group-item">{fact}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default HistoryFactsComponent;
