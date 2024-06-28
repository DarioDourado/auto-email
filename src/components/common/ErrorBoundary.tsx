import React, { ErrorInfo } from 'react';
import { Typography } from '@mui/material';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // Optionally, log error information to a service
  }

  render() {
    if (this.state.hasError) {
      return (
        <Typography variant="h6" align="center">
          Something went wrong.
        </Typography>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
