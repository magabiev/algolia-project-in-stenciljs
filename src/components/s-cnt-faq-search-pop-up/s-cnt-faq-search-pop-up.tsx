import {Component, ComponentInterface, EventEmitter, h, Event, Prop, State} from '@stencil/core';
import {parseHtmlToFragment} from "@stencil/core/mock-doc";
import {SCntFaqSearchHintElem, SCntFaqSearchPlaceElem} from "./interface/common.interface";

@Component({
  tag: 's-cnt-faq-search-pop-up',
  styleUrl: 's-cnt-faq-search-pop-up.css',
  shadow: false,
})
export class SCntFaqSearchPopUp implements ComponentInterface {
  /**
   * Прием данных из массива
   */
  @Prop() searchHintsData: SCntFaqSearchHintElem[] = [];
  /**
   * Содержимое placeholder
   */
  @Prop() searchPlace: SCntFaqSearchPlaceElem[] = [];
  /**
   * Клик по кнопке поиск
   */
  @Event() clickSearchPop: EventEmitter;
  /**
   * Клик по черному блоку
   */
  @Event() clickBlackBlock: EventEmitter;
  /**
   * Клик по подсказкам поисковика
   */
  @Event() clickHints: EventEmitter;
  /**
   * Клик по кнопке назад
   */
  @Event() clickBackAnim: EventEmitter;
  /**
   *  Содержимое поля ввода поисковика
   */
  @Event() searchKeyUp: EventEmitter;
  @Event() searchKeyDown: EventEmitter;
  /**
   * Текст поисковых подсказок
   */
  @State() searchFormValue: any;
  /**
   * Изменение состояния относительно наличия или отсутствия данных
   */
  @State() dataArrayLength: boolean;
  /**
   *  Узел формы поиска
   */
  public ourInputForm: any;
  /**
   * Узел общего блока поисковика
   */
  public ourInputFormBlock: any;
  /**
   * Узел заднего черного фона
   */
  public ourBlackBlock: any;
  /**
   * Узел общего блока поисковых подсказок
   */
  public ourHintsBlock: any;
  /**
   * Узел  блока поисковых подсказок
   */
  public ourSearchHintBlock: any;
  render() {
    return (
      <div class="main_search">
        <div class="black" onClick={() => this.clickBlackBlock.emit('black block')}
             ref={(el) => this.ourBlackBlock = el}></div>
        <div class="input_parent">
        <div class="input_search" ref={(el) => this.ourInputFormBlock = el}>
          <div class="input_btn clicked" onClick={() => this.clickSearchPop.emit('Search')}>
            <i class="fas fa-search"></i>
          </div>
          <div class="flex-grow-1">
            <input onKeyDown={() => this.searchKeyDown.emit({'search': event})}
                   onKeyUp={() => this.searchKeyUp.emit({'search': event})}
              value={parseHtmlToFragment(this.searchFormValue).innerText}
              onFocus={() => this.animationSearch()}
              ref={(el) => this.ourInputForm = el}
              class="input_form" type="text" placeholder={this.searchPlace ? this.getSearchPlace(this.searchPlace) : ''}/>
          </div>
          <div class="main_hints" ref={(el) => this.ourHintsBlock = el}>
            {this.checkData() ? this.getSearchHints(this.searchHintsData) : this.notDataSearch()}
          </div>
        </div>
        </div>
        <div class="backAnim clicked" onClick={() => {this.clickBackAnim.emit('Back'); this.hideHints()}}>
          <div class="back_in_anim">
            <div class="m-auto">
              <i class="fas fa-times"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Анимация появления поисковых подсказок
   */
  private animationSearch() {
    this.ourInputFormBlock.style.animationName = 'scale, translate, border_bottom';
    this.ourInputFormBlock.style.animationDuration = '8s, 1s, 1s';
    this.ourInputFormBlock.style.animationFillMode = 'forwards';
    this.ourHintsBlock.style.animationName = 'scale_hints';
    this.ourHintsBlock.style.animationDuration = '0.5s';
    this.ourHintsBlock.style.animationFillMode = 'forwards';
}

  /**
   * Анимация скрытия поисковых подсказок
   */
  private hideHints(){
      this.ourHintsBlock.style.animationName = 'scale_hints_none';
      this.ourInputFormBlock.style.animationName = 'scale_none, translate_none, border_bottom_none';
      this.ourInputFormBlock.style.animationDuration = '1s, 1s, 1s';

  }
  /**
   * Поучение данных о поисковых подсказках
   */
  private getSearchHints = (props) => {
    let item = props.slice(0, 12);
    return(
      item.map(item => {
          return(
            <div ref={(el) => this.ourSearchHintBlock = el}
              onClick={() => {this.clickHints.emit({place: 'Search hint', item: item}); this.searchFormValue = item.header; this.hideHints()}}
              class="paren_hints clicked">
              <div class="search_hint_img mr-3" style={{ backgroundImage: "url(" + item.img + ")" }}></div>
              <div class="search_hint_text" innerHTML={item.header}></div>
              <div class="select"><i class="fas fa-level-down-alt"></i></div>
            </div>
          )
        })
    )
  }
  /**
   * Поучение данных placeholder
   */
  private getSearchPlace = (props) => {
    let item = props.slice(0, 1);
    return(
      item.map(item => {
        return item.text;
      })
    )
  }

  /**
   * Текст для вывода когда нет данных
   */
  private notDataSearch() {
    return(
      <div class="paren_hints clicked" onClick={() => this.hideHints()}>
        <div class="d-flex align-items-center">
          <div class="search_hint_text" >Ничего не найдено</div>
        </div>
      </div>
    )
  }

  /**
   * Проверка наличия поисковых данных
   */
  private checkData = () => {
    if (this.searchHintsData.length === 0){
      return this.dataArrayLength = false;
    } else {
      return this.dataArrayLength = true;
    }
  }
}
