import React, { memo, forwardRef } from 'react';
import Area from './Area';
import Field from 'components/Field';
import { WorkspaceProps } from './props';

const Workspace = forwardRef(
  ({ invalid, onChange, value, title, name, autoFocus, disabled }, ref) => {
    return (
      <Field
        component={Area}
        ref={ref}
        className='request-creator__workspace'
        onChange={onChange}
        value={value}
        title={title}
        invalid={invalid}
        name={name}
        autoFocus={autoFocus}
        disabled={disabled}
      />
    );
  }
);

Workspace.propTypes = WorkspaceProps;
Workspace.displayName = 'Workspace';

export default memo(Workspace);
