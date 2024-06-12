import type {
  CLSMetric,
  FCPMetric,
  INPMetric,
  LCPMetric,
  TTFBMetric,
} from 'web-vitals';
import { onCLS, onINP, onLCP, onFCP, onTTFB } from 'web-vitals';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(<App />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
const reportWebVitals = (onPerfEntry: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (...data: any[]): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (message?: any, ...optionalParams: any[]): void;
  (metric: CLSMetric): void;
  (metric: INPMetric): void;
  (metric: FCPMetric): void;
  (metric: LCPMetric): void;
  (metric: TTFBMetric): void;
}) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onINP(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

reportWebVitals(console.log);
