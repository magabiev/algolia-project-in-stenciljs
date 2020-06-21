import {Component, ComponentInterface, h, Prop, Event, EventEmitter} from '@stencil/core';
import {SFaqHeader} from "./interface/common.interface";

@Component({
  tag: 's-cnt-faq-header',
  styleUrl: 's-cnt-faq-header.css',
  shadow: false,
  scoped: true,
})
export class SCntFaqHeader implements ComponentInterface {
  @Prop() header: SFaqHeader[] = [];
  /**
   *  Клик по кнопке назад
   */
  @Event() clickBack: EventEmitter;
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
            <div class="bottom_block"></div>
            <div class="back_adaptive clicked" onClick={() => this.clickBack.emit('Back')}>
              <div class="back_in">
                <div class="m-auto">
                  <i class="fas fa-times"></i>
                </div>
              </div>
            </div>
          </div>
        )
      })
    );
  }

}
