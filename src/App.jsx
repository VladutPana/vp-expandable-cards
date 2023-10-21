import React, {useState} from 'react'
import {motion} from 'framer-motion'
import photo1 from '../assets/1.jpg'
import photo2 from '../assets/2.jpg'
import photo3 from '../assets/3.jpg'
import photo4 from '../assets/4.jpg'
import photo5 from '../assets/5.jpg'

const App = () => {

  const [expandedIndex, setExpandedIndex] = useState(null) //by default no card is extended

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index) //if index === expandedIndex it means its already opened and it needs to get closed, hence why the -1. And if its not equal, then the index takes the new index value and will be extended
  }

  const cardVariants = {
    expanded: {
      width: "300px"
    },
    collapsed: {
      width: '200px'
    }
  }
  const arraycards = [0,1,2,3,4]
  const cardImages = [photo1, photo2, photo3, photo4, photo5]
  const cardDescriptions = [
    'Neon Dreamscape: This photo captures the essence of Cyberpunk Tokyo with its vibrant neon signs reflecting off rain-slicked streets. The city comes alive at night, with towering skyscrapers illuminating the futuristic urban landscape.',
    'High-Tech Crossroads: In the heart of Tokyos cyberpunk district, this image showcases a futuristic intersection where streams of holographic advertisements and illuminated billboards intersect. Pedestrians blend with the citys digital cacophony.',
    'Rainy Cyber Alley: Tokyos cyberpunk underworld comes to life in this image. Rain-soaked alleys are drenched in neon light, casting eerie shadows that juxtapose the technological and natural elements of the city.',
    'Glowing Transport Hub: A cyberpunk future where transportation meets technology. This photo reveals a high-speed magnetic levitation train gliding through a neon-lit station, embodying Tokyos vision of hyper-fast, high-tech transit.',
    'Shibuya Digital Crossroads: The iconic Shibuya Crossing transforms into a mesmerizing digital spectacle. In this photo, an ocean of pedestrians crisscrosses beneath a massive LED screen, displaying a mesmerizing blend of traditional and futuristic Japanese culture.',
  ]
  const cardNames = [
    'Neon Dreamscape','High-Tech Crossroads','Rainy Cyber Alley','Glowing Transport Hub','Shibuya Digital Crossroads',
  ]


  return (
   <section className='py-16 w-full md:h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        
          <h1 className='text-3xl font-extrabold text-white'>Expandable Cards</h1>
          <p className='mt-4 text-xl text-gray-300'>Click on any card below 🌟</p>
      </div>
      <div className='mt-12 flex flex-col md:flex-row justify-center items-center gap-5'>
        {arraycards.map((index) => (
            <motion.div
            key={index}
            className={`card cursor-pointer h-[400px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded': ''}`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? 'expanded': 'collapsed'}
            transition={{duration: 0.5}}
            onClick={() => handleCardClick(index)}
            style={{
                            backgroundImage: `url(${cardImages[index]})`,

            }}
          >
              <div className='card-content h-full flex flex-col justify-end'>
                  <div className='card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center'>
                    <h2 className='text-xl font-semibold text-white text-center px-2 py-2 '>{cardNames[index]}</h2>
                    {index === expandedIndex && (
                      <p className='mt-2 text-gray-300 text-center px-2 py-2'>{cardDescriptions[index]} </p>
                    )
                    }
                  </div>
              </div>
          </motion.div>
        ))}
      </div>
   </section>
  )
}

export default App