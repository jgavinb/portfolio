import { useEffect, useState } from 'react';

function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null as number | null,
    forks: null as number | null,
  });

  useEffect(() => {
    fetch('https://api.github.com/repos/jgavinb/portfolio')
      .then(response => response.json())
      .then(data => {
        setGitHubInfo({
          stars: data.stargazers_count || null,
          forks: data.forks_count || null
        });
      })
      .catch(() => {
        setGitHubInfo({ stars: null, forks: null });
      });
  }, []);

  return (
    <footer>
      <a
        href="https://github.com/jgavinb/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <span className="footer-info">View on GitHub</span>
      </a>
      {githubInfo.stars !== null && githubInfo.stars > 0 && (
        <span className="footer-icon">
          {githubInfo.stars}
        </span>
      )}
      {githubInfo.forks !== null && githubInfo.forks > 0 && (
        <span className="footer-icon">
          {githubInfo.forks}
        </span>
      )}
    </footer>
  );
}

export default Footer;
