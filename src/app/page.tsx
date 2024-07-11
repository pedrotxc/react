import Link from "../../node_modules/next/link";

export default function Home() {
  return (
    <div>
      <h1>Masterclass Next</h1>
      <nav>
        <Link href="/primeiro">Primeiro Componente</Link>
      </nav>
    </div>
  );
}
