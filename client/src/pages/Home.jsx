import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

const Home = () => {
  return (
    <div>
      <header>
        <h2>Welcome to Our Hair Salon</h2>
        <p>Your go-to destination for all your hair care and styling needs.</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          voluptate sed odit magnam. Dicta eveniet maxime facere fuga
          repudiandae nisi labore autem fugiat aperiam quos aut totam nihil,
          repellat voluptatum consequuntur. Molestiae at explicabo tempore
          corporis magnam vel. Voluptas, recusandae at, magnam rem illo ullam
          quo aliquam ad dignissimos distinctio, corporis esse sint nulla.
          Corporis, voluptatem? Corporis excepturi assumenda animi, quae quos
          consequatur reprehenderit velit inventore! Totam vero recusandae
          ratione cum facere eos. Eum tempora necessitatibus, odit non quaerat
          hic et ipsa quibusdam earum odio, quis, sint iure deleniti delectus
          dolor at distinctio mollitia ratione impedit suscipit cupiditate
          repellat assumenda ipsum numquam? Reiciendis, earum. Numquam
          distinctio et sint veritatis quos, perspiciatis, eaque ratione iure
          eos consectetur accusamus maiores amet facere velit deserunt illo
          aspernatur provident odio? Facilis iste tenetur possimus esse,
          sapiente modi porro maxime quae placeat. Odit facilis doloribus
          doloremque, eos hic cumque aspernatur rem officia deserunt quo enim
          quas eum labore voluptatem? Est odit eos perferendis laudantium
          molestiae atque ipsa sunt qui consequatur voluptate! Deserunt, cum.
          Amet saepe perspiciatis dignissimos possimus voluptates ratione
          beatae, quod rem magni cumque quo quia dicta. Nam reprehenderit
          tempore rem ea voluptatibus, quam ipsa ad, nesciunt debitis blanditiis
          dolorem. Laudantium molestias libero laboriosam sequi, non cupiditate
          sit quis sint commodi esse perferendis? Enim accusantium deleniti
          fugiat nesciunt temporibus, perferendis pariatur quidem ut aliquam
          architecto dolorum odio delectus laboriosam suscipit molestias
          dolorem. Necessitatibus corrupti molestiae facere voluptatibus
          quisquam doloribus quae hic delectus cumque, provident eligendi
          dolores nemo inventore ratione cum accusamus odio? Id beatae molestiae
          voluptates, repellat recusandae molestias laudantium reiciendis aut
          voluptatibus cupiditate aspernatur inventore veniam eligendi velit
          deleniti! Ducimus sapiente qui ex! Molestiae cumque nemo quo numquam
          nihil maiores repellat, expedita recusandae ducimus modi. Earum sequi
          officiis reiciendis perferendis quam, sed fugiat sapiente, alias
          itaque veniam porro tempora, non eos minima eveniet.
        </p>
      </header>

      <section id="about">
        <h2>About Us</h2>
        <p>
          Glamour Hair Salon has been serving the community for over 10 years.
          Our experienced and passionate team is dedicated to providing
          personalized service to each and every client. We believe that great
          hair starts with a great experience, and we strive to create a
          welcoming atmosphere where you can relax and enjoy your time with us.
        </p>
      </section>

      <ScrollAnimation animateIn="fadeIn">
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
