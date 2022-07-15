import { html, css, LitElement } from 'lit';

export class LorellanaCard extends LitElement {
  static get styles() {
    return css`
      :host {
      width:100vw;
      }
      #poses{
        width:100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: space-between;
      justify-content: space-between;
      }
      .card__wrapper {
        cursor: pointer;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-top: 20px;
        border: solid white 2px;
        border-radius: 2rem;
        width: 200px;
        height: auto;
        box-shadow: 0 5px 15px 0px rgba(14, 197, 23, 0.4);
        animation: tracking-in-expand 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .subtitle {
        font-weight: 600;
        padding: 0.5rem 0;
        color: var(--color-primary);
        margin-bottom: -1rem;
      }
      .size--l {
        font-size: 1.5em;
        font-weight: 900;
      }
      .size--m {
        font-size: 1em;
        font-weight: 700;
      }
      .highlight {
        display: flex;
        flex-direction: column-reverse;
        max-width: 400px;
        padding: 0 1rem 2rem 1rem;
        margin-bottom: 1rem;
      }
      .highlight:last-child {
        margin-right: auto;
      }
      .highlight__header {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
      }
      .highlight__figure {
        position: relative;
      }
      .highlight__img {
        display: block;
        width: 100%;
        height: auto;
        order: 1px solid #f1f1f1;
      }

      .highlight__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;
        border-bottom: 1px solid grey;
      }

      .highlight__author {
        font-size: 0.85rem;
        cursor: move;
        z-index: 10;
        color: var(--color-primary);
      }
      .isFavorite {
        border: solid 5px var(--color-tertiary);
      }
      @keyframes tracking-in-expand {
        0% {
          letter-spacing: -0.5em;
          opacity: 0;
        }
        40% {
          opacity: 0.6;
        }
        100% {
          opacity: 1;
        }
      }

    `;
  }

  static get properties() {
    return {
      poses: {
        type: Array,
      },
      id: { type: Number },
      english_name: { type: String },
      sanskrit_name: { type: String },
      img_url: { type: String },
    };
  }



  render() {
    return html`
      <ul id="poses">
        ${this.poses &&
        this.poses.map(
          (pose) => html`
            <div class="card__wrapper">
              <li id="pose_${pose.id}" class="highlight">
                <header class="highlight__header">
                  <h2 class="title size--l">${pose.sanskrit_name}</h2>
                  <p class="subtitle size--m">${pose.english_name}</p>
                </header>
                <figure class="highlight__figure">
                  <img
                    class="highlight__img"
                    loading="lazy"
                    src="${pose.img_url}"
                     alt=${`Imagen de ${pose.english_name}`} 
                  />
                </figure>
                <footer class="highlight__footer">
                  <address class="highlight__author size--m">
                    ${pose.id}
                  </address>
                </footer>
              </li>
            </div>
          `
        )}
      </ul>

    `;
  }
}
