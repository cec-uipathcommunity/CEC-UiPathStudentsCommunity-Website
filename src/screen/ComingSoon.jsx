import React from 'react'

function ComingSoon() {
  const styles = `
  wrapper {
    background: #00091B;
    color: #fff;
  }
  
  
  @keyframes fadeIn {
    from {top: 20%; opacity: 0;}
    to {top: 100; opacity: 1;}
    
  }
  
  @-webkit-keyframes fadeIn {
    from {top: 20%; opacity: 0;}
    to {top: 100; opacity: 1;}
    
  }
  
  .wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    animation: fadeIn 1000ms ease;
    -webkit-animation: fadeIn 1000ms ease;
    
  }
  
  h1 {
    font-size: 50px;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 0;
    line-height: 1;
    font-weight: 700;
  }
  
  .dot {
    color: #4FEBFE;
  }
  
  p {
    text-align: center;
    margin: 18px;
    font-family: 'Muli', sans-serif;
    font-weight: normal;
    
  }
  
 

  `;
  return (
    <>      <style>{styles}</style>
      <div className="wrapper">
  <h1>Coming Soon ...</h1>
  <p></p>
 </div>
    </>
  )
}

export default ComingSoon
