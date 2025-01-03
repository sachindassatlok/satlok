import { NextPage } from 'next';
import AshramPage from '../../../components/AshramPage/AshramPage';

const MithilaAshramPage: NextPage = () => {
  const ashramData = {
    name: 'Satlok Ashram Mithila',
    location: 'Mithila',
    description: 'A sacred spiritual center in the historic land of Mithila, spreading the divine message of Sant Rampal Ji Maharaj',
    coordinates: '26.1542° N, 85.8918° E',
    facilities: [
      {
        name: 'Satsang Bhavan',
        description: 'Grand hall for spiritual assemblies',
        icon: '🏛️'
      },
      {
        name: 'Atithi Niwas',
        description: 'Guest accommodation with modern amenities',
        icon: '🏨'
      },
      {
        name: 'Anna Kshetra',
        description: '24x7 free food service',
        icon: '🍱'
      },
      {
        name: 'Dhyan Kendra',
        description: 'Dedicated meditation facility',
        icon: '🧘'
      },
      {
        name: 'Gyan Mandir',
        description: 'Knowledge center with extensive resources',
        icon: '📚'
      },
      {
        name: 'Pushp Vatika',
        description: 'Beautiful flower gardens',
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
        details: 'Nearest airport is Jay Prakash Narayan International Airport, Patna (120 km)',
        icon: '✈️'
      },
      {
        mode: 'By Train',
        details: 'Darbhanga Junction Railway Station is well-connected',
        icon: '🚂'
      },
      {
        mode: 'By Road',
        details: 'Regular buses from Patna, Muzaffarpur, and other major cities',
        icon: '🚌'
      }
    ],
    contact: {
      phone: '+91 9876543210',
      email: 'contact@satlokashrammithila.org',
      address: 'Satlok Ashram, Mithila, Darbhanga, Bihar - 846001'
    }
  };

  return <AshramPage {...ashramData} />;
};

export default MithilaAshramPage;
