import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bg flex items-center justify-center p-6 text-center">
          <div className="bg-surface border border-red/20 rounded-lg p-8 max-w-md shadow-md">
            <h1 className="text-xl font-bold text-red mb-4">Something went wrong</h1>
            <p className="text-text2 mb-6 text-sm">
              We've encountered an unexpected error. Please try refreshing the page.
            </p>
            <pre className="bg-surface2 p-4 rounded text-left text-[10px] text-red overflow-auto max-h-40 mb-6">
              {this.state.error?.toString()}
            </pre>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-teal text-white rounded-md font-semibold text-sm hover:bg-teal-dark transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
