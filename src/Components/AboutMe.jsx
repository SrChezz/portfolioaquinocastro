import { useContext } from 'react'
import '../Styles/AboutMe.css'
import LenguageContext from '../context/lenguageContext'
import ThemeContext from '../context/themeContext'

const AboutMe = () => {
  const {texts} = useContext(LenguageContext)
  const {dark} = useContext(ThemeContext)

  return (
    <section id='aboutMe' className={`container-about-me ${!dark && 'clear-theme'}`}>
      <div className={`container-about-me-div ${!dark && 'clear-theme'}`}>
        <h2 className={`title-aboutme-section ${!dark && 'clear-theme'}`}>{texts.aboutTitle}</h2>
        <p className={`about-me-text ${!dark && 'clear-theme'}`}>{texts.aboutTexts}</p>
        <div className={`container-education-techstack ${!dark && 'clear-theme'}`}>
          <div className='container-education'>
            <h3 className={`${!dark && 'clear-theme'}`}>{texts.aboutEducation}</h3>
            <ul className={`${!dark && 'clear-theme'}`}>
              <li>
                <p className={`title-education ${!dark && 'clear-theme'}`}>{texts.aboutEnginnerInformatic}</p>
                <em><p className={`${!dark && 'clear-theme'}`}>{texts.aboutUniversity}</p></em>
              </li>
              <li>
                <p className={`title-education ${!dark && 'clear-theme'}`}>{texts.aboutDevelomenp}</p>
                <em><p className={`${!dark && 'clear-theme'}`}>{texts.aboutSoftwareDevelomenp}</p></em>
              </li>
            </ul>
          </div>
          <div className={`container-techStack ${!dark && 'clear-theme'}`}>
            <h3 className={`${!dark && 'clear-theme'}`}>{texts.aboutTechStack}</h3>
            <div className={`container-techs ${!dark && 'clear-theme'}`}>
              <div className={`container-tech-unique ${!dark && 'clear-theme'}`}>
                <img className={`${!dark && 'clear-theme'}`} src="https://sbetav.me/assets/html-52732337.svg" alt="logo-tecnologia-html" />
                <p className={`${!dark && 'clear-theme'}`}>HTML</p>
              </div>
              <div className={`container-tech-unique ${!dark && 'clear-theme'}`}>
                <img className={`${!dark && 'clear-theme'}`} src="https://sbetav.me/assets/css-8e01670c.svg" alt="logo-tecnologia-css" />
                <p className={`${!dark && 'clear-theme'}`}>CSS</p>
              </div>
              <div className={`container-tech-unique ${!dark && 'clear-theme'}`}>
                <img className={`${!dark && 'clear-theme'}`} src="https://sbetav.me/assets/javascript-0ac5e3cc.svg" alt="logo-tecnologia-javascript" />
                <p className={`${!dark && 'clear-theme'}`}>JavaScript</p>
              </div>
              <div className={`container-tech-unique ${!dark && 'clear-theme'}`}>
                <img className={`${!dark && 'clear-theme'}`} src="https://sbetav.me/assets/react-9fe43511.svg" alt="logo-tecnologia-react" />
                <p className={`${!dark && 'clear-theme'}`}>React</p>
              </div>
              <div className={`container-tech-unique ${!dark && 'clear-theme'}`}>
                <img className={`${!dark && 'clear-theme'}`} src="https://sbetav.me/assets/tailwind-2a43431b.svg" alt="logo-tecnologia-tailwind" />
                <p className={`${!dark && 'clear-theme'}`}>Tailwind</p>
              </div>
              <div className={`container-tech-unique ${!dark && 'clear-theme'}`}>
                <img className={`${!dark && 'clear-theme'}`} src="https://sbetav.me/assets/git-3f0b1bae.svg" alt="logo-tecnologia-git" />
                <p className={`${!dark && 'clear-theme'}`}>Git</p>
              </div>
              <div className={`container-tech-unique ${!dark && 'clear-theme'}`}>
                <img className={`${!dark && 'clear-theme'}`} src="https://sbetav.me/assets/github-0ad982ff.svg" alt="logo-tecnologia-github" />
                <p className={`${!dark && 'clear-theme'}`}>GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe