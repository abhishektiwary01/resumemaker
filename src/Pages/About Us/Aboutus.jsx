import React from 'react';
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from 'react-share';
import Header from '../../Components/Header';

function Aboutus() {
  // The URL to be shared
  const shareUrl = 'promote my website';

  return (
    <>
      {/* Header Component to Navigate */}
      <Header />

      {/* Main Content */}
      <div className='items-center justify-center ml-[10vw] mr-[10vw] mt-[5vw]'>
        <h1 className="font-bold text-3xl text-left md:text-4xl mb-[2vw]">
        Welcome to our Resume Builder! 
        </h1>
        <br></br>

        {/*  About Us paragraph */}   
        <p1 className="mt-15 text-xl justify-center">
        We recognize the critical role a polished and impactful resume plays in your job search. 
        A well-crafted resume can significantly enhance your prospects, setting you apart from the competition and bringing you closer to your dream job.
        Our Resume Builder is engineered to streamline the resume creation process, featuring an intuitive interface and a diverse selection of customizable templates. 
        Whether you're a recent graduate, an experienced professional, 
        or undergoing a career change, our platform equips you with the tools and
         resources necessary to create a compelling resume that showcases your skills, 
         experience, and accomplishments.
        </p1>
        
        <h2 className='mt-8 font-bold text-xl text-center'>
          Share
        </h2>

        {/* Share buttons */}
        <div className='mt-8 flex justify-center'>
          <div style={{marginRight:"2vh"}}>
            {/* Facebook share button */}
            <FacebookShareButton
              url={'https://cv-builder-ruddy.vercel.app/'}
              quote={'Title or jo bhi aapko likhna ho'}
              hashtag={'#portfolio...'}
            >
              <FacebookIcon className='buttonIcons' size={40} round={true} />
            </FacebookShareButton>
          </div>

          <div style={{marginRight:"2vh"}}>
            {/* LinkedIn share button */}
            <LinkedinShareButton
              url={'https://cv-builder-ruddy.vercel.app/'}
              quote={'Title or jo bhi aapko likhna ho'}
              hashtag={'#portfolio...'}
            >
              <LinkedinIcon className='buttonIcons' size={40} round={true} />
            </LinkedinShareButton>
          </div>

          <div style={{marginRight:"2vh"}}>
            {/* WhatsApp share button */}
            <WhatsappShareButton
              url={'https://cv-builder-ruddy.vercel.app/'}
              quote={'Title or jo bhi aapko likhna ho'}
              hashtag={'#portfolio...'}
            >
              <WhatsappIcon className='buttonIcons' size={40} round={true} />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;