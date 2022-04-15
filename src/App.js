import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import useStyle from './style'
import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';


const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(0);
  const classes = useStyle();
  useEffect(() => {
    document.title = "Hero News "
    const alanAPI = async () => {
      alanBtn({
        key: "4e636b232bd1994a5b31f77296aa61332e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: ({ command, articles, number }) => {
          if (command === 'newHeadlines') {
            setNewsArticles(articles);
            setActiveArticle(-1);
          }
          else if (command === 'highlight') {
            setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
          }
          // else if (command === 'instructions') {
          //   setIsOpen(true);
          // }
          else if (command === 'open') {
            const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
            const article = articles[parsedNumber - 1];

            if (parsedNumber > 20) {
              alanBtn().playText('Please try that again...');
            } else if (article) {
              window.open(article.url, '_blank');
              alanBtn().playText('Opening...');
            } else {
              alanBtn().playText('Please try that again...');
            }
          }
        }
      });
    }
    alanAPI()
  }, []);

  return (
    <>
      <div className={classes.center}>
        <div className={classes.logoContainer}>
          <img src="https://www.looper.com/img/gallery/dragon-ball-super-super-hero-release-date-characters-and-plot-what-we-know-so-far/intro-1628825810.webp" className={classes.alanLogo} alt="logo" />

        </div>
        <div >
          <h1>HeroNews</h1>
          <h2  >🦸‍♂️ Hero's get the Daily news 📰for you  </h2>
        </div>
        <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      </div>
    </>
  );
}

export default App;
