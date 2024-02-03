import Image from 'next/image';
// import styles from './page.module.scss';
import styles from './children.module.scss';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <div className={styles.children}>
        <div className={styles.homepageBackground}>
          <div className={styles.centerIt}>
            <div>
              <h1>Niemand</h1>
              <p>
                We are happy you found us! Our pottery and fashion store
                “Niemand” sells handmade crafts, you can only find here. If you
                demand pottery, or clothes especially tailored for you, we are
                the ones, who get it done!
              </p>
              <p>
                Niemand was founded in 2023, in Vienna. The crafts are made by
                Marina, she is studing handcrafting in the viennese academy of
                visual arts and a is tailoring enthusiast since years. When she
                realized, how well her craftings were received by her family and
                friends, she got encouraged to create “Niemand”, so she can
                bring a smile to many more people.
              </p>
              <p>
                Making fashion and giving clothes a second chance? This is the
                quintessence behind the tailoring of “Niemand”. Our tailoring
                makes each piece one-of-a-kind, combining style with a heart for
                recycling. Every item we create is not just tailor-made for you
                but also helps reduce waste. Join us in making fashion both
                unique and eco-friendly."
              </p>
            </div>
            <br></br>
            <div>
              <Link href="/products">
                <h2>Pottery product highlights</h2>
              </Link>
              <div>
                <h3>1. Handcrafted Vases:</h3>
                <ul>
                  <li>
                    Explore our collection of handcrafted vases, each with a
                    unique glaze and shape. Perfect for adding a touch of
                    elegance to any room.
                  </li>
                </ul>
              </div>
              <div>
                <h3>2. Artistic Bowls:</h3>
                <ul>
                  <li>
                    Discover our range of bowls, from functional cereal bowls to
                    decorative pieces, all showcasing intricate designs and
                    vibrant colors.
                  </li>
                </ul>
              </div>
              <div>
                <h3>3. Customized Mugs:</h3>
                <ul>
                  <li>
                    Start your morning with our personalized mugs. Choose from
                    various styles and add a custom touch with your choice of
                    design or message.
                  </li>
                </ul>
              </div>
              <div>
                <h3>4. Decorative Plates:</h3>
                <ul>
                  <li>
                    Our decorative plates are not just dining accessories but
                    pieces of art, featuring unique patterns and textures that
                    stand out in any setting.
                  </li>
                </ul>
              </div>
              <div>
                <h3>5. Ceramic Planters:</h3>
                <ul>
                  <li>
                    Bring nature indoors with our beautifully crafted ceramic
                    planters, perfect for succulents and small plants, available
                    in various sizes and colors.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Link href="/products">
                <h2>Tailoring Product Highlights</h2>
              </Link>
              <div>
                <h3>1. Upcycled Suits:</h3>
                <ul>
                  <li>
                    Our suits are made from old clothes, giving you a unique
                    look that's also good for the planet.
                  </li>
                </ul>
              </div>
              <div>
                <h3>2. Revamped Dresses:</h3>
                <ul>
                  <li>
                    Check out our dresses made from reused fabrics. Each one is
                    different and tells its own story.
                  </li>
                </ul>
              </div>
              <div>
                <h3>3. Patchwork Shirts:</h3>
                <ul>
                  <li>
                    Our shirts mix pieces of different old shirts. They’re not
                    just comfy – they’re also one-of-a-kind.
                  </li>
                </ul>
              </div>
              <div>
                <h3>4. Redesigned Jackets:</h3>
                <ul>
                  <li>
                    We turn out-of-style jackets into trendy pieces. You get to
                    look good and help the environment.
                  </li>
                </ul>
              </div>
              <div>
                <h3>5. Reused Accessories:</h3>
                <ul>
                  <li>
                    Our accessories are made from bits of old clothes. They add
                    a unique touch to any outfit.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
