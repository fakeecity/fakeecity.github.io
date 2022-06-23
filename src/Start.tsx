import './Start.css';

export default function Start() {
    return (
      <div className='WebContainer'>
        <div>
          <img src={require('./images/flags.webp')} className="flag-bar-top" alt="flag bar" />
          <div>
            <img src={require('./images/seal_doj.webp')} className="seal-doj" alt="DOJ Logo" />
            <img src={require('./images/seal_homeland.webp')} className="seal-homeland" alt="Homeland Sec Logo" />
            <img src={require('./images/seal_fbi.webp')} className="seal-fbi" alt="FBI Logo" />
          </div>
          <div className='center-text'>
            <p className='warning'><b>this hidden site has been seized</b></p>
            <p className='subtext'><b>as part of a joint law enforcement operation by<br/>
              the Federal Bureau of Investigation, ICE Homeland Security Investigations,<br/>
              and European law enforcement agencies acting through Europol and Eurojust</b></p>
            <p className='smalltext'>in accordance with the law of European Union member states<br/>
              and a protective order obtained by the United States Attorney’s Office for the Southern District of New York<br/>
              in coordination with the U.S. Department of Justice’s Computer Crime & Intellectual Property Section<br/>
              issued pursuant to 18 U.S.C. § 983(j) by the<br/>
              United States District Court for the Southern District of New York</p>
          </div>
          <div>
            <img src={require('./images/seal_europol.webp')} className="seal-europol" alt="Europol Logo" />
            <img src={require('./images/seal_eurojust.webp')} className="seal-eurojust" alt="Eurojust Logo" />
            <img src={require('./images/flags.webp')} className="flag-bar-bottom" alt="flag bar" />
          </div>
        </div>
      </div>
    )
}