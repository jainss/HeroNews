import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyle from './style'

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyle();
  useEffect(() => {
    const alanAPI = async () => {
      alanBtn({
        key: "4e636b232bd1994a5b31f77296aa61332e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: ({ command, articles }) => {
          if (command === 'newHeadlines') {
            // alert("the command strated");
            // console.log("hello")
            setNewsArticles(articles);
          }
        }
      });
    }
    alanAPI()
  }, []);

  return (
    <div >
      <div className={classes.logoContainer}>
        <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
