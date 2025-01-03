import { NextPage } from 'next';
import AshramPage from '../../../components/AshramPage/AshramPage';

const DhanaAshramPage: NextPage = () => {
  const ashramData = {
    name: 'Satlok Ashram Dhana',
    location: 'Dhana',
    description: 'The main spiritual center established by Sant Rampal Ji Maharaj, spreading true spiritual knowledge',
    coordinates: '28.6139° N, 76.9225° E',
    facilities: [
      {
        name: 'Meditation Hall',
        description: 'Spacious hall for group meditation and satsang',
        icon: '🧘'
      },
      {
        name: 'Accommodation',
        description: 'Clean and comfortable rooms for devotees',
        icon: '🏠'
      },
      {
        name: 'Dining Hall',
        description: 'Free vegetarian meals served throughout the day',
        icon: '🍱'
      },
      {
        name: 'Library',
        description: 'Extensive collection of spiritual books',
        icon: '📚'
      },
      {
        name: 'Medical Center',
        description: '24/7 medical assistance available',
        icon: '🏥'
      },
      {
        name: 'Garden',
        description: 'Peaceful gardens for meditation and reflection',
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
        activity: 'Breakfast'
      },
      {
        time: '9:00 AM',
        activity: 'Spiritual Discourse'
      },
      {
        time: '12:00 PM',
        activity: 'Lunch'
      },
      {
        time: '4:00 PM',
        activity: 'Evening Satsang'
      },
      {
        time: '7:00 PM',
        activity: 'Evening Meditation'
      },
      {
        time: '8:00 PM',
        activity: 'Dinner'
      }
    ],
    transportation: [
      {
        mode: 'By Air',
        details: 'Nearest airport is IGI Delhi (80 km)',
        icon: '✈️'
      },
      {
        mode: 'By Train',
        details: 'Nearest railway station is Rohtak Junction (15 km)',
        icon: '🚂'
      },
      {
        mode: 'By Bus',
        details: 'Regular bus service from Delhi, Rohtak, and other major cities',
        icon: '🚌'
      }
    ],
    contact: {
      phone: '+91 1234567890',
      email: 'info@satlokashramdhana.org',
      address: 'Satlok Ashram, Dhana, Rohtak, Haryana - 124001'
    }
  };

  return <AshramPage {...ashramData} />;
};

export default DhanaAshramPage;
