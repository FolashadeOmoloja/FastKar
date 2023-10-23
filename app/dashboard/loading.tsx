import { SideNav } from '@/components/DashboardComponents/SideNav/SideNav';
import SpinnerLoader from '@/components/SpinnerLoader';

const Loading= () => {
  return (
 <div className=''>
  <SideNav/>
  <SpinnerLoader/>
 </div>
  );
};

export default Loading;
