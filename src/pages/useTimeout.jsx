import { useEffect, useLayoutEffect, useRef, useState } from 'react';

function useTimeout(callback, delay) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useLayoutEffect(() => {
    savedCallback.current = callback;
    console.log('layout effect');
  }, [callback]);

  // Set up the timeout.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return;
    }
    console.log('use effect 1');

    const id = setTimeout(() => savedCallback.current(), delay);
    console.log('use effect 2');

    console.log('cleanup func');
    return () => clearTimeout(id);
  }, [delay]);
}

export default useTimeout;

export const Component = () => {
  const [visible, setVisible] = useState(true);

  const hide = () => setVisible(false);

  useTimeout(hide, 5000);

  return (
    <div>
      <p>
        {visible
          ? "I'm visible for 5000ms"
          : 'You can no longer see this content'}
      </p>
    </div>
  );
};
