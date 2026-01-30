import { ReactElement } from 'react';

export function Projects(): ReactElement {
  return (
    <>
      <div className="container project-content">
        <h4>Funded Research Projects</h4>
        <ul className="project_ul">
          <li>
            More recent funded projects are avaiable at{' '}
            <a href="https://facultyprofiles.hkust.edu.hk/profiles.php?profile=shing-chi-cheung-sccheung#proj">
              here
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
