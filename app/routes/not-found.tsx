import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="not-found wrap">
      <span className="eyebrow">404 / PAGE NOT FOUND</span>
      <h1>هذه الصفحة غير متاحة.</h1>
      <p>يمكنك العودة إلى الصفحة الرئيسية واستكشاف المشاريع.</p>
      <Link className="button button-primary" to="/ar">العودة إلى الرئيسية</Link>
    </main>
  );
}
