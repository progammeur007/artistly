'use client';

import { useForm, Controller } from 'react-hook-form'; //form validation
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../../components/header';
import styles from '../../styles/Onboarding.module.css';

const categories = ['Singer', 'Dancer', 'Speaker', 'DJ'];
const languages = ['Hindi', 'English', 'Punjabi', 'Tamil'];
const feeRanges = ['₹5,000 - ₹10,000', '₹10,000 - ₹20,000', '₹20,000+'];

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required'),
  categories: yup.array().min(1, 'Select at least one category'),
  languages: yup.array().min(1, 'Select at least one language'),
  fee: yup.string().required('Fee range is required'),
  location: yup.string().required('Location is required'),
});

export default function OnboardPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      categories: [],
      languages: [],
    },
  });

  const onSubmit = (data: any) => {
    console.log('Submitted Data:', data);  // data submitted in log as of now can be pushed to dataBase once integrated
    alert('Artist submitted! Check console.');
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.heading}>🎤 Artist Onboarding Form</h2>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {/* Name */}
          <div className={styles.inputGroup}>
            <label>Name</label>
            <input {...register('name')} />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          {/* Bio */}
          <div className={styles.inputGroup}>
            <label>Bio</label>
            <textarea rows={4} {...register('bio')} />
            {errors.bio && <p>{errors.bio.message}</p>}
          </div>

          {/* Categories */}
          <div className={styles.inputGroup}>
            <label>Category</label>
            {categories.map((cat) => (
              <label key={cat} className={styles.checkbox}>
                <input type="checkbox" value={cat} {...register('categories')} />
                {cat}
              </label>
            ))}
            {errors.categories && <p>{errors.categories.message}</p>}
          </div>

          {/* Languages */}
          <div className={styles.inputGroup}>
            <label>Languages Spoken</label>
            {languages.map((lang) => (
              <label key={lang} className={styles.checkbox}>
                <input type="checkbox" value={lang} {...register('languages')} />
                {lang}
              </label>
            ))}
            {errors.languages && <p>{errors.languages.message}</p>}
          </div>

          {/* Fee */}
          <div className={styles.inputGroup}>
            <label>Fee Range</label>
            <select {...register('fee')}>
              <option value="">Select Fee</option>
              {feeRanges.map((fee) => (
                <option key={fee} value={fee}>{fee}</option>
              ))}
            </select>
            {errors.fee && <p>{errors.fee.message}</p>}
          </div>

          {/* Profile Image */}
          <div className={styles.inputGroup}>
            <label>Profile Image (optional)</label>
            <input type="file" />
          </div>

          {/* Location */}
          <div className={styles.inputGroup}>
            <label>Location</label>
            <input {...register('location')} />
            {errors.location && <p>{errors.location.message}</p>}
          </div>

          <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
      </div>
    </>
  );
}
