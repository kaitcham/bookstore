import React from 'react';
import progress from './progress.png';

const Progress = () => (
  <div className="progress">
    <img src={progress} alt="progress" className="circle-wrap" />
    <div className="progress-level">
      <p>65%</p>
      <p>Completed</p>
    </div>
  </div>
);

export default Progress;
