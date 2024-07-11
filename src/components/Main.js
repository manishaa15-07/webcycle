import React from 'react'
import './main.css'

export default function Main() {
 
  return (
    <div className='container'>
          <div className="sustainability">
            <p>Sustainable Development</p>
           <div className="content"> Sustainable development is an approach to growth and human development that aims to meet the needs of the present without compromising the ability of future generations to meet their own needs.  The aim is to have a society where living conditions and resources meet human needs without undermining planetary integrity</div>
           <p>Why ?</p>
           <div className="content">
           Sustainable development practices help countries and businesses grow in ways that adapt to the challenges posed by climate change. This protects important natural resources for our current and future generations and allows communities to thrive. Governments around the world realize this and are starting to implement regulations that support sustainable development and hold private companies accountable for their actions. In the U.S., the SEC has proposed a law requiring publicly listed companies to disclose climate-related information, including greenhouse gas emissions. Additionally, the U.S. government is including aspects of social inclusion in new policies. For example, the recent Inflation Reduction Act (IRA) includes incentives and benefits for non-profit entities and low-income housing.
           </div>
           <p>Goals</p>
           <div className="content goals">
            
            {/* <br/> */}
            <div className="goal-item">
            <p className='para'>#1 Poverty</p>
            <div className="allgoals">
            <div className="images" id="poverty"></div>
            <div className="info">A sustainably managed environment is a prerequisite for socio-economic development and poverty reduction. The natural environment supplies ecosystem goods and services that provide income, support job creation, poverty alleviation, contribute to safety nets and reduce inequity. 
            Global efforts to eradicate extreme poverty have faced significant setbacks by the COVID-19 pandemic and a series of major shocks during 2020-22
            </div>
            </div>
            </div>
            <div className="goal-item">
            <p className='para'>#2 Health </p>
            <div className="allgoals">
              
              <div className="info">
                Our next goal is to ensure people live healthy life at all ages.We recognize that health is a precondition for and an outcome and indicator of all three dimensions of sustainable development. Sustainable development can be achieved only in the absence of a high prevalence of debilitating communicable and non-communicable diseases, including emerging and re-emerging diseases, and when populations can reach a state of physical, mental and social well-being.
                By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births
              </div>
              <div className="images" id="health"></div>
            </div>
            </div>
            <div className="goal-item">
            <p className='para'>#3 Sanitation </p>
            <div className="allgoals">
              <div className="images" id="sanity"></div>
              <div className="info">Ensure availability and sustainable management of water and sanitation for all.
              Among the 73 countries reporting on both total wastewater generation and total wastewater treatment in 2022, 76% of total wastewater flows received at least some treatment. Of the 42 countries that specified the level of treatment, 60% of total wastewater flows were safely treated (i.e. at least secondary treatment). In all world regions, many rivers, lakes and aquifers are still in good condition – as of 2023, 56% of water bodies assessed in 120 countries have good water quality. However, countries that implement the most extensive monitoring programmes show that water quality is degrading since 2017.

</div></div>
            </div>
            <div className="goal-item">
            <p className='para'>#4 Industrial Development </p>
            <div className="allgoals">
              <div className="info">
              Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation

              To expedite progress towards sustainable development, efforts should prioritize accelerating the green transition, strategically prioritizing sectors, and addressing inequalities in digital and innovation sectors.


              </div>
              <div className="images" id="industry"></div>
              </div>
            </div>
            <div className="goal-item">
            <p className='para'>#5 Climate </p>
            <div className="allgoals">
              <div className="images" id="climate"></div>
              <div className="info">We have to take urgent action to combat climate change and its impacts. The roadmap to limit the rise in global temperature to 1.5°C and avoid the worst of climate chaos cannot afford any delays, indecision or half measures by the global community. It demands immediate action for drastic reductions in global greenhouse gas emissions in this decade and the achievement of net zero by 2050.

</div>
</div>
            </div>
          
           </div>
          </div>
    </div>
  )
}
