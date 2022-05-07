import Link from 'next/link';
import { useRouter } from 'next/router';
import { AUTH_TOKEN } from '../constants';

export default function Header() {
  const router = useRouter();
  const authToken = localStorage.getItem(A)

  return (
    <header>
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <Link href="/" className="no-underline black">
            <div className="fw7 mr1">Hacker News</div>
          </Link>
          <Link href="/" className="ml1 no-underline black">
            new
          </Link>
          <div className="ml1">|</div>
          <Link href="/top" className="ml1 no-underline black">
            top
          </Link>
          <div className="ml1">|</div>
          <Link
            href="/search"
            className="ml1 no-underline black"
          >
            search
          </Link>
          <div className="flex">
            <div className="ml1">|</div>
            <Link
              href="/create"
              className="ml1 no-underline black"
            >
              submit
            </Link>
          </div>
        </div>
        <div className="flex flex-fixed">
          <div
            className="ml1 pointer black"
          >
            logout
          </div>
          <Link
            href="/login"
            className="ml1 no-underline black"
          >
            login
          </Link>
        </div>
      </div>
    </header>
  );
};