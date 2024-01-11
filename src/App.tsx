import React, { useState, useEffect } from "react";
import './App.css';
import DataList from './DataList';
import NewsDataService from "./services/NewsDataService";
import NewsData from './types/NewsData';


function App() {

  const [newsData, setNewsData] = useState<Array<NewsData>>([]);

  useEffect(() => {
    retrieveNewsData();
  }, []);

  const retrieveNewsData = () => {
    NewsDataService.getAll()
      .then((response: any) => {
        setNewsData(response.data.feed);
        console.log(response.data.feed);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <div className="App">
      <div className="w-full h-screen flex flex-cols text-center">
        <div className="grid mr-4 ml-4">
          <DataList data={newsData} />
        </div>
     </div>
    </div>
  );
}

export default App;
