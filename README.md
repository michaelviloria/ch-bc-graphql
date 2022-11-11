# Reformando nuestra API para usar GraphQL

Agregué un nuevo archivo en la carpeta `models` llamado **Graphql.js** en donde cree el esquema de `graphQL` y el **root** de `express-graphql`.

```console
src
└── models
    └── Graphql.js
```

## Tipos de consultas

### `productCount`

Da como resultado la cantidad de **productos** guardados en el servidor. _(Retorna un valor númerico)_.

### `products`

Da como resultado todos los **productos** guardados en el servidor. _(Retorna un array de objetos)_.

### `findProduct(id)`

Da como resultado un **producto** que coincida con el **id** especificado. _(Retorna un objeto)_.

---

## Tipos de mutaciones

### `addProduct(id, name, price, stock)`

Agrega un nuevo **producto** al servidor. _(Retorna un objeto del producto agregado)_.

### `updateProduct(id, name, price, stock)`

Actualiza toda la información de un **producto** que coincida con el **id** especificado. _(Retorna un objeto del producto anterior)_.

### `deleteProduct(id)`

Elimina un **producto** que coincida con el **id** especificado. _(Retorna un objeto con el producto eliminado)_.
