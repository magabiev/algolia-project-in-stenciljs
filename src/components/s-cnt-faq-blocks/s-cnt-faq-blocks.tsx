import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SFaqBlocks} from "./interface/common.interface";

@Component({
  tag: 's-cnt-faq-blocks',
  styleUrl: 's-cnt-faq-blocks.css',
  shadow: false,
  scoped: false,
})
export class SCntFaqBlocks implements ComponentInterface {
  /**
   *  Получение данных из массива для вывода
   */
  @Prop() blocks: SFaqBlocks[] = [];
  /**
   *  Клик по Заголовку
   */
  @Event() clickBlockHeader: EventEmitter;
  /**
   *  Клик по тексту
   */
  @Event() clickBlockText: EventEmitter;
  /**
   *  Клик по блоку автора
   */
  @Event() clickBlockAuthor: EventEmitter;
  /**
   *  Клик по картинке
   */
  @Event() clickBlockImg: EventEmitter;
  render() {
    return (
      <div class="my_container">
        <div class="row">
          {this.getBlocks(this.blocks)}
        </div>
      </div>
    );
  }
  /**
   *  Прием данных из массива вывод через цикл
   */
private getBlocks = (props) =>{
    return(
      props.map(item => {
        return(
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="block">
              <div class="info">
                <div class="img clicked" onClick={() => this.clickBlockImg.emit({place: 'img', item: item})}
                     style={{ backgroundImage: "url(" + item.img + ")" }}
                ></div>
                <div class="header clicked" onClick={() => this.clickBlockHeader.emit({place: 'header', item: item})}
                     innerHTML={item.header}></div>
                <div class="text clicked" onClick={() => this.clickBlockText.emit({place: 'text', item: item})}
                     innerHTML={item.text}  ></div>
              </div>
              <div class="author d-flex align-items-center clicked" onClick={() => this.clickBlockAuthor.emit({place: 'author', item: item})}
              >
                <div class="author_img" style={{ backgroundImage: "url(" + item.authorAvatar + ")" }}
                ></div>
                <div class="author_info">
                  <div class="name">
                    {item.authorName}
                  </div>
                  {item.authorAction ? this.getAction(item.authorAction) : ''}
                </div>
              </div>
            </div>
          </div>
        )
      })
    )
}
  /**
   * Данные о должности если есть
   */
  private getAction = (item) => {
    return(
      <div class="action">
        {item}
      </div>
    )
  }
}
