import '../../assets/styles/Blocks.css';
import Square from './Square';
import linkIcon from '../../assets/icons/square/linkIcon.svg';
import linkIconBlack from '../../assets/icons/square/linkIcon-black.svg';

function Blocks() {
  return (
    <div className='pb-[80px] bg-white'>
        <div className="blocks__wrapper items-center max-w-7xl mx-auto my-0">
            <Square heading="Управление"
                    subheading="Экономика и управление"
                    TWClass="bg-center bg-cover bg-no-repeat rounded-3xl relative flex flex-col justify-between content-normal"
                    linkIcon= {linkIconBlack}
                    linkStyle="absolute top-6 right-6 flex flex-row justify-start items-center link" 
                    id='blocks__fourth'/>
            <Square heading="Дизайн"
                    subheading="Медиа и дизайн"
                    TWClass="bg-center bg-cover bg-no-repeat rounded-3xl relative flex flex-col justify-between content-normal"
                    linkIcon= {linkIcon}
                    linkStyle="absolute top-6 right-6 flex flex-row justify-start items-center link" 
                    id='blocks__third'/>
            <Square heading="IT-разработка"
                    subheading="Информационные системы и технологии"
                    TWClass="bg-center bg-cover bg-no-repeat rounded-3xl relative flex flex-col justify-between content-normal"
                    linkIcon={linkIconBlack}
                    linkStyle="absolute top-6 right-6 flex flex-row justify-start items-center link" 
                    id='blocks__second'/>
            <Square heading="Выбери интересующее направление"
                    linkDescription='Все категории'
                    TWClass="bg-center bg-cover bg-no-repeat rounded-3xl relative flex flex-col content-normal"
                    linkIcon={linkIcon}
                    linkStyle="flex flex-row justify-end items-center absolute bottom-6 right-6 link"
                    id='blocks__first'/>
        </div>
    </div>
  )
}

export default Blocks
