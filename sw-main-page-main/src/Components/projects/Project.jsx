/* eslint-disable react/prop-types */
import Tag from '../Tag';
import btnIcon from '../../assets/icons/projects/btn-icon.svg'

function Project({src, heading, subheading, TWclasses}) {
    const tags = [
        "аналитика",
        "дизайн",
        "проектирование",
        "верстка",
        "копирайтинг"
    ];

    return (
        <div className={TWclasses}>
            <div className="border-[2px] rounded-[30px] w-full pt-10 pl-10">
                <p className='mb-[44px]'>{subheading}</p>
                <div className="flex flex-wrap mb-[40px]">
                    {
                        tags.map((tag, id) => { return <Tag text={tag} key={id}/> })
                    }
                </div>
                <h3 className='text-[64px] font-medium block w-[300px] leading-[55px] mb-[46px]'>{heading}</h3>
                <a href="#" className='flex justify-start items-center text-[24px] border-[2px] rounded-[40px] px-[5px] py-[20px] w-[400px]'>
                    <img className='absolute' src={btnIcon} alt="button icon"/>
                    <span className='mx-auto'>cмотреть кейс</span>
                </a>
            </div>
            <div className="w-full">
                <img className="w-full" src={src} alt="project image"/>
            </div>
        </div>
    )
  }
  
export default Project