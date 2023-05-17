import image from '../assets/icons/analytics-img.png'

function Analytics() {
  return (
    <div className="analytics bg-white pb-[78px]">
      <div className='flex justify-between items-center max-w-7xl mx-auto my-0 bg-[#232524] rounded-[30px]'>
        <img className='ml-[80px]' src={image} alt="analytics image" />
        <ul className='text-white mr-[65px]'>
            <li className='text-[16px] mb-[16px]'>Студентов зарегистрировано</li>
            <li className='text-[40px] mb-[52px] font-bold'>&gt;350 человек</li>
            <li className='text-[16px] mb-[16px]'>Работодателей на сайте</li>
            <li className='text-[40px] mb-[52px] font-bold'>&gt;32 работодателей</li>
            <li className='text-[16px] mb-[16px]'>Уже стажируются</li>
            <li className='text-[40px] font-bold'>100 человек</li>
        </ul>
      </div>
    </div>
  )
}

export default Analytics
