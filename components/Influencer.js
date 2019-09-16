
const Influencer = (props) => {
  
  const {influencer, keys} = props

  return (
    <div className="influencer-sec">
      <div className={keys}>
        <div className="finda-reporter-item">
          <div className={'images-man ' + keys + '-photo'}>
              <img src={influencer.photo} />
          </div>
          <h3 className="name-heading">{influencer.name}</h3>
          <h6 className="email-heading">{influencer.official}</h6>
          <p className="text-des">{influencer.description}</p>
          <ul className="reporter-unorder">
            <li className="reporter-list">
              <h4 className="social-heading">{influencer.following}</h4>
              <p className="social-detail">Following</p>
            </li>
            <li className="reporter-list">
              <h4 className="social-heading">{influencer.fans}</h4>
              <p className="social-detail">Following</p>
            </li>
            <li className="reporter-list">
              <h4 className="social-heading">{influencer.hearts}</h4>
              <p className="social-detail">Following</p>
            </li>
          </ul>
          <p className="see-report">
              SEE REPORT 
          </p>
        </div>
      </div>
      <style jsx>{`
        .influencer-sec {
          padding-bottom: 100px;
        }
        .influencer2 {
          margin-top: 25px;
        }
        .images-man.influencer2-photo {
          top: -57px;
        }
        .finda-reporter-item {
          background-color: #fff;
          border-radius: 24px;
          box-shadow: 0 6px 20px 0 rgba(0,0,0,0.08);
          text-align: center;
          position: relative;
        }
        .images-man {
          position: absolute;
          left: 50%;
          top: -56px;
          transform: translate(-50%);
          height: 100px;
        }
        .name-heading {
          margin: 0;
          padding-top: 80px;
          font-size: 22px;
          color: #2C2C2C;
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
          padding-left: 15px;
          padding-right: 15px;
        }
        .email-heading {
          margin: 0;
          padding-top: 10px;
          font-size: 16px;
          color: #3F4145;
          opacity: 0.5;
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
        }
        .text-des {
          color: #3F4145;
          font-size: 15px;
          line-height: 24px;
          font-family: 'Barlow', sans-serif;
          margin: 7px 0;
          padding: 0 30px;
        }
        .reporter-unorder {
          padding: 15px 0;
        }
        .reporter-list {
          list-style-type: none;
          display: inline-block;
          padding: 0 20px;
          border-right: 1px solid rgba(173,173,173 , 0.2);;
        }
        .reporter-list:last-child {
          border-right: 0;
        }
        .social-heading {
          margin: 0;
          font-size: 24px;
          color: #2C2C2C;
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
        }
        .social-detail {
          color: #3F4145;
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
          font-size: 12px;
          margin: 0;
          opacity: 0.5;
        }
        .social-detail:last-child{
          border-right: 0;
        }
        .see-report {
          font-size: 16px;
          color: #F32855;
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
          padding: 15px 0;
          border-top: 1px solid rgba(173,173,173 ,0.2);
        }
        @media screen and (min-width: 768px) and (max-width: 1250px){
          .social-heading {
            font-size: 18px;
          }
          .reporter-list {
            padding: 0 10px;
          }
        }
        @media screen and (max-width: 767px){
          .influencer-sec {
            padding-bottom: 50px;
          }
          .finda-reporter-item {
            width: 330px;
            margin: 30px auto 0 auto;
          }
        }
      `}</style>
    </div>
  )
}

export default Influencer;