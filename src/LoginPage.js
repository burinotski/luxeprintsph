import React from 'react';

const LoginPage = () => {
  return (
<div style={{
  display: 'flex', // Use flexbox
  justifyContent: 'center', // Center horizontally
  alignItems: 'center', // Center vertically
  width: '100%', // Full width of the parent
  height: '100vh', // Full viewport height
  background: '#363740',
  padding: '5%', // Optional, adjust for spacing
}}>
  <div style={{width: 454, height: 776, position: 'relative'}}>
  <div style={{
    width: '60%', // 60% of the parent width
    height: '70vh', // 70% of the viewport height
    position: 'relative'
  }}>
      <div style={{width: 454, height: 776, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 8, border: '1px #DFE0EB solid'}} />
    </div>
    <div style={{width: 214, height: 20, left: 120, top: 716, position: 'absolute'}}>
      <div style={{left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#9FA2B4', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', lineHeight: 20, letterSpacing: 0.30, wordWrap: 'break-word'}}>Don’t have an account?</div>
      <div style={{width: 51, height: 20, left: 163, top: 0, position: 'absolute'}}>
        <div style={{width: 51, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#3751FF', fontSize: 14, fontFamily: 'Mulish', fontWeight: '600', lineHeight: 20, letterSpacing: 0.20, wordWrap: 'break-word'}}>Sign up</div>
      </div>
    </div>
    <div style={{width: 390, height: 48, left: 32, top: 442, position: 'absolute'}}>
      <div style={{width: 390, height: 48, left: 0, top: 0, position: 'absolute', background: '#9F09F0', boxShadow: '0px 4px 12px rgba(55, 81, 255, 0.24)', borderRadius: 8}} />
      <div style={{width: 342, left: 24, top: 15, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Mulish', fontWeight: '600', lineHeight: 1.5, letterSpacing: 0.20, wordWrap: 'break-word'}}>Log In</div>
    </div>
    <div style={{width: 390, height: 64, left: 32, top: 266, position: 'absolute'}}>
      <div style={{width: 390, height: 42, left: 0, top: 22, position: 'absolute', background: '#FCFDFE', borderRadius: 8, border: '1px #F0F1F7 solid'}} />
      <div style={{width: 366, left: 16, top: 33, position: 'absolute', opacity: 0.40, color: '#4B506D', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', lineHeight: 20, letterSpacing: 0.30, wordWrap: 'break-word'}}>Email address</div>
      <div style={{width: 390, height: 16, left: 0, top: 0, position: 'absolute', color: '#9FA2B4', fontSize: 12, fontFamily: 'Mulish', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.30, wordWrap: 'break-word'}}>email</div>
    </div>
    <div style={{width: 390, height: 64, left: 32, top: 354, position: 'absolute'}}>
      <div style={{width: 390, height: 42, left: 0, top: 22, position: 'absolute', background: '#FCFDFE', borderRadius: 8, border: '1px #F0F1F7 solid'}} />
      <div style={{width: 330, left: 16, top: 33, position: 'absolute', opacity: 0.40, color: '#4B506D', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', lineHeight: 20, letterSpacing: 0.30, wordWrap: 'break-word'}}>Password</div>
      <div style={{width: 20, height: 20, left: 354, top: 33, position: 'absolute'}}>
        <div style={{width: 16.67, height: 13.33, left: 1.67, top: 3.33, position: 'absolute', background: '#9FA2B4'}}></div>
      </div>
      <div style={{width: 390, height: 16, left: 0, top: 0, position: 'absolute', color: '#9FA2B4', fontSize: 12, fontFamily: 'Mulish', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.30, wordWrap: 'break-word'}}>password</div>
    </div>
    <div style={{width: 390, left: 32, top: 198, position: 'absolute', textAlign: 'center', color: '#9FA2B4', fontSize: 14, fontFamily: 'Mulish', fontWeight: '400', lineHeight: 20, letterSpacing: 0.30, wordWrap: 'break-word'}}>Enter your email and password below</div>
    <div style={{width: 394, height: 24, left: 34, top: 98, position: 'absolute', opacity: 0.70, textAlign: 'center', color: '#A4A6B3', fontSize: 19, fontFamily: 'Mulish', fontWeight: '700', letterSpacing: 0.40, wordWrap: 'break-word'}}>DIGITAL PRINTING SERVICES</div>
    <div style={{width: 390, left: 32, top: 183, position: 'absolute', textAlign: 'center', color: '#252733', fontSize: 12, fontFamily: 'Mulish', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.30, wordWrap: 'break-word'}}>Log in to your LuxePrints PH account</div>
    <div style={{left: 337, top: 354, position: 'absolute', textAlign: 'right', color: '#9FA2B4', fontSize: 10, fontFamily: 'Mulish', fontWeight: '400', letterSpacing: 0.10, wordWrap: 'break-word'}}>Forgot password?</div>
    <img style={{width: 152, height: 46, left: 151, top: 47, position: 'absolute'}} src="https://i.imgur.com/ayCfZgh.png/152x46" />
  </div>
</div>
  );
};

export default LoginPage;
