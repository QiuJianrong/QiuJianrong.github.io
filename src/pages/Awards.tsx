import { ReactElement } from 'react';

export function Awards(): ReactElement {
  return (
    <>
      <div className="container news-content">
        <h4>Awards and Honors</h4>
        <div className="clearfix"> </div>
        <ul className="news-list">
          <li>
            <b>Sep. 2016: </b>
            <a href="http://sccpu2.cse.ust.hk/ficfinder/index.html">
              FicFinder
            </a>{' '}
            received <strong>ACM SIGSOFT Distinguished Paper Award</strong> in
            ASE 2016 [
            <a href="http://www.cse.ust.hk/News/SIGSOFT2016/">News link</a>]
          </li>
          
        </ul>
      </div>
    </>
  );
}
