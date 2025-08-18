import React from 'react'

const SignupCard = () => {
  return (
    <section className="glass-card gradient-border" style={{ marginTop: 24 }}>
      <div className="tabs">
        <div className="tab active">
          <span style={{ fontSize: 18 }}>👤</span>
          <span>Fan Sign Up</span>
        </div>
        <div className="tab">
          <span style={{ fontSize: 18 }}>⭐</span>
          <span>Talent Sign Up</span>
        </div>
        <div className="tab">
          <span style={{ fontSize: 18 }}>🏫</span>
          <span>Brand Sign Up</span>
        </div>
      </div>

      <div className="form">
        <div className="fields">
          <input className="input" type="text" placeholder="First Name" aria-label="First Name" />
          <input className="input" type="text" placeholder="Last Name" aria-label="Last Name" />
          <input className="input" type="email" placeholder="Email Address" aria-label="Email Address" />
          <input className="input" type="text" placeholder="Date of Birth ( MM/DD/YYYY )" aria-label="Date of Birth" />
          <input className="input" type="password" placeholder="Password" aria-label="Password" />
          <input className="input" type="password" placeholder="Confirm Password" aria-label="Confirm Password" />
        </div>

        <div className="row">
          <input className="checkbox" type="checkbox" id="over12" />
          <label htmlFor="over12" className="checkbox-label">Confirm you are over 12</label>
        </div>

        <div className="legal">
          By Applying To Enroll As Talent On Ultra Viral, You Agree To Ultra Viral's <br></br> <a href="#">Terms Of Services</a> And <a href="#">Privacy Policy</a>.
        </div>

        <div className="actions">
          <button className="cta">Continue</button>
          <div className="login">Already Have An Account? <a href="#">Login</a></div>
        </div>
      </div>
    </section>
  )
}

export default SignupCard


