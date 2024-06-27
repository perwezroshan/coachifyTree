import React from 'react';

export const AboutPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-7xl itim mb-10 text-[#D8973C]'>About Us</div>
      <div className='text-4xl itim mb-10 max-w-[80%] text-center'>
        Welcome to Coachify Tree, where we believe that behind every champion, there is always a coach. Our platform is dedicated to empowering students on their journey to success, both academically and personally.
      </div>
      <div className='text-6xl itim mb-10 text-[#D8973C]'>Mission Statement</div>
      <div className='text-4xl itim mb-10 max-w-[80%] text-center'>
        At Coachify Tree, our mission is clear: we strive to equip students with the knowledge, skills, and confidence necessary to excel in all aspects of life. We are committed to inspiring a passion for learning, nurturing critical thinking abilities, and developing individuals who are not only academically proficient but also ethical and responsible.
        <br />
        By leveraging innovative educational resources and personalized coaching, we aim to support students in reaching their full potential. Whether it's mastering complex concepts, preparing for exams, or developing essential life skills, our dedicated team is here to guide and mentor every step of the way.
        <br />
        Join us at Coachify and let us help you unleash your true academic and personal greatness. Together, we'll pave the way towards a future where every student can thrive and achieve their dreams.
      </div>
      <div className='text-5xl itim mb-10 text-[#D8973C]'>Coachify Tree offers specialized branches:</div>
      <div className='text-4xl itim max-w-[80%] text-center'>
        <span className='text-[#63A76A]'>Coachify Education:</span> Personalized support for academic excellence.
        <br />
        <span className='text-[#63A76A]'>Coachify Library:</span> Resources promoting lifelong learning and curiosity.
        <br />
        <span className='text-[#63A76A]'>Coachify Health: </span> Encouraging physical, mental, and emotional well being.
      </div>
    </div>
  );
};
