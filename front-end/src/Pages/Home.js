import React from 'react'
import Blogs from '../Components/Blogs'
import SignBtn from '../Components/SignBtn'
import girls from "../Components/images/girls.jpg"
import eyes from "../Components/images/eyes.gif"
import cat from "../Components/images/cat.gif"
import round from "../Components/images/round.gif"
import scare from "../Components/images/scare.jpg"
import melt from "../Components/images/melt.gif"
import oldman from "../Components/images/oldman.jpg"
import one from '../Components/images/num/1.png'
import two from '../Components/images/num/2.png'
import three from '../Components/images/num/3.png'
import four from '../Components/images/num/4.png'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <div className='container'>
        <div className='header mt-5 ps-5 pe-5'>
            <h1 className='heading-main'>Explore this website further to discover more about a person's deepest brain region.</h1>
        </div>
        <div className='header-bot mt-4 ps-5 pe-5 pb-5 row '>
            <div className='col-6 '>
                <p className='text-start sub-head'>Explore this website further to discover more about a person's deepest brain region.</p>
                <div className='btns-wrapper'>
                    <SignBtn/><Blogs/>
                </div>   
            </div>
            <div className='col-6'>
                <img src={girls} className="img-fluid" alt='header-image'/>
            </div>
        </div>
        <div className='share mt-4 ps-5 pe-5 pb-5 row '>
            <div className='pb-3 '>
                <h2 className='text-st'>Share any unusual art forms.</h2>
            </div>
            <div className='row'>
                <div className='card-wrapper col'>
                    <div className='card-img-wrapper'>
                        <img src={cat} className="img-size" alt='imgcard'/>
                    </div>
                    <div className='card-text-wrapper'>
                        <h5 className='text-start'>Life Art </h5>
                        <p  className='text-start'>Explore this website further to discover more about a person's deepest brain region.</p>
                    </div>
                </div>
                <div className='card-wrapper col'>
                    <div className='card-img-wrapper'>
                        <img src={eyes} className="img-size" alt='imgcard'/>
                    </div>
                    <div className='card-text-wrapper'>
                        <h5  className='text-start'>Monster Art</h5>
                        <p  className='text-start'>Explore this website further to discover more about a person's deepest brain region.</p>
                    </div>
                </div>
                <div className='card-wrapper col'>
                    <div className='card-img-wrapper'>
                        <img src={round} className="img-size" alt='imgcard'/>
                    </div>
                    <div className='card-text-wrapper'>
                        <h5  className='text-start'>Alien Art</h5>
                        <p  className='text-start'>Explore this website further to discover more about a person's deepest brain region.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='header-bot mt-4 ps-5 pe-5 pb-5 '>
            <div className='pb-3 start-heading'>
                <h2>Start a blog for your artwork by signing up and doing so right now.</h2>
            </div>
            <div className='start-wrapper row align-items-center'>
                <div className='image-start-wrapper col-6 pad-s'>
                    <img src={oldman} className="img-fluid img-share" alt='flex-img'/>
                </div>
                <div className='image-start-wrapper start-img col-6'>
                    <h5 className='text-start'>Flex it </h5>
                    <p className='text-start size'>Explore this website further to discover more about a person's deepest brain region.</p>
                    <SignBtn/>
                </div>
            </div>
            <div className='start-wrapper row align-items-center'>
                <div className='image-start-wrapper col-6 pad-s'>
                    <img src={melt} className="img-fluid img-share" alt='flex-img'/>
                </div>
                <div className='image-start-wrapper start-img col-6'>
                    <h5 className='text-start'>Let it shine! </h5>
                    <p className='text-start size'>Explore this website further to discover more about a person's deepest brain region.</p>
                    <SignBtn/>
                </div>
            </div>
             <div className='start-wrapper row align-items-center'>
                <div className='image-start-wrapper col-6 pad-s '>
                    <img src={scare} className="img-fluid img-share" alt='flex-img'/>
                </div>
                <div className='image-start-wrapper start-img col-6'>
                    <h5 className='text-start '>It is forbidden to display nudity.</h5>
                    <p className='text-start size'>Explore this website further to discover more about a person's deepest brain region.</p>
                    <SignBtn/>
                </div>
            </div>
        </div>
        <div className='header mt-4 ps-5 pe-5 pb-5 '>
            <div className='pb-3 '>
                <h2 className='text-start'>Discover more about us, and let us to introduce ourselves by outlining our accomplishments.</h2>
            </div>
            <div className='row'>
                <div className='card-text-wrapper col'>
                    <h5 className='text-start'>Life Art</h5>
                    <p  className='text-start'>Show off now and share your amazing natural and life-inspired imaginations, then check out other people's works of art.</p>
                    <Blogs/>
                </div>
                <div className='card-text-wrapper col'>
                    <h5 className='text-start'>Spiritual and Science Art</h5>
                    <p  className='text-start'>Display and share your incredible scientific and spiritual imaginations, then let's look out the work of others.</p>
                    <Blogs/>
                </div>
                <div className='card-text-wrapper col'>
                    <h5 className='text-start'>Animation Art</h5>
                    <p  className='text-start'>Show off and share your incredible ideas for animation and 3D artwork, then check out what other people have come up with.</p>
                    <Blogs/>
                </div>
            </div>
        </div>
        <div className='header mt-4 ps-5 pe-5 pb-5 '>
            <div className='pb-3 '>
                <h2 className='text-start'>Let 4 terms to remember</h2>
            </div>
            <div className='row'>
                <div className='fnum col'>
                    <h5>The Best Blog</h5>
                    <p className='ftext'>Explore this website further to discover more about a person's deepest brain region.</p>
                    <div className='4img mt-3'>
                        <img className='img-fluid' src={one} alt="4num"/>
                    </div>
                </div>
                <div className='fnum col'>
                    <h5>The Best Blog</h5>
                    <p className='ftext'>Explore this website further to discover more about a person's deepest brain region.</p>
                    <div className='4img mt-3'>
                        <img className='img-fluid' src={two} alt="4num"/>
                    </div>
                </div>
                <div className='fnum col'>
                    <h5>The Best Blog</h5>
                    <p className='ftext'>Explore this website further to discover more about a person's deepest brain region.</p>
                    <div className='4img mt-3'>
                        <img className='img-fluid' src={three} alt="4num"/>
                    </div>
                </div>
                <div className='fnum col'>
                    <h5>The Best Blog</h5>
                    <p className='ftext'>Explore this website further to discover more about a person's deepest brain region.</p>
                    <div className='4img mt-3'>
                        <img className='img-fluid' src={four} alt="4num"/>
                    </div>
                </div>
                <div className='remember'>
                    <p className='text-end remember'>Be remembered by everybody</p>
                </div>
                
            </div>
           
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
