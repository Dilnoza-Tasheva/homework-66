import MealForm from '../../Components/MealForm/MealForm.tsx';
import axiosApi from '../../axiosApi.ts';
import { IMealForm } from '../../types';


const NewMeal = () => {

  const submitForm = async (meal: IMealForm) => {
    await axiosApi.post('meal.json', {...meal});
  };


  return (
    <div>
      <MealForm submitForm={submitForm}/>
    </div>
  );
};

export default NewMeal;