import React from 'react';

const RecipeItem = props => {
  const {
    dish: {
      label,
      image,
      healthLabels,
      dietLables,
      ingredientLines,
      calories,
      totalTime
    }
  } = props;

  return (
    <div className='dish'>
      <div className='details'>
        <h2>{label}</h2>
        <img src={image} alt={label} />
        <h4>Ingredients:</h4>
        <ul>
          {ingredientLines.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      </div>
      <p className='cal-time'>
        <span className='calories'>Total Calories: {calories.toFixed()}</span>
        <span className='time'>Time to prepare: {totalTime} mins</span>
      </p>
    </div>
  );
};

export default RecipeItem;
