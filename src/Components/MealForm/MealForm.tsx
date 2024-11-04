import { IMealForm } from '../../types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';


const initialForm = {
  time: '',
  description: '',
  calories: 0,
};

interface Props {
  mealToEdit?: IMealForm;
  submitForm: (meal: IMealForm) => void;
}

const MealForm: React.FC<Props> = ({mealToEdit, submitForm}) => {
  const [form, setForm] = useState<IMealForm>({...initialForm});
  const navigate = useNavigate();

  useEffect(() => {
    if (mealToEdit) {
      setForm(prevState => ({
        ...prevState,
        ...mealToEdit,
      }));
    } else {
      setForm({...initialForm});
    }
  },[mealToEdit]);


  const onChangeField = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitForm({...form, calories: Number(form.calories)});

    if (!mealToEdit) {
      setForm({...initialForm});
      navigate('/');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>{mealToEdit ? 'Edit meal' : 'Add new meal'}</h3>
      <hr/>
      <div className="form-group mb-2">
        <label htmlFor="time">Time of the meal</label>
        <select
          id="time"
          name="time"
          className="form-control"
          value={form.time}
          onChange={onChangeField}
        >
          <option value="">Select time of the meal</option>
          <option value="Breakfast">breakfast</option>
          <option value="Snack">snack</option>
          <option value="Lunch">lunch</option>
          <option value="Dinner">dinner</option>
        </select>
      </div>

      <div className="form-group mb-2">
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          name="description"
          className="form-control"
          value={form.description}
          onChange={onChangeField}
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="calories">Calories :</label>
        <input
          type="number"
          id="calories"
          name="calories"
          min={1}
          className="form-control"
          value={form.calories}
          onChange={onChangeField}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {mealToEdit ? 'Edit meal' : 'Add meal'}
      </button>
    </form>
  );
};

export default MealForm;