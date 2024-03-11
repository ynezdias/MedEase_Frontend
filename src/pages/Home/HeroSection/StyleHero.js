import styled from "styled-components";
import img from '../../../images/img/hero-bg.jpg';
const StyleHero = styled.section`

#hero {
  width: 100%;
  height: 90vh;
  background-image: url(${img});
  background-position: top center;
  background-size: cover;
  margin-bottom: -115px;
  margin-top: 80px;
}

  
  #hero .container {
    position: relative;
  }
  
  #hero h1 {
    margin: 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    text-transform: uppercase;
    color: #15558d;
  }
  
  #hero h2 {
    color: #15558d;
    margin: 10px 0 0 0;
    font-size: 24px;
  }
  
  #hero .btn-get-started {
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 12px 35px;
    margin-top: 30px;
    border-radius: 50px;
    transition: 0.5s;
    color: #fff;
    background: #15558d;
  }
  
  #hero .btn-get-started:hover {
    background: #3291e6;
  }
  
  @media (min-width: 1024px) {
    #hero {
      background-attachment: fixed;
    }
  }
  
  @media (max-width: 992px) {
    #hero {
      margin-bottom: 0;
      height: 100vh;
    }
  
    #hero .container {
      padding-bottom: 63px;
    }
  
    #hero h1 {
      font-size: 28px;
      line-height: 36px;
    }
  
    #hero h2 {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 30px;
    }
  }
  
  @media (max-width: 600px) {
    #hero {
      height: 60vh;
    }
    #hero .btn-get-started {
      font-size: 12px;
      padding: 8px 10px;
    }
  }
`;

export default StyleHero;