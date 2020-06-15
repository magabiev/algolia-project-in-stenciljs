import {Component, ComponentInterface, EventEmitter, h, Event, Prop} from '@stencil/core';
import {SFaqBlockSection} from "./interface/common.interface";

@Component({
  tag: 's-cnt-faq-block-section',
  styleUrl: 's-cnt-faq-block-section.css',
  shadow: false,
  scoped: true,
})
export class SCntFaqBlockSection implements ComponentInterface {
  /**
   *  Получение данных из массива для вывода
   */
  @Prop() blockSection: SFaqBlockSection[] =[];
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
   *  Клик по Заголовку компонента 'blocks'
   */
  @Event() clickBlockHeader: EventEmitter;
  /**
   *  Клик по тексту компонента 'blocks'
   */
  @Event() clickBlockText: EventEmitter;
  /**
   *  Клик по блоку автора компонента 'blocks'
   */
  @Event() clickBlockAuthor: EventEmitter;
  /**
   *  Клик по картинке компонента 'blocks'
   */
  @Event() clickBlockImg: EventEmitter;
  render() {
    return (
      this.blockSection.map(item => {
        return(
          <div>
            <div class="my_container">
              <div class="header_block d-flex justify-content-between mb-5">
                <div class="header">
                  {item.header}
                </div>
                <div class="results d-flex align-items-center">
                  <p class="result">{item.results} results</p>
                  <div class="result_buttons ml-2">
                    <button class="result_btn" onClick={() => this.clickLeft.emit({place: 'left arrow', item: item})}
                    ><i class="fas fa-arrow-left"></i></button>
                    <button class="result_btn" onClick={() => this.clickRight.emit({place: 'right arrow', item: item})}
                    ><i class="fas fa-arrow-right"></i></button>
                  </div>
                  <div class="result_page ml-3">
                    {item.pageActive} -{item.resultPages}
                  </div>
                  <div class="result_link ml-3 clicked" onClick={() => this.clickLink.emit({place: 'link', item: item})}
                  >
                    {item.link}  <i class="fas fa-caret-right"></i>
                  </div>
                </div>
              </div>
              <GetBlocks arr={item.blocks}/>
            </div>
            <div class="bottom_block"></div>
          </div>
        )
      })
    );
  }
}
/**
 *  Получение вложенного компонента 'blocks'
 */
const GetBlocks = (props) =>{
  let item = props.arr.slice(0,12)
  return(
    <s-cnt-faq-blocks blocks={item}/>
  )
}
