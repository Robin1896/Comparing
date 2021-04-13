import React from 'react';
import '../styles/main.scss';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Blurred from '../img/Blurred(2).jpg'
import Good from '../img/Good(2).jpg'

import CompositionGood from '../img/CompositionGood(2).jpg'
import CompositionBad from '../img/CompositionBad(2).jpg'

import LogoBad from '../img/LogoBad(2).jpg'
import LogoGood from '../img/LogoGood(2).jpg'

import Overexposed from '../img/Overexposed(2).jpg'

import TextBad from '../img/TextBad(2).jpg'
import TextGood from '../img/TextGood(2).jpg'


class BadvsGood extends React.Component {


render() {
return (
<div className="compare">
  <div className="block">
    <div className="block-inner">
    <h1>Sharpness</h1>
    <ReactCompareSlider
    style={ {height:400, width:700} }
      itemOne={<ReactCompareSliderImage src={Blurred} srcSet={Blurred} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={Good} srcSet={Good} alt="Image two" />}
    />
    </div>
    <div className="block-inner">
  <h1>Composition</h1>
    <ReactCompareSlider
    style={ {height:400, width:700} }
      itemOne={<ReactCompareSliderImage src={CompositionBad} srcSet={CompositionBad} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={CompositionGood} srcSet={CompositionGood} alt="Image two" />}
    />
    </div>

  </div>


  <div className="block">
    <div className="block-inner">
  <h1>Position Logo</h1>
<ReactCompareSlider
style={ {height:400, width:700} }
  itemOne={<ReactCompareSliderImage src={LogoBad} srcSet={LogoBad} alt="Image one" />}
  itemTwo={<ReactCompareSliderImage src={LogoGood} srcSet={LogoGood} alt="Image two" />}
/>
</div>
<div className="block-inner">
<h1>Brightness</h1>
<ReactCompareSlider
style={ {height:400, width:700} }
  itemOne={<ReactCompareSliderImage src={Overexposed} srcSet={Overexposed} alt="Image one" />}
  itemTwo={<ReactCompareSliderImage src={Good} srcSet={Good} alt="Image two" />}
/>
</div>
  </div>

  <div className="block">
    <div className="block-inner">
  <h1>Text</h1>
<ReactCompareSlider
style={ {height:400, width:700} }
  itemOne={<ReactCompareSliderImage src={TextBad} srcSet={TextBad} alt="Image one" />}
  itemTwo={<ReactCompareSliderImage src={TextGood} srcSet={TextGood} alt="Image two" />}
/>
</div>
  </div>




</div>
)};

};

export default BadvsGood;