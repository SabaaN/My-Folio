import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
    <section className='container'>
      <div className='text-center'>
      <h2 className='text-headingColor font-[800] text-[2.4rem] mb-1'>
       My Skills
      </h2>
      <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 mb-[36px]'
      >
        Here are my technical skills and expertise
      </p>
      </div>

      <div className='skills__container grid grid-cols-2' style={{ gap: '100px' }}>
        <div className='"skills__content'>
          <div className='skills__header'>
            <div>
              <h3 className='text-primaryColor text-[1.5rem] font-[900] mb-[21px]'>
                <i class="ri-braces-line" style={{ marginRight: '9px', fontSize: "28px" }}></i>
                Front-end Development
              </h3>
            </div>
          </div>

          <div className="Skills__list grid">
          <div className='skills__data'>
              <div className='skills_titles'>
                <h3 className='flex items-center text-headingColor text-[1rem] font-[700]'>
                  HTML & CSS <span className=' ml-auto font-[500]'>90%</span>
                </h3>
              </div>
              <div className='skills__bar'>
                <span className='skills__percentage skills__html'></span>
              </div>
            </div>
            <div className='skills__data'>
              <div className='skills_titles'>
                <h3 className='flex items-center text-headingColor text-[1rem] font-[700]'>
                  ReactJs <span className=' ml-auto font-[500]'>80%</span>
                </h3>

              </div>
              <div className='skills__bar'>
                <span className='skills__percentage skills__react'></span>
              </div>
            </div>
            <div className='skills__data'>
              <div className='skills_titles'>
                <h3 className='flex items-center text-headingColor text-[1rem] font-[700]'>
                  Bootstrap <span className=' ml-auto font-[500]'>70%</span>
                </h3>

              </div>
              <div className='skills__bar'>
                <span className='skills__percentage skills__bootstrap'></span>
              </div>
            </div>
            <div className='skills__data'>
              <div className='skills_titles'>
                <h3 className='flex items-center text-headingColor text-[1rem] font-[700]'>
                  Tailwind CSS <span className='ml-auto font-[500]'>75%</span>
                </h3>

              </div>
              <div className='skills__bar'>
                <span className='skills__percentage skills__tailwind'></span>
              </div>
            </div>

          </div>
        </div>


        <div className='"skills__content'>
          <div className='skills__header'>
            <div>
              <h3 className='text-primaryColor text-[1.5rem] font-[900] mb-[21px]'>
                <i class="ri-database-2-line" style={{ marginRight: '9px', fontSize: "28px" }}></i>
                Back-end Development
              </h3>
            </div>
          </div>

          <div className="Skills__list grid">
          <div className='skills__data'>
              <div className='skills_titles'>
                <h3 className='flex items-center text-headingColor text-[1rem] font-[700]'>
                  JavaScript <span className=' ml-auto font-[500]'>65%</span>
                </h3>

              </div>
              <div className='skills__bar'>
                <span className='skills__percentage skills__js'></span>
              </div>
            </div>
            <div className='skills__data'>
              <div className='skills_titles'>
                <h3 className='flex items-center text-headingColor text-[1rem] font-[700]'>
                  NodeJs <span className=' ml-auto font-[500]'>65%</span>
                </h3>

              </div>
              <div className='skills__bar'>
                <span className='skills__percentage skills__node'></span>
              </div>
            </div>
            <div className='skills__data'>
              <div className='skills_titles'>
                <h3 className='flex items-center text-headingColor text-[1rem] font-[700]'>
                  MongoDB<span className='ml-auto font-[500]'>75%</span>
                </h3>

              </div>
              <div className='skills__bar'>
                <span className='skills__percentage skills__db'></span>
              </div>
            </div>
            <div className='skills__data'>
              <div className='skills_titles'>
                <h3 className='flex items-center text-headingColor text-[1rem] font-[700]'>
                  MySQL <span className=' ml-auto font-[500]'>80%</span>
                </h3>

              </div>
              <div className='skills__bar'>
                <span className='skills__percentage skills__sql'></span>
              </div>
            </div>
          </div>
        </div>


        <div className='"skills__content'>
          <div className='skills__header'>
            <div>
              <h3 className='text-primaryColor text-[1.5rem] font-[900] mb-[21px]'>
                <i class="ri-palette-line" style={{ marginRight: '9px', fontSize: "28px" }}></i>
                UI Design
              </h3>
            </div>
          </div>

          <div className="Skills__list grid">
          <div className='skills__data'>
              <div className='skills_titles'>
                <h3 className='flex items-center text-headingColor text-[1rem] font-[700]'>
                  Figma <span className=' ml-auto font-[500]'>85%</span>
                </h3>

              </div>
              <div className='skills__bar'>
                <span className='skills__percentage skills__figs'></span>
              </div>
            </div>
            <div className='skills__data'>
              <div className='skills_titles'>
                <h3 className='flex items-center text-headingColor text-[1rem] font-[700]'>
                  Adobe PhotoShop <span className=' ml-auto font-[500]'>65%</span>
                </h3>
              </div>
              <div className='skills__bar'>
                <span className='skills__percentage skills__photoshop'></span>
              </div>
            </div>
          </div>
        </div>

        <div className='"skills__content'>
          <div className='skills__header'>
            <div>
              <h3 className='text-primaryColor text-[1.5rem] font-[900] mb-[21px]'>
                <i class="ri-bar-chart-fill" style={{ marginRight: '9px', fontSize: "28px" }}></i>
                Machine Learning
              </h3>
            </div>
          </div>

          <div className="Skills__list grid">
          <div className='skills__data'>
              <div className='skills_titles'>
                <h3 className='flex items-center text-headingColor text-[1rem] font-[700]'>
                  Numpy & Pandas <span className=' ml-auto font-[500]'>90%</span>
                </h3>

              </div>
              <div className='skills__bar'>
                <span className='skills__percentage skills__numpan'></span>
              </div>
            </div>
            <div className='skills__data'>
              <div className='skills_titles'>
                <h3 className='flex items-center text-headingColor text-[1rem] font-[700]'>
                  Data Visualization (Matplotlib and seaborn) <span className=' ml-auto font-[500]'>95%</span>
                </h3>

              </div>
              <div className='skills__bar'>
                <span className='skills__percentage skills__datavis'></span>
              </div>
            </div>
            <div className='skills__data'>
              <div className='skills_titles'>
                <h3 className='flex items-center text-headingColor text-[1rem] font-[700]'>
                  Scikit-Learn <span className='ml-auto font-[500]'>85%</span>
                </h3>

              </div>
              <div className='skills__bar'>
                <span className='skills__percentage skills__scikit'></span>
              </div>
            </div>
            <div className='skills__data'>
              <div className='skills_titles'>
                <h3 className='flex items-center text-headingColor text-[1rem] font-[700]'>
                  Python <span className=' ml-auto font-[500]'>85%</span>
                </h3>

              </div>
              <div className='skills__bar'>
                <span className='skills__percentage skills__py'></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    </section>
  )
}

export default Skills