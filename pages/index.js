import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import SearchContainer from '../components/SearchContainer';


const Index = (props) => (
  <Layout>
    <section className="finda-social-banner">
      <div className="finda-social-banner__container">
        <Navbar />

        <div className="finda-banner-text">
          <h3 className="banner-heading">
              The easiest way to find  
              <span className="banner-sub-heading"> Tik Tok </span>
              influencers
          </h3>
          <p className="search-a-database-of">Search a database of over 1.5M tiktok accounts in seconds</p>
        </div>

        <SearchContainer />
      </div>
    </section>
    <style jsx>{`
      .finda-social-banner {
        background-color: #000000;
        height: 800px;
        border-bottom-right-radius: 100px;
      }
      .finda-social-banner__container {
        width: 1170px;
        margin: 0 auto;
      }
      .account-title {
        opacity: 0.6;
        color: #FFFFFF;
        font-family: 'Barlow', sans-serif;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 100px;
      }

      .finda-banner-text {
        padding-top: 100px;
      }
      .search-a-database-of { 
        color: #FFFFFF; 
        font-family: Barlow;  
        font-size: 20px;  
        line-height: 26px;  
        text-align: center;
      }
      .banner-heading {
        font-size: 62px;
        color: #fff;
        width: 725px;
        font-family: 'Barlow', sans-serif;
        font-weight: 800;
        margin: 0 auto;
        text-align: center;
      }
    `}</style>
  </Layout>
);

export default Index;