import React from 'react';
import ServiceCard from "./servicecard";


function Services() {
   return (
     <div className="p-2 m-2" id="services">
       <h1 className="text-customColor text-center text-2xl my-4 p-2 font-bold font-heading">What do we Provide?</h1>
       <div className="flex items-center space-x-2 flex-wrap space-y-2 justify-center">
         <p></p>
     <ServiceCard 
       heading="Affordable Services"
       content="Our travel agency prides itself on providing budget-friendly options, so you can explore amazing destinations without overspending."
       />
        <ServiceCard 
          heading="Guided Experience"
          content="Let our expert guides lead you through remarkable journeys, offering insights and knowledge to make your travels truly unforgettable."
          />
        <ServiceCard 
          heading="Food & Drinks"
          content="Enjoy the convenience and taste of local cuisine with our inclusive food options, ensuring a delightful culinary adventure on every trip."
          />
         </div>
     </div>
   );
}
export default Services;