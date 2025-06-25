import { getAnonymizedLogs } from '../../services/firestore';
import { useState, useEffect } from 'react';

export default function MentorDashboard() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnonymizedLogs();
      setLogs(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Student Insights</h1>
      {logs.map((log) => (
        <div key={log.id}>
          <p>Focus Score: {log.focus}</p>
          <p>Stress Level: {log.stress}</p>
        </div>
      ))}
    </div>
  );
}