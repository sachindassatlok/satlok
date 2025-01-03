import { NextPage } from 'next';
import AshramPage from '../../../components/AshramPage/AshramPage';

const SojatAshramPage: NextPage = () => {
  const ashramData = {
    name: 'Satlok Ashram Sojat',
    location: 'Sojat',
    description: 'A divine center in Rajasthan, dedicated to spiritual enlightenment through the teachings of Sant Rampal Ji Maharaj',
    coordinates: '25.9213° N, 73.6675° E',
    facilities: [
      {
        name: 'Main Hall',
        description: 'Large hall for satsang and spiritual programs',
        icon: '🏛️'
      },
      {
        name: 'Visitor Accommodation',
        description: 'Clean and comfortable stay facilities',
        icon: '🏠'
      },
      {
        name: 'Bhandara Hall',
        description: '24/7 free langar seva',
        icon: '🍲'
      },
      {
        name: 'Meditation Spaces',
        description: 'Quiet areas for personal meditation',
        icon: '🧘'
      },
      {
        name: 'Book Store',
        description: 'Spiritual books and literature',
        icon: '📚'
      },
      {
        name: 'Green Areas',
        description: 'Landscaped gardens for peaceful walks',
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
        activity: 'Morning Prasad'
      },
      {
        time: '9:00 AM',
        activity: 'Spiritual Discourse'
      },
      {
        time: '12:00 PM',
        activity: 'Afternoon Prasad'
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
        activity: 'Night Prasad'
      }
    ],
    transportation: [
      {
        mode: 'By Air',
        details: 'Nearest airport is Jodhpur Airport (90 km)',
        icon: '✈️'
      },
      {
        mode: 'By Train',
        details: 'Sojat Road Railway Station is well-connected',
        icon: '🚂'
      },
      {
        mode: 'By Road',
        details: 'Regular buses from Jodhpur, Udaipur, and other cities',
        icon: '🚌'
      }
    ],
    contact: {
      phone: '+91 9876543210',
      email: 'contact@satlokashramsojat.org',
      address: 'Satlok Ashram, Sojat City, Pali District, Rajasthan - 306104'
    }
  };

  return <AshramPage {...ashramData} />;
};

export default SojatAshramPage;
