import MealForm from '../../Components/MealForm/MealForm.tsx';
import { useCallback, useEffect, useState } from 'react';
import { IMeal, IMealForm } from '../../types';
import { useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi.ts';


const EditMeal = () => {
  const [meal, setMeal] = useState<IMeal>();
  const params = useParams<{idMeal: string}>();

  const fetchOneMeal = useCallback(async(id: string) => {
    const response: {data: IMeal} = await axiosApi<IMeal>(`meal/${id}.json`);
    if (response.data) {
      setMeal(response.data);
    }
  }, []);

  useEffect(() => {
    if (params.idMeal) {
      void fetchOneMeal(params.idMeal);
    }
  }, [params.idMeal, fetchOneMeal]);

  const submitForm = async (meal: IMealForm) => {
    try {
      if (params.idMeal) {
        await axiosApi.put(`meal/${params.idMeal}.json`, {...meal});
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <MealForm mealToEdit={meal} submitForm={submitForm}/>
    </div>
  );
};

export default EditMeal;