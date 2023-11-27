// src/routes/index.tsx
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Check from './check/check';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1 className="text-3xl text-r font-bold underline">
        <Link to="/">Hello world!</Link>
      </h1>
     
    </>
  );
}
