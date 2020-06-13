import {Component, ComponentInterface, EventEmitter, Event,  h, Prop} from '@stencil/core';
import {SFaqElements} from "./interface/common.interface";

@Component({
  tag: 's-cnt-faq-search',
  styleUrl: 's-cnt-faq-search.css',
  shadow: false,
  scoped: true,
})
export class SCntFaqSearch implements ComponentInterface {
  /**
   *  Прием данных из массива
   */
  @Prop() header: SFaqElements[] = [];
  /**
   *  Клик по кнопке назад
   */
  @Event() clickBack: EventEmitter;
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
  render() {
    return (
      this.header.map(item => {
        return(
          <div class="my_container">

            <div class="header_block d-flex justify-content-between">
              <div>
                <h1>
                  {item.header}
                </h1>
              </div>
              <div class="back_block clicked" onClick={() => this.clickBack.emit('Back')}
              >
                <div class="back"><i class="fas fa-times"></i></div>
                <div>esc</div>
              </div>
            </div>

            <div class="back_adaptive clicked" onClick={() => this.clickBack.emit('Back')}>
              <div class="back_in">
                <div class="m-auto">
                  <i class="fas fa-times"></i>
                </div>
              </div>
            </div>

            <div class="search_block">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12">
                  <ul class="menu d-flex justify-content-between">
                    {this.getLink(item.headerMenu)}
                  </ul>
                </div>
              </div>
            </div>

            <div class="input_section d-flex align-items-center justify-content-between">
              <div class="search_btn clicked" onClick={() => this.clickSearch.emit('Search')}
              >
                <i class="fas fa-search"></i>
              </div>
              <div class="flex-grow-1">
                <input class="input_block" type="text" placeholder="Learn about search-as-a-service…"/>
              </div>
              <div class="search_img" onClick={() => this.clickLogo.emit({place: 'logo', item: item})}
                   style={{ backgroundImage: "url(" + item.img + ")" }}
              >
              </div>
            </div>

            <div class="category">
              <ul class="category_list d-flex">
                {this.getCategory(item.category)}
              </ul>
            </div>
          </div>
        )
      })
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
            <div class="menu_item clicked" onClick={() => this.clickMenu.emit({place: 'Menu', item: item})}
            >
              {item.name}
            </div>
          </li>
        )
      })
    )
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
            <div class="hints clicked" onClick={() => this.clickCategory.emit({place: 'Category', item: item})}
            >
              {item.name}
            </div>
          </li>
        )
      })
    )
  }
}
