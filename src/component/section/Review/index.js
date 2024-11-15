import React from 'react';
import './ReviewContainer.css';
import ProfileImage from '../../../assets/img/Profil.jpeg'; // Import the image

const reviews = [
  {
    name: 'Sarah',
    title: 'Arsitek, Manado',
    comment: 'Berkat Pelayanan Otorelax Mobil saya menjadi kinclong dan bersih jadi seperti mobil baru lagi, mana pelayanannnya bagus lagi',
    image: ProfileImage // Use the imported image
  },
];

const Review = () => {
  return (
    <div className="review-container">
      <h2>Kata mereka yang telah menggunakan OtoRelax</h2>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-content">
              <img src={review.image} alt={`${review.name}`} className="review-image" />
              <p className="review-comment">"{review.comment}"</p>
              <p className="review-author">{review.name}</p>
              <p className="review-title">{review.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
