import { ErrorBoundary } from "react-error-boundary";

function CustomErrorBoundaryUI({ error, resetErrorBoundary }) {
  return (
    <div className="h-[100vh] flex justify-center items-center px-6">
      <div role="alert" className="alert alert-error">
        <p>Sonething went wrong:</p>
        <div>{error?.message}</div>
        <button onClick={resetErrorBoundary}>Try again after sometime</button>
      </div>
    </div>
  );
}

export default function CustomErrorBoundary({ children }) {
  return (
    <ErrorBoundary FallbackComponent={CustomErrorBoundaryUI} onReset={() => window.location.reload()}>
      {children}
    </ErrorBoundary>
  );
}