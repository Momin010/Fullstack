const Notification = ({ notification }) => {
  if (!notification.message) return null

  const style = {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    backgroundColor: notification.type === "success" ? '#10b981' : '#ef4444',
    color: 'white',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    zIndex: 50,
    maxWidth: '28rem',
    animation: 'slideIn 0.5s ease-out'
  }

  const icon = notification.type === "success" ? (
    <svg style={{width: '1em', height: '1em'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ) : (
    <svg style={{width: '1em', height: '1em'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  )

  return <div style={style}>{icon}{notification.message}</div>
}

export default Notification
