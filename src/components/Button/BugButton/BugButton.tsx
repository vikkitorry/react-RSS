import { Button, ButtonSize, ButtonTheme } from '../Button';
import { useEffect, useState } from 'react';

export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error('Test Error');
    }
  }, [error]);

  return (
    <Button
      onClick={onThrow}
      className={'j'}
      size={ButtonSize.M}
      theme={ButtonTheme.BACKGROUND_ERROR}
    >
      Throw error
    </Button>
  );
};
