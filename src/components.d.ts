/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { SFaqBlockHeader, } from "./components/s-cnt-faq-block-header/interface/common.interface";
import { SFaqBlocks, } from "./components/s-cnt-faq-blocks/interface/common.interface";
import { SFaqHeader, } from "./components/s-cnt-faq-header/interface/common.interface";
import { SFaqLogoElements, SFaqSearchElements, } from "./components/s-cnt-faq-search/interface/common.interface";
import { SCntFaqSearchHintElem, SCntFaqSearchPlaceElem, } from "./components/s-cnt-faq-search-pop-up/interface/common.interface";
export namespace Components {
    interface FirstPage {
    }
    interface SCntFaqBlockHeader {
        /**
          * Получение данных из массива для вывода
         */
        "blockHeader": SFaqBlockHeader[];
    }
    interface SCntFaqBlocks {
        /**
          * Получение данных из массива для вывода
         */
        "blocks": SFaqBlocks;
    }
    interface SCntFaqHeader {
        "header": SFaqHeader[];
    }
    interface SCntFaqSearch {
        /**
          * Прием данных о категориях  из массива
         */
        "category": SFaqSearchElements[];
        /**
          * Прием данных логотипе  из массива
         */
        "logo": SFaqLogoElements[];
        /**
          * Прием данных menu  из массива
         */
        "menu": SFaqSearchElements[];
        /**
          * Содержимое placeholder поисковика
         */
        "placeHolder": any;
        /**
          * Прием данных об элементах поиска
         */
        "searchHints": any;
    }
    interface SCntFaqSearchPopUp {
        /**
          * Прием данных из массива
         */
        "searchHintsData": SCntFaqSearchHintElem[];
        /**
          * Содержимое placeholder
         */
        "searchPlace": SCntFaqSearchPlaceElem[];
    }
}
declare global {
    interface HTMLFirstPageElement extends Components.FirstPage, HTMLStencilElement {
    }
    var HTMLFirstPageElement: {
        prototype: HTMLFirstPageElement;
        new (): HTMLFirstPageElement;
    };
    interface HTMLSCntFaqBlockHeaderElement extends Components.SCntFaqBlockHeader, HTMLStencilElement {
    }
    var HTMLSCntFaqBlockHeaderElement: {
        prototype: HTMLSCntFaqBlockHeaderElement;
        new (): HTMLSCntFaqBlockHeaderElement;
    };
    interface HTMLSCntFaqBlocksElement extends Components.SCntFaqBlocks, HTMLStencilElement {
    }
    var HTMLSCntFaqBlocksElement: {
        prototype: HTMLSCntFaqBlocksElement;
        new (): HTMLSCntFaqBlocksElement;
    };
    interface HTMLSCntFaqHeaderElement extends Components.SCntFaqHeader, HTMLStencilElement {
    }
    var HTMLSCntFaqHeaderElement: {
        prototype: HTMLSCntFaqHeaderElement;
        new (): HTMLSCntFaqHeaderElement;
    };
    interface HTMLSCntFaqSearchElement extends Components.SCntFaqSearch, HTMLStencilElement {
    }
    var HTMLSCntFaqSearchElement: {
        prototype: HTMLSCntFaqSearchElement;
        new (): HTMLSCntFaqSearchElement;
    };
    interface HTMLSCntFaqSearchPopUpElement extends Components.SCntFaqSearchPopUp, HTMLStencilElement {
    }
    var HTMLSCntFaqSearchPopUpElement: {
        prototype: HTMLSCntFaqSearchPopUpElement;
        new (): HTMLSCntFaqSearchPopUpElement;
    };
    interface HTMLElementTagNameMap {
        "first-page": HTMLFirstPageElement;
        "s-cnt-faq-block-header": HTMLSCntFaqBlockHeaderElement;
        "s-cnt-faq-blocks": HTMLSCntFaqBlocksElement;
        "s-cnt-faq-header": HTMLSCntFaqHeaderElement;
        "s-cnt-faq-search": HTMLSCntFaqSearchElement;
        "s-cnt-faq-search-pop-up": HTMLSCntFaqSearchPopUpElement;
    }
}
declare namespace LocalJSX {
    interface FirstPage {
    }
    interface SCntFaqBlockHeader {
        /**
          * Получение данных из массива для вывода
         */
        "blockHeader"?: SFaqBlockHeader[];
        /**
          * Клик по кнопке на страницу вперед
         */
        "onClickLeft"?: (event: CustomEvent<any>) => void;
        /**
          * Клик по ссылке
         */
        "onClickLink"?: (event: CustomEvent<any>) => void;
        /**
          * Клик по кнопке на страницу назад
         */
        "onClickRight"?: (event: CustomEvent<any>) => void;
    }
    interface SCntFaqBlocks {
        /**
          * Получение данных из массива для вывода
         */
        "blocks"?: SFaqBlocks;
        /**
          * Клик по блоку автора
         */
        "onClickBlockAuthor"?: (event: CustomEvent<any>) => void;
        /**
          * Клик по Заголовку
         */
        "onClickBlockHeader"?: (event: CustomEvent<any>) => void;
        /**
          * Клик по картинке
         */
        "onClickBlockImg"?: (event: CustomEvent<any>) => void;
        /**
          * Клик по тексту
         */
        "onClickBlockText"?: (event: CustomEvent<any>) => void;
    }
    interface SCntFaqHeader {
        "header"?: SFaqHeader[];
        /**
          * Клик по кнопке назад
         */
        "onClickBack"?: (event: CustomEvent<any>) => void;
    }
    interface SCntFaqSearch {
        /**
          * Прием данных о категориях  из массива
         */
        "category"?: SFaqSearchElements[];
        /**
          * Прием данных логотипе  из массива
         */
        "logo"?: SFaqLogoElements[];
        /**
          * Прием данных menu  из массива
         */
        "menu"?: SFaqSearchElements[];
        /**
          * Клик по категориям
         */
        "onClickCategory"?: (event: CustomEvent<any>) => void;
        /**
          * Клик по Логотипу
         */
        "onClickLogo"?: (event: CustomEvent<any>) => void;
        /**
          * Клик по  ссылкам меню
         */
        "onClickMenu"?: (event: CustomEvent<any>) => void;
        /**
          * Клик по кнопке поиска
         */
        "onClickSearch"?: (event: CustomEvent<any>) => void;
        /**
          * Клик по подсказкам в поисковике
         */
        "onClickSearchHint"?: (event: CustomEvent<any>) => void;
        "onInputValueDown"?: (event: CustomEvent<any>) => void;
        /**
          * Содержимое поля ввода поисковика
         */
        "onInputValueUp"?: (event: CustomEvent<any>) => void;
        /**
          * Содержимое placeholder поисковика
         */
        "placeHolder"?: any;
        /**
          * Прием данных об элементах поиска
         */
        "searchHints"?: any;
    }
    interface SCntFaqSearchPopUp {
        /**
          * Клик по кнопке назад
         */
        "onClickBackAnim"?: (event: CustomEvent<any>) => void;
        /**
          * Клик по черному блоку
         */
        "onClickBlackBlock"?: (event: CustomEvent<any>) => void;
        /**
          * Клик по подсказкам поисковика
         */
        "onClickHints"?: (event: CustomEvent<any>) => void;
        /**
          * Клик по кнопке поиск
         */
        "onClickSearchPop"?: (event: CustomEvent<any>) => void;
        "onSearchKeyDown"?: (event: CustomEvent<any>) => void;
        /**
          * Содержимое поля ввода поисковика
         */
        "onSearchKeyUp"?: (event: CustomEvent<any>) => void;
        /**
          * Прием данных из массива
         */
        "searchHintsData"?: SCntFaqSearchHintElem[];
        /**
          * Содержимое placeholder
         */
        "searchPlace"?: SCntFaqSearchPlaceElem[];
    }
    interface IntrinsicElements {
        "first-page": FirstPage;
        "s-cnt-faq-block-header": SCntFaqBlockHeader;
        "s-cnt-faq-blocks": SCntFaqBlocks;
        "s-cnt-faq-header": SCntFaqHeader;
        "s-cnt-faq-search": SCntFaqSearch;
        "s-cnt-faq-search-pop-up": SCntFaqSearchPopUp;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "first-page": LocalJSX.FirstPage & JSXBase.HTMLAttributes<HTMLFirstPageElement>;
            "s-cnt-faq-block-header": LocalJSX.SCntFaqBlockHeader & JSXBase.HTMLAttributes<HTMLSCntFaqBlockHeaderElement>;
            "s-cnt-faq-blocks": LocalJSX.SCntFaqBlocks & JSXBase.HTMLAttributes<HTMLSCntFaqBlocksElement>;
            "s-cnt-faq-header": LocalJSX.SCntFaqHeader & JSXBase.HTMLAttributes<HTMLSCntFaqHeaderElement>;
            "s-cnt-faq-search": LocalJSX.SCntFaqSearch & JSXBase.HTMLAttributes<HTMLSCntFaqSearchElement>;
            "s-cnt-faq-search-pop-up": LocalJSX.SCntFaqSearchPopUp & JSXBase.HTMLAttributes<HTMLSCntFaqSearchPopUpElement>;
        }
    }
}
