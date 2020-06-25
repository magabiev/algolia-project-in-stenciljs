# s-cnt-faq-search



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                           | Type                   | Default     |
| ------------- | -------------- | ------------------------------------- | ---------------------- | ----------- |
| `category`    | --             | Прием данных о категориях  из массива | `SFaqSearchElements[]` | `[]`        |
| `logo`        | --             | Прием данных логотипе  из массива     | `SFaqLogoElements[]`   | `[]`        |
| `menu`        | --             | Прием данных menu  из массива         | `SFaqSearchElements[]` | `[]`        |
| `placeHolder` | `place-holder` | Содержимое placeholder поисковика     | `any`                  | `undefined` |


## Events

| Event            | Description                      | Type               |
| ---------------- | -------------------------------- | ------------------ |
| `clickCategory`  | Клик по категориям               | `CustomEvent<any>` |
| `clickLogo`      | Клик по Логотипу                 | `CustomEvent<any>` |
| `clickMenu`      | Клик по  ссылкам меню            | `CustomEvent<any>` |
| `clickSearch`    | Клик по кнопке поиска            | `CustomEvent<any>` |
| `inputValueDown` |                                  | `CustomEvent<any>` |
| `inputValueUp`   | Содержимое поля ввода поисковика | `CustomEvent<any>` |


## Dependencies

### Used by

 - [first-page](../first-page)

### Graph
```mermaid
graph TD;
  first-page --> s-cnt-faq-search
  style s-cnt-faq-search fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
