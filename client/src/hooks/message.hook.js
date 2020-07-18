import React from 'react';
import { useCallback } from 'react';

export const useMessage = () => {
  return useCallback((text) => {
    return <div style={{ color: 'red' }}>{text}</div>;
  }, []);
};
