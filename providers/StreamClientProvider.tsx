'use client';

import { ReactNode, Suspense } from 'react';
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';
import { tokenProvider } from '@/actions/stream.actions';
import Loader from '@/components/Loader';

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

// Separate client component for initialization
const StreamVideoWrapper = ({ children }: { children: ReactNode }) => {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) return <Loader />;
  if (!API_KEY) throw new Error('Stream API key is missing');

  const videoClient = new StreamVideoClient({
    apiKey: API_KEY,
    user: {
      id: user.id,
      name: user.username || user.id,
      image: user.imageUrl,
    },
    tokenProvider,
  });

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

const StreamClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<Loader />}>
      <StreamVideoWrapper>{children}</StreamVideoWrapper>
    </Suspense>
  );
};

export default StreamClientProvider;
