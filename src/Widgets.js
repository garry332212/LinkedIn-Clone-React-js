import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_articles">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="widgets">
        <div className="widgets_header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>
        {newsArticle(
          "New Articles",
          "Check Out The New Articles From My NeW Course"
        )}
        {newsArticle("Corona Update", "100k new covid cases in Auckland")}
        {newsArticle(
          "React Course 101",
          "New react course 101 has been launched "
        )}
        {newsArticle(
          "Lorem Ipsum",
          "Nobody really understood Kevin. It wasn't that he was super strange or difficult. It was more that there wasn't enough there that anyone wanted to take the time to understand him."
        )}
        {newsArticle(
          "Randome Title",
          "Debbie knew she was being selfish and unreasonable. She understood why the others in the room were angry and frustrated with her and the way she was acting"
        )}
        {newsArticle(
          "What's Trending",
          "Sidhu Moosewala Shot Dead on 29-05-222 while going for a joy ride"
        )}
      </div>
    </>
  );
};

export default Widgets;
