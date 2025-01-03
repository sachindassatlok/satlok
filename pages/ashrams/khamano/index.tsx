import { NextPage } from 'next';
import AshramPage from '../../../components/AshramPage/AshramPage';

const KhamanoAshramPage: NextPage = () => {
  const ashramData = {
    name: 'Satlok Ashram Khamano',
    location: 'Khamano',
    description: 'A divine sanctuary in Punjab, offering spiritual guidance through the teachings of Sant Rampal Ji Maharaj',
    coordinates: '30.8173° N, 76.3510° E',
    facilities: [
      {
        name: 'Satsang Complex',
        description: 'Modern facility for spiritual gatherings',
        icon: '🏛️'
      },
      {
        name: 'Niwas',
        description: 'Peaceful accommodation for devotees',
        icon: '🏘️'
      },
      {
        name: 'Langar Bhavan',
        description: 'Round-the-clock free meals service',
        icon: '🍲'
      },
      {
        name: 'Meditation Hall',
        description: 'Serene space for spiritual practice',
        icon: '🧘'
      },
      {
        name: 'Study Center',
        description: 'Resource center for spiritual knowledge',
        icon: '📚'
      },
      {
        name: 'Sacred Garden',
        description: 'Tranquil outdoor meditation spaces',
        icon: '🌸'
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
        activity: 'Amrit Vela Langar'
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
        activity: 'Daily Aarti'
      },
      {
        time: '8:00 PM',
        activity: 'Evening Langar'
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
        details: 'Nearest major station is Sirhind Junction (20 km)',
        icon: '🚂'
      },
      {
        mode: 'By Road',
        details: 'Well-connected by NH-05, regular buses available',
        icon: '🚌'
      }
    ],
    contact: {
      phone: '+91 9876543210',
      email: 'info@satlokashramkhamano.org',
      address: 'Satlok Ashram, Khamano, Fatehgarh Sahib, Punjab - 141417'
    }
  };

  return <AshramPage {...ashramData} />;
};

export default KhamanoAshramPage;
