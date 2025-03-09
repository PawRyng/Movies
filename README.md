## Opis
`next-app-template` to aplikacja stworzona na bazie Next.js, która korzysta z API serwisu [The Movie Database (TMDB)](https://www.themoviedb.org/). Aplikacja umożliwia wyszukiwanie filmów i wyświetlanie informacji na ich temat.

## Wymagania

 - [ ] **Node.js w wersji >= 14** 
 - [ ] NPM lub Yarn
 - [ ] Konto oraz klucz API w serwisie [The Movie Database (TMDB)](https://www.themoviedb.org/).

## Konfiguracja

 - [ ] Utwórz plik `.env`, bazując na pliku `.env-sample`.
 - [ ] W pliku `.env` ustaw wartość zmiennej `NEXT_PUBLIC_API_KEY`, używając swojego klucza API z TMDB

## Instrukcja uruchomienia
### Uruchomienie lokalne (bez Docker)

 - [ ] Zainstaluj zależności:
		 
	```bash
	 npm install 
	 # lub
	 yarn install
	 ```
 - [ ] Uruchom aplikację w trybie deweloperskim:
	 ```bash 
	npm run dev 
	# lub 
	yarn dev 
	 ```
 - [ ] Aplikacja będzie dostępna pod adresem http://localhost:3000.
### Uruchomienie z użyciem Docker Compose (opcjonalne)
 - [ ] Upewnij się, że masz zainstalowany Docker i Docker Compose.
 - [ ] Uruchom aplikację przy użyciu Docker Compose:
 ```bash 
 docker-compose up -d 
 ```
 - [ ] Aplikacja będzie dostępna pod adresem http://localhost:3000.