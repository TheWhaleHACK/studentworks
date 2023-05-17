import Project from './Project';
import image1 from '../../assets/icons/projects/project-1.png'
import image2 from '../../assets/icons/projects/project-2.png'
import image3 from '../../assets/icons/projects/project-3.png'

function ProjectBlock() {
  return (
    <div className="bg-white rounded-b-[80px]">
      <div className="container mx-auto px-[120px] pb-[100px]">
        <h2 className="text-[64px] font-semibold mb-[30px]">Лучшие проекты этой недели:</h2>
        <Project src={image1}
                 heading="Student Works"
                 subheading="Сервис для взаимодействия HR и студентов"
                 TWclasses={'flex flex-row justify-between w-full mb-[50px]'}/>
        <Project src={image2}
                 heading="GSCP"
                 subheading="Создали систему для быстрого создания документов на основе умных шаблонов"
                 TWclasses={'flex flex-row-reverse justify-between w-full mb-[50px]'}/>
        <Project src={image3}
                 heading="CODEFIT"
                 subheading="Разработали тренажёр для обучения программирования на языке Ruby"
                 TWclasses={'flex flex-row justify-between w-full mb-[50px]'}/>
      </div>
    </div>
  )
}

export default ProjectBlock
