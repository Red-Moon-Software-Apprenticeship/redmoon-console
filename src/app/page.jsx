import Layout from '@/components/Layout/Layout'
import UnderConstruction from '@/components/UnderConstruction'
import Image from 'next/image';
import './home.css'


const Home = () => {

  return (
    <Layout>
      <div id='home' className='flex-center-vert flex-col '>
        <Image
          id='home-photo'
          src='/redMoonApprenticeship.png'
          alt='Graphic for the Redmoon Apprenticeship'
          width={800}
          height={750}
                  />
        <UnderConstruction />
      </div>
    </Layout>
  )
}

export default Home;