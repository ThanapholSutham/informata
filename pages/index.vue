<template>
  <div>
    <div class="left-container l-componemt">
      <div class="content">
        <a href="#">
          <div class="h-logo">
            <img :src="require('@/assets/logo.png')" alt="" />
          </div>
        </a>
        <div class="text">
          <p>Find us on</p>
        </div>
        <div class="line"></div>
        <div class="social">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-invision"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
    <!-- Left bar end -->

    <div class="hadeer-container">
      <div class="menu-con">
        <NuxtLink to="#">HOW  WE WORK</NuxtLink>
        <NuxtLink to="/pricing">Pricing</NuxtLink>
        <NuxtLink to="#">About us</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="#">STAT101</NuxtLink>
        <NuxtLink to="#">FAQ</NuxtLink>
      </div>

      <div class="button">
       <NuxtLink to="/login"> <div class="btn login">LOG IN</div></NuxtLink>
         
        <a href="#">
          <div class="btn language">English</div>
        </a>
      </div>
    </div>

    <div
      class="hade-sec"
      :style="{ backgroundImage: `url(${require('@/assets/h-bg.png')})` }"
    >
      <div class="content">
        <div class="text-box">
          <h2>On-demand <br />access</h2>
          <p>
            to diverse insight of trusted survey <br />
            audiences in Thailand
          </p>
        </div>
        <div class="animate-box">
          <div class="am-ob-2">
            <div class="box">
              <div class="ob2" data-aos="fade-right" data-aos-duration="1000">
                <img :src="require('@/assets/aos/am-5.png')" alt="" width="" />
              </div>
              <div class="ob" data-aos="fade-left" data-aos-duration="1000">
                <img :src="require('@/assets/aos/am-4.png')" alt="" width="" />
              </div>
              <div class="img">
                <img :src="require('@/assets/aos/am-3.png')" alt="" width="" />
              </div>
            </div>
          </div>

          <div class="am-ob-1">
            <div class="ob-play" data-aos="fade-down">
              <img :src="require('@/assets/aos/am-2.png')" alt="" />
            </div>
            <div class="ob-sli" id="ambutton">
              <img :src="require('@/assets/aos/obj-1.png')" alt="" /><img
                :src="require('@/assets/aos/obj-2.png')"
                alt=""
              />
            </div>
            <div class="img" data-aos="zoom-in" data-aos-duration="1000">
              <img :src="require('@/assets/aos/am-1.png')" alt="" width="" />
            </div>
          </div>

          <div class="item bg">
            <div class="img">
              <img :src="require('@/assets/bg-03.png')" alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>
      <div class="obj a">
        <div class="img">
          <img :src="require('@/assets/obj-02.png')" alt="" width="100%" />
        </div>
      </div>

      <div class="obj b">
        <div class="img">
          <img :src="require('@/assets/obj-01.png')" alt=" " width="100% " />
        </div>
      </div>

      <div class="obj c">
        <div class="img">
          <img :src="require('@/assets/sky-obj2.png')" alt=" " width="100% " />
        </div>
      </div>
    </div>
    <div class="sc-0">
      <div class="content">
        <div class="text-box">
          <h3>What we do</h3>
          <p>
            INFORMATA is a crowdworking platform that allows researchers to
            launch academic/marketing researches and surveys to a dedicated
            participant pool in minutes. INFORMATA helps researchers gathering
            and measuring feedbacks which can enhance decisions and impacts of
            companies and organisations.
          </p>
        </div>

        <div class="bg">
          <div class="img">
            <img :src="require('@/assets/bg-02.png')" alt=" " width="100% " />
          </div>
        </div>
      </div>
    </div>
    <div class="sec-1">
      <div class="container">
        <h2>What we help</h2>
        <div class="content">
          <div class="box l">
            <h3>Academic <br />research</h3>
            <p>
              INFORMATA is a user-friendly tool to help researchers set up their
              surveys and studies exactly as they planned. Using INFORMATA’s
              filtering feature helps narrowing down the pool of participants to
              your target audiences. The Crowdworking system of INFORMATA will
              free up time and resources for academics, allowing them to focus
              on other tasks and relax.
            </p>
          </div>

          <div class="box r b">
            <div class="bg"></div>

            <div class="sc-1-obj e"></div>
          </div>
        </div>

        <div class="content">
          <div class="box l b">
            <div class="bg"></div>
            <div class="sc-1-obj d"></div>
            <div class="sc-1-obj c"></div>
          </div>

          <div class="box r">
            <h3>
              Branding and <br />marketing <br />
              research
            </h3>
            <p>
              INFORMATA offers a way to effectively connect with clients where
              they are and discover their insights of your brand and company.
              With INFORMATA, there is no need to go out on the street and ask
              passers-by to fill out your survey as in the old days. By
              recruiting the potential clients on a pay-per-task model, your
              company can significantly lower costs while achieving results that
              drive meaningful and swift actions of your brand and company.
            </p>
          </div>
        </div>

        <div class="content">
          <div class="box l">
            <h3>
              Product <br />
              development
            </h3>
            <p>
              INFORMATA communicates with a diverse group of potential
              consumers, each with a unique background and perspective on the
              products. With INFORMATA, you can gain insights into your
              consumers’ needs by taking the essential step of listening to a
              wide range of people. Consumer-reflection is a key to every good
              product development.
            </p>
          </div>

          <div class="box r b">
            <div class="bg"></div>
            <div class="sc-1-obj b"></div>
            <div class="sc-1-obj a"></div>
          </div>
        </div>

        <div class="content">
          <div class="box l b">
            <div class="bg"></div>
            <!-- <div class="sc-1-obj b "></div> -->
          </div>
          <div class="box r">
            <h3>Advertising</h3>
            <p>
              INFORMATA provides a means of successfully connecting with
              audiences all around the country within a click. Using INFORMATA
              assists a company in generating the necessary audiences’ interest
              and curiosity in a modern advertising approach. You can market
              your valued product and brand modernly while obtaining vital
              information from your potential customers.
            </p>
          </div>
        </div>

        <!-- <div>
                <div class="sc-1-obj t "></div>
                <div class="sc-1-obj b "></div>
            </div> -->
      </div>
    </div>

    <div class="sec-2">
      <div class="container">
        <div class="content">
          <h2>How we work</h2>
          <p>
            INFORMATA offers reserchers access to a diverse, on-demand
            participants through an easy-to-use <br />
            researcher interface. Meanwhile, INFORMATA also offers participants
            a pay-per-task of taking part in <br />engaging survey and study by
            giving genuine answers, opinions, and insights.
          </p>
        </div>

        <div class="box con">
          <div class="box l">
            <h3>Researchers</h3>
            <div class="item">
              <div class="iTemDotBox">
                <div class="iTemDot two"></div>
                <div class="iTemDot one"></div>
                <div class="line"></div>
              </div>
              <p>Easily create surveys or polls</p>
            </div>
            <div class="spac"></div>

            <div class="item">
              <div class="iTemDotBox">
                <div class="iTemDot one"></div>
                <div class="iTemDot two"></div>
                <div class="line"></div>
              </div>
              <p>
                Find target audiences using <br />
                our demographic screeners
              </p>
            </div>
            <div class="spac"></div>
            <div class="item">
              <div class="iTemDotBox">
                <div class="iTemDot two"></div>
                <div class="iTemDot one"></div>
                <div class="line"></div>
              </div>
              <p>
                Gather feedbacks via our <br />
                pool of dedicated <br />
                participants
              </p>
            </div>
            <div class="spac"></div>

            <div class="item">
              <div class="iTemDotBox">
                <div class="iTemDot one"></div>
                <div class="iTemDot two"></div>
                <div class="line"></div>
              </div>
              <p>
                Automatically analyse your <br />
                results using our basic <br />
                analysis features
              </p>
            </div>
            <div class="spac"></div>
            <div class="item">
              <div class="iTemDotBox">
                <div class="iTemDot two"></div>
                <div class="iTemDot one"></div>
              </div>
              <p>
                Export received data to any <br />
                preferred formats such as <br />
                CSV, XLSX, and PDF
              </p>
            </div>
            <div class="box-text">Create survy</div>
          </div>

          <div class="box r">
            <h3>Participants</h3>
            <div class="item">
              <div class="iTemDotBox">
                <div class="iTemDot one"></div>
                <div class="iTemDot two"></div>
                <div class="line"></div>
              </div>
              <p>Easily create surveys or polls</p>
            </div>
            <div class="spac"></div>

            <div class="item">
              <div class="iTemDotBox">
                <div class="iTemDot two"></div>
                <div class="iTemDot one"></div>
                <div class="line"></div>
              </div>
              <p>
                Answer some screening <br />
                questions
              </p>
            </div>

            <div class="spac"></div>
            <div class="item">
              <div class="iTemDotBox">
                <div class="iTemDot one"></div>
                <div class="iTemDot two"></div>
                <div class="line"></div>
              </div>
              <p>
                Take part in online surveys <br />
                or studies attentively
              </p>
            </div>
            <div class="spac"></div>
            <div class="item">
              <div class="iTemDotBox">
                <div class="iTemDot two"></div>
                <div class="iTemDot one"></div>
                <div class="line"></div>
              </div>
              <p>
                Receive compensation and <br />
                cash out whenever you <br />
                ready
              </p>
            </div>
            <div class="spac"></div>
            <div class="item">
              <div class="iTemDotBox">
                <div class="iTemDot one"></div>
                <div class="iTemDot two"></div>
              </div>
              <p>
                Look for another paid <br />
                surveys or studies in <br />
                INFORMATA
              </p>
            </div>
            <div class="box-text">Be a partticipant</div>
          </div>
        </div>
        <div class="sec-3">
          <div class="box con two bg">
            <div class="box l">
              <h3>Join Us</h3>
              <p>
                INFORMATA is a crowdworking platform that allows researchers to
                launch academic/marketing researches and surveys to a dedicated
                participant pool in minutes. INFORMATA helps researchers
                gathering and measuring feedbacks which can enhance decisions
                and impacts of companies and organisations.
              </p>
              <a href="# ">
                <div class="box-text-two">Contact Us</div>
              </a>
            </div>
            <div class="box r">
              <div class="bg">
                <img
                  :src="require('@/assets/bg-01.png')"
                  alt=" "
                  width="100% "
                />
              </div>
            </div>
          </div>
          <div class="sky">
            <img :src="require('@/assets/sky-g.png')" alt=" " />
          </div>
        </div>

        <div class="box con two end">
          <div class="box">
            <div class="obj">
              <img :src="require('@/assets/obj-01.png')" alt=" " />
            </div>
            <div class="sky">
              <img :src="require('@/assets/sky-obj.png')" alt=" " />
            </div>
          </div>
          <div class="box r">
            <div class="item">
              <p>
                Direct <br />
                Contact
              </p>
              <span>+66 999 9999</span>
            </div>

            <div class="item">
              <p>Address</p>
              <span
                >Suzy Queue <br />
                4455 Landing Lange, APT 4 <br />
                Louisville, KY 40018-1234</span
              >
            </div>
          </div>
        </div>

        <div class="box con footer">
          <div class="box">
            <p>© Informata 2020</p>
            <span
              >Informatar is Online Surveys Suite account with the appropriate
              permission is required.</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="css">
@import "@/assets/css/home.css";
</style>
<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "IndexPage",
  mounted() {
    AOS.init({});
  },
};
</script>
