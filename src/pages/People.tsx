import { ReactElement } from 'react';

export function People(): ReactElement {
  return (
    <>
      <div className="banner-bottom">
        <div className="container people">
          <h2>Researchers and Co-Leaders</h2>
          <div className="banner-bottom-left">
            <a href="http://www.cse.ust.hk/faculty/scc/">
              <div className="portrait scc"></div>
            </a>
            <h3>
              <a href="http://www.cse.ust.hk/faculty/scc/">Shing-Chi Cheung</a>
            </h3>
            <p>Chair Professor at HKUST</p>
          </div>


          {/*  Students  */}

          <div className="clearfix"> </div>
          <h2>Students</h2>

          <div className="banner-bottom-left">
            <div className="portrait">
              <img alt="" src="images/luliu.png" className="portrait-round" />
            </div>
            <h3>
              <a href="https://liuluuuu.github.io/">Lu Liu</a>
            </h3>
            <p>PhD Student at HKUST</p>
          </div>



          {/* Former Members */}
          <div className="clearfix"> </div>
          <h2>Former Members</h2>

          <div className="banner-bottom-left">
            <a href="https://haoyang9804.github.io">
              <div className="portrait">
                <img
                  alt=""
                  src="images/haoyang.jpg"
                  className="portrait-round"
                />
              </div>
            </a>
            <h3>
              <a href="https://haoyang9804.github.io">Haoyang Ma</a>
            </h3>
            <p>PhD 2025; AI Infra engineer at an Embodied AI startup</p>
          </div>

          

          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}
