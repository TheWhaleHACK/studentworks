/* eslint-disable react/prop-types */

function Square({TWClass, heading, subheading, linkDescription, linkIcon, linkStyle, id}) {
  return (
    <a href="#" className={TWClass} id={id}>
      <p className='block w-[200px]'>{subheading}</p>
      <h1 className='shape__heading'>{heading}</h1>
      <div className={linkStyle}>
        <span className='mr-3.5'>{linkDescription}</span>
        <img src={linkIcon} alt="link icon"></img>
      </div>
    </a>
  )
}

export default Square