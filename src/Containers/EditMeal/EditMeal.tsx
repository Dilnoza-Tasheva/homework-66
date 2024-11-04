import MealForm from '../../Components/MealForm/MealForm.tsx';
import { useCallback, useEffect, useState } from 'react';
import { IMeal, IMealForm } from '../../types';
import { useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi.ts';
import { toast } from 'react-toastify';


const EditMeal = () => {
  const [meal, setMeal] = useState<IMeal>();
  const params = useParams<{idMeal: string}>();
  const [editLoading, setEditLoading] = useState(false);

  const fetchOneMeal = useCallback(async(id: string) => {
    try {

      const response: {data: IMeal} = await axiosApi<IMeal>(`meal/${id}.json`);
      if (response.data) {
        setMeal(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (params.idMeal) {
      void fetchOneMeal(params.idMeal);
    }
  }, [params.idMeal, fetchOneMeal]);

  const submitForm = async (meal: IMealForm) => {
    setEditLoading(true);
    try {
      if (params.idMeal) {
        await axiosApi.put(`meal/${params.idMeal}.json`, {...meal});
        toast.success('Editing was successful!');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setEditLoading(false);
    }
  };


  return (
    <div>
      <MealForm mealToEdit={meal} submitForm={submitForm} isLoading={editLoading}/>
    </div>
  );
};

export default EditMeal;