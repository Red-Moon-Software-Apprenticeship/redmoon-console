import React from 'react';
import Layout from '@/components/Layout/Layout';
const ThankYouApplicant = () => {


  return (
    <Layout>
      <h2>Thank you for applying to the Redmoon Apprenticeship</h2>
      <p>Here are your next steps to joining:</p>
      <ul>
        <li>In your email inbox, you should find a confirmation link, go ahead and confirm your email for us.</li>
        <li>Afterwards, make your way over to the navbar, you should see a tab that lists Redmoon's open source projects.</li>
        <li>Choose one of these to contribute to, make a pull request to one of these projects.</li>
        <li>If it's approved, we'll send over the application packet.</li>
      </ul>
      <p> 
        When I started the Redmoon apprenticeship, I had the dream of trying to help as many people get into Software Engineering as possible.
        My belief is that it doesn't matter what your background is, as long as you have the grit and the go-to attitude, you can make it in tech.
      </p>
      <p>
        By joining Redmoon, you've shown that you're willing to take that first big step on your Software Engineering journey. Redmoon and I are excited to have you with us.

      </p>
      <div>

        <span>
          Ready.Set.Code.
        </span>
      </div>
      <span>
        - Luke Hovee
      </span>
      
    </Layout>
  );
};

export default ThankYouApplicant;