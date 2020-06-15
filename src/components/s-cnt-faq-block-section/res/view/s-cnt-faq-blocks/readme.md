# s-cnt-faq-blocks



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                            | Type           | Default |
| -------- | --------- | -------------------------------------- | -------------- | ------- |
| `blocks` | --        | Получение данных из массива для вывода | `SFaqBlocks[]` | `[]`    |


## Events

| Event              | Description          | Type               |
| ------------------ | -------------------- | ------------------ |
| `clickBlockAuthor` | Клик по блоку автора | `CustomEvent<any>` |
| `clickBlockHeader` | Клик по Заголовку    | `CustomEvent<any>` |
| `clickBlockImg`    | Клик по картинке     | `CustomEvent<any>` |
| `clickBlockText`   | Клик по тексту       | `CustomEvent<any>` |


## Dependencies

### Used by

 - [s-cnt-faq-block-section](../../..)

### Graph
```mermaid
graph TD;
  s-cnt-faq-block-section --> s-cnt-faq-blocks
  style s-cnt-faq-blocks fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
