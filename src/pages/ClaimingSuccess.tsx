import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { FormFunnelCard } from '../components/FormFunnelCard';
import { H2 } from '../components/H2';
import { useClaimingStore } from '../store/claiming';

export const ClaimingSuccess = () => {
  const claimingStore = useClaimingStore();

  return (
    <FormFunnelCard>
      <H2>Fast geschafft!</H2>
      <pre>{JSON.stringify(claimingStore, null, 2)}</pre>

      <div className="mt-4 flex justify-end gap-4">
        <Link to="../step2">
          <Button secondary>Zurück</Button>
        </Link>
        <Link to="../step1">
          <Button primary>Von vorne</Button>
        </Link>
      </div>
    </FormFunnelCard>
  );
};
