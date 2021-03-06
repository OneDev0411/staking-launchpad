import React from 'react';
import { LinkProps } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';
import { routesEnum } from '../../Routes';
import { ClientId } from '../../store/actions/clientActions';

type Props = {
  ethClientStep: 'execution' | 'consensus';
  currentClient: ClientId;
  handleSubmit: LinkProps['onClick'];
  updateStep: (nextStep: 'execution' | 'consensus') => void;
};

const SelectClientButtons = ({
  ethClientStep,
  currentClient,
  handleSubmit,
  updateStep,
}: Props) => {
  const { formatMessage } = useIntl();

  if (ethClientStep === 'execution') {
    return (
      <>
        <Link to={routesEnum.acknowledgementPage}>
          <Button
            className="mr10"
            width={100}
            label={formatMessage({ defaultMessage: 'Back' })}
          />
        </Link>
        <Button
          width={300}
          rainbow
          disabled={!currentClient}
          label={formatMessage({ defaultMessage: 'Continue' })}
          onClick={() => updateStep('consensus')}
        />
      </>
    );
  }

  return (
    <>
      <Button
        className="mr10"
        width={100}
        label={formatMessage({ defaultMessage: 'Back' })}
        onClick={() => updateStep('execution')}
      />
      <Link to={routesEnum.generateKeysPage} onClick={handleSubmit}>
        <Button
          width={300}
          rainbow
          disabled={!currentClient}
          label={formatMessage({ defaultMessage: 'Continue' })}
        />
      </Link>
    </>
  );
};

export default SelectClientButtons;
