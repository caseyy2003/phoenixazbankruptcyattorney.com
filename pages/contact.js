export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/contact-us",
      permanent: true, // 301
    },
  };
}

export default function ContactRedirect() {
  return null;
}

