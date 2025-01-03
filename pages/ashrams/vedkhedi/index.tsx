import { NextPage } from 'next';
import AshramPage from '../../../components/AshramPage/AshramPage';

const VedkhediAshramPage: NextPage = () => {
  const ashramData = {
    name: 'Satlok Ashram Vedkhedi',
    location: 'Vedkhedi',
    description: 'A serene spiritual center in Madhya Pradesh, offering divine knowledge and peace to seekers',
    coordinates: '22.9676° N, 76.0534° E',
    facilities: [
      {
        name: 'Satsang Bhavan',
        description: 'Grand hall for spiritual discourses',
        icon: '🏛️'
      },
      {
        name: 'Residential Blocks',
        description: 'Modern accommodation facilities',
        icon: '🏘️'
      },
      {
        name: 'Prasad Hall',
        description: 'Spacious dining area serving pure vegetarian food',
        icon: '🍱'
      },
      {
        name: 'Meditation Center',
        description: 'Dedicated spaces for meditation practice',
        icon: '🧘'
      },
      {
        name: 'Knowledge Center',
        description: 'Library and study area',
        icon: '📚'
      },
      {
        name: 'Nature Park',
        description: 'Beautiful gardens and walking paths',
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
        details: 'Nearest airport is Indore Airport (60 km)',
        icon: '✈️'
      },
      {
        mode: 'By Train',
        details: 'Nearest railway station is Dewas Junction (15 km)',
        icon: '🚂'
      },
      {
        mode: 'By Road',
        details: 'Well-connected by highways, regular buses available',
        icon: '🚌'
      }
    ],
    contact: {
      phone: '+91 9876543210',
      email: 'info@satlokashramvedkhedi.org',
      address: 'Satlok Ashram, Vedkhedi, Dewas, Madhya Pradesh - 455001'
    }
  };

  return <AshramPage {...ashramData} />;
};

export default VedkhediAshramPage;
