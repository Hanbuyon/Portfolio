export function meta() {
  return [{ title: "Ahmed Nazeeh — Portfolio" }];
}

export default function Index() {
  return (
    <main className="redirect-page">
      <meta httpEquiv="refresh" content="0;url=/ar" />
      <a href="/ar">انتقل إلى معرض أعمال أحمد نزيه</a>
    </main>
  );
}
