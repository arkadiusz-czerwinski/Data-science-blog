import Wrapper from "../src/layout/Wrapper"
import Contact from "../src/views/Contact"
import config from "../blog.config.js"

const AboutPage = () => (
  <Wrapper
    url={config.url + "about"}
    title={config.title + " | About"}
    description={"Learn more about " + config.title}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <Contact />
  </Wrapper>
)

export default AboutPage
