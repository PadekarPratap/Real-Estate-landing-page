import ValueImage from '../assets/images/value.png'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import data from './accordianData';
import {BsCaretDownFill} from 'react-icons/bs'


const Value = () => {
  return (
    <section className="r-container my-12" id='val'>
        <div className="grid lg:grid-cols-2 gap-8">
            {/* image container  */}
            <div id='value-image-container' className='max-w-[30rem] max-h-[35rem] rounded-tr-full rounded-tl-full overflow-hidden border-[8px] mx-auto self-center'>
                <img src={ValueImage} alt="Value" className='w-full h-full' />
            </div>
            
            {/* right section  */}
            <div className='self-center'>
                {/* title and desc  */}
                <div className='space-y-3'>
                   <div>
                   <span className='text-gradientOrange text-3xl font-medium'>Our Value</span>
                    <h2 className='text-4xl font-bold text-[#1f3e72]'>Value We Give to You</h2>
                   </div>
                    <p className='text-lg text-[#8c8b8b] tracking-wider'>We always ready to help by providijng the best services for you. <br />We beleive a good blace to live can make your life better</p>
                </div>

                {/* accordion  */}
                <div className='mt-16'>
                    <Accordion allowMultipleExpanded={false} className='border-none'>
                        {data.map((item, index) => (
                            <AccordionItem className='mb-8 border-[0.8px] border-[rgba(128,128,128,0.143)] rounded-[8px]' key={index}>
                              <AccordionItemHeading>
                                <AccordionItemButton className='bg-white p-2'>
                                    <div className='flex items-center  sm:justify-between gap-3'>
                                        {/* icon  */}
                                        <div className='bg-lightBlue p-3 rounded-lg text-gradientDarkBlue'>
                                            {item.icon}
                                        </div>

                                        {/* title  */}
                                        <div>
                                            <h5 className='text-lg text-primary font-bold'>{item.heading}</h5>
                                        </div>

                                        {/* arrow down */}
                                        <div className='sm:p-3 sm:bg-lightBlue text-gradientDarkBlue sm:rounded-lg ml-auto'>
                                            <BsCaretDownFill />
                                        </div>
                                    </div>
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                <div>
                                    <p className='text-gray-500'>{item.detail}</p>
                                </div>
                              </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

            </div>

        </div>
    </section>
  )
}
export default Value