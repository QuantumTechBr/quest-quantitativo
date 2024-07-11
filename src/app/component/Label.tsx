
import * as React from 'react';
import { styled } from '@mui/system';
import { useFormControlContext } from '@mui/base/FormControl';
import clsx from 'clsx';

export const Label = styled(
    ({ children, className, id }: { children?: React.ReactNode; className?: string; id?: string }) => {
      const formControlContext = useFormControlContext();
      const [dirty, setDirty] = React.useState(false);
  
      React.useEffect(() => {
        if (formControlContext?.filled) {
          setDirty(true);
        }
      }, [formControlContext]);
  
      if (formControlContext === undefined) {
        return <p className={className}>{children}</p>;
      }
  
      const { error, required, filled } = formControlContext;
      const showRequiredError = dirty && required && !filled;
  
      return (
        <div>
            <label className={clsx(className, error || showRequiredError ? 'invalid' : '')} id={id || ''}>
                {children}
                {required ? ' *' : ''}
            </label>
        </div>
      );
    },
  )`
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    margin-bottom: 4px;
  
    &.invalid {
      color: red;
    }
  `;