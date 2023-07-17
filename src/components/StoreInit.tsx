'use client';
import { useStore } from '@/store/store';
import { useRef } from 'react';

const StoreInit = ({ tasks }: { tasks: []; }) => {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState({
      tasks: [],
    });
    initialized.current = true;
  }
  return null;
};

export default StoreInit;
