
import ProjectsCard from '../components/projects/ProjectsCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ProjectBottom from '../components/projects/ProjectBottom'
import ProjectNav from '../components/projects/ProjectNav'

const Projects = () => {

  const projects = [{
    image1: 'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93',
    image2: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b'
  },
  {
    image1: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
    image2: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022'
  },
  {
    image1: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
    image2: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479'
  },
  {
    image1: 'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757',
    image2: 'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14'
  }
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from('.hero',{
      height:'30px',
      stagger:{
        amount:0.4
      },
      scrollTrigger:{
        trigger:'.lol',
        start:'top 100%',
        end:'top -270%',
        scrub: true
      }
    })
  })

  return (
   <div>
    <ProjectNav />
     <div className='lg:p-2.5 p-0 mb-[70vh]'>
      <div className='pt-[40.5vh]'>
        <h2 className='font-[font2] lg:text-[13vw] text-[20vw] uppercase'>Projets</h2>
      </div>
      <div className='lg:-mt-20 -mt-7.5 lol'>
        {projects.map(function (elem,idx) {
          return <div key={idx} className='hero w-full lg:h-[600px] h-[550px] lg:mb-3 mb-1 lg:gap-3 gap-1 lg:flex-row flex-col flex '>
            <ProjectsCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}
      </div>
        <ProjectBottom />
    </div>
   </div>
  )
}

export default Projects
