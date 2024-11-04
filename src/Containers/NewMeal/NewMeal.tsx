import MealForm from '../../Components/MealForm/MealForm.tsx';
import axiosApi from '../../axiosApi.ts';
import { IMealForm } from '../../types';
import { useState } from 'react';


const NewMeal = () => {
  const [editLoading, setEditLoading] = useState(false);

  const submitForm = async (meal: IMealForm) => {
    console.log('Form submission started');
    setEditLoading(true);
    try {
      await axiosApi.post('meal.json', {...meal});
    } catch (error) {
      console.error(error);
    } finally {
      setEditLoading(false);
    }
  };

  return (
    <div>
      <MealForm submitForm={submitForm} isLoading={editLoading}/>
    </div>
  );
};

export default NewMeal;