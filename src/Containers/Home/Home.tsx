import { useCallback, useEffect, useState } from 'react';
import { IMeal, IMealApi } from '../../types';
import axiosApi from '../../axiosApi.ts';


const Home = () => {
  const [meals, setMeals] = useState<IMeal[]>([]);

  const fetchData = useCallback(async() => {
    const response: {data: IMealApi} = await axiosApi<IMealApi>('meal.json');

    if (response.data) {
      const mealsFromApi = Object.keys(response.data).map(mealKey => {
        return {
          ...response.data[mealKey],
          id: mealKey,
        };
      });
      setMeals(mealsFromApi);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const deleteMeal = useCallback(async(mealId: string) => {
    try {
      if (window.confirm('Do you want to remove this meal?')) {
        await axiosApi.delete(`meal/${mealId}.json`);
        await fetchData();
      }
    } catch (error) {
      console.error(error);
    }
  }, [fetchData]);


  const totalCalories = meals.reduce((acc, meal) => {
    acc += meal.calories;
    return acc;
  }, 0);


  return (
    <>
      {meals.length === 0 ? <p>No meals added</p> :
        <div className="container my-4">
          <h5>Meal List: </h5>
          <hr/>
          <ul className="list-group">
            {meals.map(meal => (
              <li key={meal.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{meal.time}</strong> - {meal.description} ({meal.calories} calories)
                </div>
                <div>
                  <button className="btn btn-sm btn-outline-primary mr-3">Edit</button>
                  <button className="btn btn-sm btn-outline-danger m-2" onClick={() => deleteMeal(meal.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <span>Total calories: <strong>{totalCalories}</strong> </span>
          </div>
        </div>
      }
    </>
  );
};

export default Home;