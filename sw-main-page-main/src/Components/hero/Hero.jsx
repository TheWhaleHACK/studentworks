/* eslint-disable react/prop-types */
import '../../assets/styles/Hero.css';
import Square from './Square';
import linkIcon from '../../assets/icons/square/linkIcon.svg';
import linkIconBlack from '../../assets/icons/square/linkIcon-black.svg';
import searchIcon from '../../assets/icons/square/searchIcon.svg';

function Hero() {
  return (
    <div className='hero bg-white pb-[50px]'>
        <div className="hero__wrapper items-center max-w-7xl mx-auto my-0">
                <Square heading="Биржа проектов студентов" subheading="Lorem ipsum dollar" linkDescription='Перейти'
                        TWClass="bg-center bg-cover bg-no-repeat rounded-3xl relative flex flex-col justify-between content-normal"
                        linkIcon={linkIcon}
                        linkStyle="flex flex-row justify-start items-center link"
                        id='first'/>
                <Square heading="Поиск стажёров" subheading="Окунись в мир технологий"
                        TWClass="bg-center bg-cover bg-no-repeat rounded-3xl relative flex flex-col justify-between content-normal"
                        linkIcon={searchIcon}
                        linkStyle="absolute top-6 right-6 flex flex-row justify-start items-center link" 
                        id='second'/>
                <Square heading="О нас" subheading="История развития нашего стартапа"
                        TWClass="bg-center bg-cover bg-no-repeat rounded-3xl relative flex flex-col justify-between content-normal"
                        linkIcon= {linkIcon}
                        linkStyle="absolute top-6 right-6 flex flex-row justify-start items-center link" 
                        id='third'/>
                <Square heading="FAQ" subheading="Ответы на интересующие вопросы"
                        TWClass="bg-center bg-cover bg-no-repeat rounded-3xl relative flex flex-col justify-between content-normal"
                        linkIcon= {linkIconBlack}
                        linkStyle="absolute top-6 right-6 flex flex-row justify-start items-center link" 
                        id='fourth'/>
        </div>
    </div>
  )
}

export default Hero