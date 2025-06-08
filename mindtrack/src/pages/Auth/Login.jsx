import { useState } from 'react';
import { loginWithEmail, loginWithGoogle } from '../../firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      navigate('/student/dashboard');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-page">
      <h1>MindTrack Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
      <button onClick={loginWithGoogle}>Sign in with Google</button>
    </div>
  );
}