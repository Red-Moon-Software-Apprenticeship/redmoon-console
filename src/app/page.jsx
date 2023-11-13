import Layout from '@/components/Layout/Layout'
import UnderConstruction from '@/components/UnderConstruction'
import Image from 'next/image';
import './home.css'


const Home = () => {

  return (
    <Layout>
      <div id='home' className='flex-center-vert flex-col '>
        <Image

          src='/redMoonApprenticeship.png'
          alt='Graphic for the Redmoon Apprenticeship'
          width={800}
          height={750}
          style={{
            width: '70%',
            height: 'auto'
          }}
        />
        <UnderConstruction />
      </div>
    </Layout>
  )
}

export default Home;