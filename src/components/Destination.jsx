import React from 'react';
import Card from './Card';

function Destination() {

  
   return(
     <div className="flex flex-col items-center space-y-2 p-2 my-2" id="destination">
     <h1 className="text-2xl text-customColor font-bold text-center my-2">Where to Go?</h1>
       <div className="flex items-center space-x-2 flex-wrap space-y-2 justify-center">
         <p></p>
       <Card 
         head="Buckingham Palace"
         location="London, England"
         content="Explore the official residence of the British monarch in London. Discover the iconic Changing of the Guard ceremony and delve into the rich history of this architectural masterpiece."
          img="./public/images/palace.jpg"
        />   
       <Card 
         head="Eiffel Tower"
         location="Paris, France"
          img="./public/images/tower.jpg"
         content="Ascend the wrought-iron marvel that defines the Paris skyline. Enjoy breathtaking panoramic views of Paris, indulge in fine dining, and experience the romance and beauty of this iconic landmark."
       />
       <Card 
         head="Alaska"
         location="Alaska"
         content="Witness nature's spectacular light show in the Arctic regions. Marvel at vibrant colors dancing across the night sky, an awe-inspiring display that illuminates the darkness with its ethereal beauty."
         img="./public/images/alaska.jpg"
       />
         <Card
           head="Statue of Liberty"
           location="New York, America"
           img="./public/images/statue.jpg"
           content="Symbolizing freedom and democracy, this colossal copper statue in New York Harbor welcomes visitors with its torch held high. Learn about its history, climb to the crown for stunning views, and appreciate its significance as a beacon of hope and liberty."
          />
       </div>
     </div>
   );
}

export default Destination;