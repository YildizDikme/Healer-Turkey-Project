import React from 'react';

const BlogComponent = ({ imageSrc, date, title, content, readMoreLink, readingTime }) => {
  return (
    <div className='flex flex-col gap-y-2'>
      <img src={imageSrc} alt="Blog" style={{ width: '100%', height: '300px', objectFit:'cover', marginTop:'1rem' }} />
      <div className='text-xs text-black font-medium'>{date}</div>
      <h6 className='text-black text-lg'>{title}</h6>
      <p className='text-sm text-gray-950'>{content}</p>
      <a href={readMoreLink} className="text-black font-medium text-base">Read More...</a>
      <div className='text-xs'>{readingTime} 5 Minutes</div>
    </div>
  );
};

export default BlogComponent;
