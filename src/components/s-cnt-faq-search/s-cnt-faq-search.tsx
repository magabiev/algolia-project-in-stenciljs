import {Component, ComponentInterface, EventEmitter, Event, h, Prop, State, Listen} from '@stencil/core';
import {SFaqSearchElements, SFaqLogoElements} from "./interface/common.interface";
import {parseHtmlToFragment} from "@stencil/core/mock-doc";
@Component({
  tag: 's-cnt-faq-search',
  styleUrl: 's-cnt-faq-search.css',
  shadow: false,
  scoped: true,
})
export class SCntFaqSearch implements ComponentInterface {
  /**
   *  Прием данных menu  из массива
   */
  @Prop() menu: SFaqSearchElements[] = [];
  /**
   *  Прием данных о категориях  из массива
   */
  @Prop() category: SFaqSearchElements[] = [];
  /**
   *  Прием данных логотипе  из массива
   */
  @Prop() logo: SFaqLogoElements[] = [];
  /**
   *  Содержимое placeholder поисковика
   */
  @Prop() placeHolder: any;
  /**
   * Прием данных об элементах поиска
   */
  @Prop() searchHints: any;
  /**
   *  Клик по  ссылкам меню
   */
  @Event() clickMenu: EventEmitter;
  /**
   *  Клик по кнопке поиска
   */
  @Event() clickSearch: EventEmitter;
  /**
   *  Клик по Логотипу
   */
  @Event() clickLogo: EventEmitter;
  /**
   *  Клик по категориям
   */
  @Event() clickCategory: EventEmitter;
  /**
   * Клик по подсказкам в поисковике
   */
  @Event() clickSearchHint: EventEmitter;
  /**
   *  Состояние ссылок меню при нажатии
   */
  @State() activeLink: boolean;
  /**
   *  Состояние ссылок категорий при нажатии
   */
  @State() activeCategory: boolean;
  /**
   *  Содержимое поля ввода поисковика
   */
  @Event() inputValueUp: EventEmitter;
  @Event() inputValueDown: EventEmitter;
  /**
   * Получение узла общего блока поисковика
   */
  public ourInputBlock: any;
  /**
   * Получение узла поисковика
   */
  public ourInput: any;
  /**
   * Получение узла общего блока подсказок поисковика
   */
  @State() searchHintsVisible: boolean;
  /**
   * Текст из поисковых подсказок
   */
  @State() innerSearchHints: any;
  /**
   * Анимация уменьшения поисковика
   */
  @Listen("click", {target: "window"})
  notScale(event) {
    if (event.target !== this.ourInput){
      this.ourInputBlock.style.transform = 'scale(1)';
      this.ourInputBlock.style.borderBottom = '';
      this.ourInputBlock.style.boxShadow = '';
      this.searchHintsVisible = false;

    }
  }
  render() {
    return (
      <div class="my_container">

        <div class="search_block">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12">
              <ul class="menu d-flex justify-content-between">
                {this.menu ? this.getLink(this.menu) : ''}
              </ul>
            </div>
          </div>
        </div>

        <div ref={(el) => this.ourInputBlock = el}
          class="input_section d-flex align-items-center justify-content-between">
          <div class="search_btn clicked" onClick={() => this.clickSearch.emit('Search')}>
            <i class="fas fa-search"></i>
          </div>
          <div class="flex-grow-1">
            <input value={parseHtmlToFragment(this.innerSearchHints).innerText}
                 ref={(el) => this.ourInput = el}
                  onFocus={(event) => this.animationInput(event)}
                   onKeyDown={() => this.inputValueDown.emit({'search': event})}
                   onKeyUp={() => this.inputValueUp.emit({'search': event})}
              class="input_block" type="text" placeholder={this.placeHolder ? this.placeHolder : ''}/>
          </div>
          {this.logo ? this.getLogo(this.logo) : ''}
        </div>

        <div class="parent_search_hints">
          <div class={this.searchHintsVisible ? 'second_hints_parent' : 'second_hints_parent_hidden'}>
            {this.searchHints ? this.getSearchHints(this.searchHints) : this.notDataSearch()}
          </div>
        </div>
        <div class="category">
          <ul class="category_list d-flex">
            {this.category ? this.getCategory(this.category) : ''}
          </ul>
        </div>
      </div>
    );
  }
  /**
   *  Получение данных ссылок меню
   */
  private getLink = (props) =>{
    let item = props.slice(0,5);
    return(
      item.map(item => {
        if (this.activeLink !== item.id){
          item.active = false;
        }
        return(
          <li>
            <div class={item.active  ? 'menu_item clicked activeLink' : 'menu_item clicked'}
                 onClick={() => {this.clickMenu.emit({place: 'Menu', item: item});
                 this.toggleActiveLink(item)}}>
              {item.name}
            </div>
          </li>
        )
      })
    )
  }
  /**
   * Показ активной ссылки
   */
  private toggleActiveLink (item){
    this.activeLink = item.id;
      item.active = true
  }
  /**
   *  Получение данных о категориях
   */
  private getCategory = (props) => {
    let item = props.slice(0,9);
    return(
      item.map(item => {
        if (this.activeCategory !== item.id){
          item.active = false;
        }
        return(
          <li class="flex-grow-1">
            <div class={item.active ? 'hints clicked activeHints' : 'hints clicked'}
                 onClick={() => {this.clickCategory.emit({place: 'Category', item: item});
                 this.toggleActiveHints(item)}}>
              {item.name}
            </div>
          </li>
        )
      })
    )
  }
  /**
   * Показ активной ссылки категорий
   */
  private toggleActiveHints (item){
    item.active = true;
    this.activeCategory = item.id;
  }
  /**
   *  Получение данных о logo
   */
  private getLogo = (props) => {
    let item = props.slice(0, 1);
    return(
      item.map(item => {
        return(
          <div class="search_img"
               onClick={() => this.clickLogo.emit({place: 'logo', item: item})}
               style={{ backgroundImage: "url(" + item.link + ")" }}>
          </div>
        )
      })
    )
  }
  /**
   * Анимация увеличения поисковика
   */
  private animationInput(event) {
    if (event.target === this.ourInput){
      this.ourInputBlock.style.transform = 'scale(1.06)';
      this.ourInputBlock.style.boxShadow = '0 2px 4px rgba(0, 0, 0, .2)';
      this.ourInputBlock.style.borderBottom = '3px solid #5468ff';
      this.searchHintsVisible = true;
    }
  }
  /**
   * Поучение данных о поисковых подсказках
   */
  private getSearchHints = (props) => {
    return(
      <div>
        {props.map(item => {
          return(
            <div class="search_hints clicked"
                 onClick={() => {this.clickSearchHint.emit({place: 'Search hint', item: item}); this.innerSearchHints = item.header}}>
              <div class="d-flex align-items-center">
                <div class="hints_img mr-3" style={{ backgroundImage: "url(" + item.img + ")" }}
                ></div>
                <div
                  class="hints_text" innerHTML={item.header}>
                  ...
                </div>
              </div>
              <div>
                <div class="hints_select d-flex">
                  <i class="fas fa-level-down-alt"></i>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
 }
  /**
   * Выводится если нет данных для поиска
   */
 private notDataSearch = () => {
    return (
      <div class="search_hints">
        <div class="d-flex align-items-center">
          <div class="hints_text text-muted">
            Ничего не найдено
          </div>
        </div>
        <div>
        </div>
      </div>
    )
 }
}
