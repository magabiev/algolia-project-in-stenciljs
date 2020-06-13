import { Component, Prop, h } from '@stencil/core';
import {blockSection, header} from "../../utils/mock";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
  scoped: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;


  render() {
    const clicker = ({detail}) =>{
      console.log(detail)
    }
    return (
      <div>
        <s-cnt-faq-search header={header} onClickBack={(item) => clicker(item)}
                          onClickMenu={(item) => clicker(item)}
                          onClickLogo={(item) => clicker(item)}
                          onClickSearch={(item) => clicker(item)}
                          onClickCategory={(item) => clicker(item)}/>
        <s-cnt-faq-block-section blockSection={blockSection}
                                 onClickLink={(item) => clicker(item)}
                                 onClickLeft={(item) => clicker(item)}
                                 onClickRight={(item) => clicker(item)}
                                 onClickBlockHeader={(item) => clicker(item)}
                                 onClickBlockText={(item) => clicker(item)}
                                 onClickBlockAuthor={(item) => clicker(item)}
                                 onClickBlockImg={(item) => clicker(item)}/>
      </div>
    );
  }
}
