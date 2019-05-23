class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.itemElement);
      this.element.addEventListener('click', () => this.select())
    };
  
    select() {
      const links = document.querySelectorAll('.tabs-link');
      Array.from(links).forEach(function(link){
        link.classList.remove('selected-tab')
      });
      this.element.classList.add('selected-tab');
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element ;
    }
  
    select() {
      const items = document.querySelectorAll('.tabs-item');
      items.forEach(item =>{
        item.classList.remove('tabs-item-selected')
      })
      this.element.classList.add('tabs-item-selected');
    }
  }
  
  const links = document.querySelectorAll('.tabs-link');
  links.forEach(function(link){
    return new TabLink(link)
  })
