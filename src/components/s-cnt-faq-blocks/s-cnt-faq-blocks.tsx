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
  @Prop() blocks: SFaqBlocks;
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
    if (this.blocks){
      return (
          <div class="block">
            <div class="info">
              <div class="img clicked" onClick={() => this.clickBlockImg.emit({place: 'img', item: this.blocks})}
                   style={{ backgroundImage: "url(" + this.blocks.img + ")" }}
              ></div>
              <div class="header clicked" onClick={() => this.clickBlockHeader.emit({place: 'header', item: this.blocks})}
                   innerHTML={this.blocks.header}></div>
              <div class="text clicked" onClick={() => this.clickBlockText.emit({place: 'text', item: this.blocks})}
                   innerHTML={this.blocks.text}  ></div>
            </div>
            <div class="author d-flex align-items-center clicked" onClick={() => this.clickBlockAuthor.emit({place: 'author', item: this.blocks})}
            >
              <div class="author_img" style={{ backgroundImage: "url(" + this.blocks.authorAvatar + ")" }}
              ></div>
              <div class="author_info">
                <div class="name">
                  {this.blocks.authorName}
                </div>
                {this.getAction(this.blocks)}
              </div>
            </div>
          </div>
      )
    }
    return (
      <div class="my_container d-flex">
        <div class="m-auto not_data text-focus-in">
          Нет данных
        </div>
      </div>
    )
  }
  /**
   * Данные о должности если есть
   */
  private getAction = (item) => {
    return(
      <div class="action">
        {item.authorAction}
      </div>
    )
  }
}
