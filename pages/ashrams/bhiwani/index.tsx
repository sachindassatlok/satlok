import { NextPage } from 'next';
import AshramPage from '../../../components/AshramPage/AshramPage';

const BhiwaniAshramPage: NextPage = () => {
  const ashramData = {
    name: 'Satlok Ashram Bhiwani',
    location: 'Bhiwani',
    description: 'A spiritual haven in Bhiwani, dedicated to spreading the divine knowledge of Sant Rampal Ji Maharaj',
    coordinates: '28.7833° N, 76.1333° E',
    facilities: [
      {
        name: 'Satsang Hall',
        description: 'Large hall for spiritual discourses',
        icon: '🎤'
      },
      {
        name: 'Guest Rooms',
        description: 'Comfortable accommodation for visitors',
        icon: '🛏️'
      },
      {
        name: 'Community Kitchen',
        description: 'Free langar seva throughout the day',
        icon: '🍲'
      },
      {
        name: 'Meditation Area',
        description: 'Peaceful spaces for individual meditation',
        icon: '🧘'
      },
      {
        name: 'Bookstore',
        description: 'Spiritual books and literature available',
        icon: '📚'
      },
      {
        name: 'Green Space',
        description: 'Beautiful gardens for peaceful walks',
        icon: '🌿'
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
        activity: 'Aarti'
      },
      {
        time: '8:00 PM',
        activity: 'Dinner Prasad'
      }
    ],
    transportation: [
      {
        mode: 'By Air',
        details: 'Nearest airport is IGI Delhi (120 km)',
        icon: '✈️'
      },
      {
        mode: 'By Train',
        details: 'Direct trains available to Bhiwani Junction',
        icon: '🚂'
      },
      {
        mode: 'By Road',
        details: 'Well-connected by highways from Delhi and other major cities',
        icon: '🚌'
      }
    ],
    contact: {
      phone: '+91 9876543210',
      email: 'contact@satlokashrambhiwani.org',
      address: 'Satlok Ashram, Bhiwani, Haryana - 127021'
    }
  };

  return <AshramPage {...ashramData} />;
};

export default BhiwaniAshramPage;
