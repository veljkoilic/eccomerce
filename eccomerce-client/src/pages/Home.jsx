import { Announcement } from "../components/Announcement";
import { Categories } from "../components/Categories";
import Header from "../components/Header";
import { Newsletter } from "../components/Newsletter";
import { Products } from "../components/Products";
import { Slider } from "../components/Slider";
import {Footer} from "../components/Footer"
function Home() {
  return (
    <div>
      <Announcement/>
      <Header />
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer />
    </div>
  );
}

export default Home;
