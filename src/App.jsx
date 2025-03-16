import React from 'react'
import PostJobPage from './page/PostJobPage'
import { ErrorBoundary } from 'react-error-boundary';

const App = () => {
  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <div className="bg-red-500">
        <PostJobPage />
      </div>
    </ErrorBoundary>
  );
}

export default App
