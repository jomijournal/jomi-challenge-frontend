import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function Home({ navbar, block, slides }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const menuArr = [navbar[0].attributes.home, navbar[0].attributes.menu1, navbar[0].attributes.menu2, navbar[0].attributes.menu3, navbar[0].attributes.menu4,
  navbar[0].attributes.menu5, navbar[0].attributes.menu6];
  return (
    <div className='container test'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav mr-auto">
            {menuArr && menuArr.map((a, i) => (
              <li class="nav-item active mx-4 py-2 text-dark"><b>
                <a class="nav-link" href="#"> {a}  <span class="sr-only"></span></a>
              </b></li>
            ))}

          </ul>
        </div>
      </nav>
      {block && block.map((datafetch, index) => (
        <div class='row'>
          <div class='col-md-12 text-center my-5'>
            <h2>
              {datafetch.attributes.title}
            </h2>
          </div>
          <div class='col-md-6'>
            {(index != 1) ?
              <>
                <h2 class='text-center pb-4'>{datafetch.attributes.heading}</h2>
                <p>{datafetch.attributes.blogtext}</p>
                <a href={datafetch.attributes.link} >
                  <button class='btn btn-dark'>Learn More</button>
                </a>
              </>
              :
              <img src={"http://localhost:1337" + datafetch.attributes.blockimg.data.attributes.url} class="img-thumbnail p-5" />

            }

          </div>
          <div class='col-md-6'>
            {(index == 1) ?
              <>
                <h2 class='text-center pb-4'>{datafetch.attributes.heading}</h2>
                <p>{datafetch.attributes.blogtext}</p>
                <a href={datafetch.attributes.link} >
                  <button class='btn btn-dark'>Learn More</button>
                </a>

              </>
              :
              <img src={"http://localhost:1337" + datafetch.attributes.blockimg.data.attributes.url} class="img-thumbnail p-5" />
            }
          </div>
        </div>
      ))}
      <Carousel responsive={responsive}>
        {slides && slides[0].attributes.sliderimg.data.map((slide, index) => (
          <img src={'http://localhost:1337' + slide.attributes.url} height='200' width='500' />
        ))}
      </Carousel>;
    </div>
  )
}
export async function getStaticProps(context) {
  const navRes = await fetchAPI("/navbars", {
    populate: "*"
  });

  const blockRes = await fetchAPI("/blocks", {
    populate: "*"
  });
  const slideRes = await fetchAPI("/sliders", {
    populate: "*"
  });
  return {
    props: {
      navbar: navRes.data,
      block: blockRes.data,
      slides: slideRes.data
      // my props in here
    },
  }
}

