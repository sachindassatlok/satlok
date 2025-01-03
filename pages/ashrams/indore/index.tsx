import { NextPage } from 'next';
import AshramPage from '../../../components/AshramPage/AshramPage';

const IndoreAshramPage: NextPage = () => {
  const ashramData = {
    name: 'Satlok Ashram Indore',
    location: 'Indore',
    description: 'A spiritual haven in the heart of Madhya Pradesh, offering divine knowledge and peace',
    coordinates: '22.7196° N, 75.8577° E',
    facilities: [
      {
        name: 'Main Complex',
        description: 'Modern facility for spiritual programs',
        icon: '🏛️'
      },
      {
        name: 'Residential Wing',
        description: 'Well-appointed rooms for visitors',
        icon: '🏢'
      },
      {
        name: 'Prasad Center',
        description: 'Hygienic food preparation and service',
        icon: '🍲'
      },
      {
        name: 'Meditation Hall',
        description: 'Peaceful environment for spiritual practice',
        icon: '🧘'
      },
      {
        name: 'Digital Library',
        description: 'Modern facility with spiritual resources',
        icon: '💻'
      },
      {
        name: 'Eco Park',
        description: 'Green spaces for meditation',
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
        details: 'Devi Ahilyabai Holkar Airport, Indore (12 km)',
        icon: '✈️'
      },
      {
        mode: 'By Train',
        details: 'Indore Junction is well-connected to all major cities',
        icon: '🚂'
      },
      {
        mode: 'By Road',
        details: 'Located on Mumbai-Agra Highway, excellent connectivity',
        icon: '🚌'
      }
    ],
    contact: {
      phone: '+91 9876543210',
      email: 'info@satlokashramindore.org',
      address: 'Satlok Ashram, Indore, Madhya Pradesh - 452001'
    }
  };

  return <AshramPage {...ashramData} />;
};

export default IndoreAshramPage;
