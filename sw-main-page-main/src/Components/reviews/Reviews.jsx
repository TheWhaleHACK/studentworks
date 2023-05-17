import CallbackForm from './CallbackForm';
import SupportService from './SupportService';
import playIcon from '../../assets/icons/reviews/play-icon.svg';

function Reviews() {
    return (
        <div className="bg-white rounded-t-[80px] pb-[80px]">
            <div className="max-w-7xl mx-auto my-0">
                <h2 className='font-semibold text-[64px] pt-[80px] mb-[30px]'>О нас говорят:</h2>
                <div className="flex flex-row justify-between items-center pb-[80px]">
                    <div className="flex flex-col justify-end bg-player-pattern-1 bg-no-repeat w-[377px] h-[557px] p-[30px]">
                        <p className='text-white text-[32px] mb-[24px]'>HR - Яндекс</p>
                        <img className='w-[93px] h-[93px] cursor-pointer' src={playIcon} alt="play video icon" />
                    </div>
                    <div className="flex flex-col justify-end bg-player-pattern-2 bg-no-repeat w-[377px] h-[557px] p-[30px]">
                        <p className='text-white text-[32px] mb-[24px]'>HR - OZON</p>
                        <img className='w-[93px] h-[93px] cursor-pointer' src={playIcon} alt="play video icon" />
                    </div>
                    <div className="flex flex-col justify-end bg-player-pattern-3 bg-no-repeat w-[377px] h-[557px] p-[30px]">
                        <p className='text-white text-[32px] mb-[24px]'>HR - Google</p>
                        <img className='w-[93px] h-[93px] cursor-pointer' src={playIcon} alt="play video icon" />
                    </div>
                </div>
                <div className="flex flex-row gap-[20px]">
                    <SupportService />
                    <CallbackForm />
                </div>
            </div>
        </div>
    )
}


export default Reviews