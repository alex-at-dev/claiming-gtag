import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { FormField } from '../components/FormField';
import { FormFunnelCard } from '../components/FormFunnelCard';
import { H2 } from '../components/H2';
import { LinkInline } from '../components/LinkInline';
import { Textbox } from '../components/Textbox';
import { FormEvent } from 'react';
import { useClaimingStore } from '../store/claiming';

export const ClaimingStep2Password = () => {
  const { set } = useClaimingStore(({ set }) => ({ set }));
  const navigate = useNavigate();

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const values = Object.fromEntries(formData);
    set({
      password: values.password + '',
      termsConfirmed: !!values['terms-confirmed'],
      newsletterOptin: !!values['newsletter-optin'],
    });
    navigate('../success');
  };

  return (
    <FormFunnelCard>
      <H2>Ihr Password festlegen</H2>
      <div className="text-sapphire-700 font-bold">Schritt 2 von 2</div>

      <form className="my-5 flex flex-col gap-8" onSubmit={handleSubmit}>
        <FormField
          label="Ihr Passwort"
          description="Bitte vergeben Sie ein starkes Passwort, um sich jederzeit in den Benutzerkonto einzuloggen."
          required
        >
          <Textbox
            type="password"
            className="mt-3 w-full"
            name="password"
            placeholder="Ihr Passwort"
            required
          />
          <small className="text-sm text-neutral-500">
            Ihr Passwort muss mindestens 8 Zeichen lang sein, einen Großbuchstaben, eine Zahl und
            ein Sonderzeichen enthalten.
          </small>
          <Textbox
            type="password"
            className="mt-3 w-full"
            name="password-confirm"
            placeholder="Ihr Passwort bestätigen"
            required
          />
        </FormField>

        <Checkbox name="terms-confirmed" required>
          Ich habe die <LinkInline to="/anb">ANB</LinkInline> &{' '}
          <LinkInline to="/privacy">Datenschutzerklärung</LinkInline> gelesen und bin damit
          einverstanden. <span className="text-red-600">*</span>
        </Checkbox>

        <Checkbox name="newsletter-optin">
          Ich möchte regelmäßige Angebote & News rund um 11880 erhalten. Ich kann mich jederzeit
          kostenlos abmelden.
        </Checkbox>

        <div className="flex justify-end gap-4">
          <Link to="../step1">
            <Button secondary>Zurück</Button>
          </Link>
          <Button primary type="submit">
            Benutzerkonto erstellen
          </Button>
        </div>
      </form>
    </FormFunnelCard>
  );
};
