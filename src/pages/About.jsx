import Counter from "../CounterProject/Counter"
import AnalogClock from "../components/AnalogClock"
import DoubleFaceCard from "../components/DoubleFaceCard"
import FormHandlingConcept from "../components/FormHandlingConcept"
import GallaryUpdate from "../components/GallaryUpdate"
import RotatedCardHoverImage from "../components/RotatedCardHoverImage"


const About = () => {
  return (
    <div>
     <RotatedCardHoverImage />
     <DoubleFaceCard />
     <FormHandlingConcept />
     <AnalogClock />
     <Counter />
     <GallaryUpdate />
    </div>
  )
}

export default About
