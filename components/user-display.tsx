"use client";
import { useEffect, useState } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';

export function UserDisplay() {
  const [username, setUsername] = useState<string>('');
  
  useEffect(() => {
    getCurrentUser()
      .then(user => setUsername(user.username))
      .catch(() => setUsername(''));
  }, []);

  if (!username) return null;

  return (
    <div className="absolute top-4 right-4 text-white bg-black/30 px-4 py-2 rounded">
      Welcome, {username}
    </div>
  );
}
