import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/saanidhya-logo.svg.asset.json";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" aria-label="Saanidhya Care Foundation — home">
      {light ? (
        <span className="inline-flex rounded-xl bg-white px-3 py-2">
          <img
            src={logoAsset.url}
            alt="Saanidhya Care Foundation"
            className="h-10 w-auto"
          />
        </span>
      ) : (
        <img
          src={logoAsset.url}
          alt="Saanidhya Care Foundation"
          className="h-11 w-auto"
        />
      )}
    </Link>
  );
}
