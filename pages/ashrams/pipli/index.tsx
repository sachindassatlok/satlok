import { NextPage } from 'next';
import AshramPage from '../../../components/AshramPage/AshramPage';

const PipliAshramPage: NextPage = () => {
  const ashramData = {
    name: 'Satlok Ashram Pipli',
    location: 'Pipli',
    description: 'A spiritual sanctuary in Pipli, spreading the divine message of Sant Rampal Ji Maharaj',
    coordinates: '30.1957° N, 76.9193° E',
    facilities: [
      {
        name: 'Satsang Hall',
        description: 'Spacious hall for spiritual discourses',
        icon: '🎤'
      },
      {
        name: 'Accommodation',
        description: 'Comfortable rooms for devotees',
        icon: '🏠'
      },
      {
        name: 'Langar Hall',
        description: 'Free vegetarian meals served daily',
        icon: '🍱'
      },
      {
        name: 'Meditation Center',
        description: 'Peaceful environment for meditation',
        icon: '🧘'
      },
      {
        name: 'Library',
        description: 'Collection of spiritual literature',
        icon: '📚'
      },
      {
        name: 'Garden',
        description: 'Serene gardens for contemplation',
        icon: '🌳'
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
        activity: 'Breakfast Prasad'
      },
      {
        time: '9:00 AM',
        activity: 'Spiritual Discourse'
      },
      {
        time: '12:00 PM',
        activity: 'Lunch Prasad'
      },
      {
        time: '4:00 PM',
        activity: 'Evening Satsang'
      },
      {
        time: '7:00 PM',
        activity: 'Evening Aarti'
      },
      {
        time: '8:00 PM',
        activity: 'Dinner Prasad'
      }
    ],
    transportation: [
      {
        mode: 'By Air',
        details: 'Nearest airport is Chandigarh International Airport (45 km)',
        icon: '✈️'
      },
      {
        mode: 'By Train',
        details: 'Pipli has its own railway station with good connectivity',
        icon: '🚂'
      },
      {
        mode: 'By Road',
        details: 'Well-connected by NH-44, regular buses available',
        icon: '🚌'
      }
    ],
    contact: {
      phone: '+91 9876543210',
      email: 'info@satlokashrampipli.org',
      address: 'Satlok Ashram, Pipli, Kurukshetra, Haryana - 136119'
    }
  };

  return <AshramPage {...ashramData} />;
};

export default PipliAshramPage;
