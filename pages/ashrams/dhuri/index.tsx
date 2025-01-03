import { NextPage } from 'next';
import AshramPage from '../../../components/AshramPage/AshramPage';

const DhuriAshramPage: NextPage = () => {
  const ashramData = {
    name: 'Satlok Ashram Dhuri',
    location: 'Dhuri',
    description: 'A spiritual oasis in Punjab, spreading the divine message of Sant Rampal Ji Maharaj',
    coordinates: '30.3686° N, 75.8673° E',
    facilities: [
      {
        name: 'Main Hall',
        description: 'Expansive hall for spiritual programs',
        icon: '🏛️'
      },
      {
        name: 'Guest House',
        description: 'Comfortable stay arrangements',
        icon: '🏠'
      },
      {
        name: 'Langar Hall',
        description: 'Free community kitchen service',
        icon: '🍲'
      },
      {
        name: 'Dhyan Kendra',
        description: 'Peaceful meditation center',
        icon: '🧘'
      },
      {
        name: 'Pustkalaya',
        description: 'Well-stocked spiritual library',
        icon: '📚'
      },
      {
        name: 'Bagichi',
        description: 'Lush gardens for relaxation',
        icon: '🌺'
      }
    ],
    schedule: [
      {
        time: '4:00 AM',
        activity: 'Morning Meditation'
      },
      {
        time: '5:00 AM',
        activity: 'Morning Satsang'
      },
      {
        time: '7:00 AM',
        activity: 'Morning Langar'
      },
      {
        time: '9:00 AM',
        activity: 'Spiritual Discourse'
      },
      {
        time: '12:00 PM',
        activity: 'Afternoon Langar'
      },
      {
        time: '4:00 PM',
        activity: 'Evening Satsang'
      },
      {
        time: '7:00 PM',
        activity: 'Sandhya Aarti'
      },
      {
        time: '8:00 PM',
        activity: 'Night Langar'
      }
    ],
    transportation: [
      {
        mode: 'By Air',
        details: 'Nearest airport is Chandigarh International Airport (100 km)',
        icon: '✈️'
      },
      {
        mode: 'By Train',
        details: 'Dhuri Junction is well-connected to major cities',
        icon: '🚂'
      },
      {
        mode: 'By Road',
        details: 'Regular buses from Chandigarh, Ludhiana, and other cities',
        icon: '🚌'
      }
    ],
    contact: {
      phone: '+91 9876543210',
      email: 'contact@satlokashramdhuri.org',
      address: 'Satlok Ashram, Dhuri, Sangrur District, Punjab - 148024'
    }
  };

  return <AshramPage {...ashramData} />;
};

export default DhuriAshramPage;
