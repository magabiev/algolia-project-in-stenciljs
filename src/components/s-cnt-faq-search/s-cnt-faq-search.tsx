import {Component, ComponentInterface, EventEmitter, Event, h, Prop, State} from '@stencil/core';
import {SFaqSearchElements, SFaqLogoElements} from "./interface/common.interface";

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
   *  Состояние ссылок меню при нажатии
   */
  @State() activeLink: boolean;
  /**
   *  Состояние ссылок категорий при нажатии
   */
  @State() activeCategory: boolean;

  render() {
    return (
      <div class="my_container">

        <div class="search_block">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12">
              <ul class="menu d-flex justify-content-between">
                {this.getLink(this.menu)}
              </ul>
            </div>
          </div>
        </div>

        <div class="input_section d-flex align-items-center justify-content-between">
          <div class="search_btn clicked" onClick={() => this.clickSearch.emit('Search')}>
            <i class="fas fa-search"></i>
          </div>
          <div class="flex-grow-1">
            <input class="input_block" type="text" placeholder="Learn about search-as-a-service…"/>
          </div>
          {this.getLogo(this.logo)}
        </div>

        <div class="category">
          <ul class="category_list d-flex">
            {this.getCategory(this.category)}
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
        return(
          <li>
            <div class={item.active ? 'menu_item clicked activeLink' : 'menu_item clicked'}
                 onClick={() => {this.clickMenu.emit({place: 'Menu', item: item}); this.toggleActiveLink(item)}}>
              {item.name}
            </div>
          </li>
        )
      })
    )
  }

  /**
   * Показ активной ссылки меню
   */
  private toggleActiveLink (item){
    item.active = true;
    this.activeLink = item;
  }
  /**
   *  Получение данных о категориях
   */
  private getCategory = (props) => {
    let item = props.slice(0,9);
    return(
      item.map(item => {
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
    this.activeCategory = item;
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
}
