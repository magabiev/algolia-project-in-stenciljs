import {Component, ComponentInterface, Event, EventEmitter, h, Prop, State,} from '@stencil/core';
import {SFaqBlockHeader} from "./interface/common.interface";

@Component({
  tag: 's-cnt-faq-block-header',
  styleUrl: 's-cnt-faq-block-header.css',
  shadow: false,
  scoped: true,
})
export class SCntFaqBlockHeader implements ComponentInterface {
  /**
   *  Получение данных из массива для вывода
   */
  @Prop() blockHeader: SFaqBlockHeader[] =[];
  /**
   *  Клик по ссылке
   */
  @Event() clickLink: EventEmitter;
  /**
   *  Клик по кнопке на страницу назад
   */
  @Event() clickRight: EventEmitter;
  /**
   *  Клик по кнопке на страницу вперед
   */
  @Event() clickLeft: EventEmitter;
  /**
   * Состояние левой кнопки переключения страницы
   */
  @State() disableLeft: boolean;
  /**
   * Состояние правой кнопки переключения страницы
   */
  @State() disableRight: boolean;
  /**
   * Состояние текущей страницы
   */
  @State() counterPage: any;
  /**
   * Состояние результатов поиса
   */
  @State() resultPage: any;
  render() {
    if(this.blockHeader.length !== 0){
      return (
        this.blockHeader.map(item => {
          return(
            <div>
              <div class="my_container">
                <div class="header_block d-flex justify-content-between mb-5">
                  <div class="header">
                    {item.header}
                  </div>
                  <div class="results d-flex align-items-center">
                    <p class="result">{item.results} {this.result(item)}</p>
                    <div class="result_buttons ml-2">
                      <button
                        disabled={this.checkDisableL(item)}
                        class="result_btn"
                        onClick={() => {this.clickLeft.emit({place: 'left arrow', item: item});
                          {item.pageActive = item.pageActive - 1; this.counterPage = item.pageActive;}}}>
                        <i class="fas fa-arrow-left"></i></button>
                      <button
                        class="result_btn" disabled={this.checkDisableR(item)}
                        onClick={() => {this.clickRight.emit({place: 'right arrow', item: item});
                          {item.pageActive = item.pageActive + 1; this.counterPage = item.pageActive}}}>
                        <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div
                      class="result_page ml-3">
                      {item.pageActive}-{item.resultPages}
                    </div>
                    <div
                      class="result_link ml-3 clicked"
                      onClick={() => this.clickLink.emit({place: 'link', item: item})}>
                      {item.link}  <i class="fas fa-caret-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      );
    }
    return (
      <div class="my_container d-flex">
        <div class="m-auto not_data text-focus-in p-3">
          Нет данных
        </div>
      </div>
    )

  }
  /**
   * Деактивация левой кнопки переключения страницы
   */
  private checkDisableL (props){
    if (props.pageActive === 1){
      return this.disableLeft = true;
    }
}
  /**
   * Деактивация правой кнопки переключения страницы
   */
private checkDisableR (props){
 if (props.pageActive === props.resultPages){
    return this.disableRight = true;
  }
}

  /**
   * Вывод слова результат относительно количества результатов
   */
  private result(props){
  if (props.results === 1){
    return "результат";
  }else if (props.results === 0){
    return "результатов";
  }else if (props.results <= 4){
    return "результата";
  } else if (props.results > 4){
    return "результатов";
  }
}
}
