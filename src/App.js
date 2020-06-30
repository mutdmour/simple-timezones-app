import React from "react";
import Timezones from "./components/Timezones";
import ErrorBoundary from './components/ErrorBoundary';

import "./styles.scss";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Timezones />
      </div>
    </ErrorBoundary>
  );
}
