import { Component, ComponentInterface,  h } from '@stencil/core';
import {blockHeader, blocks, category, header, searchMenu, logo} from "../../utils/mock";

@Component({
  tag: 'first-page',
  styleUrl: 'first-page.css',
  shadow: false,
  scoped: true,
})
export class FirstPage implements ComponentInterface {

  render() {
    const clicked = (item) =>{
      console.log(item);
    }
    return (
      <div>
        <s-cnt-faq-header header={header}
                          onClickBack={(item) => clicked(item.detail)}/>
        <s-cnt-faq-search menu={searchMenu} category={category} logo={logo}
                          onClickMenu={(item) => clicked(item.detail)}
                          onClickSearch={(item) => clicked(item.detail)}
                          onClickLogo={(item) => clicked(item.detail)}
                          onClickCategory={(item) => clicked(item.detail)}/>
        <s-cnt-faq-block-header blockHeader={blockHeader}
                                onClickLink={(item) => clicked(item.detail)}
                                onClickRight={(item) => clicked(item.detail)}
                                onClickLeft={(item) => clicked(item.detail)}/>
        <s-cnt-faq-blocks blocks={blocks}
                          onClickBlockHeader={(item) => clicked(item.detail)}
                          onClickBlockText={(item) => clicked(item.detail)}
                          onClickBlockAuthor={(item) => clicked(item.detail)}
                          onClickBlockImg={(item) => clicked(item.detail)}/>
      </div>
    );
  }

}
