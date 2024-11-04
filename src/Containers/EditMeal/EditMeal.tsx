import MealForm from '../../Components/MealForm/MealForm.tsx';
import { useState } from 'react';
import { IMeal } from '../../types';
import { useParams } from 'react-router-dom';


const EditMeal = () => {
  const [meal, setMeal] = useState<IMeal>();
  const params = useParams()

  return (
    <div>
      <MealForm/>

    </div>
  );
};

export default EditMeal;