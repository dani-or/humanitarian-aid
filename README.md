# humanitarian-aid
Proyecto para consultar la lista de donaciones a un pais por las diferentes organizaciones ordenando la lista de los donantes de la mayor donación a la menor para cada año.

Para tal fin se está utilizando el API(iatistandard.org)
https://iatidatastore.iatistandard.org/api/transactions/aggregations/?aggregations=count,value,expenditure,activity_count,commitment,incoming_fund,transaction_date_year&format=json&recipient_country=SD&group_by=provider_org,transaction_date_year&convert_to=usd



### Installation

Para probar en ambiente local se debe :

```sh
$ npm install
$ npm start
$ npm test //solo para ejecutar las pruebas unitarias
```

### Consumo

Para invocar el servicio local se hace así:

```sh
$ curl --location --request GET 'http://localhost:8080/getTransactionSummaryByCountry?country=SD'

```

Para invocar el servicio que está desplegado en AWS se hace así:

```sh
$ curl --location --request GET 'http://107.20.83.116:8080/getTransactionSummaryByCountry?country=SD'
```

### Inicializar el docker
Generar la imagen

```sh
$ docker image build -t humanitarian-aid .

```

Correr la imagen

```sh
$ docker run --network host -d humanitarian-aid

```

### Diagrama de Clases 
![Diagram de clases ](/images/clases.png?raw=true "Optional Title")


### Diagrama de Componentes 
![Diagram de componentes ](/images/componentes.png?raw=true "Optional Title")