import { NextPage } from 'next';
import AshramPage from '../../../components/AshramPage/AshramPage';

const BetulAshramPage: NextPage = () => {
  const ashramData = {
    name: 'Satlok Ashram Betul',
    location: 'Betul',
    description: 'A peaceful spiritual center in Madhya Pradesh, dedicated to spreading true spiritual knowledge',
    coordinates: '21.9102° N, 77.9064° E',
    facilities: [
      {
        name: 'Satsang Hall',
        description: 'Spacious venue for spiritual programs',
        icon: '🏛️'
      },
      {
        name: 'Visitor Quarters',
        description: 'Clean and comfortable accommodation',
        icon: '🏠'
      },
      {
        name: 'Bhandara Hall',
        description: 'Free prasad distribution center',
        icon: '🍱'
      },
      {
        name: 'Meditation Complex',
        description: 'Dedicated area for spiritual practice',
        icon: '🧘'
      },
      {
        name: 'Knowledge Center',
        description: 'Library and study facilities',
        icon: '📚'
      },
      {
        name: 'Nature Walk',
        description: 'Scenic paths for contemplation',
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
        details: 'Nearest airport is Dr. Babasaheb Ambedkar International Airport, Nagpur (180 km)',
        icon: '✈️'
      },
      {
        mode: 'By Train',
        details: 'Betul Junction is well-connected to major cities',
        icon: '🚂'
      },
      {
        mode: 'By Road',
        details: 'Located on NH-69, regular buses from Bhopal and Nagpur',
        icon: '🚌'
      }
    ],
    contact: {
      phone: '+91 9876543210',
      email: 'contact@satlokashrambetul.org',
      address: 'Satlok Ashram, Betul, Madhya Pradesh - 460001'
    }
  };

  return <AshramPage {...ashramData} />;
};

export default BetulAshramPage;
