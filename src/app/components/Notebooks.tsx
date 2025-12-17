'use client'
import React from 'react';
import { FaTable,  FaExternalLinkAlt } from 'react-icons/fa';
import { SiJupyter} from 'react-icons/si';

const notebooks = [
  {
    title: "2018-2019 EPL Analysis & Prediction",
    description: `In-depth EDA and feature engineering on 350+ records to analyze patterns, get insight on factors like Referees, and attempt to predict final game results using Random Forest and Gradient Boost Classifiers.
    Model result was low, about 64% accuracy, further illustrating difficulty in predicting game outcome with ML.`,
    tags: ["Scikit-Learn", "EDA", "GridSearchCV", "RandomizedSearchCV", "Visualization"],
    link: "https://github.com/JimRaph/Data-science-ML/tree/main/Soccer%20Data", 
  },
  {
    title: "Recipe Site Traffic",
    description: `An ML model that helps a company predict which recipes are likely to lead to high traffic.
    Full EDA to uncover insights about recipes and nutritional distribution. Model trained using Logistic Regression and
    Decision Tree classifer.`,
    tags: ["EDA", "Cross-validation", "Matplotlib"],
    link: "https://github.com/JimRaph/Data-science-ML/tree/main/Recipe%20Site%20Traffic",
  },
  {
    title: "Point of Sale Analysis",
    description: `Analysis of a supermarket POS data from cashier operations and transactions to uncover 
    customer behaviour and checkout patterns.Insights like 'Should the supermarket open on Sundays?' is uncovered.`,
    tags: ["SQL", "Plotly", "Correlation"],
    link: "https://github.com/JimRaph/Data-science-ML/tree/main/Point%20of%20Sale(POS)%20Data%20from%20a%20Supermarket%20Transactions%20and%20Cashier%20Operations",
  },
  {
    title: "Hotel Booking Demand ",
    description: `Insights such as 'what quarter do have the highest cancellation rate?', 'Do lead times result in cancellation?'.
    Analysis to uncover booking pattern contains visualization, predictive model for likelihood of cancellation, K-Fold cross-validation, data preprocessing.
    Model trained using XGBoost and Logistic Regression.`,
    tags: ["K-Fold", "XGBoost", "Seaborn"],
    link: "https://github.com/JimRaph/Data-science-ML/tree/main/Hotel%20Booking%20Demand",
  },
  {
    title: "Breast Cancer Data Visualization with PCA ",
    description: `Principal Component Analysis (PCA) to visualize a high dimensionality data that would otherwise not be possible
    to represent effectively in 2D or 3D space. 500+ records of data with 30 features.`,
    tags: ["PCA", "Visualization"],
    link: "https://github.com/JimRaph/Data-science-ML/tree/main/PCA%20for%20Visualisation",
  },
];

const Notebooks = () => {
  return (
    <section className="py-24 px-6 bg-backg border-t border-border-subtle" id="notebooks">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-between mb-12 gap-4 ">
          <div className="max-w-2xl text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary-text font-serif">
              What I was on earlier? 
            </h2>
            <p className="text-primary-text opacity-70">
                Before building full-scale applications, I spent my time with data. 
                These are the notebooks where I explored patterns, tested theories, and 
                built ML models.
            </p>
          </div>
          <div className="cursor-default flex items-center gap-3 text-accent font-mono text-sm border border-accent/30 px-4 py-2 rounded-full">
            <SiJupyter />
            <span>Jupyter Notebooks</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notebooks.map((nb, i) => (
            <div 
              key={i} 
              className="cursor-pointer group p-6 rounded-xl border border-border-subtle bg-backg hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                  <FaTable size={20} />
                </div>
                <a 
                  href={nb.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-text opacity-40 hover:opacity-100 transition-opacity"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-primary-text group-hover:text-accent transition-colors">
                {nb.title}
              </h3>
              
              <p className="text-sm text-primary-text opacity-60 mb-6 leading-relaxed">
                {nb.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {nb.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-border-subtle text-primary-text opacity-80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notebooks;