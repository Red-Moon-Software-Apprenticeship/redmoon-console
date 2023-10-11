import React from 'react';
import Layout from '@/components/Layout/Layout';
//Need to fill out the concrete steps partners should take to finalize their account set up, payment, etc
//Should be interactive, if we say, "go here for sign up", make it a link with that opens a new tab 
const ThankYouPartner = () => {


  return (
    <Layout>
      <h2>Thank you for joining the Redmoon Apprenticeship</h2>
        <p>
          When I started the Redmoon apprenticeship, I had the dream of trying to help as many people get into Software Engineering as possible.
          My belief is that it doesn't matter what your background is, as long as you have the grit and the go-to attitude, you can make it in tech.
        </p>
      <h3>To complete your account setup:</h3>

      {/* should have some sort of ul here labeling the steps */}


      <p>
        Partners obviously play a huge role in Redmoon's vision. Once again, thank you for your support in making Software Engineering opporitunities
        to ambitious people from all walks of life.
      </p>

      <span>
        -Luke Hovee
      </span>
    </Layout>
  );
};

export default ThankYouPartner;