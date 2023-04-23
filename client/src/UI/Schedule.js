import React from 'react';

const Calendar = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const times = ['free', 'busy', 'free', '3:30 to 4:30', 'no'];

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    dayBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '10vw',
      height: '10vh',
      border: '1px solid black',
      margin: '15px',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    sideBox: {
        backgroundColor: '#c3d6bd',
        width: '70vw',
        height: '10vh',
        margin: '15px',
      },
  };

  return (
    <div style={style.container}>
      {days.map((day, time) => (
        <div key={day} style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={style.dayBox}>{day}</div>
          <div style={style.sideBox}>{times[time]}</div>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
