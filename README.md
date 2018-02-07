# parcel-antd-react-starter

Simple starter kit for antd-react bundled with parcel.

## How to use

Clone the repository:

```sh
git clone https://github.com/marcklei/parcel-antd-react-starter.git
```

## Development with docker
If you like to use a docker based development environment.

Start development server:
```sh
docker-compose run web yarn install
docker-compose up 
```
After a short duration your development server should be available on http://localhost:1234

Build for production:
```sh
docker-compose run web yarn build 
```

## Local development environment

Start development server:
```sh
yarn install
yarn start
```

Build for production:
```sh
yarn build 
```

## Package Links
[Parcel](https://parceljs.org/)  
[Ant design](https://ant.design/)