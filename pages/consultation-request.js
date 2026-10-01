const CONSULTATION_FORM_URL = "https://form.jotform.com/260117031306037";

export async function getServerSideProps() {
  return {
    redirect: {
      destination: CONSULTATION_FORM_URL,
      permanent: false,
    },
  };
}

export default function ConsultationRequest() {
  return null;
}