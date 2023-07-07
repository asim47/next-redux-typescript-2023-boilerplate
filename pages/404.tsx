import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const EmptyPage = () => {
  const router = useRouter();

  return (
    <section className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-9xl">404</h1>
      <Button variant="contained" onClick={() => router.push('/')}>
        Go Home
      </Button>
    </section>
  );
};

export default EmptyPage;
