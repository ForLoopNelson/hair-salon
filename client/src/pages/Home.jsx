import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import "react-image-gallery/styles/css/image-gallery.css"
import { ImageGallery } from "react-image-grid-gallery"

const images = [
  { alt: "women getting hair cut", src: "/imgs/hair-cut1.jpg" },
  { alt: "women getting hair cut", src: "/imgs/hair-cut.jpg" },
  { alt: "woman getting hair washed", src: "/imgs/hair-wash.jpg" },
  { alt: "image of hair and scissors", src: "/imgs/hairScissor.jpg" },
  { alt: "interior of a salon", src: "/imgs/salon1.jpg" },
  { alt: "image of curly long hair", src: "/imgs/curly-hair.jpg" },
  { alt: "stylists cutting hair", src: "/imgs/stylist.jpg" },
]

const Home = () => {
  return (
    <div>
      <header>
        <h2>Welcome to Our Hair Salon</h2>

        <p>
          {" "}
          <strong>
            Your go-to destination for all your hair care and styling needs.
          </strong>
        </p>
      </header>
      <ScrollAnimation animateIn="fadeInUp">
        <section id="about">
          <h2>About Us</h2>

          <p>
            Great Lakes Hair Salon has been serving the community for over 10
            years. Our experienced and passionate team is dedicated to providing
            personalized service to each and every client. We believe that great
            hair starts with a great experience, and we strive to create a
            welcoming atmosphere where you can relax and enjoy your time with
            us.
          </p>
        </section>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp">
        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>
              <strong>Haircuts and Styling:</strong> From classic cuts to the
              latest trends, we can create the perfect look for you.
            </li>
            <li>
              <strong>Coloring:</strong> Whether you want to enhance your
              natural color or try something bold and new, our color specialists
              are here to help.
            </li>
            <li>
              <strong>Treatments:</strong> Keep your hair healthy and strong
              with our deep conditioning and repair treatments.
            </li>
            <li>
              <strong>Special Occasion Styling:</strong> Get ready for your big
              day with our bridal and event styling services.
            </li>
          </ul>
        </section>
      </ScrollAnimation>
      <section id="team">
        <h2>Meet Our Team</h2>
        <ul>
          <li>
            <strong>Emily Johnson:</strong> With over 15 years of experience,
            Emily is a master stylist known for her creative cuts and color
            transformations.
          </li>
          <li>
            <strong>Michael Lee:</strong> Specializing in men's grooming and
            modern styles, Michael brings a fresh perspective to the salon.
          </li>
          <li>
            <strong>Sarah Brown:</strong> Sarah's expertise in bridal and
            special occasion styling has made her a favorite among our clients.
          </li>
        </ul>
      </section>

      <section id="booking">
        <h2>Book an Appointment</h2>
        <p>
          Ready to transform your look? Booking an appointment at Glamour Hair
          Salon is easy. Simply visit our booking page, choose your preferred
          service and stylist, and select a date and time that works for you. We
          can't wait to see you!
        </p>
      </section>

      <section id="testimonials">
        <h2>Testimonials</h2>
        <p>
          "Glamour Hair Salon is the best! The staff is so friendly and
          talented. I always leave feeling amazing." - Jessica M.
        </p>
        <p>
          "I had my wedding hair done here, and it was perfect. Thank you,
          Glamour, for making my big day even more special!" - Rachel T.
        </p>
      </section>
    </div>
  )
}

export default Home
