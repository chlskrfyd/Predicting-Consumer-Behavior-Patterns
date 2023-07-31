import Carousel from 'react-bootstrap/Carousel';
import solution_img from './solution_img.png'
import insight_img from './insight.jpg'
import revolution_img from './revolution_img.webp'
import intelligenc_img from './Intelligence_img.jpg'



function UncontrolledExample() {
  return (
    <Carousel>
    <Carousel.Item>
        <div className='slidercontents'>
            <img src={solution_img} className='solution_img'></img>
            <div className='wrapText'>
                <h1>Solution</h1>
                <div className="d-none d-md-block">
                    <h3>대충 업체에게 정확한솔루션을 제공해준다는 말</h3>
                </div>
                
            </div>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div className='slidercontents2'>
            <img src={insight_img} className='insight_img'></img>

            <div className='wrapText'>
                <h1>Insight</h1>
                <div className="d-none d-md-block">
                    <h3>대충 인사이트 어쩌고 저쩌고</h3>
                </div>
                
            </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='slidercontents3'>
            <img src={revolution_img} className='revolution_img'></img>
            <div className='wrapText'>
                <h1>Revolution</h1>
                <div className="d-none d-md-block">
                    <h3>대충 우리업체는 레볼루션 어쩌구</h3>
                </div>
                
            </div>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div className='slidercontents4'>
            <img src={intelligenc_img} className='intelligenc_img'></img>
            <div className='wrapText'>
                <h1>intelligence</h1>
                <div className="d-none d-md-block">
                    <h3>대충 우리업체 능지 최고 ^.^</h3>
                </div>
                
            </div>
        </div>
    </Carousel.Item>
</Carousel>
  );
}

export default UncontrolledExample;