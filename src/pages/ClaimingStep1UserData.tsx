import { FormEvent } from 'react';
import { Button } from '../components/Button';
import { FormFieldText } from '../components/FormFieldText';
import { FormFunnelCard } from '../components/FormFunnelCard';
import { H2 } from '../components/H2';
import { useClaimingStore } from '../store/claiming';
import { useNavigate } from 'react-router-dom';

export const ClaimingStep1UserData = () => {
  const { email, name, birthday, set } = useClaimingStore(({ email, name, birthday, set }) => ({
    email,
    name,
    birthday,
    set,
  }));
  const navigate = useNavigate();

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const values = Object.fromEntries(formData);
    set(values);
    navigate('../step2');
  };

  return (
    <FormFunnelCard>
      <H2>Benutzerkonto anlegen</H2>
      <div className="font-bold text-sapphire-700">Schritt 1 von 2</div>

      <form className="my-5 flex flex-col gap-8" onSubmit={handleSubmit}>
        <FormFieldText
          type="email"
          name="email"
          label="Ihre E-Mail Adresse"
          placeholder="martina.mustermann@web.de"
          description="Mit dieser E-Mail-Adresse legen wir Ihnen ein Benutzerkonto an, über das Sie Ihr Firmenprofil verwalten können."
          required
          defaultValue={email}
          data-gaid="claiming_email"
        />
        <FormFieldText
          name="name"
          label="Ihr Name"
          placeholder="Martina Mustermann"
          description="Dieser Name wird angezeigt, wenn Sie eine Bewertung verfassen und veröffentlichen."
          required
          defaultValue={name}
          data-gaid="claiming_name"
        />
        <FormFieldText
          type="date"
          name="birthday"
          label="Ihr Geburtsdatum"
          placeholder="TT.MM.JJJ"
          description="Hiermit stellen wir sicher, dass Sie volljährig sowie ggf. der rechtmäßige Inhaber Ihres Unternehmens sind."
          required
          defaultValue={birthday}
          data-gaid="claiming_birthday"
        />

        <div className="flex justify-end gap-4">
          <Button secondary>Zurück</Button>
          {/* data-gaid added here just for testing purposes. Don't implement this for prod. */}
          <Button primary type="submit" data-gaid="claiming_goto_step2">
            Weiter zu Schritt 2
          </Button>
        </div>
      </form>
    </FormFunnelCard>
  );
};
