import { html } from 'lit';
import '../lorellana-card.js';

fetch('../src/service/poses.json').then(response => response.json()).then(data => {
  const selector = document.querySelector('lorellana-card');
  selector.poses = data.items;
})

export default {
  title: 'LorellanaCard',
  component: 'lorellana-card',
  argTypes: {

    id: { control: 'number' },
    textColor: { control: 'color' },
    english_name: {control: 'text'},
    sanskrit_name: {control: 'text'},
    img_url: {control: 'text'}
  },
};

function Template({ english_name = 'Yoga world', id = 0, textColor, slot }) {
  return html`
    <lorellana-card
      style="--lorellana-card-text-color: ${textColor || 'black'}"
      .english_name=${english_name}
      .id=${id}
    >
      ${slot}
    </lorellana-card>
  `;
}

export const Regular = Template.bind({});

export const CustomEnglishName = Template.bind({});
CustomEnglishName.args = {
  english_name: 'My Yoga world',
};


export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
