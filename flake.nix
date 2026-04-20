{
  description = "archn3m3sis.com portfolio — Next.js 15 + TypeScript + Tailwind v4";

  inputs = {
	nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
	flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
	{ self, nixpkgs, flake-utils }:
	flake-utils.lib.eachDefaultSystem (system:
	  let
		pkgs = nixpkgs.legacyPackages.${system};
	  in
	  {
		# Development shell — enter with `nix develop`
		# or auto-activate via direnv (see .envrc below)
		devShells.default = pkgs.mkShell {
		  name = "archn3m3sis-portfolio";

		  packages = with pkgs; [
			# Node.js runtime and pnpm
			nodejs_22
			pnpm

			# Git and GitLab tooling
			git
			glab

			# Container tooling — skopeo pushes Nix-built image tarballs
			# to the GitLab Container Registry without requiring Docker daemon
			skopeo

			# Infrastructure as Code
			opentofu

			# General utilities
			jq
			tree
			shellcheck
		  ];

		  shellHook = ''
			echo ""
			echo "  ╭─────────────────────────────────────────╮"
			echo "  │  archn3m3sis.com — dev shell            │"
			echo "  │  Node $(node -v)"
			echo "  │  pnpm $(pnpm -v)"
			echo "  ╰─────────────────────────────────────────╯"
			echo ""
		  '';
		};
	  });
}