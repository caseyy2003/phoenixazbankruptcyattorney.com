// /components/JsonLd.js
import Head from 'next/head';

function stringifyLd(obj) {
  return JSON.stringify(obj)
    .replace(/</g, '\\u003c')         // avoid `</script>` breakouts & XSS
    .replace(/<\/script/gi, '<\\/script')
    .replace(/[\u2028\u2029]/g, '');  // avoid unexpected line separators
}

export default function JsonLd({ id, data }) {
  const json = stringifyLd(data);
  return (
    <Head>
      <script
        id={id}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: json }}
      />
    </Head>
  );
}