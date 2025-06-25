import { useAuth } from '../../contexts/AuthContext';
import DailyTracker from '../../components/DailyTracker';
import Heatmap from '../../components/Heatmap';

export default function StudentDashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="dashboard">
      <h1>Welcome, {currentUser?.email}</h1>
      <DailyTracker userId={currentUser?.uid} />
      <Heatmap userId={currentUser?.uid} />
    </div>
  );
}