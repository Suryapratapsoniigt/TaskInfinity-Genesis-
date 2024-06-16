
import './App.css';
import Footer from './component/Footer';
import Home from './component/Home';
import SliderImg from './component/SliderImg';
// import VideoSlider from './component/VideoSlider';
import Slider from './component/Slider';
import Card from './component/Card';
import SingleSlider from './component/nextslider/SingleSlider';
import Question from './component/nextslider/Question';
import Review from './component/nextslider/Review';
import Works from './component/Works';
function App() {
  return (
    <div className="App">
      <div>
        <Home />
        {/* <Slider/> */}
        {/* <VideoSlider/> */}
        <SliderImg />
        <div>  <SingleSlider /></div>
        
      </div>
      <Works/>
      <Review/>
      <Question/>
      <Footer/>
    </div>
  );
}

export default App;
